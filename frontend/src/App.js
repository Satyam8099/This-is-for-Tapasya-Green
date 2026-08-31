import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
