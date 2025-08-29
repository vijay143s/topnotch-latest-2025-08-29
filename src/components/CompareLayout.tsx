import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ConsultForm from "@/components/ConsultForm";

interface CompareLayoutProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const CompareLayout = ({ title, subtitle, children }: CompareLayoutProps) => {
  const [showConsult, setShowConsult] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-section">
      <Header />

      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 relative overflow-hidden bg-gradient-to-br from-[#101624] via-[#1a2336] to-[#18304b]">
        {/* Glassy overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-0"></div>
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg animate-fade-in">{title}</h1>
            {subtitle && <p className="text-lg sm:text-xl text-white/95 drop-shadow animate-fade-in">{subtitle}</p>}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in mt-4">
              <Button variant="hero" size="xl" onClick={() => setShowConsult(true)} className="btn-modern">
                Get a Free Quote for Bookkeeping
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main>{children}</main>

      <Footer />

      {showConsult && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="glass border border-white/20 rounded-xl shadow-hero max-w-lg w-full p-6 relative animate-scale-in">
            <button
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground text-2xl font-bold transition-colors hover:scale-110"
              onClick={() => setShowConsult(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <ConsultForm onSuccess={() => setShowConsult(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CompareLayout;
