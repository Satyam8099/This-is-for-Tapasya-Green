import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Home from "@/pages/Home";
import ProductPage from "@/pages/ProductPage";
import AboutPage from "@/pages/AboutPage";
import CapabilitiesPage from "@/pages/CapabilitiesPage";
import GlobalPage from "@/pages/GlobalPage";
import SparesPage from "@/pages/SparesPage";
import ContactPage from "@/pages/ContactPage";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import NewsPage from "@/pages/NewsPage";
import AdminLogin from "@/pages/admin/AdminLogin";
import AdminShell from "@/pages/admin/AdminShell";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import AdminEnquiries from "@/pages/admin/AdminEnquiries";
import AdminUsers from "@/pages/admin/AdminUsers";
import AdminSettings from "@/pages/admin/AdminSettings";
import AdminBlog from "@/pages/admin/AdminBlog";
import AdminNews from "@/pages/admin/AdminNews";
import AdminProducts from "@/pages/admin/AdminProducts";
import AdminPages from "@/pages/admin/AdminPages";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/capabilities" element={<CapabilitiesPage />} />
          <Route path="/global" element={<GlobalPage />} />
          <Route path="/spares" element={<SparesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/news" element={<NewsPage />} />

          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminShell />}>
            <Route index element={<AdminDashboard />} />
            <Route path="enquiries" element={<AdminEnquiries />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="blog" element={<AdminBlog />} />
            <Route path="news" element={<AdminNews />} />
            <Route path="pages" element={<AdminPages />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
