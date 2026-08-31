from fastapi import APIRouter, HTTPException, Depends
from bson import ObjectId
from datetime import datetime, timezone

from models import EnquiryCreate, EnquiryUpdate
from auth import require_staff

router = APIRouter()


def _now():
    return datetime.now(timezone.utc).isoformat()


VALID_TYPES = {
    "product_rfq",
    "contact",
    "spare_parts",
    "company_profile",
    "consultation",
    "export",
    "general",
    "event",
}


@router.post("/enquiries", tags=["public"])
async def create_enquiry(payload: EnquiryCreate):
    from server import db
    if payload.type not in VALID_TYPES:
        raise HTTPException(status_code=400, detail="Invalid enquiry type")
    doc = payload.model_dump(exclude_none=True)
    doc["status"] = "new"
    doc["created_at"] = _now()
    res = await db.enquiries.insert_one(doc)
    return {"id": str(res.inserted_id), "ok": True}


# ---------------- Admin ----------------
@router.get("/admin/enquiries", tags=["admin"])
async def list_enquiries(type: str | None = None, status: str | None = None, staff=Depends(require_staff)):
    from server import db
    q = {}
    if type:
        q["type"] = type
    if status:
        q["status"] = status
    docs = await db.enquiries.find(q).sort("created_at", -1).to_list(500)
    for d in docs:
        d["id"] = str(d.pop("_id"))
    return docs


@router.get("/admin/enquiries/stats", tags=["admin"])
async def enquiry_stats(staff=Depends(require_staff)):
    from server import db
    pipeline = [{"$group": {"_id": "$type", "count": {"$sum": 1}}}]
    by_type = {r["_id"]: r["count"] async for r in db.enquiries.aggregate(pipeline)}
    status_pipe = [{"$group": {"_id": "$status", "count": {"$sum": 1}}}]
    by_status = {r["_id"]: r["count"] async for r in db.enquiries.aggregate(status_pipe)}
    total = await db.enquiries.count_documents({})
    recent = await db.enquiries.find().sort("created_at", -1).limit(5).to_list(5)
    for d in recent:
        d["id"] = str(d.pop("_id"))
    return {"total": total, "by_type": by_type, "by_status": by_status, "recent": recent}


@router.patch("/admin/enquiries/{eid}", tags=["admin"])
async def update_enquiry(eid: str, payload: EnquiryUpdate, staff=Depends(require_staff)):
    from server import db
    upd = payload.model_dump(exclude_none=True)
    if not upd:
        return {"ok": True}
    await db.enquiries.update_one({"_id": ObjectId(eid)}, {"$set": upd})
    return {"ok": True}


@router.delete("/admin/enquiries/{eid}", tags=["admin"])
async def delete_enquiry(eid: str, staff=Depends(require_staff)):
    from server import db
    await db.enquiries.delete_one({"_id": ObjectId(eid)})
    return {"ok": True}
