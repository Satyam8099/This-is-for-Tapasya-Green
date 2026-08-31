from typing import Annotated, Any, Optional
from datetime import datetime, timezone
from bson import ObjectId
from pydantic import BaseModel, BeforeValidator, ConfigDict, Field, EmailStr


def _to_str(v: Any) -> str:
    if isinstance(v, ObjectId):
        return str(v)
    return str(v) if v is not None else v


PyObjectId = Annotated[str, BeforeValidator(_to_str)]


def now_utc_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


class BaseDocument(BaseModel):
    model_config = ConfigDict(populate_by_name=True, arbitrary_types_allowed=True, extra="ignore")
    id: Optional[PyObjectId] = Field(default=None, alias="_id")

    def to_mongo(self) -> dict:
        d = self.model_dump(by_alias=True, exclude_none=True)
        d.pop("_id", None)
        return d

    @classmethod
    def from_mongo(cls, doc: dict):
        if not doc:
            return None
        return cls.model_validate({**doc, "_id": _to_str(doc.get("_id"))})


# --- User ---
class User(BaseDocument):
    email: EmailStr
    password_hash: Optional[str] = None
    name: str = "Admin"
    role: str = "admin"  # admin | manager
    created_at: str = Field(default_factory=now_utc_iso)


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class ChangePasswordRequest(BaseModel):
    old_password: str
    new_password: str


class CreateUserRequest(BaseModel):
    email: EmailStr
    password: str
    name: Optional[str] = None
    role: str = "manager"


class UpdateUserRequest(BaseModel):
    role: Optional[str] = None
    name: Optional[str] = None
    password: Optional[str] = None


# --- Enquiry ---
class EnquiryCreate(BaseModel):
    model_config = ConfigDict(extra="allow")
    type: str  # product_rfq | contact | spare_parts | company_profile | consultation | export
    source_page: Optional[str] = None
    subject: Optional[str] = None
    name: Optional[str] = None
    company: Optional[str] = None
    email: Optional[EmailStr] = None
    phone: Optional[str] = None
    country: Optional[str] = None
    product: Optional[str] = None
    product_slug: Optional[str] = None
    category: Optional[str] = None
    message: Optional[str] = None
    extra: Optional[dict] = None


class EnquiryUpdate(BaseModel):
    status: Optional[str] = None  # new | in_progress | closed
    notes: Optional[str] = None


# --- Generic content (dict-based CRUD) ---
class SlugItem(BaseModel):
    slug: str
    data: dict
