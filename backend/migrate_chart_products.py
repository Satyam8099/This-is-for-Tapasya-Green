"""One-time migration: replace products + categories with the chart-based lineup."""
import asyncio
import os
from datetime import datetime, timezone

from motor.motor_asyncio import AsyncIOMotorClient

from seed import DEFAULT_CATEGORIES, DEFAULT_PRODUCTS


async def main():
    client = AsyncIOMotorClient(os.environ["MONGO_URL"])
    db = client[os.environ["DB_NAME"]]
    now = datetime.now(timezone.utc).isoformat()

    await db.products.delete_many({})
    await db.categories.delete_many({})

    for it in DEFAULT_CATEGORIES + DEFAULT_PRODUCTS:
        it["created_at"] = now
    await db.categories.insert_many([dict(x) for x in DEFAULT_CATEGORIES])
    await db.products.insert_many([dict(x) for x in DEFAULT_PRODUCTS])

    print("categories:", await db.categories.count_documents({}))
    print("products:", await db.products.count_documents({}))
    client.close()


if __name__ == "__main__":
    main_task = main()
    asyncio.run(main_task)
