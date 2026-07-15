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
  { name: "High Shear Mixer Granulator", tag: "Saizoner Series", img: "machinery_1", span: "md:col-span-8", feature: true },
  { name: "Fluid Bed Dryer", tag: "Drying", img: "plant_1", span: "md:col-span-4" },
  { name: "Rapid Granulator", tag: "Granulation", img: "laboratory_1", span: "md:col-span-4" },
  { name: "Ribbon Blender", tag: "Blending", img: "machinery_2", span: "md:col-span-4" },
  { name: "Multi Mill", tag: "Milling", img: "machinery_3", span: "md:col-span-4" },
  { name: "Bin Blender", tag: "Blending", img: "laboratory_2", span: "md:col-span-6" },
  { name: "Double Cone Blender", tag: "Blending", img: "machinery_1", span: "md:col-span-6" },
  { name: "Oscillating Granulator", tag: "Granulation", img: "machinery_2", span: "md:col-span-4" },
  { name: "Cone Mill", tag: "Milling", img: "machinery_3", span: "md:col-span-4" },
  { name: "Planetary Mixer", tag: "Mixing", img: "laboratory_1", span: "md:col-span-4" },
  { name: "Plough Shear Mixer", tag: "Mixing", img: "plant_1", span: "md:col-span-6" },
  { name: "Conta Blender", tag: "Blending", img: "machinery_2", span: "md:col-span-6" },
];

export const CHAPTERS = [
  {
    n: "01",
    title: "Our Vision",
    body: "To be a world-class enterprise providing integrated solutions to the pharmaceutical and allied industries — engineered without compromise.",
  },
  {
    n: "02",
    title: "Our Mission",
    body: "To offer individual solutions tailored to varied requirements, from lab scale production of a few grams to commercial output of many tonnes a day.",
  },
  {
    n: "03",
    title: "Our Values",
    body: "Integrity. Ownership. Passion. Achievement orientation. Adaptability. Innovation. Team spirit. The principles that shape every machine we build.",
  },
];

export const INDUSTRIES = ["Pharmaceutical", "Nutraceutical", "Food", "Chemical", "Cosmetics"];

export const CONTACT = {
  email: "info@prochemtapasya.com",
  phone: "+91 22 6666 0000",
  address: "Prochem Tapasya, Industrial Estate, Mumbai, Maharashtra, India",
};
