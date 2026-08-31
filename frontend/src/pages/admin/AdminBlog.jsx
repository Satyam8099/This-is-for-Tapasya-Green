import ResourceManager from "./ResourceManager";
export default function AdminBlog() {
  return (
    <ResourceManager
      title="Blog Posts"
      kicker="(Blog)"
      endpoint="/blog"
      adminEndpoint="/admin/blog"
      testidPrefix="blog"
      labelKey="title"
      fields={[
        { name: "slug", label: "Slug", placeholder: "unique-url-slug", colspan: 1 },
        { name: "category", label: "Category", type: "select", options: ["Engineering", "Operations", "Regulatory", "Product", "News"] },
        { name: "title", label: "Title", colspan: 2 },
        { name: "excerpt", label: "Excerpt", type: "textarea" },
        { name: "author", label: "Author" },
        { name: "date", label: "Date", type: "date" },
        { name: "readTime", label: "Read Time", placeholder: "e.g. 6 min read" },
        { name: "hero", label: "Hero image key", placeholder: "e.g. machinery_1" },
        { name: "status", label: "Status", type: "select", options: ["draft", "published"] },
        { name: "body", label: "Body", type: "json" },
        { name: "seo", label: "SEO", type: "json" },
      ]}
    />
  );
}
