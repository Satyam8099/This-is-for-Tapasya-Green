import useLenis from "@/hooks/useLenis";
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
