"""Admin file uploads (object storage) + public file serving."""
import uuid
from datetime import datetime, timezone

from fastapi import APIRouter, Depends, HTTPException, Response, UploadFile, File

from auth import require_staff
from storage import APP_NAME, put_object, get_object

router = APIRouter()

ALLOWED_TYPES = {
    "jpg": "image/jpeg",
    "jpeg": "image/jpeg",
    "png": "image/png",
    "webp": "image/webp",
    "pdf": "application/pdf",
}
MAX_SIZE = 15 * 1024 * 1024  # 15 MB


@router.post("/admin/uploads", tags=["admin"])
async def upload_file(file: UploadFile = File(...), staff=Depends(require_staff)):
    from server import db

    ext = file.filename.rsplit(".", 1)[-1].lower() if "." in file.filename else ""
    content_type = ALLOWED_TYPES.get(ext)
    if not content_type:
        raise HTTPException(status_code=400, detail="Only JPG, PNG, WEBP or PDF files are allowed")

    data = await file.read()
    if len(data) > MAX_SIZE:
        raise HTTPException(status_code=400, detail="File too large (max 15 MB)")

    path = f"{APP_NAME}/products/{uuid.uuid4()}.{ext}"
    result = put_object(path, data, content_type)

    await db.files.insert_one({
        "id": str(uuid.uuid4()),
        "storage_path": result["path"],
        "original_filename": file.filename,
        "content_type": content_type,
        "size": result["size"],
        "is_deleted": False,
        "created_at": datetime.now(timezone.utc).isoformat(),
    })
    return {"path": result["path"], "url": f"/api/files/{result['path']}", "size": result["size"]}


@router.get("/files/{path:path}", tags=["public"])
async def serve_file(path: str):
    from server import db

    record = await db.files.find_one({"storage_path": path, "is_deleted": False})
    if not record:
        raise HTTPException(status_code=404, detail="File not found")
    data, content_type = get_object(path)
    return Response(content=data, media_type=record.get("content_type", content_type))
