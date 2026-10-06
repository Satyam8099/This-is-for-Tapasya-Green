"""Tests for admin upload + public file serving (iteration 6)."""
import io
import os
import struct
import zlib

import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://prochem-home.preview.emergentagent.com").rstrip("/")
ADMIN_EMAIL = "panditamit946@gmail.com"
ADMIN_PASSWORD = "AmitS@2025"


def _make_png(size: int = 1) -> bytes:
    """Return a minimal valid 1x1 PNG."""
    sig = b"\x89PNG\r\n\x1a\n"
    ihdr = b"IHDR" + struct.pack(">IIBBBBB", 1, 1, 8, 2, 0, 0, 0)
    ihdr_c = struct.pack(">I", 13) + ihdr + struct.pack(">I", zlib.crc32(ihdr))
    raw = b"\x00\xff\xff\xff"
    comp = zlib.compress(raw)
    idat = b"IDAT" + comp
    idat_c = struct.pack(">I", len(comp)) + idat + struct.pack(">I", zlib.crc32(idat))
    iend = b"IEND"
    iend_c = struct.pack(">I", 0) + iend + struct.pack(">I", zlib.crc32(iend))
    return sig + ihdr_c + idat_c + iend_c


@pytest.fixture(scope="module")
def token():
    r = requests.post(f"{BASE_URL}/api/auth/login", json={"email": ADMIN_EMAIL, "password": ADMIN_PASSWORD}, timeout=15)
    assert r.status_code == 200, r.text
    return r.json()["token"]


@pytest.fixture(scope="module")
def auth_headers(token):
    return {"Authorization": f"Bearer {token}"}


# ===== Admin uploads security =====
class TestUploadSecurity:
    def test_upload_requires_auth(self):
        r = requests.post(
            f"{BASE_URL}/api/admin/uploads",
            files={"file": ("x.png", _make_png(), "image/png")},
            timeout=15,
        )
        assert r.status_code in (401, 403)

    def test_upload_rejects_disallowed_ext(self, auth_headers):
        r = requests.post(
            f"{BASE_URL}/api/admin/uploads",
            headers=auth_headers,
            files={"file": ("evil.py", b"print('hi')", "text/x-python")},
            timeout=15,
        )
        assert r.status_code == 400
        assert "allowed" in r.text.lower() or "jpg" in r.text.lower()

    def test_upload_rejects_txt(self, auth_headers):
        r = requests.post(
            f"{BASE_URL}/api/admin/uploads",
            headers=auth_headers,
            files={"file": ("note.txt", b"hello", "text/plain")},
            timeout=15,
        )
        assert r.status_code == 400


# ===== Upload success + public serving =====
class TestUploadFlow:
    def test_upload_png_and_serve_public(self, auth_headers):
        png = _make_png()
        r = requests.post(
            f"{BASE_URL}/api/admin/uploads",
            headers=auth_headers,
            files={"file": ("test.png", png, "image/png")},
            timeout=30,
        )
        assert r.status_code == 200, r.text
        data = r.json()
        assert "path" in data and "url" in data
        assert data["path"].startswith("prochem-tapasya/products/")
        assert data["path"].endswith(".png")
        assert data["url"] == f"/api/files/{data['path']}"
        assert data["size"] == len(png)

        # Public GET (no auth)
        public = requests.get(f"{BASE_URL}{data['url']}", timeout=30)
        assert public.status_code == 200
        assert public.headers.get("content-type", "").startswith("image/")
        assert public.content == png

    def test_upload_jpg(self, auth_headers):
        # Minimal valid JPEG (tiny)
        jpg = bytes.fromhex(
            "ffd8ffe000104a46494600010100000100010000"
            "ffdb004300080606070605080707070909080a0c140d0c0b0b0c1912130f141d1a1f1e1d1a1c1c20242e2720222c231c1c2837292c30313434341f27393d38323c2e333432"
            "ffc0000b080001000101011100"
            "ffc4001f0000010501010101010100000000000000000102030405060708090a0b"
            "ffc400b5100002010303020403050504040000017d01020300041105122131410613516107227114328191a1082342b1c11552d1f02433627282090a161718191a25262728292a3435363738393a434445464748494a535455565758595a636465666768696a737475767778797a838485868788898a92939495969798999aa2a3a4a5a6a7a8a9aab2b3b4b5b6b7b8b9bac2c3c4c5c6c7c8c9cad2d3d4d5d6d7d8d9dae1e2e3e4e5e6e7e8e9eaf1f2f3f4f5f6f7f8f9fa"
            "ffda0008010100003f00fb"
            "ffd9"
        )
        r = requests.post(
            f"{BASE_URL}/api/admin/uploads",
            headers=auth_headers,
            files={"file": ("test.jpg", jpg, "image/jpeg")},
            timeout=30,
        )
        assert r.status_code == 200, r.text
        assert r.json()["path"].endswith(".jpg")


# ===== Public file 404 =====
class TestPublicServe:
    def test_nonexistent_returns_404(self):
        r = requests.get(f"{BASE_URL}/api/files/prochem-tapasya/products/does-not-exist-xyz.jpg", timeout=15)
        assert r.status_code == 404


# ===== Regression =====
class TestRegression:
    def test_home_products_list(self):
        r = requests.get(f"{BASE_URL}/api/products", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        assert len(data) >= 20

    def test_v_blender_product(self):
        r = requests.get(f"{BASE_URL}/api/products", timeout=15)
        slugs = [p.get("slug") for p in r.json()]
        assert "v-blender" in slugs
