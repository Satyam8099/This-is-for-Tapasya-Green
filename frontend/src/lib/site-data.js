import { PRODUCT_DETAILS as _PRODUCT_DETAILS, CATEGORIES as _CATEGORIES, FEATURED_SLUGS } from "@/data/products";

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

export const CATEGORIES = _CATEGORIES;
export const PRODUCT_DETAILS = _PRODUCT_DETAILS;

export const NAV_LINKS = [
  { label: "About", to: "/about" },
  { label: "Capabilities", to: "/capabilities" },
  { label: "Global", to: "/global" },
  { label: "Spares", to: "/spares" },
  { label: "Blog", to: "/blog" },
  { label: "News", to: "/news" },
  { label: "Contact", to: "/contact" },
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

// Homepage featured products (span-based bento layout)
const FEATURED_SPANS = {
  "saizoner": { span: "md:col-span-8", feature: true },
  "fluid-bed-dryer": { span: "md:col-span-4" },
  "rapid-mixer-granulator": { span: "md:col-span-4" },
  "ribbon-blender": { span: "md:col-span-4" },
  "multi-mill": { span: "md:col-span-4" },
  "bin-blender": { span: "md:col-span-6" },
  "double-cone-blender": { span: "md:col-span-6" },
  "oscillating-granulator": { span: "md:col-span-4" },
  "cone-mill": { span: "md:col-span-4" },
  "planetary-mixer": { span: "md:col-span-4" },
  "tablet-coating-machine": { span: "md:col-span-6" },
  "conta-blender": { span: "md:col-span-6" },
};

export const PRODUCTS = FEATURED_SLUGS.map((slug) => {
  const d = _PRODUCT_DETAILS[slug];
  const span = FEATURED_SPANS[slug] || { span: "md:col-span-4" };
  return {
    name: d.name,
    tag: d.categoryName,
    img: d.hero,
    to: `/product/${slug}`,
    ...span,
  };
});

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
