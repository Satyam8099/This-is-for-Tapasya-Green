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


DEFAULT_PRODUCTS = [
    # Granulating
    {"slug":"saizoner","category":"granulating","name":"Saizoner","tag":"High Shear Mixer Granulator · Flagship","hero":"machinery_1","short":"Flagship high-shear mixer granulator — the Tapasya Saizoner is deployed by leading Indian and global pharmaceutical manufacturers.","applications":["Pharmaceutical","Nutraceutical","Food","Fine Chemicals"]},
    {"slug":"high-shear-mixer-granulator","category":"granulating","name":"High Shear Mixer Granulator","tag":"Wet Granulation","hero":"machinery_1","short":"Bottom-drive high-shear mixer granulator for reproducible wet granulation.","applications":["Pharmaceutical","Nutraceutical"]},
    {"slug":"rapid-mixer-granulator","category":"granulating","name":"Rapid Mixer Granulator","tag":"RMG · Wet Granulation","hero":"laboratory_1","short":"Compact RMG for wet mixing and granulation across R&D and mid-scale.","applications":["Pharmaceutical","Nutraceutical","Food"]},
    {"slug":"rapid-granulator","category":"granulating","name":"Rapid Granulator","tag":"Rapid Wet Granulator","hero":"laboratory_1","short":"Compact rapid granulator engineered for short batch cycles.","applications":["Pharmaceutical","Nutraceutical"]},
    {"slug":"oscillating-granulator","category":"granulating","name":"Oscillating Granulator","tag":"Dry Sizing","hero":"machinery_2","short":"Oscillating rotor for consistent dry sizing of wet or dried granules.","applications":["Pharmaceutical","Nutraceutical","Food"]},
    # Drying
    {"slug":"fluid-bed-dryer","category":"drying","name":"Fluid Bed Dryer","tag":"FBD Series","hero":"plant_1","short":"Fluid bed dryer for precise moisture control on pharma and nutraceutical granules.","applications":["Pharmaceutical","Nutraceutical","Food","Chemical"]},
    {"slug":"tray-dryer","category":"drying","name":"Tray Dryer","tag":"Batch Drying","hero":"plant_1","short":"Hot-air tray dryer for solids, granules, powders and heat-tolerant intermediates.","applications":["Pharmaceutical","Chemical","Food"]},
    {"slug":"vacuum-tray-dryer","category":"drying","name":"Vacuum Tray Dryer","tag":"Low-Temperature Drying","hero":"plant_1","short":"Vacuum tray dryer for heat-sensitive APIs and intermediates.","applications":["API drying","Heat-sensitive intermediates"]},
    # Milling
    {"slug":"multi-mill","category":"milling","name":"Multi Mill","tag":"Beater Mill","hero":"machinery_3","short":"Beater-blade multi mill for wet and dry size reduction.","applications":["Pharmaceutical","Nutraceutical","Food"]},
    {"slug":"cone-mill","category":"milling","name":"Cone Mill","tag":"Conical Screen Mill","hero":"machinery_3","short":"Conical screen mill for low-heat size reduction and de-lumping.","applications":["Pharmaceutical","Nutraceutical","Food","Chemical"]},
    {"slug":"co-mill","category":"milling","name":"Co Mill","tag":"In-line Conical Mill","hero":"machinery_3","short":"Compact in-line co-mill for continuous de-lumping between granulation and blending.","applications":["Pharmaceutical solid dosage"]},
    {"slug":"octagonal-mill","category":"milling","name":"Octagonal Mill","tag":"Octagonal Screen Mill","hero":"machinery_3","short":"Octagonal chamber screen mill for gentle sizing of dry granules.","applications":["Pharmaceutical","Nutraceutical","Food"]},
    # Blending
    {"slug":"conta-blender","category":"blending","name":"Conta Blender","tag":"Contained Blending","hero":"machinery_2","short":"Container-loaded tumble blender for fully contained blending.","applications":["Pharmaceutical","Nutraceutical"]},
    {"slug":"double-cone-blender","category":"blending","name":"Double Cone Blender","tag":"Tumble Blending","hero":"machinery_1","short":"Twin-cone tumbler for gentle, dust-free blending of granules.","applications":["Pharmaceutical","Food","Nutraceutical","Chemical"]},
    {"slug":"ribbon-blender","category":"blending","name":"Ribbon Blender","tag":"Horizontal Blending","hero":"machinery_2","short":"Twin helical ribbon geometry for gentle blending of dry powders and granules.","applications":["Chemical","Food","Nutraceutical","Cosmetics"]},
    {"slug":"octagonal-blender","category":"blending","name":"Octagonal Blender","tag":"Octagonal Tumble Blender","hero":"machinery_2","short":"Octagonal tumble blender for uniform blending of granules.","applications":["Pharmaceutical","Nutraceutical"]},
    {"slug":"bin-blender","category":"blending","name":"Bin Blender","tag":"IBC Blending","hero":"laboratory_2","short":"IBC blender for contained, cross-contamination-free blending.","applications":["Pharmaceutical","Nutraceutical"]},
    {"slug":"v-blender","category":"blending","name":"V Blender","tag":"V-Cone Tumble Blender","hero":"machinery_1","short":"V-cone tumble blender for gentle blending of free-flowing granules.","applications":["Pharmaceutical","Nutraceutical","Food"]},
    # Bins
    {"slug":"circular-conical-ipc","category":"bins","name":"Circular Conical IPC","tag":"Intermediate Product Container","hero":"laboratory_2","short":"Circular conical IPC for closed transfer of intermediates and finished blends.","applications":["Pharmaceutical","Nutraceutical"]},
    {"slug":"circular-drums","category":"bins","name":"Circular Drums","tag":"Storage & Transfer Drums","hero":"laboratory_2","short":"Sanitary circular drums for staging intermediates and finished products.","applications":["Pharmaceutical","Nutraceutical","Food"]},
    {"slug":"conta-bin","category":"bins","name":"Conta Bin / Blending IPC","tag":"Blending Container","hero":"laboratory_2","short":"Blending IPC designed to be tumbled inside a conta blender.","applications":["Pharmaceutical","Nutraceutical"]},
    {"slug":"tipper","category":"bins","name":"Tipper","tag":"Post / Column Tipper","hero":"plant_1","short":"Column-type post tipper for discharging drums and IBCs.","applications":["Pharmaceutical","Chemical","Food"]},
    {"slug":"pallet-weighing-system","category":"bins","name":"Pallet Weighing System","tag":"Weighing & Traceability","hero":"laboratory_2","short":"Pallet-scale weighing system with recipe dispensing and batch record integration.","applications":["Pharmaceutical","Nutraceutical","Chemical"]},
    # Pelletising
    {"slug":"pelletiser","category":"pelletising","name":"Pelletiser","tag":"Extrusion + Spheronisation","hero":"machinery_1","short":"Extrusion-spheronisation pelletiser producing dense, uniform pellets.","applications":["Modified release APIs","Nutraceutical"]},
    {"slug":"pellet-coating-system","category":"pelletising","name":"Pellet Coating System","tag":"Wurster / Rotor Coating","hero":"plant_1","short":"Wurster / rotor pellet-coating system for functional and enteric coatings.","applications":["Enteric coating","Sustained release","Taste masking"]},
    # Coating
    {"slug":"tablet-coating-machine","category":"coating","name":"Tablet Coating Machine","tag":"Perforated Auto-Coater","hero":"laboratory_2","short":"Fully automatic perforated-pan tablet coater for aqueous and enteric coatings.","applications":["Film coating","Enteric coating","Sugar coating"]},
    {"slug":"perforated-coating-pan","category":"coating","name":"Perforated Coating Pan","tag":"Pan Assembly","hero":"laboratory_2","short":"Retro-fittable perforated coating pan assembly to upgrade legacy coating suites.","applications":["Coating suite retrofit","R&D pilot"]},
    {"slug":"coating-system","category":"coating","name":"Coating System","tag":"Complete Coating Solution","hero":"plant_1","short":"Integrated coating suite covering pan, air handling, solution prep and automation.","applications":["Solid dosage lines","Contract manufacturing"]},
    # Micronising
    {"slug":"micronizer","category":"micronising","name":"Micronizer","tag":"Fluid-Energy Mill","hero":"machinery_2","short":"Fluid-energy micronizer producing sub-10 micron particle size.","applications":["Inhalation APIs","Fine chemical","Cosmetic pigments"]},
    {"slug":"air-jet-mill","category":"micronising","name":"Air Jet Mill","tag":"Spiral Jet Mill","hero":"machinery_2","short":"Spiral air-jet mill for narrow-distribution micronisation of heat-sensitive actives.","applications":["Inhalation formulations","APIs","Fine chemicals"]},
    # Special
    {"slug":"planetary-mixer","category":"special","name":"Planetary Mixer","tag":"Semi-Solid Mixing","hero":"laboratory_1","short":"Planetary motion mixer for high-viscosity pastes, ointments and semi-solids.","applications":["Pharmaceutical","Cosmetics","Food"]},
    {"slug":"vacuum-dryer","category":"special","name":"Vacuum Dryer","tag":"Rotary / Conical Vacuum Dryer","hero":"plant_1","short":"Rotary or conical vacuum dryer for gentle drying of heat-sensitive APIs.","applications":["API drying","Solvent recovery","Fine chemical"]},
    {"slug":"lifter","category":"special","name":"Lifter","tag":"Column / Post Lifter","hero":"plant_1","short":"Hydraulic column lifter for docking IBCs, drums and bins.","applications":["Solid dosage suites","Chemical plants"]},
    {"slug":"material-transfer-systems","category":"special","name":"Material Transfer Systems","tag":"Pneumatic / Vacuum Transfer","hero":"plant_1","short":"Vacuum and pneumatic material transfer systems for closed, dust-free movement.","applications":["Pharmaceutical","Chemical","Food"]},
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
