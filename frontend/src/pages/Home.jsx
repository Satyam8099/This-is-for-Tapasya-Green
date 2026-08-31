import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useLenis, { scrollToId } from "@/hooks/useLenis";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import StatsBand from "@/components/site/StatsBand";
import Manifesto from "@/components/site/Manifesto";
import Capabilities from "@/components/site/Capabilities";
import Products from "@/components/site/Products";
import EditorialMarquee from "@/components/site/EditorialMarquee";
import GlobalOps from "@/components/site/GlobalOps";
import Footer from "@/components/site/Footer";

export default function Home() {
  useLenis();
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.replace("#", "");
    if (hash) {
      // wait for lenis + layout
      const t = setTimeout(() => scrollToId(hash), 600);
      return () => clearTimeout(t);
    }
  }, [location.hash]);

  return (
    <div className="App" data-testid="home-page">
      <div className="noise-overlay" aria-hidden />
      <Navbar />
      <main>
        <Hero />
        <StatsBand />
        <Manifesto />
        <Capabilities />
        <Products />
        <EditorialMarquee />
        <GlobalOps />
      </main>
      <Footer />
    </div>
  );
}
