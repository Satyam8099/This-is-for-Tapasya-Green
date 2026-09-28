"""Seed defaults on startup if the collection is empty."""
from datetime import datetime, timezone

DEFAULT_CATEGORIES = [
    {"slug": "granulating", "name": "Granulating", "tagline": "High shear granulation & binder preparation"},
    {"slug": "drying", "name": "Drying", "tagline": "Fluid bed, tray & vacuum drying"},
    {"slug": "milling", "name": "Milling", "tagline": "Cone mills, multi mills & sifters"},
    {"slug": "blending", "name": "Blending", "tagline": "Tumble, ribbon & shear blending"},
    {"slug": "material-handling", "name": "Material Handling", "tagline": "IBCs, elevators, tippers & weighing"},
    {"slug": "cleaning", "name": "Cleaning", "tagline": "Bin washing & CIP / WIP skids"},
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


DEFAULT_PRODUCTS = [
    # Granulating
    {"slug":"high-shear-mixer-granulator","category":"granulating","name":"High Shear Mixer Granulator","tag":"Wet Granulation","hero":"machinery_1","short":"Bottom-drive high-shear mixer granulator for reproducible wet granulation.","applications":["Pharmaceutical","Nutraceutical","Fine chemicals"]},
    {"slug":"high-shear-mixer-granulator-r2t","category":"granulating","name":"High Shear Mixer Granulator - R2T","tag":"R2T · Lab & Pilot Scale","hero":"laboratory_1","short":"Compact R2T high-shear mixer granulator for formulation development and scale-up trials.","applications":["Formulation development","Scale-up trials","Clinical batches"]},
    {"slug":"binder-preparation-vessel","category":"granulating","name":"Binder Preparation Vessel","tag":"Binder / Paste Preparation","hero":"laboratory_2","short":"Jacketed binder preparation vessel for controlled heating, dissolution and transfer of granulation binders.","applications":["Pharmaceutical","Nutraceutical","Food"]},
    # Drying
    {"slug":"fluid-bed-equipment","category":"drying","name":"Fluid Bed Equipment","tag":"FBD / FBE Series","hero":"plant_1","short":"Fluid bed equipment for precise drying, granulation and coating from lab to commercial scale.","applications":["Pharmaceutical","Nutraceutical","Food","Chemical"]},
    {"slug":"tray-dryer","category":"drying","name":"Tray Dryer","tag":"Batch Drying","hero":"plant_1","short":"Hot-air tray dryer for solids, granules, powders and heat-tolerant intermediates.","applications":["Pharmaceutical","Chemical","Food","Nutraceutical"]},
    {"slug":"roto-cone-vacuum-dryer","category":"drying","name":"Roto Cone Vacuum Dryer","tag":"RCVD · Low-Temperature Drying","hero":"plant_1","short":"Rotating double-cone vacuum dryer for gentle, low-temperature drying of heat-sensitive APIs.","applications":["API drying","Solvent recovery","Fine chemical"]},
    # Milling
    {"slug":"tap-cone-mill","category":"milling","name":"Tap Cone Mill","tag":"Conical Screen Mill","hero":"machinery_3","short":"Conical screen mill for low-heat, low-dust size reduction and inline de-lumping.","applications":["Pharmaceutical","Nutraceutical","Food","Chemical"]},
    {"slug":"under-driven-cone-mill","category":"milling","name":"Under Driven Cone Mill","tag":"Bottom-Drive Conical Mill","hero":"machinery_3","short":"Under-driven conical mill with the drive below the product zone for dust-tight, in-line size reduction.","applications":["Pharmaceutical solid dosage","Nutraceutical"]},
    {"slug":"multi-mill","category":"milling","name":"Multi Mill","tag":"Beater Mill","hero":"machinery_3","short":"Beater-blade multi mill for wet and dry size reduction.","applications":["Pharmaceutical","Nutraceutical","Food"]},
    {"slug":"sifter-cum-multi-mill","category":"milling","name":"Sifter Cum Multi Mill","tag":"Combined Sifting & Milling","hero":"machinery_3","short":"Integrated sifter and multi mill on a single frame for one-pass screening and size reduction.","applications":["Pharmaceutical","Nutraceutical","Food"]},
    {"slug":"oscillating-granulator","category":"milling","name":"Oscillating Granulator","tag":"Dry Sizing","hero":"machinery_2","short":"Oscillating rotor for consistent dry sizing of wet or dried granules.","applications":["Pharmaceutical","Nutraceutical","Food"]},
    {"slug":"vibratory-sifter","category":"milling","name":"Vibratory Sifter","tag":"Gyro / Vibro Sifter","hero":"machinery_2","short":"Gyroscopic vibratory sifter for grading, scalping and de-dusting of powders and granules.","applications":["Pharmaceutical","Nutraceutical","Food","Chemical"]},
    {"slug":"delumper","category":"milling","name":"Delumper","tag":"Lump Breaker","hero":"machinery_3","short":"Heavy-duty delumper for breaking agglomerates and lumps in stored or conveyed powders.","applications":["Pharmaceutical","Chemical","Food"]},
    # Blending
    {"slug":"v-blender","category":"blending","name":"'V' Blender","tag":"V-Cone Tumble Blender","hero":"machinery_1","short":"V-cone tumble blender for gentle blending of free-flowing granules.","applications":["Pharmaceutical","Nutraceutical","Food"]},
    {"slug":"conta-blender","category":"blending","name":"Conta Blender","tag":"Contained Blending","hero":"machinery_2","short":"Container-loaded tumble blender for fully contained blending.","applications":["Pharmaceutical","Nutraceutical"]},
    {"slug":"octagonal-blender","category":"blending","name":"Octagonal Blender","tag":"Octagonal Tumble Blender","hero":"machinery_2","short":"Octagonal tumble blender for uniform blending of granules.","applications":["Pharmaceutical","Nutraceutical"]},
    {"slug":"double-cone-blender","category":"blending","name":"Double Cone Blender","tag":"Tumble Blending","hero":"machinery_1","short":"Twin-cone tumbler for gentle, dust-free blending of granules.","applications":["Pharmaceutical","Food","Nutraceutical","Chemical"]},
    {"slug":"ribbon-blender","category":"blending","name":"Ribbon Blender","tag":"Horizontal Blending","hero":"machinery_2","short":"Twin helical ribbon geometry for gentle blending of dry powders and granules.","applications":["Chemical","Food","Nutraceutical","Cosmetics"]},
    {"slug":"plough-shear-mixer","category":"blending","name":"Plough Shear Mixer","tag":"High-Intensity Mixing","hero":"machinery_2","short":"Plough shear mixer for rapid, high-intensity mixing of powders with optional choppers.","applications":["Chemical","Food","Nutraceutical","Detergents"]},
    # Material Handling
    {"slug":"elevator","category":"material-handling","name":"Elevator","tag":"Bin / Drum Elevator","hero":"plant_1","short":"Hydraulic elevator for lifting and docking IBCs, drums and bins onto process equipment.","applications":["Solid dosage suites","Chemical plants"]},
    {"slug":"tipper","category":"material-handling","name":"Tipper","tag":"Post / Column Tipper","hero":"plant_1","short":"Column-type post tipper for discharging drums and IBCs.","applications":["Pharmaceutical","Chemical","Food"]},
    {"slug":"power-transfer-system","category":"material-handling","name":"Power Transfer System","tag":"Powered Conveying & Transfer","hero":"plant_1","short":"Powered transfer system for closed, dust-free movement of powders and granules.","applications":["Pharmaceutical","Chemical","Food"]},
    {"slug":"ibc","category":"material-handling","name":"IBC (Intermediate Bulk Container)","tag":"Storage & Transfer Container","hero":"laboratory_2","short":"Stainless-steel IBCs for closed storage, transfer and blending of intermediates and finished products.","applications":["Pharmaceutical","Nutraceutical","Food"]},
    {"slug":"pallet-weighing-truck","category":"material-handling","name":"Pallet Weighing Truck","tag":"Mobile Weighing","hero":"laboratory_2","short":"Pallet truck with integrated weighing for mobile, traceable dispensing and batch verification.","applications":["Pharmaceutical","Nutraceutical","Chemical"]},
    # Cleaning
    {"slug":"bin-wash-system","category":"cleaning","name":"Bin Wash System","tag":"Automatic Bin / IBC Washer","hero":"plant_1","short":"Automatic bin wash system for validated cleaning and drying of IBCs, bins, drums and process containers.","applications":["Pharmaceutical","Nutraceutical","Food"]},
    {"slug":"cip-wip-skid","category":"cleaning","name":"CIP / WIP Skid","tag":"Clean / Wash In Place","hero":"machinery_1","short":"Skid-mounted CIP / WIP system delivering validated cleaning cycles to granulators, dryers, blenders and vessels.","applications":["Pharmaceutical","Nutraceutical","Food","Chemical"]},
]


async def seed_defaults(db):
    now = datetime.now(timezone.utc).isoformat()

    async def seed(coll, items):
        if await db[coll].count_documents({}) == 0:
            for it in items:
                it["created_at"] = now
            await db[coll].insert_many(items)

    await seed("categories", [dict(x) for x in DEFAULT_CATEGORIES])
    await seed("products", [dict(x) for x in DEFAULT_PRODUCTS])
    await seed("blog_posts", [dict(x) for x in DEFAULT_BLOG])
    await seed("news_items", [dict(x) for x in DEFAULT_NEWS])
    await seed("events", [dict(x) for x in DEFAULT_EVENTS])
    await seed("pages", [dict(x) for x in DEFAULT_PAGES])
    if not await db.settings.find_one({"_id": "site"}):
        await db.settings.insert_one({"_id": "site", **DEFAULT_SETTINGS, "created_at": now})
