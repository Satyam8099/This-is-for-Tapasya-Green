// Category-level defaults (compliance, downloads, integration, customisation, FAQ, how-it-works)
// merged into each product via spread. Kept terse and technical — no marketing prose.

const COMMON_COMPLIANCE = [
  "cGMP construction with SS 316 / 316L product-contact parts",
  "Ra ≤ 0.4 µm on contact surfaces, Ra ≤ 0.8 µm on non-contact",
  "PLC + HMI ready for 21 CFR Part 11 (audit trail, user roles, e-sign)",
  "FAT / SAT and DQ / IQ / OQ / PQ documentation package included",
  "ATEX / hazardous-area variants available on request",
];

const COMMON_DOWNLOADS = [
  { label: "Product Datasheet", type: "PDF", size: "1.2 MB" },
  { label: "General Arrangement Drawing", type: "PDF", size: "0.8 MB" },
  { label: "URS Template", type: "DOCX", size: "48 KB" },
  { label: "Utility Requirement Sheet", type: "PDF", size: "0.3 MB" },
];

const COMMON_INTEGRATION = [
  "Direct docking to upstream dispensary and IBC systems",
  "Downstream link to blending, compression or packing lines",
  "Common PLC / SCADA fabric via OPC-UA or Modbus TCP",
  "CIP / WIP compatible with plant utility loop",
];

const COMMON_CUSTOMISATION = [
  "Working volume tailored to batch size and scale-up ratio",
  "Contact-parts finish (Ra ≤ 0.4 / 0.6 µm) and passivation",
  "Explosion-proof motors and IECEx / ATEX instrumentation",
  "Data historian, MES / batch record integration",
  "Skid-mounted, split-execution or fully-piped layouts",
];

const COMMON_FAQ = [
  { q: "What is the typical lead time?", a: "Standard lead time is 12–20 weeks depending on batch size, options, finish and documentation scope." },
  { q: "Do you provide qualification documents?", a: "Yes. URS / DQ / IQ / OQ / PQ templates aligned to your protocols are included in the standard package." },
  { q: "Is the control system 21 CFR Part 11 ready?", a: "Yes. Delivered with audit trail, user roles, electronic signatures and configurable data retention." },
  { q: "What after-sales support is included?", a: "Installation, commissioning, operator training and 12 months warranty. AMC contracts and spare-part kits are available." },
  { q: "Can the machine be shipped as an export order?", a: "Yes. We handle export packing, sea / air freight coordination and remote commissioning support in over 30 countries." },
];

const HOW_GRANULATING = [
  { n: "01", title: "Charging", body: "Pre-weighed excipients and API are charged into the bowl via IBC or manual dispensary." },
  { n: "02", title: "Dry Mix", body: "Impeller runs at low speed to homogenise the dry blend before liquid binder addition." },
  { n: "03", title: "Wet Granulation", body: "Binder solution is metered through the top port while the impeller and chopper build granules." },
  { n: "04", title: "Discharge", body: "Wet mass is discharged through a bottom / side port directly into the FBD or wet mill." },
];

const HOW_DRYING = [
  { n: "01", title: "Charging", body: "Wet granules are charged into the product container via bottom-loading trolley." },
  { n: "02", title: "Fluidisation / Drying", body: "Filtered hot air is introduced from the plenum and fluidises the bed uniformly." },
  { n: "03", title: "Moisture Control", body: "In-line LOD / NIR probes track moisture; process endpoint is set by recipe." },
  { n: "04", title: "Discharge", body: "Dry granules are discharged via pneumatic transfer or directly into the milling stage." },
];

const HOW_MILLING = [
  { n: "01", title: "Feed", body: "Material is fed through the top hopper directly from FBD or IBC docking station." },
  { n: "02", title: "Size Reduction", body: "Rotating impeller drives the material against a graded screen for controlled reduction." },
  { n: "03", title: "Screening", body: "Interchangeable screens define particle-size distribution to match downstream requirements." },
  { n: "04", title: "Collection", body: "Milled material discharges into a bin, IBC or direct in-line blender inlet." },
];

const HOW_BLENDING = [
  { n: "01", title: "Container Docking", body: "IBC / bin is clamped to the blender frame; safety interlocks confirm engagement." },
  { n: "02", title: "Tumble Cycle", body: "The blender rotates the container at recipe-defined speed and revolutions." },
  { n: "03", title: "Homogeneity Check", body: "Optional in-line NIR probe or thief-sampling ports verify blend uniformity." },
  { n: "04", title: "Discharge", body: "Container is undocked and moved to compression / encapsulation via split-butterfly valve." },
];

const HOW_MATERIAL_HANDLING = [
  { n: "01", title: "Charging", body: "Material is loaded from dispensary via top valve or split-butterfly interface." },
  { n: "02", title: "Transport", body: "The container is moved between suites on trolleys, elevators or tippers." },
  { n: "03", title: "Blending / Feeding", body: "Same container docks onto blenders or press hoppers without manual transfer." },
  { n: "04", title: "Cleaning", body: "Container is cleaned in a dedicated bin washer and returned to service." },
];

const HOW_CLEANING = [
  { n: "01", title: "Loading", body: "Bins, containers or machine parts are loaded into the wash chamber on a transfer trolley." },
  { n: "02", title: "Wash Cycle", body: "Rotating high-pressure spray nozzles execute the validated recipe: pre-rinse, detergent wash, final rinse." },
  { n: "03", title: "Drying", body: "HEPA-filtered hot air dries the load to a repeatable, documented endpoint." },
  { n: "04", title: "Unloading", body: "Clean load exits on the opposite side, maintaining clean / dirty side separation." },
];

// Category metadata used by the mega menu and page headings
export const CATEGORIES = [
  {
    slug: "granulating",
    name: "Granulating",
    tagline: "High shear granulation & binder preparation",
    products: [
      { slug: "high-shear-mixer-granulator", name: "High Shear Mixer Granulator" },
      { slug: "high-shear-mixer-granulator-r2t", name: "High Shear Mixer Granulator - R2T" },
      { slug: "binder-preparation-vessel", name: "Binder Preparation Vessel" },
    ],
  },
  {
    slug: "drying",
    name: "Drying",
    tagline: "Fluid bed, tray & vacuum drying",
    products: [
      { slug: "fluid-bed-equipment", name: "Fluid Bed Equipment" },
      { slug: "tray-dryer", name: "Tray Dryer" },
      { slug: "roto-cone-vacuum-dryer", name: "Roto Cone Vacuum Dryer" },
    ],
  },
  {
    slug: "milling",
    name: "Milling",
    tagline: "Cone mills, multi mills & sifters",
    products: [
      { slug: "tap-cone-mill", name: "Tap Cone Mill" },
      { slug: "under-driven-cone-mill", name: "Under Driven Cone Mill" },
      { slug: "multi-mill", name: "Multi Mill" },
      { slug: "sifter-cum-multi-mill", name: "Sifter Cum Multi Mill" },
      { slug: "oscillating-granulator", name: "Oscillating Granulator" },
      { slug: "vibratory-sifter", name: "Vibratory Sifter" },
      { slug: "delumper", name: "Delumper" },
    ],
  },
  {
    slug: "blending",
    name: "Blending",
    tagline: "Tumble, ribbon & shear blending",
    products: [
      { slug: "v-blender", name: "'V' Blender" },
      { slug: "conta-blender", name: "Conta Blender" },
      { slug: "octagonal-blender", name: "Octagonal Blender" },
      { slug: "double-cone-blender", name: "Double Cone Blender" },
      { slug: "ribbon-blender", name: "Ribbon Blender" },
      { slug: "plough-shear-mixer", name: "Plough Shear Mixer" },
    ],
  },
  {
    slug: "material-handling",
    name: "Material Handling",
    tagline: "IBCs, elevators, tippers & weighing",
    products: [
      { slug: "elevator", name: "Elevator" },
      { slug: "tipper", name: "Tipper" },
      { slug: "power-transfer-system", name: "Power Transfer System" },
      { slug: "ibc", name: "IBC (Intermediate Bulk Container)" },
      { slug: "pallet-weighing-truck", name: "Pallet Weighing Truck" },
    ],
  },
  {
    slug: "cleaning",
    name: "Cleaning",
    tagline: "Bin washing & CIP / WIP skids",
    products: [
      { slug: "bin-wash-system", name: "Bin Wash System" },
      { slug: "cip-wip-skid", name: "CIP / WIP Skid" },
    ],
  },
];

// Map category slug -> how-it-works template
const HOW_BY_CATEGORY = {
  granulating: HOW_GRANULATING,
  drying: HOW_DRYING,
  milling: HOW_MILLING,
  blending: HOW_BLENDING,
  "material-handling": HOW_MATERIAL_HANDLING,
  cleaning: HOW_CLEANING,
};

// Product-specific data. Category defaults are merged at export time.
const RAW = [
  // ---------- GRANULATING ----------
  {
    slug: "high-shear-mixer-granulator",
    category: "granulating",
    name: "High Shear Mixer Granulator",
    tag: "Wet Granulation",
    hero: "machinery_1",
    gallery: ["machinery_2", "laboratory_1", "plant_1"],
    short: "Bottom-drive high-shear mixer granulator for reproducible wet granulation at pilot and commercial scale.",
    quickSpecs: [
      { label: "Bowl Volume", value: "10 – 1200 L" },
      { label: "Discharge", value: "Pneumatic side / bottom" },
      { label: "Chopper", value: "Independent motor" },
      { label: "Utilities", value: "CIP / WIP ready" },
    ],
    keyFeatures: [
      "Bottom-driven impeller for compact footprint and cGMP sealing",
      "Independent chopper for controlled lump breaking",
      "Endpoint detection via load cells and impeller torque",
      "Product bowl designed for CIP / WIP with rotating spray balls",
      "Wet mass discharge directly into FBD or wet mill",
    ],
    techSpecs: [
      { k: "Bowl Volume", v: "10 L – 1200 L" },
      { k: "Working Volume", v: "30 – 70 %" },
      { k: "Impeller Speed", v: "50 – 300 rpm" },
      { k: "Chopper Speed", v: "1500 / 3000 rpm" },
      { k: "Motor (Impeller)", v: "3 – 75 kW" },
      { k: "Motor (Chopper)", v: "1.1 – 11 kW" },
      { k: "Contact Parts", v: "SS 316 / 316L" },
      { k: "Control", v: "PLC + HMI, 21 CFR Part 11 ready" },
    ],
    models: {
      headers: ["Model", "Bowl (L)", "Working (kg)", "Impeller (kW)"],
      rows: [
        ["HSMG-10", "10", "2 – 6", "1.5"],
        ["HSMG-150", "150", "30 – 90", "11"],
        ["HSMG-400", "400", "80 – 240", "22"],
        ["HSMG-800", "800", "160 – 480", "45"],
      ],
    },
    applications: ["Pharmaceutical", "Nutraceutical", "Fine chemicals"],
  },
  {
    slug: "high-shear-mixer-granulator-r2t",
    category: "granulating",
    name: "High Shear Mixer Granulator - R2T",
    tag: "R2T · Lab & Pilot Scale",
    hero: "laboratory_1",
    gallery: ["machinery_1", "laboratory_2", "plant_1"],
    short: "Compact R2T high-shear mixer granulator for formulation development, scale-up trials and small-batch production.",
    quickSpecs: [
      { label: "Bowl Volume", value: "2 – 25 L" },
      { label: "Impeller", value: "VFD driven" },
      { label: "Chopper", value: "Independent" },
      { label: "Mounting", value: "Tabletop / mobile" },
    ],
    keyFeatures: [
      "Lab-scale geometry matched to production HSMG for direct scale-up",
      "Interchangeable bowls for 2 L to 25 L working range",
      "Full process data logging for DoE and QbD studies",
      "cGMP tabletop execution with castors for suite-to-suite mobility",
      "Recipe-based PLC control identical to production models",
    ],
    techSpecs: [
      { k: "Bowl Volume", v: "2 L – 25 L (interchangeable)" },
      { k: "Working Volume", v: "30 – 70 %" },
      { k: "Impeller Speed", v: "50 – 500 rpm (VFD)" },
      { k: "Chopper Speed", v: "1500 / 3000 rpm" },
      { k: "Contact Parts", v: "SS 316 / 316L" },
      { k: "Control", v: "PLC + HMI, data logging" },
    ],
    models: {
      headers: ["Model", "Bowl (L)", "Working (kg)"],
      rows: [
        ["R2T-2", "2", "0.4 – 1.2"],
        ["R2T-6", "6", "1.2 – 3.6"],
        ["R2T-10", "10", "2 – 6"],
        ["R2T-25", "25", "5 – 15"],
      ],
    },
    applications: ["Formulation development", "Scale-up trials", "Clinical batches"],
  },
  {
    slug: "binder-preparation-vessel",
    category: "granulating",
    name: "Binder Preparation Vessel",
    tag: "Binder / Paste Preparation",
    hero: "laboratory_2",
    gallery: ["machinery_1", "plant_1", "machinery_2"],
    short: "Jacketed binder preparation vessel for controlled heating, dissolution and transfer of granulation binders.",
    quickSpecs: [
      { label: "Volume", value: "25 – 1000 L" },
      { label: "Jacket", value: "Steam / electric" },
      { label: "Agitator", value: "Anchor / propeller" },
      { label: "Transfer", value: "Pump / gravity" },
    ],
    keyFeatures: [
      "Jacketed construction for precise binder temperature control",
      "High-torque agitator for pastes, starches and polymer solutions",
      "Load-cell option for automated recipe dosing",
      "Direct metering link to the high-shear mixer granulator",
      "CIP spray ball and sanitary tri-clamp fittings throughout",
    ],
    techSpecs: [
      { k: "Working Volume", v: "25 L – 1000 L" },
      { k: "Jacket", v: "Steam, hot water or electric" },
      { k: "Agitator Speed", v: "20 – 120 rpm (VFD)" },
      { k: "Design Temp", v: "Up to 95 °C" },
      { k: "Contact Parts", v: "SS 316 / 316L" },
    ],
    models: {
      headers: ["Model", "Volume (L)", "Agitator (kW)"],
      rows: [
        ["BPV-50", "50", "0.75"],
        ["BPV-200", "200", "1.5"],
        ["BPV-500", "500", "3"],
        ["BPV-1000", "1000", "5.5"],
      ],
    },
    applications: ["Pharmaceutical", "Nutraceutical", "Food"],
  },

  // ---------- DRYING ----------
  {
    slug: "fluid-bed-equipment",
    category: "drying",
    name: "Fluid Bed Equipment",
    tag: "FBD / FBE Series",
    hero: "plant_1",
    gallery: ["machinery_1", "laboratory_1", "machinery_3"],
    short: "Fluid bed equipment for precise drying, granulation and coating of pharma and nutraceutical granules from lab to commercial scale.",
    quickSpecs: [
      { label: "Batch", value: "5 – 500 kg" },
      { label: "Inlet Air", value: "Up to 120 °C" },
      { label: "Filters", value: "FDA polyester" },
      { label: "Explosion", value: "Vent + earthing" },
    ],
    keyFeatures: [
      "Uniform hot-air distribution for consistent moisture profile",
      "Explosion venting and inline earth continuity for safe pharma operation",
      "Retarding chamber and shaker for fines recovery",
      "Bottom-loading trolley with quick-clamp seal",
      "Optional top-spray granulation and in-line LOD / NIR probes",
    ],
    techSpecs: [
      { k: "Batch Capacity", v: "5 – 500 kg" },
      { k: "Inlet Air Temperature", v: "40 – 120 °C" },
      { k: "Air Volume", v: "500 – 15 000 m³/hr" },
      { k: "Bag Filter", v: "Antistatic FDA polyester" },
      { k: "Contact Parts", v: "SS 316 / 316L" },
      { k: "Instrumentation", v: "PLC + HMI, 21 CFR Part 11" },
    ],
    models: {
      headers: ["Model", "Batch (kg)", "Air (m³/hr)", "Heater (kW)"],
      rows: [
        ["FBE-30", "5 – 30", "1 200", "24"],
        ["FBE-120", "30 – 120", "3 500", "60"],
        ["FBE-250", "80 – 250", "7 000", "120"],
        ["FBE-500", "150 – 500", "12 000", "180"],
      ],
    },
    applications: ["Pharmaceutical", "Nutraceutical", "Food", "Chemical"],
  },
  {
    slug: "tray-dryer",
    category: "drying",
    name: "Tray Dryer",
    tag: "Batch Drying",
    hero: "plant_1",
    gallery: ["machinery_3", "laboratory_1", "machinery_1"],
    short: "Hot-air tray dryer for solids, granules, powders and heat-tolerant intermediates.",
    quickSpecs: [
      { label: "Trays", value: "12 – 192" },
      { label: "Air", value: "Recirculating" },
      { label: "Heater", value: "Steam / electric" },
      { label: "Temp", value: "Up to 130 °C" },
    ],
    keyFeatures: [
      "Uniform air distribution with adjustable dampers",
      "Removable trolley for batch loading",
      "Steam, thermic-fluid or electric heating options",
      "Insulated double-wall chamber for energy efficiency",
      "Digital temperature control with over-temperature safety",
    ],
    techSpecs: [
      { k: "Tray Count", v: "12 / 24 / 48 / 96 / 192" },
      { k: "Tray Size", v: "812 × 406 × 32 mm (std.)" },
      { k: "Operating Temp", v: "40 – 130 °C" },
      { k: "Heating", v: "Steam / thermic fluid / electric" },
      { k: "Contact Parts", v: "SS 304 / 316" },
    ],
    models: {
      headers: ["Model", "Trays", "Batch (kg)"],
      rows: [
        ["TD-12", "12", "Up to 25"],
        ["TD-48", "48", "Up to 120"],
        ["TD-96", "96", "Up to 250"],
        ["TD-192", "192", "Up to 500"],
      ],
    },
    applications: ["Pharmaceutical", "Chemical", "Food", "Nutraceutical"],
  },
  {
    slug: "roto-cone-vacuum-dryer",
    category: "drying",
    name: "Roto Cone Vacuum Dryer",
    tag: "RCVD · Low-Temperature Drying",
    hero: "plant_1",
    gallery: ["laboratory_2", "machinery_2", "machinery_1"],
    short: "Rotating double-cone vacuum dryer for gentle, low-temperature drying of heat-sensitive APIs with solvent recovery.",
    quickSpecs: [
      { label: "Volume", value: "50 – 4000 L" },
      { label: "Vacuum", value: "Up to 720 mmHg" },
      { label: "Temp", value: "40 – 90 °C" },
      { label: "Recovery", value: "Solvent condenser" },
    ],
    keyFeatures: [
      "Rotating double-cone action for uniform, low-temperature drying",
      "Integrated solvent condenser and receiver for recovery duties",
      "Jacketed cone with hot water, oil or steam heating",
      "Nitrogen bleed for inert-atmosphere drying",
      "Dust filter with nitrogen pulse-jet cleaning",
    ],
    techSpecs: [
      { k: "Volume", v: "50 – 4000 L" },
      { k: "Vacuum", v: "Up to 720 mmHg" },
      { k: "Jacket", v: "Hot water / oil / steam" },
      { k: "Rotation", v: "2 – 8 rpm (VFD)" },
      { k: "Contact Parts", v: "SS 316 / 316L" },
    ],
    models: {
      headers: ["Model", "Volume (L)"],
      rows: [
        ["RCVD-100", "100"],
        ["RCVD-500", "500"],
        ["RCVD-1000", "1000"],
        ["RCVD-4000", "4000"],
      ],
    },
    applications: ["API drying", "Solvent recovery", "Fine chemical"],
  },

  // ---------- MILLING ----------
  {
    slug: "tap-cone-mill",
    category: "milling",
    name: "Tap Cone Mill",
    tag: "Conical Screen Mill",
    hero: "machinery_3",
    gallery: ["machinery_1", "machinery_2", "laboratory_1"],
    short: "Conical screen mill for low-heat, low-dust size reduction and inline de-lumping of wet and dry granules.",
    quickSpecs: [
      { label: "Screen", value: "0.2 – 20 mm" },
      { label: "Speed", value: "500 – 3000 rpm" },
      { label: "Output", value: "Up to 1000 kg/hr" },
      { label: "Motor", value: "3 – 15 HP" },
    ],
    keyFeatures: [
      "Conical rotor and screen for gentle reduction with low fines",
      "Low heat rise, ideal for thermolabile actives",
      "Quick screen and impeller changeover",
      "Compatible with IBC direct docking upstream and downstream",
      "Optional dust-tight execution with WIP",
    ],
    techSpecs: [
      { k: "Screen Range", v: "0.2 – 20 mm" },
      { k: "Speed", v: "500 – 3000 rpm" },
      { k: "Output", v: "Up to 1000 kg / hr" },
      { k: "Motor", v: "3 – 15 HP" },
      { k: "Contact Parts", v: "SS 316 / 316L" },
    ],
    models: {
      headers: ["Model", "Motor (HP)", "Output (kg/hr)"],
      rows: [
        ["TCM-3", "3", "50 – 150"],
        ["TCM-7.5", "7.5", "200 – 500"],
        ["TCM-15", "15", "500 – 1000"],
      ],
    },
    applications: ["Pharmaceutical", "Nutraceutical", "Food", "Chemical"],
  },
  {
    slug: "under-driven-cone-mill",
    category: "milling",
    name: "Under Driven Cone Mill",
    tag: "Bottom-Drive Conical Mill",
    hero: "machinery_3",
    gallery: ["machinery_2", "plant_1", "laboratory_1"],
    short: "Under-driven conical mill with the drive below the product zone for dust-tight, in-line size reduction.",
    quickSpecs: [
      { label: "Screen", value: "0.3 – 10 mm" },
      { label: "Speed", value: "1000 – 3000 rpm" },
      { label: "Layout", value: "Vertical in-line" },
      { label: "Contact", value: "SS 316" },
    ],
    keyFeatures: [
      "Bottom-drive layout keeps the product zone free of overhead drives",
      "Compact vertical execution for direct docking under FBD or IBC",
      "Rapid screen changeover with quick-clamp assembly",
      "Low mechanical heat, minimises product stress",
      "Fully cGMP with sanitary tri-clamp connections",
    ],
    techSpecs: [
      { k: "Screen Range", v: "0.3 – 10 mm" },
      { k: "Speed", v: "1000 – 3000 rpm (VFD)" },
      { k: "Motor", v: "2.2 – 11 kW" },
      { k: "Contact Parts", v: "SS 316 / 316L" },
    ],
    models: {
      headers: ["Model", "Motor (kW)", "Output (kg/hr)"],
      rows: [
        ["UDCM-100", "2.2", "100 – 300"],
        ["UDCM-300", "5.5", "300 – 700"],
        ["UDCM-600", "11", "600 – 1200"],
      ],
    },
    applications: ["Pharmaceutical solid dosage", "Nutraceutical"],
  },
  {
    slug: "multi-mill",
    category: "milling",
    name: "Multi Mill",
    tag: "Beater Mill",
    hero: "machinery_3",
    gallery: ["machinery_1", "laboratory_1", "plant_1"],
    short: "Beater-blade multi mill for wet and dry size reduction across granulation lines.",
    quickSpecs: [
      { label: "Motor", value: "3 – 7.5 HP" },
      { label: "Speed", value: "750 / 1500 rpm" },
      { label: "Screen", value: "0.5 – 25 mm" },
      { label: "Output", value: "25 – 250 kg/hr" },
    ],
    keyFeatures: [
      "Rotating beaters with forward / reverse operation",
      "Interchangeable screens for adjustable particle size",
      "Portable frame with lockable castors",
      "Fully cGMP with tool-free strip-down for cleaning",
      "Overload cutoff and safety interlocks",
    ],
    techSpecs: [
      { k: "Motor", v: "3 / 5 / 7.5 HP" },
      { k: "Speed", v: "750 / 1500 rpm (VFD)" },
      { k: "Screen Range", v: "0.5 – 25 mm" },
      { k: "Output", v: "25 – 250 kg / hr" },
      { k: "Contact Parts", v: "SS 316" },
    ],
    models: {
      headers: ["Model", "Motor (HP)", "Output (kg/hr)"],
      rows: [
        ["MM-3", "3", "25 – 80"],
        ["MM-5", "5", "80 – 150"],
        ["MM-7.5", "7.5", "150 – 250"],
      ],
    },
    applications: ["Pharmaceutical", "Nutraceutical", "Food"],
  },
  {
    slug: "sifter-cum-multi-mill",
    category: "milling",
    name: "Sifter Cum Multi Mill",
    tag: "Combined Sifting & Milling",
    hero: "machinery_3",
    gallery: ["machinery_1", "laboratory_1", "plant_1"],
    short: "Integrated sifter and multi mill on a single frame for one-pass screening and size reduction.",
    quickSpecs: [
      { label: "Motor", value: "3 – 7.5 HP" },
      { label: "Sifter", value: "Vibratory deck" },
      { label: "Screen", value: "0.5 – 25 mm" },
      { label: "Layout", value: "Single frame" },
    ],
    keyFeatures: [
      "Sifting and milling combined in one compact, mobile unit",
      "Vibratory sifter removes oversize before milling",
      "Single-point dust extraction connection",
      "Tool-free screen changeover on both decks",
      "Fully cGMP with strip-down-friendly contact parts",
    ],
    techSpecs: [
      { k: "Mill Motor", v: "3 / 5 / 7.5 HP" },
      { k: "Sifter Deck", v: "Single / double deck options" },
      { k: "Screen Range", v: "0.5 – 25 mm" },
      { k: "Output", v: "25 – 250 kg / hr" },
      { k: "Contact Parts", v: "SS 316" },
    ],
    models: {
      headers: ["Model", "Motor (HP)", "Output (kg/hr)"],
      rows: [
        ["SCM-3", "3", "25 – 80"],
        ["SCM-5", "5", "80 – 150"],
        ["SCM-7.5", "7.5", "150 – 250"],
      ],
    },
    applications: ["Pharmaceutical", "Nutraceutical", "Food"],
  },
  {
    slug: "oscillating-granulator",
    category: "milling",
    name: "Oscillating Granulator",
    tag: "Dry Sizing",
    hero: "machinery_2",
    gallery: ["laboratory_1", "machinery_3", "plant_1"],
    short: "Oscillating rotor for consistent dry sizing of wet or dried granules with tight PSD.",
    quickSpecs: [
      { label: "Sieve Range", value: "0.5 – 6 mm" },
      { label: "Output", value: "10 – 250 kg/hr" },
      { label: "Rotor", value: "± 90° oscillation" },
      { label: "Motor", value: "1.5 / 3 HP" },
    ],
    keyFeatures: [
      "Reversible oscillating rotor with sanitary bearings",
      "Interchangeable mesh sieves for defined PSD",
      "Low-heat operation preserves thermolabile actives",
      "Portable frame for line integration",
      "Tool-free changeover for cleaning",
    ],
    techSpecs: [
      { k: "Sieve Size", v: "0.5 – 6 mm" },
      { k: "Rotor Angle", v: "± 90°" },
      { k: "Output", v: "10 – 250 kg / hr" },
      { k: "Motor", v: "1.1 – 2.2 kW" },
      { k: "Contact Parts", v: "SS 316" },
    ],
    models: {
      headers: ["Model", "Sieve (mm)", "Output (kg/hr)"],
      rows: [
        ["OG-100", "0.5 – 4", "50 – 100"],
        ["OG-200", "0.5 – 6", "100 – 200"],
        ["OG-300", "1 – 6", "150 – 250"],
      ],
    },
    applications: ["Pharmaceutical", "Nutraceutical", "Food"],
  },
  {
    slug: "vibratory-sifter",
    category: "milling",
    name: "Vibratory Sifter",
    tag: "Gyro / Vibro Sifter",
    hero: "machinery_2",
    gallery: ["machinery_3", "laboratory_1", "plant_1"],
    short: "Gyroscopic vibratory sifter for grading, scalping and de-dusting of powders and granules.",
    quickSpecs: [
      { label: "Decks", value: "1 – 3" },
      { label: "Diameter", value: "600 – 1500 mm" },
      { label: "Mesh", value: "Up to 400 mesh" },
      { label: "Output", value: "20 – 500 kg/hr" },
    ],
    keyFeatures: [
      "Gyro-motion screening for sharp, multi-fraction separation",
      "Quick-release clamp rings for tool-free screen change",
      "Anti-blinding ball / ultrasonic de-blinding options",
      "Dust-tight cover with flexible sleeve connections",
      "Mobile stand with lockable castors",
    ],
    techSpecs: [
      { k: "Screen Diameter", v: "600 / 900 / 1200 / 1500 mm" },
      { k: "Decks", v: "1 – 3" },
      { k: "Mesh Range", v: "10 – 400 mesh" },
      { k: "Motor", v: "0.25 – 1.5 kW vibratory" },
      { k: "Contact Parts", v: "SS 316" },
    ],
    models: {
      headers: ["Model", "Diameter (mm)", "Decks"],
      rows: [
        ["VS-600", "600", "1 – 2"],
        ["VS-900", "900", "1 – 3"],
        ["VS-1200", "1200", "1 – 3"],
        ["VS-1500", "1500", "1 – 3"],
      ],
    },
    applications: ["Pharmaceutical", "Nutraceutical", "Food", "Chemical"],
  },
  {
    slug: "delumper",
    category: "milling",
    name: "Delumper",
    tag: "Lump Breaker",
    hero: "machinery_3",
    gallery: ["machinery_1", "plant_1", "laboratory_1"],
    short: "Heavy-duty delumper for breaking agglomerates and lumps in stored or conveyed powders before processing.",
    quickSpecs: [
      { label: "Throughput", value: "Up to 2000 kg/hr" },
      { label: "Rotor", value: "Twin shaft" },
      { label: "Teeth", value: "Replaceable" },
      { label: "Mounting", value: "In-line" },
    ],
    keyFeatures: [
      "Twin-shaft counter-rotating teeth crush friable lumps without fines",
      "In-line mounting under silos, IBCs or bag-dump stations",
      "Replaceable teeth and screens for low maintenance",
      "Low-speed, high-torque drive minimises heat and dust",
      "cGMP execution with tool-free chamber access",
    ],
    techSpecs: [
      { k: "Throughput", v: "Up to 2000 kg / hr" },
      { k: "Rotor Speed", v: "60 – 180 rpm" },
      { k: "Motor", v: "1.5 – 7.5 kW" },
      { k: "Contact Parts", v: "SS 316" },
    ],
    models: {
      headers: ["Model", "Motor (kW)", "Throughput (kg/hr)"],
      rows: [
        ["DL-200", "1.5", "Up to 300"],
        ["DL-400", "3.7", "300 – 900"],
        ["DL-600", "7.5", "900 – 2000"],
      ],
    },
    applications: ["Pharmaceutical", "Chemical", "Food"],
  },

  // ---------- BLENDING ----------
  {
    slug: "v-blender",
    category: "blending",
    name: "'V' Blender",
    tag: "V-Cone Tumble Blender",
    hero: "machinery_1",
    gallery: ["machinery_3", "laboratory_2", "plant_1"],
    short: "V-cone tumble blender giving gentle, dust-free blending of free-flowing granules and powders.",
    quickSpecs: [
      { label: "Capacity", value: "25 – 2000 L" },
      { label: "Fill", value: "~ 50 % gross" },
      { label: "Speed", value: "12 – 24 rpm" },
      { label: "Intensifier", value: "Optional" },
    ],
    keyFeatures: [
      "Symmetric V geometry for consistent blend uniformity",
      "Optional intensifier bar for lump breaking and liquid addition",
      "Butterfly discharge valve with quick opening",
      "Interchangeable shells for multi-product suites",
    ],
    techSpecs: [
      { k: "Capacity", v: "25 – 2000 L" },
      { k: "Speed", v: "12 – 24 rpm" },
      { k: "Motor", v: "1.5 – 11 kW" },
      { k: "Contact Parts", v: "SS 316 / 316L" },
    ],
    models: {
      headers: ["Model", "Volume (L)", "Load (kg)"],
      rows: [
        ["VB-100", "100", "50"],
        ["VB-500", "500", "250"],
        ["VB-2000", "2000", "1000"],
      ],
    },
    applications: ["Pharmaceutical", "Nutraceutical", "Food"],
  },
  {
    slug: "conta-blender",
    category: "blending",
    name: "Conta Blender",
    tag: "Contained Blending",
    hero: "machinery_2",
    gallery: ["laboratory_2", "plant_1", "machinery_3"],
    short: "Container-loaded tumble blender for fully contained single-pot blending in OEB-rated pharma suites.",
    quickSpecs: [
      { label: "Container", value: "25 – 3000 L" },
      { label: "Speed", value: "2 – 20 rpm" },
      { label: "Load", value: "Automatic clamp" },
      { label: "OEB", value: "Up to OEB 4" },
    ],
    keyFeatures: [
      "Fully contained blending inside a dedicated container",
      "Zero cross-contamination between batches",
      "Compatible with split-butterfly and RTP transfer valves",
      "Recipe-based tumble control with data logging",
      "Hydraulic bowl clamping with safety interlocks",
    ],
    techSpecs: [
      { k: "Container Range", v: "25 – 3000 L" },
      { k: "Tumble Speed", v: "2 – 20 rpm" },
      { k: "Load / Unload", v: "Automatic hydraulic clamp" },
      { k: "Control", v: "PLC / HMI, 21 CFR Part 11" },
      { k: "OEB Rating", v: "Up to OEB 4 optional" },
    ],
    models: {
      headers: ["Model", "Container (L)", "Load (kg)"],
      rows: [
        ["CB-100", "100", "60"],
        ["CB-500", "500", "300"],
        ["CB-1500", "1500", "900"],
        ["CB-3000", "3000", "1800"],
      ],
    },
    applications: ["Pharmaceutical", "Nutraceutical"],
  },
  {
    slug: "octagonal-blender",
    category: "blending",
    name: "Octagonal Blender",
    tag: "Octagonal Tumble Blender",
    hero: "machinery_2",
    gallery: ["machinery_1", "laboratory_1", "plant_1"],
    short: "Octagonal tumble blender for uniform blending of granules with a larger fill volume than a double-cone.",
    quickSpecs: [
      { label: "Capacity", value: "50 – 5000 L" },
      { label: "Fill", value: "~ 70 %" },
      { label: "Speed", value: "8 – 15 rpm" },
      { label: "Discharge", value: "Butterfly" },
    ],
    keyFeatures: [
      "Higher fill volume than a double-cone at same footprint",
      "Baffle plates aid axial blending",
      "Vacuum loading and pneumatic discharge options",
      "Fully cGMP with mirror-polished interior",
    ],
    techSpecs: [
      { k: "Working Capacity", v: "50 – 5000 L" },
      { k: "Fill Volume", v: "~ 70 %" },
      { k: "Speed", v: "8 – 15 rpm" },
      { k: "Contact Parts", v: "SS 316 / 316L" },
    ],
    models: {
      headers: ["Model", "Volume (L)", "Load (kg)"],
      rows: [
        ["OCB-100", "100", "50"],
        ["OCB-1000", "1000", "500"],
        ["OCB-3000", "3000", "1500"],
      ],
    },
    applications: ["Pharmaceutical", "Nutraceutical"],
  },
  {
    slug: "double-cone-blender",
    category: "blending",
    name: "Double Cone Blender",
    tag: "Tumble Blending",
    hero: "machinery_1",
    gallery: ["machinery_3", "laboratory_1", "laboratory_2"],
    short: "Symmetric twin-cone tumbler for gentle, dust-free blending of granules and fragile powders.",
    quickSpecs: [
      { label: "Capacity", value: "25 – 5000 L" },
      { label: "Fill", value: "~ 60 % gross" },
      { label: "Speed", value: "6 – 15 rpm" },
      { label: "Discharge", value: "Butterfly" },
    ],
    keyFeatures: [
      "Symmetric geometry for uniform, gentle blending",
      "Minimal shear preserves particle integrity",
      "Vacuum charging and discharge options",
      "Optional intensifier bar for lump breaking",
    ],
    techSpecs: [
      { k: "Working Capacity", v: "25 – 5000 L" },
      { k: "Fill Volume", v: "~ 60 % of gross" },
      { k: "Speed", v: "6 – 15 rpm (VFD)" },
      { k: "Discharge", v: "Butterfly / slide valve" },
      { k: "Contact Parts", v: "SS 316 / 316L" },
    ],
    models: {
      headers: ["Model", "Volume (L)", "Load (kg)"],
      rows: [
        ["DCB-50", "50", "20"],
        ["DCB-500", "500", "250"],
        ["DCB-2000", "2000", "1000"],
        ["DCB-5000", "5000", "2500"],
      ],
    },
    applications: ["Pharmaceutical", "Food", "Nutraceutical", "Chemical"],
  },
  {
    slug: "ribbon-blender",
    category: "blending",
    name: "Ribbon Blender",
    tag: "Horizontal Blending",
    hero: "machinery_2",
    gallery: ["machinery_3", "plant_1", "laboratory_2"],
    short: "Twin helical ribbon geometry for gentle yet thorough blending of dry powders and granules.",
    quickSpecs: [
      { label: "Capacity", value: "25 – 10 000 L" },
      { label: "Cycle", value: "5 – 15 min" },
      { label: "Discharge", value: "Flush bottom" },
      { label: "Finish", value: "Food-grade" },
    ],
    keyFeatures: [
      "Twin counter-current ribbons for rapid axial and radial blending",
      "Wide capacity envelope from trial batches to multi-tonne production",
      "Minimal segregation of components with differing densities",
      "Optional spray bar for controlled liquid addition",
    ],
    techSpecs: [
      { k: "Batch Capacity", v: "25 L – 10 000 L" },
      { k: "Drive", v: "Gearbox with VFD" },
      { k: "Discharge", v: "Flush bottom slide / butterfly" },
      { k: "Cycle Time", v: "5 – 15 minutes" },
      { k: "Contact Parts", v: "SS 304 / 316" },
    ],
    models: {
      headers: ["Model", "Volume (L)", "Motor (kW)"],
      rows: [
        ["RB-100", "100", "3"],
        ["RB-1000", "1000", "11"],
        ["RB-5000", "5000", "37"],
        ["RB-10 000", "10 000", "75"],
      ],
    },
    applications: ["Chemical", "Food", "Nutraceutical", "Cosmetics"],
  },
  {
    slug: "plough-shear-mixer",
    category: "blending",
    name: "Plough Shear Mixer",
    tag: "High-Intensity Mixing",
    hero: "machinery_2",
    gallery: ["machinery_1", "plant_1", "laboratory_2"],
    short: "Plough shear mixer for rapid, high-intensity mixing of powders with optional choppers for de-agglomeration.",
    quickSpecs: [
      { label: "Capacity", value: "50 – 8000 L" },
      { label: "Cycle", value: "2 – 8 min" },
      { label: "Choppers", value: "Optional side" },
      { label: "Jacket", value: "Heating / cooling" },
    ],
    keyFeatures: [
      "Plough-shaped shovels create a fluidised, three-dimensional mix",
      "Side-mounted high-speed choppers break agglomerates and disperse liquids",
      "Short cycle times for high throughput",
      "Jacketed drum for heating, cooling or vacuum operation",
      "Bomb-bay or flush discharge valve for complete emptying",
    ],
    techSpecs: [
      { k: "Working Capacity", v: "50 – 8000 L" },
      { k: "Main Drive", v: "3 – 90 kW" },
      { k: "Chopper", v: "1440 / 2880 rpm" },
      { k: "Cycle Time", v: "2 – 8 minutes" },
      { k: "Contact Parts", v: "SS 304 / 316L" },
    ],
    models: {
      headers: ["Model", "Volume (L)", "Motor (kW)"],
      rows: [
        ["PSM-100", "100", "3"],
        ["PSM-500", "500", "11"],
        ["PSM-2000", "2000", "30"],
        ["PSM-8000", "8000", "90"],
      ],
    },
    applications: ["Chemical", "Food", "Nutraceutical", "Detergents"],
  },

  // ---------- MATERIAL HANDLING ----------
  {
    slug: "elevator",
    category: "material-handling",
    name: "Elevator",
    tag: "Bin / Drum Elevator",
    hero: "plant_1",
    gallery: ["machinery_1", "machinery_3", "laboratory_2"],
    short: "Hydraulic elevator for lifting and docking IBCs, drums and bins onto process equipment at height.",
    quickSpecs: [
      { label: "Load", value: "100 – 1500 kg" },
      { label: "Lift", value: "Up to 4 m" },
      { label: "Drive", value: "Hydraulic" },
      { label: "Safety", value: "Interlocked cage" },
    ],
    keyFeatures: [
      "Hydraulic lift with proportional-valve control",
      "Custom cradles for IBCs, drums and bins",
      "Safety cage, light curtain and E-stop interlocks",
      "Floor-fixed or portable execution",
      "Through-floor and between-level variants available",
    ],
    techSpecs: [
      { k: "Load Capacity", v: "100 – 1500 kg" },
      { k: "Lift Height", v: "Up to 4 m" },
      { k: "Drive", v: "Hydraulic power pack" },
      { k: "Frame", v: "SS 304 / powder-coated" },
    ],
    models: {
      headers: ["Model", "Load (kg)", "Height (m)"],
      rows: [
        ["EL-300", "300", "2.4"],
        ["EL-800", "800", "3.0"],
        ["EL-1500", "1500", "4.0"],
      ],
    },
    applications: ["Solid dosage suites", "Chemical plants"],
  },
  {
    slug: "tipper",
    category: "material-handling",
    name: "Tipper",
    tag: "Post / Column Tipper",
    hero: "plant_1",
    gallery: ["machinery_1", "machinery_3", "laboratory_2"],
    short: "Column-type post tipper for discharging drums and IBCs into compression hoppers or blenders.",
    quickSpecs: [
      { label: "Load", value: "100 – 800 kg" },
      { label: "Lift", value: "Hydraulic" },
      { label: "Height", value: "Up to 3.5 m" },
      { label: "Cage", value: "Full guarding" },
    ],
    keyFeatures: [
      "Hydraulic lift and tip with proportional control",
      "Full safety cage and light curtain interlocks",
      "Custom cradle for drums, IBCs or bins",
      "Floor-fixed or portable variants",
    ],
    techSpecs: [
      { k: "Load Capacity", v: "100 – 800 kg" },
      { k: "Lift Height", v: "Up to 3.5 m" },
      { k: "Drive", v: "Hydraulic power pack" },
      { k: "Frame", v: "SS 304 / carbon epoxy" },
    ],
    models: {
      headers: ["Model", "Load (kg)", "Height (m)"],
      rows: [
        ["TIP-200", "200", "2.4"],
        ["TIP-500", "500", "3.0"],
        ["TIP-800", "800", "3.5"],
      ],
    },
    applications: ["Pharmaceutical", "Chemical", "Food"],
  },
  {
    slug: "power-transfer-system",
    category: "material-handling",
    name: "Power Transfer System",
    tag: "Powered Conveying & Transfer",
    hero: "plant_1",
    gallery: ["machinery_1", "machinery_2", "laboratory_2"],
    short: "Powered transfer system for closed, dust-free movement of powders and granules between suites and equipment.",
    quickSpecs: [
      { label: "Rate", value: "50 – 2000 kg/hr" },
      { label: "Distance", value: "Up to 30 m" },
      { label: "Filter", value: "Pulse-jet" },
      { label: "Mode", value: "Vacuum / pressure" },
    ],
    keyFeatures: [
      "Fully closed transfer between suites and equipment",
      "Pulse-jet filter with automatic cleaning",
      "Recipe-controlled batch or continuous mode",
      "OEB-rated executions for potent APIs",
    ],
    techSpecs: [
      { k: "Transfer Rate", v: "50 – 2000 kg / hr" },
      { k: "Distance", v: "Up to 30 m horizontal / 15 m vertical" },
      { k: "Filter", v: "Pulse-jet, FDA cartridge" },
    ],
    models: {
      headers: ["Model", "Rate (kg/hr)"],
      rows: [
        ["PTS-200", "200"],
        ["PTS-800", "800"],
        ["PTS-2000", "2000"],
      ],
    },
    applications: ["Pharmaceutical", "Chemical", "Food"],
  },
  {
    slug: "ibc",
    category: "material-handling",
    name: "IBC (Intermediate Bulk Container)",
    tag: "Storage & Transfer Container",
    hero: "laboratory_2",
    gallery: ["machinery_1", "plant_1", "machinery_3"],
    short: "Stainless-steel IBCs for closed storage, transfer and blending of intermediates and finished products.",
    quickSpecs: [
      { label: "Volume", value: "25 – 3000 L" },
      { label: "Cone", value: "60° / 70°" },
      { label: "Valve", value: "Butterfly / split" },
      { label: "Finish", value: "Mirror" },
    ],
    keyFeatures: [
      "Closed transfer between dispensary, granulation, blending and compression",
      "Choice of 60° / 70° cone angle for varied flow characteristics",
      "Compatible with split-butterfly and RTP valves for containment",
      "Blending-rated shells for use inside conta blenders",
      "Recessed lifting lugs and forklift channels",
    ],
    techSpecs: [
      { k: "Volume Range", v: "25 – 3000 L" },
      { k: "Cone Angle", v: "60° or 70°" },
      { k: "Contact Parts", v: "SS 316 / 316L" },
      { k: "Finish", v: "Ra ≤ 0.4 µm mirror" },
    ],
    models: {
      headers: ["Model", "Volume (L)", "Cone"],
      rows: [
        ["IBC-100", "100", "60°"],
        ["IBC-500", "500", "60°"],
        ["IBC-1500", "1500", "70°"],
        ["IBC-3000", "3000", "70°"],
      ],
    },
    applications: ["Pharmaceutical", "Nutraceutical", "Food"],
  },
  {
    slug: "pallet-weighing-truck",
    category: "material-handling",
    name: "Pallet Weighing Truck",
    tag: "Mobile Weighing",
    hero: "laboratory_2",
    gallery: ["machinery_2", "plant_1", "machinery_1"],
    short: "Pallet truck with integrated weighing for mobile, traceable dispensing and batch verification on the shop floor.",
    quickSpecs: [
      { label: "Capacity", value: "1500 / 2000 kg" },
      { label: "Accuracy", value: "± 0.1 %" },
      { label: "Display", value: "Digital + print" },
      { label: "Build", value: "SS / painted" },
    ],
    keyFeatures: [
      "Weigh while you move — eliminates separate floor-scale trips",
      "Stainless-steel load cells with IP67 protection",
      "Tare, accumulation and piece-count functions",
      "Printer and bar-code options for batch records",
      "ATEX-rated variant for solvent areas",
    ],
    techSpecs: [
      { k: "Capacity", v: "1500 / 2000 kg" },
      { k: "Accuracy", v: "± 0.1 % of applied load" },
      { k: "Fork Length", v: "1150 mm (std.)" },
      { k: "Power", v: "Rechargeable battery" },
    ],
    models: {
      headers: ["Model", "Capacity (kg)"],
      rows: [
        ["PWT-1500", "1500"],
        ["PWT-2000", "2000"],
      ],
    },
    applications: ["Pharmaceutical", "Nutraceutical", "Chemical"],
  },

  // ---------- CLEANING ----------
  {
    slug: "bin-wash-system",
    category: "cleaning",
    name: "Bin Wash System",
    tag: "Automatic Bin / IBC Washer",
    hero: "plant_1",
    gallery: ["machinery_1", "laboratory_2", "machinery_2"],
    short: "Automatic bin wash system for validated cleaning and drying of IBCs, bins, drums and process containers.",
    quickSpecs: [
      { label: "Chamber", value: "Up to 3000 L bins" },
      { label: "Cycle", value: "15 – 45 min" },
      { label: "Drying", value: "HEPA hot air" },
      { label: "Layout", value: "Pass-through" },
    ],
    keyFeatures: [
      "Rotating spray nozzles with 360° coverage of interior and exterior",
      "Validated wash recipes: pre-rinse, detergent, final rinse, dry",
      "Pass-through design maintains clean / dirty side separation",
      "Water recirculation and dosing for reduced utility consumption",
      "Full cycle documentation for cleaning validation",
    ],
    techSpecs: [
      { k: "Load Size", v: "IBCs / bins up to 3000 L" },
      { k: "Wash Pressure", v: "2 – 6 bar" },
      { k: "Drying", v: "HEPA-filtered hot air, 60 – 90 °C" },
      { k: "Control", v: "PLC + HMI, 21 CFR Part 11" },
      { k: "Contact Parts", v: "SS 316 / 316L" },
    ],
    models: {
      headers: ["Model", "Max Bin (L)", "Cycle (min)"],
      rows: [
        ["BWS-500", "500", "15 – 25"],
        ["BWS-1500", "1500", "20 – 35"],
        ["BWS-3000", "3000", "25 – 45"],
      ],
    },
    applications: ["Pharmaceutical", "Nutraceutical", "Food"],
  },
  {
    slug: "cip-wip-skid",
    category: "cleaning",
    name: "CIP / WIP Skid",
    tag: "Clean / Wash In Place",
    hero: "machinery_1",
    gallery: ["plant_1", "machinery_2", "laboratory_2"],
    short: "Skid-mounted CIP / WIP system delivering validated cleaning cycles to granulators, dryers, blenders and vessels.",
    quickSpecs: [
      { label: "Tanks", value: "1 – 3" },
      { label: "Flow", value: "5 – 30 m³/hr" },
      { label: "Heating", value: "Steam / electric" },
      { label: "Control", value: "PLC + HMI" },
    ],
    keyFeatures: [
      "Single, dual or three-tank execution for rinse, detergent and recovery",
      "Recipe-driven temperature, flow and conductivity control",
      "Spray-ball coverage validated by riboflavin testing",
      "Interfaces with HSMG, FBD, blenders and vessels on one utility loop",
      "Compact skid with full documentation package",
    ],
    techSpecs: [
      { k: "Tank Volume", v: "200 – 2000 L per tank" },
      { k: "Flow Rate", v: "5 – 30 m³ / hr" },
      { k: "Temperature", v: "Up to 85 °C" },
      { k: "Instrumentation", v: "Conductivity, flow, temperature" },
      { k: "Contact Parts", v: "SS 316 / 316L" },
    ],
    models: {
      headers: ["Model", "Tanks", "Flow (m³/hr)"],
      rows: [
        ["CIP-1", "1", "5 – 10"],
        ["CIP-2", "2", "10 – 20"],
        ["CIP-3", "3", "20 – 30"],
      ],
    },
    applications: ["Pharmaceutical", "Nutraceutical", "Food", "Chemical"],
  },
];

// Real equipment photography installed from customer ZIP (2026-10).
// Products not listed here keep the stock image keys above.
const REAL_PHOTOS = {
  "high-shear-mixer-granulator": 4,
  "high-shear-mixer-granulator-r2t": 4,
  "binder-preparation-vessel": 2,
  "fluid-bed-equipment": 5,
  "tray-dryer": 5,
  "roto-cone-vacuum-dryer": 4,
  "tap-cone-mill": 4,
  "under-driven-cone-mill": 2,
  "multi-mill": 3,
  "sifter-cum-multi-mill": 3,
  "oscillating-granulator": 5,
  "vibratory-sifter": 4,
  "delumper": 2,
  "v-blender": 5,
  "conta-blender": 5,
  "octagonal-blender": 4,
  "double-cone-blender": 5,
  "ribbon-blender": 4,
  "plough-shear-mixer": 4,
  "elevator": 4,
};

// Real PDF datasheets shipped in the customer ZIP
const DATASHEETS = {
  "high-shear-mixer-granulator": { href: "/products/high-shear-mixer-granulator/datasheet.pdf", size: "2.9 MB" },
  "high-shear-mixer-granulator-r2t": { href: "/products/high-shear-mixer-granulator-r2t/datasheet.pdf", size: "279 KB" },
  "binder-preparation-vessel": { href: "/products/binder-preparation-vessel/datasheet.pdf", size: "385 KB" },
  "oscillating-granulator": { href: "/products/oscillating-granulator/datasheet.pdf", size: "458 KB" },
};

const realImages = (slug, n) =>
  Array.from({ length: n }, (_, i) => `/products/${slug}/${i + 1}.jpg`);

// Build PRODUCT_DETAILS map by merging category defaults with per-product data.
export const PRODUCT_DETAILS = Object.fromEntries(
  RAW.map((p) => {
    const cat = CATEGORIES.find((c) => c.slug === p.category);
    const related = (cat?.products || [])
      .filter((rp) => rp.slug !== p.slug)
      .slice(0, 3);
    const realCount = REAL_PHOTOS[p.slug] || 0;
    const real = realCount ? realImages(p.slug, realCount) : null;
    const ds = DATASHEETS[p.slug];
    return [
      p.slug,
      {
        ...p,
        hero: real ? real[0] : p.hero,
        gallery: real ? real.slice(1) : p.gallery,
        categoryName: cat?.name || "",
        howItWorks: HOW_BY_CATEGORY[p.category] || HOW_GRANULATING,
        compliance: COMMON_COMPLIANCE,
        downloads: ds
          ? [{ label: "Product Datasheet", type: "PDF", size: ds.size, href: ds.href }, ...COMMON_DOWNLOADS.slice(1)]
          : COMMON_DOWNLOADS,
        integration: COMMON_INTEGRATION,
        customisation: COMMON_CUSTOMISATION,
        faq: COMMON_FAQ,
        related,
      },
    ];
  }),
);

// Slugs to skip in featured homepage grid (deduplication)
export const FEATURED_SLUGS = [
  "high-shear-mixer-granulator",
  "fluid-bed-equipment",
  "multi-mill",
  "ribbon-blender",
  "tap-cone-mill",
  "conta-blender",
  "double-cone-blender",
  "oscillating-granulator",
  "roto-cone-vacuum-dryer",
  "v-blender",
  "plough-shear-mixer",
  "bin-wash-system",
];
