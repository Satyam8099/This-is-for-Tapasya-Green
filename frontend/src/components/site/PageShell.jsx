import useLenis from "@/hooks/useLenis";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { useEffect } from "react";

export default function PageShell({ children, testid }) {
  useLenis();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App bg-background min-h-screen" data-testid={testid}>
      <div className="noise-overlay" aria-hidden />
      <Navbar />
      <main className="pt-24 md:pt-28">{children}</main>
      <Footer />
    </div>
  );
}
