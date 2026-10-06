import ResourceManager from "./ResourceManager";
export default function AdminProducts() {
  return (
    <ResourceManager
      title="Products"
      kicker="(Catalog)"
      endpoint="/products"
      adminEndpoint="/admin/products"
      testidPrefix="products"
      labelKey="name"
      fields={[
        { name: "slug", label: "Slug" },
        { name: "category", label: "Category", type: "select", options: ["granulating","drying","milling","blending","material-handling","cleaning"] },
        { name: "name", label: "Name", colspan: 2 },
        { name: "tag", label: "Tag / Series" },
        { name: "hero", label: "Hero image", type: "image" },
        { name: "datasheet", label: "Datasheet (PDF)", type: "file" },
        { name: "short", label: "Short description", type: "textarea" },
        { name: "gallery", label: "Gallery images", type: "images" },
        { name: "quickSpecs", label: "Quick Specs (JSON)", type: "json" },
        { name: "keyFeatures", label: "Key Features (JSON array)", type: "json" },
        { name: "techSpecs", label: "Tech Specs (JSON)", type: "json" },
        { name: "models", label: "Models (JSON with headers, rows)", type: "json" },
        { name: "applications", label: "Applications (JSON array)", type: "json" },
        { name: "seo", label: "SEO (JSON)", type: "json" },
      ]}
    />
  );
}
