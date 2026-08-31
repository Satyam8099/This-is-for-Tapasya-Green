from fastapi import APIRouter, HTTPException, Depends
from bson import ObjectId
from datetime import datetime, timezone

from auth import require_staff, require_admin

router = APIRouter()


def _now():
    return datetime.now(timezone.utc).isoformat()


# ---------- Generic slug CRUD helpers ----------
async def _list(coll, q=None):
    from server import db
    docs = await db[coll].find(q or {}).sort("created_at", -1).to_list(1000)
    for d in docs:
        d["id"] = str(d.pop("_id"))
    return docs


async def _get_by_slug(coll, slug):
    from server import db
    d = await db[coll].find_one({"slug": slug})
    if not d:
        raise HTTPException(status_code=404, detail=f"{coll[:-1]} not found")
    d["id"] = str(d.pop("_id"))
    return d


async def _upsert_by_slug(coll, payload):
    from server import db
    if "slug" not in payload:
        raise HTTPException(status_code=400, detail="slug required")
    payload = {**payload, "updated_at": _now()}
    existing = await db[coll].find_one({"slug": payload["slug"]})
    if existing:
        await db[coll].update_one({"_id": existing["_id"]}, {"$set": payload})
        return {"id": str(existing["_id"]), "created": False}
    payload["created_at"] = _now()
    res = await db[coll].insert_one(payload)
    return {"id": str(res.inserted_id), "created": True}


async def _delete_by_id(coll, doc_id):
    from server import db
    r = await db[coll].delete_one({"_id": ObjectId(doc_id)})
    return {"ok": r.deleted_count == 1}


# ============ PRODUCTS ============
@router.get("/products", tags=["public"])
async def list_products():
    return await _list("products")


@router.get("/products/{slug}", tags=["public"])
async def get_product(slug: str):
    return await _get_by_slug("products", slug)


@router.put("/admin/products", tags=["admin"])
async def upsert_product(payload: dict, staff=Depends(require_staff)):
    return await _upsert_by_slug("products", payload)


@router.delete("/admin/products/{doc_id}", tags=["admin"])
async def delete_product(doc_id: str, staff=Depends(require_staff)):
    return await _delete_by_id("products", doc_id)


# ============ CATEGORIES ============
@router.get("/categories", tags=["public"])
async def list_categories():
    return await _list("categories")


@router.put("/admin/categories", tags=["admin"])
async def upsert_category(payload: dict, staff=Depends(require_staff)):
    return await _upsert_by_slug("categories", payload)


@router.delete("/admin/categories/{doc_id}", tags=["admin"])
async def delete_category(doc_id: str, staff=Depends(require_staff)):
    return await _delete_by_id("categories", doc_id)


# ============ BLOG ============
@router.get("/blog", tags=["public"])
async def list_blog():
    return await _list("blog_posts")


@router.get("/blog/{slug}", tags=["public"])
async def get_blog(slug: str):
    return await _get_by_slug("blog_posts", slug)


@router.put("/admin/blog", tags=["admin"])
async def upsert_blog(payload: dict, staff=Depends(require_staff)):
    return await _upsert_by_slug("blog_posts", payload)


@router.delete("/admin/blog/{doc_id}", tags=["admin"])
async def delete_blog(doc_id: str, staff=Depends(require_staff)):
    return await _delete_by_id("blog_posts", doc_id)


@router.get("/blog-categories", tags=["public"])
async def list_blog_cats():
    return await _list("blog_categories")


@router.put("/admin/blog-categories", tags=["admin"])
async def upsert_blog_cat(payload: dict, staff=Depends(require_staff)):
    return await _upsert_by_slug("blog_categories", payload)


@router.delete("/admin/blog-categories/{doc_id}", tags=["admin"])
async def delete_blog_cat(doc_id: str, staff=Depends(require_staff)):
    return await _delete_by_id("blog_categories", doc_id)


# ============ NEWS & EVENTS ============
@router.get("/news", tags=["public"])
async def list_news():
    from server import db
    docs = await db.news_items.find({}).sort("date", -1).to_list(200)
    for d in docs:
        d["id"] = str(d.pop("_id"))
    return docs


@router.put("/admin/news", tags=["admin"])
async def upsert_news(payload: dict, staff=Depends(require_staff)):
    from server import db
    if "id" in payload and payload["id"]:
        _id = ObjectId(payload.pop("id"))
        payload["updated_at"] = _now()
        await db.news_items.update_one({"_id": _id}, {"$set": payload})
        return {"id": str(_id), "created": False}
    payload["created_at"] = _now()
    res = await db.news_items.insert_one(payload)
    return {"id": str(res.inserted_id), "created": True}


@router.delete("/admin/news/{doc_id}", tags=["admin"])
async def delete_news(doc_id: str, staff=Depends(require_staff)):
    return await _delete_by_id("news_items", doc_id)


@router.get("/events", tags=["public"])
async def list_events():
    from server import db
    docs = await db.events.find({}).sort("date", 1).to_list(200)
    for d in docs:
        d["id"] = str(d.pop("_id"))
    return docs


@router.put("/admin/events", tags=["admin"])
async def upsert_event(payload: dict, staff=Depends(require_staff)):
    from server import db
    if "id" in payload and payload["id"]:
        _id = ObjectId(payload.pop("id"))
        payload["updated_at"] = _now()
        await db.events.update_one({"_id": _id}, {"$set": payload})
        return {"id": str(_id), "created": False}
    payload["created_at"] = _now()
    res = await db.events.insert_one(payload)
    return {"id": str(res.inserted_id), "created": True}


@router.delete("/admin/events/{doc_id}", tags=["admin"])
async def delete_event(doc_id: str, staff=Depends(require_staff)):
    return await _delete_by_id("events", doc_id)


# ============ PAGES ============
@router.get("/pages/{slug}", tags=["public"])
async def get_page(slug: str):
    from server import db
    d = await db.pages.find_one({"slug": slug})
    if not d:
        return {"slug": slug, "seo": {}, "sections": {}}
    d["id"] = str(d.pop("_id"))
    return d


@router.get("/admin/pages", tags=["admin"])
async def list_pages(staff=Depends(require_staff)):
    return await _list("pages")


@router.put("/admin/pages", tags=["admin"])
async def upsert_page(payload: dict, staff=Depends(require_staff)):
    return await _upsert_by_slug("pages", payload)


# ============ SETTINGS ============
@router.get("/settings", tags=["public"])
async def get_settings():
    from server import db
    d = await db.settings.find_one({"_id": "site"})
    if not d:
        return {"contact": {}, "social": {}, "seo": {}}
    d.pop("_id", None)
    return d


@router.put("/admin/settings", tags=["admin"])
async def update_settings(payload: dict, staff=Depends(require_staff)):
    from server import db
    payload["updated_at"] = _now()
    await db.settings.update_one({"_id": "site"}, {"$set": payload}, upsert=True)
    return {"ok": True}
