"""Seed defaults on startup if the collection is empty."""
from datetime import datetime, timezone

DEFAULT_CATEGORIES = [
    {"slug": "granulating", "name": "Granulating", "tagline": "Wet & dry granulation systems"},
    {"slug": "drying", "name": "Drying", "tagline": "Fluid bed, tray & vacuum dryers"},
    {"slug": "milling", "name": "Milling / Size Reduction", "tagline": "Impact, conical & oscillating mills"},
    {"slug": "blending", "name": "Blending", "tagline": "Tumble, ribbon & contained blenders"},
    {"slug": "bins", "name": "Bins & Material Handling", "tagline": "IBCs, drums, tippers & weighing"},
    {"slug": "pelletising", "name": "Pelletising", "tagline": "Extrusion, spheronisation & coating"},
    {"slug": "coating", "name": "Coating", "tagline": "Tablet & pellet coating systems"},
    {"slug": "micronising", "name": "Micronising", "tagline": "Air-jet & fine-particle systems"},
    {"slug": "special", "name": "Special / Process Equipment", "tagline": "Ancillary & transfer systems"},
]

DEFAULT_BLOG = [
    {
        "slug": "scaling-rmg-to-saizoner",
        "category": "Engineering",
        "title": "Scaling from an RMG to a Saizoner: getting the endpoint right.",
        "excerpt": "Endpoint drift is the number-one reason pilot batches don't translate to commercial output.",
        "author": "Prochem Tapasya Engineering",
        "date": "2026-04-18",
        "readTime": "6 min read",
        "seo": {"title": "", "description": "", "keywords": ""},
        "status": "published",
    },
    {
        "slug": "fbd-efficiency-levers",
        "category": "Operations",
        "title": "Fluid bed drying efficiency: five levers most plant managers miss.",
        "excerpt": "FBDs are the biggest energy consumers on many solid dosage lines.",
        "author": "Prochem Tapasya Process Team",
        "date": "2026-03-05",
        "readTime": "5 min read",
        "seo": {"title": "", "description": "", "keywords": ""},
        "status": "published",
    },
    {
        "slug": "prepping-for-usfda-audit",
        "category": "Regulatory",
        "title": "Preparing for a USFDA audit: what to fix before the inspector arrives.",
        "excerpt": "Most audit findings on solid dosage lines are documentation gaps, not machine defects.",
        "author": "Prochem Tapasya Quality",
        "date": "2026-01-22",
        "readTime": "7 min read",
        "seo": {"title": "", "description": "", "keywords": ""},
        "status": "published",
    },
]

DEFAULT_NEWS = [
    {"date": "2026-05-12", "tag": "Milestone", "title": "500th Saizoner delivered.", "body": "Our 500th Saizoner high-shear mixer granulator was dispatched this week."},
    {"date": "2026-04-02", "tag": "Facility", "title": "New pilot suite commissioned.", "body": "We opened a dedicated 25 L / 100 L pilot suite for customer trials."},
    {"date": "2026-02-18", "tag": "Recognition", "title": "Featured in Indian Pharma Machinery Report 2026.", "body": "Prochem Tapasya was ranked among the top three granulation OEMs by installed base."},
]

DEFAULT_EVENTS = [
    {"date": "2026-09-08", "endDate": "2026-09-10", "tag": "Trade Show", "title": "CPHI South East Asia 2026", "venue": "Bangkok, Thailand", "hall": "Booth F-14", "body": "Meet our engineering team at CPHI SEA.", "cta": "Book a meeting"},
    {"date": "2026-10-22", "endDate": "2026-10-24", "tag": "Trade Show", "title": "P-MEC India 2026", "venue": "New Delhi, India", "hall": "Hall 3, Stand B-08", "body": "Live machine demonstrations.", "cta": "Add to calendar"},
    {"date": "2026-11-14", "tag": "Webinar", "title": "Scale-up strategy for wet granulation.", "venue": "Online · 60 minutes", "hall": "Registration required", "body": "Q&A included.", "cta": "Register"},
]

DEFAULT_PAGES = [
    {"slug": "home", "title": "Home", "seo": {"title": "Prochem Tapasya | Integrated Process Solutions", "description": "An innovative granulation company since 1962.", "keywords": "granulation, pharma, machinery, saizoner"}, "sections": {}},
    {"slug": "about", "title": "About Us", "seo": {"title": "About | Prochem Tapasya", "description": "Six decades of granulation engineering.", "keywords": "about, history, prochem, tapasya"}, "sections": {}},
    {"slug": "capabilities", "title": "Capabilities", "seo": {"title": "Capabilities | Prochem Tapasya", "description": "Engineering, manufacturing, automation and after-sales.", "keywords": "capabilities, engineering"}, "sections": {}},
    {"slug": "global", "title": "Global", "seo": {"title": "Global Presence | Prochem Tapasya", "description": "Engineered in India. Trusted worldwide.", "keywords": "global, export"}, "sections": {}},
    {"slug": "spares", "title": "Spares & Service", "seo": {"title": "Spares & Service | Prochem Tapasya", "description": "OEM parts, preventive maintenance and upgrades.", "keywords": "spares, service, AMC"}, "sections": {}},
    {"slug": "contact", "title": "Contact", "seo": {"title": "Contact | Prochem Tapasya", "description": "Sales, technical, spares and service enquiries.", "keywords": "contact"}, "sections": {}},
]

DEFAULT_SETTINGS = {
    "contact": {"email": "info@prochemtapasya.com", "phone": "+91 22 6666 0000", "address": "Prochem Tapasya, Industrial Estate, Mumbai, Maharashtra, India", "whatsapp": "+91 22 6666 0000"},
    "social": {"linkedin": "", "twitter": "", "youtube": "", "facebook": ""},
    "seo": {"site_title": "Prochem Tapasya | Integrated Process Solutions", "site_description": "An innovative granulation company since 1962.", "og_image": "/logo.png"},
}


async def seed_defaults(db):
    now = datetime.now(timezone.utc).isoformat()

    async def seed(coll, items):
        if await db[coll].count_documents({}) == 0:
            for it in items:
                it["created_at"] = now
            await db[coll].insert_many(items)

    await seed("categories", [dict(x) for x in DEFAULT_CATEGORIES])
    await seed("blog_posts", [dict(x) for x in DEFAULT_BLOG])
    await seed("news_items", [dict(x) for x in DEFAULT_NEWS])
    await seed("events", [dict(x) for x in DEFAULT_EVENTS])
    await seed("pages", [dict(x) for x in DEFAULT_PAGES])
    if not await db.settings.find_one({"_id": "site"}):
        await db.settings.insert_one({"_id": "site", **DEFAULT_SETTINGS, "created_at": now})
