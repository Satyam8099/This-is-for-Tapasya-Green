import ResourceManager from "./ResourceManager";
export default function AdminPages() {
  return (
    <ResourceManager
      title="Pages & SEO"
      kicker="(Pages)"
      endpoint="/admin/pages"
      adminEndpoint="/admin/pages"
      testidPrefix="pages"
      labelKey="title"
      fields={[
        { name: "slug", label: "Slug", type: "select", options: ["home", "about", "capabilities", "global", "spares", "contact", "blog", "news"] },
        { name: "title", label: "Title" },
        { name: "seo", label: "SEO (title, description, keywords, og_image)", type: "json" },
        { name: "sections", label: "Sections / Content (JSON — flexible)", type: "json" },
      ]}
    />
  );
}
