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

const HOW_COATING = [
  { n: "01", title: "Charging", body: "Tablet cores are loaded into the coating pan via top port or automatic loader." },
  { n: "02", title: "Pre-Warming", body: "Cores are warmed with inlet air to reach the target product bed temperature." },
  { n: "03", title: "Spraying", body: "Peristaltic pumps meter the coating solution through spray guns while the pan rotates." },
  { n: "04", title: "Drying & Discharge", body: "Cores are polished and dried, then discharged via the reversible pan action." },
];

const HOW_MICRONISING = [
  { n: "01", title: "Feed", body: "Pre-milled powder is fed to the venturi at a controlled rate." },
  { n: "02", title: "Jet Impact", body: "Compressed air / nitrogen accelerates particles for high-energy collisions." },
  { n: "03", title: "Classification", body: "Fine particles exit via the classifier; coarse fraction returns to the grinding zone." },
  { n: "04", title: "Collection", body: "Micronised material is collected in a contained receiver bag or IBC." },
];

const HOW_PELLETISING = [
  { n: "01", title: "Wet Mass", body: "A wet extrudable mass is prepared in a high-shear granulator." },
  { n: "02", title: "Extrusion", body: "The mass is forced through a die at controlled pressure to form uniform strands." },
  { n: "03", title: "Spheronisation", body: "Strands are rounded on a friction plate to produce dense, spherical pellets." },
  { n: "04", title: "Drying / Coating", body: "Pellets are dried in an FBD and, when required, functionally coated." },
];

const HOW_BINS = [
  { n: "01", title: "Charging", body: "Material is loaded from dispensary via top valve or split-butterfly interface." },
  { n: "02", title: "Transport", body: "The container is moved between suites on AGVs, trolleys or through a lifter." },
  { n: "03", title: "Blending / Feeding", body: "Same container docks onto blenders or press hoppers without manual transfer." },
  { n: "04", title: "Cleaning", body: "Container is cleaned in a dedicated bin washer and returned to service." },
];

const HOW_SPECIAL = [
  { n: "01", title: "Loading", body: "Product is loaded via top port, hydraulic lift or direct docking depending on the module." },
  { n: "02", title: "Processing", body: "Motion or thermal profile is executed per recipe with continuous parameter logging." },
  { n: "03", title: "Verification", body: "In-line sensors monitor critical process parameters against defined proven acceptable ranges." },
  { n: "04", title: "Discharge", body: "Processed material is transferred to the next operation via closed transfer or IBC." },
];

// Category metadata used by the mega menu and page headings
export const CATEGORIES = [
  {
    slug: "granulating",
    name: "Granulating",
    tagline: "Wet & dry granulation systems",
    products: [
      { slug: "rapid-mixer-granulator", name: "Rapid Mixer Granulator" },
      { slug: "high-shear-mixer-granulator", name: "High Shear Mixer Granulator" },
      { slug: "rapid-granulator", name: "Rapid Granulator" },
      { slug: "oscillating-granulator", name: "Oscillating Granulator" },
      { slug: "saizoner", name: "Saizoner" },
    ],
  },
  {
    slug: "drying",
    name: "Drying",
    tagline: "Fluid bed, tray & vacuum dryers",
    products: [
      { slug: "fluid-bed-dryer", name: "Fluid Bed Dryer" },
      { slug: "tray-dryer", name: "Tray Dryer" },
      { slug: "vacuum-tray-dryer", name: "Vacuum Tray Dryer" },
    ],
  },
  {
    slug: "milling",
    name: "Milling / Size Reduction",
    tagline: "Impact, conical & oscillating mills",
    products: [
      { slug: "multi-mill", name: "Multi Mill" },
      { slug: "cone-mill", name: "Cone Mill" },
      { slug: "co-mill", name: "Co Mill" },
      { slug: "octagonal-mill", name: "Octagonal Mill" },
      { slug: "oscillating-granulator", name: "Oscillating Granulator" },
    ],
  },
  {
    slug: "blending",
    name: "Blending",
    tagline: "Tumble, ribbon & contained blenders",
    products: [
      { slug: "conta-blender", name: "Conta Blender" },
      { slug: "double-cone-blender", name: "Double Cone Blender" },
      { slug: "ribbon-blender", name: "Ribbon Blender" },
      { slug: "octagonal-blender", name: "Octagonal Blender" },
      { slug: "bin-blender", name: "Bin Blender" },
      { slug: "v-blender", name: "V Blender" },
    ],
  },
  {
    slug: "bins",
    name: "Bins & Material Handling",
    tagline: "IBCs, drums, tippers & weighing",
    products: [
      { slug: "circular-conical-ipc", name: "Circular Conical IPC" },
      { slug: "circular-drums", name: "Circular Drums" },
      { slug: "conta-bin", name: "Conta Bin / Blending IPC" },
      { slug: "tipper", name: "Tipper" },
      { slug: "pallet-weighing-system", name: "Pallet Weighing System" },
    ],
  },
  {
    slug: "pelletising",
    name: "Pelletising",
    tagline: "Extrusion, spheronisation & coating",
    products: [
      { slug: "pelletiser", name: "Pelletiser" },
      { slug: "pellet-coating-system", name: "Pellet Coating System" },
    ],
  },
  {
    slug: "coating",
    name: "Coating",
    tagline: "Tablet & pellet coating systems",
    products: [
      { slug: "tablet-coating-machine", name: "Tablet Coating Machine" },
      { slug: "perforated-coating-pan", name: "Perforated Coating Pan" },
      { slug: "coating-system", name: "Coating System" },
    ],
  },
  {
    slug: "micronising",
    name: "Micronising",
    tagline: "Air-jet & fine-particle systems",
    products: [
      { slug: "micronizer", name: "Micronizer" },
      { slug: "air-jet-mill", name: "Air Jet Mill" },
    ],
  },
  {
    slug: "special",
    name: "Special / Process Equipment",
    tagline: "Ancillary & transfer systems",
    products: [
      { slug: "planetary-mixer", name: "Planetary Mixer" },
      { slug: "octagonal-blender", name: "Octagonal Blender" },
      { slug: "vacuum-dryer", name: "Vacuum Dryer" },
      { slug: "lifter", name: "Lifter" },
      { slug: "material-transfer-systems", name: "Material Transfer Systems" },
    ],
  },
];

// Map category slug -> how-it-works template
const HOW_BY_CATEGORY = {
  granulating: HOW_GRANULATING,
  drying: HOW_DRYING,
  milling: HOW_MILLING,
  blending: HOW_BLENDING,
  bins: HOW_BINS,
  pelletising: HOW_PELLETISING,
  coating: HOW_COATING,
  micronising: HOW_MICRONISING,
  special: HOW_SPECIAL,
};

// Product-specific data. Category defaults are merged at export time.
const RAW = [
  // ---------- GRANULATING ----------
  {
    slug: "saizoner",
    category: "granulating",
    name: "Saizoner",
    tag: "High Shear Mixer Granulator · Flagship",
    hero: "machinery_1",
    gallery: ["machinery_2", "plant_1", "laboratory_1", "machinery_3"],
    short:
      "Flagship high-shear mixer granulator — the Tapasya Saizoner is deployed by leading Indian and global pharmaceutical manufacturers for reproducible wet granulation.",
    quickSpecs: [
      { label: "Bowl Volume", value: "10 – 1200 L" },
      { label: "Impeller Drive", value: "Dual speed / VFD" },
      { label: "Chopper", value: "Independent motor" },
      { label: "Compliance", value: "cGMP · 21 CFR" },
    ],
    keyFeatures: [
      "Proven Saizoner mixing geometry for narrow granule-size distribution",
      "Bottom-drive, single-piece impeller with cGMP polished seal housing",
      "Independent side-mounted chopper for controlled lump breaking",
      "Load cells and torque monitoring for objective endpoint detection",
      "Pneumatic bottom / side discharge with SIP-capable valves",
      "Integrated wash-in-place (WIP) with spray balls and recipe control",
    ],
    techSpecs: [
      { k: "Bowl Volume Range", v: "10 L – 1200 L" },
      { k: "Working Volume", v: "30 – 70 % of bowl volume" },
      { k: "Impeller Speed", v: "50 – 300 rpm (VFD)" },
      { k: "Chopper Speed", v: "1500 / 3000 rpm" },
      { k: "Motor Rating (Impeller)", v: "3 kW – 75 kW" },
      { k: "Motor Rating (Chopper)", v: "1.1 kW – 11 kW" },
      { k: "Utilities", v: "Compressed air, chilled water, power" },
      { k: "Contact Parts", v: "SS 316 / 316L, Ra ≤ 0.4 µm" },
      { k: "Non-Contact Parts", v: "SS 304, Ra ≤ 0.8 µm" },
      { k: "Control System", v: "Siemens / Allen-Bradley PLC + HMI" },
    ],
    models: {
      headers: ["Model", "Bowl (L)", "Working (kg)", "Impeller (kW)", "Chopper (kW)"],
      rows: [
        ["SZ-25", "25", "5 – 15", "3", "1.1"],
        ["SZ-150", "150", "30 – 90", "11", "3"],
        ["SZ-400", "400", "80 – 240", "22", "5.5"],
        ["SZ-800", "800", "160 – 480", "45", "7.5"],
        ["SZ-1200", "1200", "240 – 720", "75", "11"],
      ],
    },
    applications: ["Pharmaceutical solid dosage", "Nutraceutical", "Fine chemicals", "Food premixes"],
  },
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
    slug: "rapid-mixer-granulator",
    category: "granulating",
    name: "Rapid Mixer Granulator",
    tag: "RMG · Wet Granulation",
    hero: "laboratory_1",
    gallery: ["machinery_2", "machinery_1", "plant_1"],
    short: "Compact RMG for wet mixing and granulation across R&D, pilot and mid-scale batches.",
    quickSpecs: [
      { label: "Bowl Volume", value: "5 – 800 L" },
      { label: "Impeller", value: "Dual speed / VFD" },
      { label: "Chopper", value: "Independent" },
      { label: "Cycle", value: "5 – 15 min" },
    ],
    keyFeatures: [
      "Rapid dry mix and wet granulation in a single vessel",
      "Independent impeller and chopper drives",
      "Sanitary bottom-drive with mechanical seal",
      "Sight glass with light and spray-nozzle mount",
      "Integrated recipe control and batch reporting",
    ],
    techSpecs: [
      { k: "Bowl Volume", v: "5 L – 800 L" },
      { k: "Impeller Speed", v: "70 – 300 rpm" },
      { k: "Chopper Speed", v: "1500 / 3000 rpm" },
      { k: "Motor (Impeller)", v: "1.5 – 45 kW" },
      { k: "Discharge", v: "Side pneumatic port" },
      { k: "Contact Parts", v: "SS 316 / 316L" },
    ],
    models: {
      headers: ["Model", "Bowl (L)", "Impeller (kW)", "Chopper (kW)"],
      rows: [
        ["RMG-25", "25", "3", "1.1"],
        ["RMG-100", "100", "7.5", "2.2"],
        ["RMG-250", "250", "15", "3.7"],
        ["RMG-600", "600", "37", "5.5"],
      ],
    },
    applications: ["Pharmaceutical", "Nutraceutical", "Food"],
  },
  {
    slug: "rapid-granulator",
    category: "granulating",
    name: "Rapid Granulator",
    tag: "Rapid Wet Granulator",
    hero: "laboratory_1",
    gallery: ["machinery_1", "machinery_2", "plant_1"],
    short: "Compact rapid granulator engineered for rapid endpoint control and short batch cycles.",
    quickSpecs: [
      { label: "Bowl Volume", value: "5 – 600 L" },
      { label: "Cycle Time", value: "6 – 12 min" },
      { label: "Impeller", value: "Two-speed" },
      { label: "Discharge", value: "Side port" },
    ],
    keyFeatures: [
      "Short cycle time for high batch throughput",
      "Reproducible endpoint via torque monitoring",
      "Interlocked safety hood with pneumatic assist",
      "Rotating spray ball for CIP",
      "Optional load cells and NIR probe",
    ],
    techSpecs: [
      { k: "Bowl Volume", v: "5 L – 600 L" },
      { k: "Motor (Impeller)", v: "1.5 – 37 kW" },
      { k: "Motor (Chopper)", v: "1.1 – 5.5 kW" },
      { k: "Contact Parts", v: "SS 316 / 316L" },
      { k: "Control", v: "PLC + HMI" },
    ],
    models: {
      headers: ["Model", "Bowl (L)", "Impeller (kW)"],
      rows: [
        ["RG-10", "10", "2.2"],
        ["RG-100", "100", "7.5"],
        ["RG-300", "300", "18.5"],
        ["RG-600", "600", "37"],
      ],
    },
    applications: ["Pharmaceutical", "Nutraceutical"],
  },
  {
    slug: "oscillating-granulator",
    category: "granulating",
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

  // ---------- DRYING ----------
  {
    slug: "fluid-bed-dryer",
    category: "drying",
    name: "Fluid Bed Dryer",
    tag: "FBD Series",
    hero: "plant_1",
    gallery: ["machinery_1", "laboratory_1", "machinery_3"],
    short: "Fluid bed dryer for precise moisture control on pharma and nutraceutical granules from lab to commercial scale.",
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
      "Optional in-line LOD / NIR probes",
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
        ["FBD-30", "5 – 30", "1 200", "24"],
        ["FBD-120", "30 – 120", "3 500", "60"],
        ["FBD-250", "80 – 250", "7 000", "120"],
        ["FBD-500", "150 – 500", "12 000", "180"],
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
    slug: "vacuum-tray-dryer",
    category: "drying",
    name: "Vacuum Tray Dryer",
    tag: "Low-Temperature Drying",
    hero: "plant_1",
    gallery: ["laboratory_2", "machinery_2", "machinery_1"],
    short: "Vacuum tray dryer for heat-sensitive APIs, intermediates and hygroscopic materials.",
    quickSpecs: [
      { label: "Trays", value: "6 – 96" },
      { label: "Vacuum", value: "Up to 700 mmHg" },
      { label: "Temp", value: "40 – 90 °C" },
      { label: "Heating", value: "Hollow shelves" },
    ],
    keyFeatures: [
      "Low-temperature drying preserves potency of heat-sensitive materials",
      "Hollow heated shelves with uniform heat transfer",
      "Positive door seal with silicone / EPDM gasket",
      "Solvent recovery ready with condenser and receiver",
      "Nitrogen bleed for inert-atmosphere drying",
    ],
    techSpecs: [
      { k: "Chamber Volume", v: "0.15 – 4 m³" },
      { k: "Tray Count", v: "6 – 96" },
      { k: "Vacuum", v: "Up to 700 mmHg" },
      { k: "Shelf Temp", v: "40 – 90 °C" },
      { k: "Contact Parts", v: "SS 316 / 316L" },
    ],
    models: {
      headers: ["Model", "Trays", "Vacuum (mmHg)"],
      rows: [
        ["VTD-6", "6", "700"],
        ["VTD-24", "24", "700"],
        ["VTD-48", "48", "700"],
        ["VTD-96", "96", "700"],
      ],
    },
    applications: ["API drying", "Heat-sensitive intermediates", "Fine chemicals"],
  },

  // ---------- MILLING ----------
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
    slug: "cone-mill",
    category: "milling",
    name: "Cone Mill",
    tag: "Conical Screen Mill",
    hero: "machinery_3",
    gallery: ["machinery_1", "machinery_2", "laboratory_1"],
    short: "Conical screen mill for low-heat, low-dust size reduction and inline de-lumping.",
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
        ["CM-3", "3", "50 – 150"],
        ["CM-7.5", "7.5", "200 – 500"],
        ["CM-15", "15", "500 – 1000"],
      ],
    },
    applications: ["Pharmaceutical", "Nutraceutical", "Food", "Chemical"],
  },
  {
    slug: "co-mill",
    category: "milling",
    name: "Co Mill",
    tag: "In-line Conical Mill",
    hero: "machinery_3",
    gallery: ["machinery_2", "plant_1", "laboratory_1"],
    short: "Compact in-line co-mill for continuous de-lumping and screening between granulation and blending.",
    quickSpecs: [
      { label: "Screen", value: "0.3 – 10 mm" },
      { label: "Speed", value: "1000 – 3000 rpm" },
      { label: "Layout", value: "Vertical in-line" },
      { label: "Contact", value: "SS 316" },
    ],
    keyFeatures: [
      "Compact vertical layout for direct docking under FBD or IBC",
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
        ["Co-M 100", "2.2", "100 – 300"],
        ["Co-M 300", "5.5", "300 – 700"],
        ["Co-M 600", "11", "600 – 1200"],
      ],
    },
    applications: ["Pharmaceutical solid dosage", "Nutraceutical"],
  },
  {
    slug: "octagonal-mill",
    category: "milling",
    name: "Octagonal Mill",
    tag: "Octagonal Screen Mill",
    hero: "machinery_3",
    gallery: ["machinery_1", "laboratory_2", "machinery_2"],
    short: "Octagonal chamber screen mill for gentle sizing of dry granules with minimal dust generation.",
    quickSpecs: [
      { label: "Screen", value: "0.5 – 12 mm" },
      { label: "Chamber", value: "Octagonal" },
      { label: "Motor", value: "2 – 7.5 HP" },
      { label: "Output", value: "50 – 400 kg/hr" },
    ],
    keyFeatures: [
      "Octagonal geometry improves screen coverage",
      "Uniform product residence time",
      "Low dust generation with optional dust extraction",
      "Portable frame for line reuse",
    ],
    techSpecs: [
      { k: "Screen Range", v: "0.5 – 12 mm" },
      { k: "Motor", v: "1.5 – 5.5 kW" },
      { k: "Output", v: "50 – 400 kg / hr" },
      { k: "Contact Parts", v: "SS 316" },
    ],
    models: {
      headers: ["Model", "Motor (HP)", "Output (kg/hr)"],
      rows: [
        ["OM-2", "2", "50 – 120"],
        ["OM-5", "5", "150 – 300"],
        ["OM-7.5", "7.5", "300 – 400"],
      ],
    },
    applications: ["Pharmaceutical", "Nutraceutical", "Food"],
  },

  // ---------- BLENDING ----------
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
    slug: "bin-blender",
    category: "blending",
    name: "Bin Blender",
    tag: "IBC Blending",
    hero: "laboratory_2",
    gallery: ["machinery_2", "plant_1", "machinery_1"],
    short: "IBC blender for contained, cross-contamination-free blending on modern pharma solid dosage lines.",
    quickSpecs: [
      { label: "Bin", value: "50 – 2000 L" },
      { label: "Tumble", value: "2 – 20 rpm" },
      { label: "Load", value: "Auto clamp + lift" },
      { label: "Control", value: "PLC + HMI" },
    ],
    keyFeatures: [
      "Fully contained blending inside sealed IBCs",
      "Faster changeover and elimination of manual transfer",
      "Compatible with multiple bin sizes from a single frame",
      "PLC recipe control with tumble-count logic",
      "Split-butterfly and RTP interfaces available",
    ],
    techSpecs: [
      { k: "Bin Sizes", v: "50 – 2000 L" },
      { k: "Tumble Speed", v: "2 – 20 rpm (VFD)" },
      { k: "Loading", v: "Auto clamping and hydraulic lift" },
      { k: "Control", v: "PLC + HMI, recipe based" },
    ],
    models: {
      headers: ["Model", "Max Bin (L)", "Motor (kW)"],
      rows: [
        ["BB-500", "500", "3"],
        ["BB-1000", "1000", "5.5"],
        ["BB-2000", "2000", "11"],
      ],
    },
    applications: ["Pharmaceutical", "Nutraceutical"],
  },
  {
    slug: "v-blender",
    category: "blending",
    name: "V Blender",
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

  // ---------- BINS & MATERIAL HANDLING ----------
  {
    slug: "circular-conical-ipc",
    category: "bins",
    name: "Circular Conical IPC",
    tag: "Intermediate Product Container",
    hero: "laboratory_2",
    gallery: ["machinery_1", "plant_1", "machinery_2"],
    short: "Circular conical IPC for closed transfer of intermediates and finished blends between suites.",
    quickSpecs: [
      { label: "Volume", value: "50 – 3000 L" },
      { label: "Discharge", value: "Butterfly / RTP" },
      { label: "Cone", value: "60° / 70°" },
      { label: "Finish", value: "Mirror" },
    ],
    keyFeatures: [
      "Closed transfer between dispensary, granulation, blending and compression",
      "Choice of 60° / 70° cone angle for varied flow characteristics",
      "Compatible with split-butterfly and RTP valves for containment",
      "Recessed lifting lugs and forklift channels",
    ],
    techSpecs: [
      { k: "Volume Range", v: "50 – 3000 L" },
      { k: "Cone Angle", v: "60° or 70°" },
      { k: "Contact Parts", v: "SS 316 / 316L" },
      { k: "Finish", v: "Ra ≤ 0.4 µm mirror" },
    ],
    models: {
      headers: ["Model", "Volume (L)", "Cone"],
      rows: [
        ["CI-100", "100", "60°"],
        ["CI-500", "500", "60°"],
        ["CI-1500", "1500", "70°"],
      ],
    },
    applications: ["Pharmaceutical", "Nutraceutical"],
  },
  {
    slug: "circular-drums",
    category: "bins",
    name: "Circular Drums",
    tag: "Storage & Transfer Drums",
    hero: "laboratory_2",
    gallery: ["plant_1", "machinery_3", "machinery_1"],
    short: "Sanitary circular drums for staging intermediates, WIP and finished products.",
    quickSpecs: [
      { label: "Volume", value: "20 – 400 L" },
      { label: "Lid", value: "Clamp / bolted" },
      { label: "Finish", value: "Ra ≤ 0.6 µm" },
      { label: "Handling", value: "Trolley / lift" },
    ],
    keyFeatures: [
      "Sanitary construction with electropolished interior",
      "Removable lid with silicone / EPDM gasket",
      "Rolling trolley or lifter-compatible design",
      "Optional bar-code labelling and RFID for traceability",
    ],
    techSpecs: [
      { k: "Volume", v: "20 – 400 L" },
      { k: "Contact Parts", v: "SS 316 / 316L" },
      { k: "Finish", v: "Ra ≤ 0.6 µm" },
    ],
    models: {
      headers: ["Model", "Volume (L)"],
      rows: [
        ["CD-50", "50"],
        ["CD-100", "100"],
        ["CD-200", "200"],
        ["CD-400", "400"],
      ],
    },
    applications: ["Pharmaceutical", "Nutraceutical", "Food"],
  },
  {
    slug: "conta-bin",
    category: "bins",
    name: "Conta Bin / Blending IPC",
    tag: "Blending Container",
    hero: "laboratory_2",
    gallery: ["machinery_1", "plant_1", "machinery_3"],
    short: "Blending IPC designed to be tumbled inside a conta blender for fully contained single-pot blending.",
    quickSpecs: [
      { label: "Volume", value: "25 – 3000 L" },
      { label: "Design", value: "Blend + transfer" },
      { label: "Valve", value: "Split-butterfly" },
      { label: "Docking", value: "Automatic" },
    ],
    keyFeatures: [
      "Dual-purpose blending and transfer container",
      "Reinforced walls for tumble load with automatic docking",
      "Split-butterfly interface for OEB-rated transfer",
      "Bar-coded ID for MES traceability",
    ],
    techSpecs: [
      { k: "Volume", v: "25 – 3000 L" },
      { k: "Contact Parts", v: "SS 316 / 316L" },
      { k: "Valve Interface", v: "Split-butterfly / RTP" },
    ],
    models: {
      headers: ["Model", "Volume (L)"],
      rows: [
        ["CBIN-100", "100"],
        ["CBIN-500", "500"],
        ["CBIN-1500", "1500"],
        ["CBIN-3000", "3000"],
      ],
    },
    applications: ["Pharmaceutical", "Nutraceutical"],
  },
  {
    slug: "tipper",
    category: "bins",
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
    slug: "pallet-weighing-system",
    category: "bins",
    name: "Pallet Weighing System",
    tag: "Weighing & Traceability",
    hero: "laboratory_2",
    gallery: ["machinery_2", "plant_1", "machinery_1"],
    short: "Pallet-scale weighing system with recipe dispensing and batch record integration.",
    quickSpecs: [
      { label: "Capacity", value: "500 / 1500 / 3000 kg" },
      { label: "Accuracy", value: "± 0.1 %" },
      { label: "Interface", value: "OPC-UA / Modbus" },
      { label: "Display", value: "HMI + printer" },
    ],
    keyFeatures: [
      "Stainless-steel load cells with IP68 rating",
      "Recipe-driven dispensing with tolerance checking",
      "Bar-code / RFID material verification",
      "OPC-UA link to MES for e-batch records",
    ],
    techSpecs: [
      { k: "Capacity", v: "500 / 1500 / 3000 kg" },
      { k: "Accuracy", v: "± 0.1 %" },
      { k: "Load Cells", v: "SS, IP68" },
      { k: "Compliance", v: "21 CFR Part 11 ready" },
    ],
    models: {
      headers: ["Model", "Capacity (kg)"],
      rows: [
        ["PWS-500", "500"],
        ["PWS-1500", "1500"],
        ["PWS-3000", "3000"],
      ],
    },
    applications: ["Pharmaceutical", "Nutraceutical", "Chemical"],
  },

  // ---------- PELLETISING ----------
  {
    slug: "pelletiser",
    category: "pelletising",
    name: "Pelletiser",
    tag: "Extrusion + Spheronisation",
    hero: "machinery_1",
    gallery: ["machinery_2", "laboratory_1", "plant_1"],
    short: "Extrusion-spheronisation pelletiser producing dense, uniform pellets for modified-release dosage forms.",
    quickSpecs: [
      { label: "Batch", value: "0.5 – 25 kg" },
      { label: "Extruder", value: "Axial / radial" },
      { label: "Spheroniser", value: "250 – 700 mm" },
      { label: "Yield", value: "> 90 % on-size" },
    ],
    keyFeatures: [
      "Axial or radial extruder for varied product rheology",
      "Cross-hatched or waffle friction plate on the spheroniser",
      "Variable-speed drives for fine process control",
      "Integrated FBD interface for post-drying",
    ],
    techSpecs: [
      { k: "Batch Size", v: "0.5 – 25 kg" },
      { k: "Extruder", v: "Axial or radial screen" },
      { k: "Spheroniser Diameter", v: "250 – 700 mm" },
      { k: "Contact Parts", v: "SS 316" },
    ],
    models: {
      headers: ["Model", "Spheroniser (mm)", "Batch (kg)"],
      rows: [
        ["PZ-250", "250", "0.5 – 3"],
        ["PZ-400", "400", "3 – 10"],
        ["PZ-700", "700", "10 – 25"],
      ],
    },
    applications: ["Modified release APIs", "Nutraceutical"],
  },
  {
    slug: "pellet-coating-system",
    category: "pelletising",
    name: "Pellet Coating System",
    tag: "Wurster / Rotor Coating",
    hero: "plant_1",
    gallery: ["machinery_1", "laboratory_1", "machinery_3"],
    short: "Wurster / rotor pellet-coating system for functional and enteric coatings on drug-loaded pellets.",
    quickSpecs: [
      { label: "Batch", value: "1 – 100 kg" },
      { label: "Wurster", value: "Bottom-spray" },
      { label: "Rotor", value: "Tangential" },
      { label: "Nozzles", value: "1 / 3 / 6" },
    ],
    keyFeatures: [
      "Wurster bottom-spray for uniform functional coatings",
      "Optional rotor insert for high-density coatings",
      "Pulse-jet filter with mechanical shaker",
      "Recipe-driven spray rate, air flow and inlet temp",
    ],
    techSpecs: [
      { k: "Batch", v: "1 – 100 kg" },
      { k: "Spray Nozzles", v: "1 / 3 / 6 configuration" },
      { k: "Inlet Air Temp", v: "40 – 85 °C" },
      { k: "Contact Parts", v: "SS 316 / 316L" },
    ],
    models: {
      headers: ["Model", "Batch (kg)", "Nozzles"],
      rows: [
        ["PC-5", "1 – 5", "1"],
        ["PC-30", "5 – 30", "3"],
        ["PC-100", "30 – 100", "6"],
      ],
    },
    applications: ["Enteric coating", "Sustained release", "Taste masking"],
  },

  // ---------- COATING ----------
  {
    slug: "tablet-coating-machine",
    category: "coating",
    name: "Tablet Coating Machine",
    tag: "Perforated Auto-Coater",
    hero: "laboratory_2",
    gallery: ["machinery_1", "plant_1", "machinery_3"],
    short: "Fully automatic perforated-pan tablet coater for aqueous, functional and enteric coatings.",
    quickSpecs: [
      { label: "Batch", value: "5 – 400 kg" },
      { label: "Guns", value: "3 – 8" },
      { label: "Air", value: "Recirculating" },
      { label: "Control", value: "PLC + HMI" },
    ],
    keyFeatures: [
      "Fully perforated pan with baffled tablet bed movement",
      "Peristaltic pumps with anti-bearding spray guns",
      "Recipe control with automated pre-heating and drying",
      "CIP-compatible with rotating spray balls",
    ],
    techSpecs: [
      { k: "Batch", v: "5 – 400 kg" },
      { k: "Spray Guns", v: "3 – 8" },
      { k: "Air Flow", v: "1 000 – 6 000 m³ / hr" },
      { k: "Contact Parts", v: "SS 316 / 316L" },
    ],
    models: {
      headers: ["Model", "Batch (kg)", "Guns"],
      rows: [
        ["TC-25", "5 – 25", "3"],
        ["TC-150", "50 – 150", "5"],
        ["TC-400", "200 – 400", "8"],
      ],
    },
    applications: ["Film coating", "Enteric coating", "Sugar coating"],
  },
  {
    slug: "perforated-coating-pan",
    category: "coating",
    name: "Perforated Coating Pan",
    tag: "Pan Assembly",
    hero: "laboratory_2",
    gallery: ["machinery_1", "machinery_3", "plant_1"],
    short: "Retro-fittable perforated coating pan assembly to upgrade legacy coating suites.",
    quickSpecs: [
      { label: "Pan", value: "600 – 1500 mm" },
      { label: "Baffles", value: "Removable" },
      { label: "Perforation", value: "3 / 4 mm" },
      { label: "Finish", value: "Ra ≤ 0.4 µm" },
    ],
    keyFeatures: [
      "Removable baffles for optimised bed motion",
      "Interchangeable perforation sheet for varied product size",
      "Sanitary tri-clamp connections for air plenum",
      "Compatible with major legacy coating suite drives",
    ],
    techSpecs: [
      { k: "Pan Diameter", v: "600 – 1500 mm" },
      { k: "Perforation", v: "3 / 4 mm" },
      { k: "Contact Parts", v: "SS 316" },
    ],
    models: {
      headers: ["Model", "Diameter (mm)"],
      rows: [
        ["PCP-600", "600"],
        ["PCP-1000", "1000"],
        ["PCP-1500", "1500"],
      ],
    },
    applications: ["Coating suite retrofit", "R&D pilot"],
  },
  {
    slug: "coating-system",
    category: "coating",
    name: "Coating System",
    tag: "Complete Coating Solution",
    hero: "plant_1",
    gallery: ["machinery_1", "laboratory_2", "machinery_2"],
    short: "Integrated coating suite covering pan, air handling, solution prep and automation.",
    quickSpecs: [
      { label: "Scope", value: "AHU + pan + prep" },
      { label: "Control", value: "Integrated PLC" },
      { label: "Batch", value: "Custom" },
      { label: "Docs", value: "URS to PQ" },
    ],
    keyFeatures: [
      "Turnkey scope covering coating pan, AHU, solution prep and automation",
      "Common PLC / SCADA layer for coordinated control",
      "Modular execution allows staged expansion",
      "Documentation to URS / DQ / IQ / OQ / PQ",
    ],
    techSpecs: [
      { k: "Scope", v: "Pan + AHU + solution prep + automation" },
      { k: "Control", v: "Integrated PLC + HMI" },
      { k: "Contact Parts", v: "SS 316 / 316L" },
    ],
    models: {
      headers: ["Model", "Batch (kg)"],
      rows: [
        ["CS-Compact", "10 – 60"],
        ["CS-Standard", "50 – 200"],
        ["CS-Plant", "200 – 500"],
      ],
    },
    applications: ["Solid dosage lines", "Contract manufacturing"],
  },

  // ---------- MICRONISING ----------
  {
    slug: "micronizer",
    category: "micronising",
    name: "Micronizer",
    tag: "Fluid-Energy Mill",
    hero: "machinery_2",
    gallery: ["laboratory_1", "machinery_1", "machinery_3"],
    short: "Fluid-energy micronizer producing sub-10 micron particle size for advanced formulations.",
    quickSpecs: [
      { label: "PSD", value: "1 – 10 µm" },
      { label: "Output", value: "0.5 – 100 kg/hr" },
      { label: "Gas", value: "Compressed air / N₂" },
      { label: "Contact", value: "SS 316 / ceramic" },
    ],
    keyFeatures: [
      "No moving parts in the grinding zone reduces contamination risk",
      "Compressed air or nitrogen for inert-atmosphere operation",
      "Integrated classifier for tight particle-size distribution",
      "Fully contained execution with OEB-rated receivers",
    ],
    techSpecs: [
      { k: "Particle Size", v: "1 – 10 µm" },
      { k: "Output", v: "0.5 – 100 kg / hr" },
      { k: "Contact Parts", v: "SS 316 / ceramic liner" },
    ],
    models: {
      headers: ["Model", "Output (kg/hr)"],
      rows: [
        ["MZ-1", "0.5 – 3"],
        ["MZ-5", "5 – 20"],
        ["MZ-20", "20 – 100"],
      ],
    },
    applications: ["Inhalation APIs", "Fine chemical", "Cosmetic pigments"],
  },
  {
    slug: "air-jet-mill",
    category: "micronising",
    name: "Air Jet Mill",
    tag: "Spiral Jet Mill",
    hero: "machinery_2",
    gallery: ["laboratory_1", "machinery_3", "plant_1"],
    short: "Spiral air-jet mill for narrow-distribution micronisation of heat-sensitive actives.",
    quickSpecs: [
      { label: "PSD", value: "0.5 – 20 µm" },
      { label: "Chamber", value: "100 – 500 mm" },
      { label: "Feed", value: "Venturi" },
      { label: "Inert", value: "N₂ ready" },
    ],
    keyFeatures: [
      "Spiral jet chamber with tangential nozzles",
      "Ambient-temperature grinding preserves actives",
      "Integrated cyclone and bag filter",
      "Inert-loop operation with nitrogen recovery",
    ],
    techSpecs: [
      { k: "Chamber Diameter", v: "100 – 500 mm" },
      { k: "Compressed Gas", v: "Air or N₂, 6 – 10 bar" },
      { k: "Output", v: "0.2 – 50 kg / hr" },
    ],
    models: {
      headers: ["Model", "Chamber (mm)", "Output (kg/hr)"],
      rows: [
        ["AJM-100", "100", "0.2 – 2"],
        ["AJM-200", "200", "2 – 12"],
        ["AJM-500", "500", "12 – 50"],
      ],
    },
    applications: ["Inhalation formulations", "APIs", "Fine chemicals"],
  },

  // ---------- SPECIAL / PROCESS EQUIPMENT ----------
  {
    slug: "planetary-mixer",
    category: "special",
    name: "Planetary Mixer",
    tag: "Semi-Solid Mixing",
    hero: "laboratory_1",
    gallery: ["machinery_1", "machinery_2", "laboratory_2"],
    short: "Planetary motion mixer for high-viscosity pastes, ointments and semi-solids.",
    quickSpecs: [
      { label: "Capacity", value: "5 – 500 L" },
      { label: "Motion", value: "Planetary + rotational" },
      { label: "Beaters", value: "Whisk / hook / paddle" },
      { label: "Options", value: "Jacket · vacuum" },
    ],
    keyFeatures: [
      "Planetary motion for zero-dead-zone mixing",
      "Interchangeable beaters for varied viscosities",
      "Jacketed bowl option for heating / cooling",
      "Vacuum de-aeration and hydraulic bowl lift options",
    ],
    techSpecs: [
      { k: "Bowl Capacity", v: "5 – 500 L" },
      { k: "Speed", v: "Variable VFD" },
      { k: "Contact Parts", v: "SS 316 / 316L" },
    ],
    models: {
      headers: ["Model", "Bowl (L)", "Motor (kW)"],
      rows: [
        ["PM-25", "25", "2.2"],
        ["PM-100", "100", "5.5"],
        ["PM-500", "500", "22"],
      ],
    },
    applications: ["Pharmaceutical", "Cosmetics", "Food"],
  },
  {
    slug: "vacuum-dryer",
    category: "special",
    name: "Vacuum Dryer",
    tag: "Rotary / Conical Vacuum Dryer",
    hero: "plant_1",
    gallery: ["laboratory_2", "machinery_2", "machinery_1"],
    short: "Rotary or conical vacuum dryer for gentle drying of heat-sensitive APIs and solvents recovery.",
    quickSpecs: [
      { label: "Volume", value: "50 – 4000 L" },
      { label: "Vacuum", value: "Up to 720 mmHg" },
      { label: "Temp", value: "40 – 90 °C" },
      { label: "Recovery", value: "Solvent condenser" },
    ],
    keyFeatures: [
      "Low-temperature drying with vacuum-assisted evaporation",
      "Integrated solvent condenser and receiver",
      "Rotary agitator ensures continuous heat transfer",
      "Nitrogen bleed for inert-atmosphere drying",
    ],
    techSpecs: [
      { k: "Volume", v: "50 – 4000 L" },
      { k: "Vacuum", v: "Up to 720 mmHg" },
      { k: "Jacket", v: "Hot water / oil / steam" },
      { k: "Contact Parts", v: "SS 316 / 316L" },
    ],
    models: {
      headers: ["Model", "Volume (L)"],
      rows: [
        ["VD-100", "100"],
        ["VD-1000", "1000"],
        ["VD-4000", "4000"],
      ],
    },
    applications: ["API drying", "Solvent recovery", "Fine chemical"],
  },
  {
    slug: "lifter",
    category: "special",
    name: "Lifter",
    tag: "Column / Post Lifter",
    hero: "plant_1",
    gallery: ["machinery_1", "machinery_3", "laboratory_2"],
    short: "Hydraulic column lifter for docking IBCs, drums and bins onto process equipment.",
    quickSpecs: [
      { label: "Load", value: "100 – 1500 kg" },
      { label: "Lift", value: "Up to 4 m" },
      { label: "Drive", value: "Hydraulic" },
      { label: "Safety", value: "Interlocked cage" },
    ],
    keyFeatures: [
      "Hydraulic lift with proportional-valve control",
      "Custom cradles for various containers",
      "Safety cage, light curtain and E-stop interlocks",
      "Floor-fixed or portable execution",
    ],
    techSpecs: [
      { k: "Load Capacity", v: "100 – 1500 kg" },
      { k: "Lift Height", v: "Up to 4 m" },
      { k: "Frame", v: "SS 304 / powder-coated" },
    ],
    models: {
      headers: ["Model", "Load (kg)", "Height (m)"],
      rows: [
        ["LF-300", "300", "2.4"],
        ["LF-800", "800", "3.0"],
        ["LF-1500", "1500", "4.0"],
      ],
    },
    applications: ["Solid dosage suites", "Chemical plants"],
  },
  {
    slug: "material-transfer-systems",
    category: "special",
    name: "Material Transfer Systems",
    tag: "Pneumatic / Vacuum Transfer",
    hero: "plant_1",
    gallery: ["machinery_1", "machinery_2", "laboratory_2"],
    short: "Vacuum and pneumatic material transfer systems for closed, dust-free movement of powders and granules.",
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
        ["MTS-200", "200"],
        ["MTS-800", "800"],
        ["MTS-2000", "2000"],
      ],
    },
    applications: ["Pharmaceutical", "Chemical", "Food"],
  },
];

// Build PRODUCT_DETAILS map by merging category defaults with per-product data.
export const PRODUCT_DETAILS = Object.fromEntries(
  RAW.map((p) => {
    const cat = CATEGORIES.find((c) => c.slug === p.category);
    const related = (cat?.products || [])
      .filter((rp) => rp.slug !== p.slug)
      .slice(0, 3);
    return [
      p.slug,
      {
        ...p,
        categoryName: cat?.name || "",
        howItWorks: HOW_BY_CATEGORY[p.category] || HOW_GRANULATING,
        compliance: COMMON_COMPLIANCE,
        downloads: COMMON_DOWNLOADS,
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
  "saizoner",
  "fluid-bed-dryer",
  "rapid-mixer-granulator",
  "ribbon-blender",
  "multi-mill",
  "bin-blender",
  "double-cone-blender",
  "oscillating-granulator",
  "cone-mill",
  "planetary-mixer",
  "tablet-coating-machine",
  "conta-blender",
];
