"""One-time sync: point DB product hero fields at the real installed photos.

Also rewrites seed.py DEFAULT_PRODUCTS hero values so fresh environments match.
"""
import asyncio
import os
import re

from motor.motor_asyncio import AsyncIOMotorClient

REAL_HERO = {
    "high-shear-mixer-granulator": "/products/high-shear-mixer-granulator/1.jpg",
    "high-shear-mixer-granulator-r2t": "/products/high-shear-mixer-granulator-r2t/1.jpg",
    "binder-preparation-vessel": "/products/binder-preparation-vessel/1.jpg",
    "fluid-bed-equipment": "/products/fluid-bed-equipment/1.jpg",
    "tray-dryer": "/products/tray-dryer/1.jpg",
    "roto-cone-vacuum-dryer": "/products/roto-cone-vacuum-dryer/1.jpg",
    "tap-cone-mill": "/products/tap-cone-mill/1.jpg",
    "under-driven-cone-mill": "/products/under-driven-cone-mill/1.jpg",
    "multi-mill": "/products/multi-mill/1.jpg",
    "sifter-cum-multi-mill": "/products/sifter-cum-multi-mill/1.jpg",
    "oscillating-granulator": "/products/oscillating-granulator/1.jpg",
    "vibratory-sifter": "/products/vibratory-sifter/1.jpg",
    "delumper": "/products/delumper/1.jpg",
    "v-blender": "/products/v-blender/1.jpg",
    "conta-blender": "/products/conta-blender/1.jpg",
    "octagonal-blender": "/products/octagonal-blender/1.jpg",
    "double-cone-blender": "/products/double-cone-blender/1.jpg",
    "ribbon-blender": "/products/ribbon-blender/1.jpg",
    "plough-shear-mixer": "/products/plough-shear-mixer/1.jpg",
    "elevator": "/products/elevator/1.jpg",
}


def update_seed_py():
    path = "/app/backend/seed.py"
    src = open(path).read()
    for slug, hero in REAL_HERO.items():
        # match the product dict entry by slug, then swap its hero value
        pat = re.compile(r'(\{"slug":"' + re.escape(slug) + r'"[^{}]*?"hero":")[^"]*(")')
        src, n = pat.subn(r"\g<1>" + hero + r"\g<2>", src)
        if n != 1:
            print(f"seed.py: slug {slug} matched {n} times!")
    open(path, "w").write(src)
    print("seed.py heroes updated")


async def update_db():
    client = AsyncIOMotorClient(os.environ["MONGO_URL"])
    db = client[os.environ["DB_NAME"]]
    for slug, hero in REAL_HERO.items():
        res = await db.products.update_one({"slug": slug}, {"$set": {"hero": hero}})
        if res.matched_count != 1:
            print(f"db: slug {slug} matched {res.matched_count}")
    print("db heroes updated")
    client.close()


if __name__ == "__main__":
    update_seed_py()
    asyncio.run(update_db())
