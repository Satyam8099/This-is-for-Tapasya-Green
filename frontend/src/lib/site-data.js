export const IMAGES = {
  machinery_1:
    "https://images.unsplash.com/photo-1513828583688-c52646db42da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHw0fHxzdGFpbmxlc3MlMjBzdGVlbCUyMGluZHVzdHJpYWwlMjBtYWNoaW5lcnl8ZW58MHx8fHwxNzg0MTIxMTE3fDA&ixlib=rb-4.1.0&q=85",
  machinery_2:
    "https://images.unsplash.com/photo-1513828646384-e4d8ec30d2bb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxzdGFpbmxlc3MlMjBzdGVlbCUyMGluZHVzdHJpYWwlMjBtYWNoaW5lcnl8ZW58MHx8fHwxNzg0MTIxMTE3fDA&ixlib=rb-4.1.0&q=85",
  machinery_3:
    "https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxzdGFpbmxlc3MlMjBzdGVlbCUyMGluZHVzdHJpYWwlMjBtYWNoaW5lcnl8ZW58MHx8fHwxNzg0MTIxMTE3fDA&ixlib=rb-4.1.0&q=85",
  laboratory_1:
    "https://images.unsplash.com/photo-1518152006812-edab29b069ac?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxsYWJvcmF0b3J5JTIwZXF1aXBtZW50JTIwc2NpZW5jZXxlbnwwfHx8fDE3ODQxMjExMTh8MA&ixlib=rb-4.1.0&q=85",
  laboratory_2:
    "https://images.unsplash.com/photo-1614308456595-a59d48697ea8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxsYWJvcmF0b3J5JTIwZXF1aXBtZW50JTIwc2NpZW5jZXxlbnwwfHx8fDE3ODQxMjExMTh8MA&ixlib=rb-4.1.0&q=85",
  plant_1:
    "https://images.unsplash.com/photo-1778354080876-e3c710e450ce?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwzfHxwaGFybWFjZXV0aWNhbCUyMG1hbnVmYWN0dXJpbmclMjBwbGFudHxlbnwwfHx8fDE3ODQxMjExMTd8MA&ixlib=rb-4.1.0&q=85",
};

export const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Capabilities", id: "capabilities" },
  { label: "Products", id: "products" },
  { label: "Global", id: "global" },
  { label: "Contact", id: "contact" },
];

export const STATS = [
  { value: 60, suffix: "+", label: "Years of Engineering" },
  { value: 5, suffix: " Industries", label: "Pharma / Food / Chemical" },
  { value: 1, prefix: "#", suffix: "", label: "Saizoner Market Leader" },
];

export const CAPABILITIES = [
  { n: "01", name: "Granulation", img: "machinery_1", desc: "High shear & rapid mixer granulators engineered for uniform particle growth." },
  { n: "02", name: "Drying", img: "plant_1", desc: "Fluid bed dryers delivering precise moisture control at any scale." },
  { n: "03", name: "Milling", img: "machinery_3", desc: "Multi mills and cone mills for consistent, repeatable size reduction." },
  { n: "04", name: "Blending", img: "machinery_2", desc: "Bin, conta and double cone blenders for homogeneous batches." },
  { n: "05", name: "Micronising", img: "laboratory_1", desc: "Ultra-fine particle processing for advanced formulations." },
  { n: "06", name: "Coating", img: "laboratory_2", desc: "Validated coating systems for functional & aesthetic finishes." },
  { n: "07", name: "Pelletising", img: "machinery_1", desc: "Integrated pelletising lines for modified release dosage forms." },
];

export const PRODUCTS = [
  { name: "High Shear Mixer Granulator", tag: "Saizoner Series", img: "machinery_1", span: "md:col-span-8", feature: true, to: "/product/saizoner" },
  { name: "Fluid Bed Dryer", tag: "Drying", img: "plant_1", span: "md:col-span-4", to: "/product/fluid-bed-dryer" },
  { name: "Rapid Granulator", tag: "Granulation", img: "laboratory_1", span: "md:col-span-4", to: "/product/rapid-granulator" },
  { name: "Ribbon Blender", tag: "Blending", img: "machinery_2", span: "md:col-span-4", to: "/product/ribbon-blender" },
  { name: "Multi Mill", tag: "Milling", img: "machinery_3", span: "md:col-span-4", to: "/product/multi-mill" },
  { name: "Bin Blender", tag: "Blending", img: "laboratory_2", span: "md:col-span-6", to: "/product/bin-blender" },
  { name: "Double Cone Blender", tag: "Blending", img: "machinery_1", span: "md:col-span-6", to: "/product/double-cone-blender" },
  { name: "Oscillating Granulator", tag: "Granulation", img: "machinery_2", span: "md:col-span-4", to: "/product/oscillating-granulator" },
  { name: "Cone Mill", tag: "Milling", img: "machinery_3", span: "md:col-span-4", to: "/product/cone-mill" },
  { name: "Planetary Mixer", tag: "Mixing", img: "laboratory_1", span: "md:col-span-4", to: "/product/planetary-mixer" },
  { name: "Plough Shear Mixer", tag: "Mixing", img: "plant_1", span: "md:col-span-6", to: "/product/plough-shear-mixer" },
  { name: "Conta Blender", tag: "Blending", img: "machinery_2", span: "md:col-span-6", to: "/product/conta-blender" },
];

export const CHAPTERS = [
  { n: "01", title: "Our Vision", body: "To be a world-class enterprise providing integrated solutions to the pharmaceutical and allied industries — engineered without compromise." },
  { n: "02", title: "Our Mission", body: "To offer individual solutions tailored to varied requirements, from lab scale production of a few grams to commercial output of many tonnes a day." },
  { n: "03", title: "Our Values", body: "Integrity. Ownership. Passion. Achievement orientation. Adaptability. Innovation. Team spirit. The principles that shape every machine we build." },
];

export const INDUSTRIES = ["Pharmaceutical", "Nutraceutical", "Food", "Chemical", "Cosmetics"];

export const CONTACT = {
  email: "info@prochemtapasya.com",
  phone: "+91 22 6666 0000",
  address: "Prochem Tapasya, Industrial Estate, Mumbai, Maharashtra, India",
};

export const PRODUCT_DETAILS = {
  "saizoner": {
    name: "High Shear Mixer Granulator",
    series: "Saizoner Series",
    hero: "machinery_1",
    gallery: ["machinery_2", "plant_1", "laboratory_1"],
    intro:
      "The Saizoner is Prochem Tapasya's flagship high shear mixer granulator — the system that made us the market leader across India's leading pharmaceutical companies. Engineered for rapid, reproducible wet granulation from lab batches to full commercial output.",
    highlights: [
      "Market-leading Saizoner mixing geometry for uniform granule growth",
      "Independent impeller and chopper drives for precise end-point control",
      "cGMP construction with SS 316 / 316L product-contact surfaces",
      "Scalable from R&D trials to multi-tonne commercial production",
    ],
    specs: [
      { k: "Bowl Capacity", v: "10 L – 1200 L" },
      { k: "Construction", v: "SS 316 / 316L contact parts" },
      { k: "Impeller Drive", v: "Dual speed / VFD controlled" },
      { k: "Chopper", v: "Independent motor drive" },
      { k: "Discharge", v: "Pneumatic side / bottom port" },
      { k: "Compliance", v: "cGMP · 21 CFR Part 11 ready" },
    ],
    applications: ["Pharmaceutical", "Nutraceutical", "Food", "Fine Chemicals"],
  },

  "fluid-bed-dryer": {
    name: "Fluid Bed Dryer",
    series: "FBD Series",
    hero: "plant_1",
    gallery: ["machinery_1", "laboratory_1", "machinery_3"],
    intro:
      "Precision fluid bed drying with tight moisture control and cGMP construction — engineered for pharmaceutical and nutraceutical granules from R&D to full commercial batches.",
    highlights: [
      "Uniform hot-air distribution for a consistent moisture profile",
      "Explosion-vent and earth continuity for safe pharma operation",
      "Retarding chamber and shaker mechanism for fines recovery",
      "Fully cGMP with SS 316 contact parts",
    ],
    specs: [
      { k: "Batch Capacity", v: "5 kg – 500 kg" },
      { k: "Inlet Air Temp", v: "Up to 120 °C" },
      { k: "Bag Filter", v: "Antistatic FDA polyester" },
      { k: "Construction", v: "SS 316 / 316L contact parts" },
      { k: "Instrumentation", v: "PLC + HMI · 21 CFR Part 11" },
      { k: "Compliance", v: "cGMP · ATEX compatible" },
    ],
    applications: ["Pharmaceutical", "Nutraceutical", "Food", "Chemical"],
  },

  "rapid-granulator": {
    name: "Rapid Mixer Granulator",
    series: "RMG Series",
    hero: "laboratory_1",
    gallery: ["machinery_2", "machinery_1", "plant_1"],
    intro:
      "Compact rapid mixer granulator for wet mixing and granulation — ideal for pilot and mid-scale production with fast batch turnover and reproducible endpoint control.",
    highlights: [
      "Rapid uniform blending followed by wet granulation in a single vessel",
      "Independent impeller and chopper for tight granule distribution",
      "Sanitary bottom-drive geometry with easy CIP",
      "Batch flexibility from R&D to commercial production",
    ],
    specs: [
      { k: "Bowl Capacity", v: "5 L – 800 L" },
      { k: "Impeller", v: "Two-speed / VFD drive" },
      { k: "Chopper", v: "High-speed independent motor" },
      { k: "Construction", v: "SS 316 / 316L contact parts" },
      { k: "Discharge", v: "Side pneumatic port" },
      { k: "Compliance", v: "cGMP · 21 CFR Part 11 ready" },
    ],
    applications: ["Pharmaceutical", "Nutraceutical", "Food"],
  },

  "ribbon-blender": {
    name: "Ribbon Blender",
    series: "Horizontal Blending",
    hero: "machinery_2",
    gallery: ["machinery_3", "plant_1", "laboratory_2"],
    intro:
      "Twin helical ribbon geometry for gentle yet thorough blending of dry powders and granules — a workhorse for bulk chemical, food and nutraceutical manufacturing.",
    highlights: [
      "Twin counter-current ribbons for rapid axial and radial blending",
      "Wide capacity envelope from trial batches to multi-tonne production",
      "Minimal segregation of components with differing densities",
      "Optional spray bar for controlled liquid addition",
    ],
    specs: [
      { k: "Batch Capacity", v: "25 L – 10 000 L" },
      { k: "Drive", v: "Gearbox with VFD" },
      { k: "Construction", v: "SS 304 / 316 options" },
      { k: "Discharge", v: "Flush bottom slide / butterfly" },
      { k: "Cycle Time", v: "5 – 15 minutes" },
      { k: "Finish", v: "Mirror or matte, food-grade" },
    ],
    applications: ["Chemical", "Food", "Nutraceutical", "Cosmetics"],
  },

  "multi-mill": {
    name: "Multi Mill",
    series: "Milling",
    hero: "machinery_3",
    gallery: ["machinery_1", "laboratory_1", "plant_1"],
    intro:
      "Versatile beater-blade multi mill for wet and dry size reduction — engineered for granulation lines and rework of pharmaceutical solids.",
    highlights: [
      "Rotating beaters with forward / reverse operation",
      "Interchangeable screens for adjustable particle size",
      "Portable design for easy line integration",
      "Fully cGMP with tool-free strip-down for cleaning",
    ],
    specs: [
      { k: "Motor", v: "3 HP / 5 HP / 7.5 HP options" },
      { k: "Speed", v: "750 / 1500 rpm (VFD)" },
      { k: "Screen Range", v: "0.5 mm – 25 mm" },
      { k: "Output", v: "25 – 250 kg / hr" },
      { k: "Construction", v: "SS 316 contact parts" },
      { k: "Compliance", v: "cGMP · easy dismantle" },
    ],
    applications: ["Pharmaceutical", "Nutraceutical", "Food"],
  },

  "bin-blender": {
    name: "Bin Blender",
    series: "IBC Blending",
    hero: "laboratory_2",
    gallery: ["machinery_2", "plant_1", "machinery_1"],
    intro:
      "IBC (Intermediate Bulk Container) blender for contained, cross-contamination-free blending — the industry standard for modern pharma solid dosage lines.",
    highlights: [
      "Fully contained blending inside sealed IBCs",
      "Faster changeover and elimination of manual transfer",
      "Compatible with multiple bin sizes from a single frame",
      "PLC recipe control with tumble-count logic",
    ],
    specs: [
      { k: "Bin Sizes", v: "50 L – 2000 L" },
      { k: "Tumble Speed", v: "2 – 20 rpm (VFD)" },
      { k: "Loading", v: "Auto clamping & hydraulic lift" },
      { k: "Control", v: "PLC + HMI · recipe based" },
      { k: "Compliance", v: "cGMP · 21 CFR Part 11 ready" },
      { k: "Options", v: "Split-butterfly / RTP interfaces" },
    ],
    applications: ["Pharmaceutical", "Nutraceutical"],
  },

  "double-cone-blender": {
    name: "Double Cone Blender",
    series: "Tumble Blending",
    hero: "machinery_1",
    gallery: ["machinery_3", "laboratory_1", "laboratory_2"],
    intro:
      "Twin-cone symmetric tumbler delivering gentle, dust-free blending — a classic choice for granules and fragile powders in pharma and food.",
    highlights: [
      "Symmetric geometry for uniform, gentle blending",
      "Minimal shear preserves particle integrity",
      "Vacuum charging and discharge options available",
      "Optional intensifier bar for lump breaking",
    ],
    specs: [
      { k: "Working Capacity", v: "25 L – 5000 L" },
      { k: "Fill Volume", v: "~ 60 % of gross" },
      { k: "Speed", v: "6 – 15 rpm (VFD)" },
      { k: "Discharge", v: "Butterfly / slide valve" },
      { k: "Construction", v: "SS 316 / 316L" },
      { k: "Compliance", v: "cGMP · mirror finish" },
    ],
    applications: ["Pharmaceutical", "Food", "Nutraceutical", "Chemical"],
  },

  "oscillating-granulator": {
    name: "Oscillating Granulator",
    series: "Granulation",
    hero: "machinery_2",
    gallery: ["laboratory_1", "machinery_3", "plant_1"],
    intro:
      "Oscillating rotor granulator for consistent dry sizing of wet or dried granules — engineered for tight particle-size distribution across pharma batches.",
    highlights: [
      "Oscillating rotor with reversible action",
      "Interchangeable mesh sieves for precise sizing",
      "Low-heat operation preserves thermolabile actives",
      "Tool-free changeover for cGMP cleaning",
    ],
    specs: [
      { k: "Sieve Size", v: "0.5 mm – 6 mm" },
      { k: "Rotor Angle", v: "± 90° oscillation" },
      { k: "Output", v: "10 – 250 kg / hr" },
      { k: "Motor", v: "1.5 HP / 3 HP options" },
      { k: "Construction", v: "SS 316 contact parts" },
      { k: "Compliance", v: "cGMP · easy strip-down" },
    ],
    applications: ["Pharmaceutical", "Nutraceutical", "Food"],
  },

  "cone-mill": {
    name: "Cone Mill",
    series: "Milling",
    hero: "machinery_3",
    gallery: ["machinery_1", "machinery_2", "laboratory_1"],
    intro:
      "Conical screen mill for low-heat, low-dust size reduction and de-lumping — trusted for high-throughput pharma milling and in-line integration.",
    highlights: [
      "Conical rotor and screen geometry for gentle reduction",
      "Low fines generation and reduced heat rise",
      "Quick screen and impeller changeover",
      "Compatible with IBC direct docking",
    ],
    specs: [
      { k: "Screen Range", v: "0.2 mm – 20 mm" },
      { k: "Speed", v: "500 – 3000 rpm (VFD)" },
      { k: "Output", v: "Up to 1000 kg / hr" },
      { k: "Motor", v: "3 HP – 15 HP" },
      { k: "Construction", v: "SS 316 / 316L" },
      { k: "Compliance", v: "cGMP · dust-tight" },
    ],
    applications: ["Pharmaceutical", "Nutraceutical", "Food", "Chemical"],
  },

  "planetary-mixer": {
    name: "Planetary Mixer",
    series: "Mixing",
    hero: "laboratory_1",
    gallery: ["machinery_1", "machinery_2", "laboratory_2"],
    intro:
      "Planetary motion mixer for high-viscosity pastes, ointments and semi-solids — engineered for repeatable homogenisation across pharma and cosmetics.",
    highlights: [
      "Planetary and rotational agitator motion for zero dead zones",
      "Interchangeable beaters for varied viscosities",
      "Jacketed bowl option for heating / cooling",
      "Vacuum de-aeration and hydraulic bowl lift options",
    ],
    specs: [
      { k: "Bowl Capacity", v: "5 L – 500 L" },
      { k: "Speed", v: "Variable via VFD" },
      { k: "Beaters", v: "Whisk / hook / paddle" },
      { k: "Construction", v: "SS 316 / 316L" },
      { k: "Options", v: "Jacketed · vacuum" },
      { k: "Compliance", v: "cGMP" },
    ],
    applications: ["Pharmaceutical", "Cosmetics", "Food"],
  },

  "plough-shear-mixer": {
    name: "Plough Shear Mixer",
    series: "Mixing",
    hero: "plant_1",
    gallery: ["machinery_2", "laboratory_2", "machinery_1"],
    intro:
      "Horizontal plough-shear mixer combining mechanical fluidisation with high-speed choppers for uniform blending of powders, granules and slurries.",
    highlights: [
      "Plough-shape blades create a mechanical fluid bed",
      "Independent choppers for lump breaking and liquid addition",
      "Suited to wide-range density blending",
      "Optional heating / cooling jacket for reactive processes",
    ],
    specs: [
      { k: "Capacity", v: "50 L – 6000 L" },
      { k: "Main Drive", v: "VFD with soft start" },
      { k: "Chopper", v: "1 – 3 independent units" },
      { k: "Construction", v: "SS 304 / 316" },
      { k: "Options", v: "Vacuum · jacket · spray bar" },
      { k: "Compliance", v: "cGMP / industrial variants" },
    ],
    applications: ["Chemical", "Pharmaceutical", "Food"],
  },

  "conta-blender": {
    name: "Conta Blender",
    series: "Contained Blending",
    hero: "machinery_2",
    gallery: ["laboratory_2", "plant_1", "machinery_3"],
    intro:
      "Container-loaded tumble blender giving fully contained, single-pot blending for OEB-rated pharmaceutical operations.",
    highlights: [
      "Fully contained blending inside a dedicated container",
      "Zero cross-contamination between batches",
      "Compatible with split-butterfly and RTP transfer",
      "Recipe-based tumble control with data logging",
    ],
    specs: [
      { k: "Container Range", v: "25 L – 3000 L" },
      { k: "Tumble Speed", v: "2 – 20 rpm" },
      { k: "Load / Unload", v: "Automatic clamping" },
      { k: "Control", v: "PLC / HMI · 21 CFR Part 11" },
      { k: "OEB Rating", v: "Up to OEB 4 optional" },
      { k: "Compliance", v: "cGMP" },
    ],
    applications: ["Pharmaceutical", "Nutraceutical"],
  },
};
