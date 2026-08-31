from fastapi import APIRouter, HTTPException, Depends, Response
from bson import ObjectId
from datetime import datetime, timezone

from auth import (
    hash_password,
    verify_password,
    create_access_token,
    get_current_user,
    require_admin,
)
from models import LoginRequest, ChangePasswordRequest, CreateUserRequest, UpdateUserRequest

router = APIRouter()


def _now():
    return datetime.now(timezone.utc).isoformat()


def _clean_user(u: dict) -> dict:
    return {
        "id": str(u["_id"]),
        "email": u["email"],
        "name": u.get("name", "Admin"),
        "role": u.get("role", "manager"),
        "created_at": u.get("created_at"),
    }


# ------ Auth ------
@router.post("/auth/login")
async def login(body: LoginRequest):
    from server import db
    email = body.email.lower().strip()
    user = await db.users.find_one({"email": email})
    if not user or not verify_password(body.password, user.get("password_hash", "")):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    token = create_access_token(str(user["_id"]), user["email"], user.get("role", "manager"))
    return {"token": token, "user": _clean_user(user)}


@router.get("/auth/me")
async def me(user=Depends(get_current_user)):
    return user


@router.post("/auth/change-password")
async def change_password(body: ChangePasswordRequest, user=Depends(get_current_user)):
    from server import db
    full = await db.users.find_one({"_id": ObjectId(user["_id"] if isinstance(user["_id"], str) else user["_id"])})
    if not full or not verify_password(body.old_password, full.get("password_hash", "")):
        raise HTTPException(status_code=400, detail="Current password is incorrect")
    await db.users.update_one({"_id": full["_id"]}, {"$set": {"password_hash": hash_password(body.new_password)}})
    return {"ok": True}


# ------ Users management (admin only) ------
@router.get("/admin/users")
async def list_users(user=Depends(require_admin)):
    from server import db
    docs = await db.users.find({}).to_list(200)
    return [_clean_user(u) for u in docs]


@router.post("/admin/users")
async def create_user(body: CreateUserRequest, user=Depends(require_admin)):
    from server import db
    email = body.email.lower().strip()
    if body.role not in ("admin", "manager"):
        raise HTTPException(status_code=400, detail="Role must be admin or manager")
    existing = await db.users.find_one({"email": email})
    if existing:
        raise HTTPException(status_code=400, detail="Email already in use")
    doc = {
        "email": email,
        "password_hash": hash_password(body.password),
        "name": body.name or email.split("@")[0].title(),
        "role": body.role,
        "created_at": _now(),
    }
    res = await db.users.insert_one(doc)
    doc["_id"] = res.inserted_id
    return _clean_user(doc)


@router.patch("/admin/users/{uid}")
async def update_user(uid: str, body: UpdateUserRequest, user=Depends(require_admin)):
    from server import db
    upd = {}
    if body.role is not None:
        if body.role not in ("admin", "manager"):
            raise HTTPException(status_code=400, detail="Role must be admin or manager")
        upd["role"] = body.role
    if body.name is not None:
        upd["name"] = body.name
    if body.password:
        upd["password_hash"] = hash_password(body.password)
    if not upd:
        return {"ok": True}
    r = await db.users.update_one({"_id": ObjectId(uid)}, {"$set": upd})
    if r.matched_count == 0:
        raise HTTPException(status_code=404, detail="User not found")
    return {"ok": True}


@router.delete("/admin/users/{uid}")
async def delete_user(uid: str, user=Depends(require_admin)):
    from server import db
    if uid == user["_id"]:
        raise HTTPException(status_code=400, detail="You cannot delete your own account")
    r = await db.users.delete_one({"_id": ObjectId(uid)})
    if r.deleted_count == 0:
        raise HTTPException(status_code=404, detail="User not found")
    return {"ok": True}
