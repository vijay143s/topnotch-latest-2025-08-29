import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import ConsultForm from "@/components/ConsultForm";


const FreeTrial = () => {
  const benefits = [
    "One full month of bookkeeping at no cost",
    "No commitment, no contracts required", 
    "No credit card needed to start",
    "Full access to your dedicated bookkeeper",
    "Complete financial reports included"
  ];
  const [showConsult, setShowConsult] = useState(false);
  return (
    <section className="section-padding gradient-hero text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold animate-fade-in">
              Try TopNotch Free for 30 Days
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto animate-fade-in">
              We'll reconcile one full month of your books at no cost. Experience the 
              TopNotch difference risk-free.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 my-8 sm:my-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 text-left glass rounded-lg p-3 sm:p-4 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 animate-pulse" />
                <span className="text-xs sm:text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="space-y-4 sm:space-y-6">
            <Button 
              variant="hero" 
              size="xl" 
              className="bg-accent hover:bg-accent/90 group shadow-glow btn-modern animate-glow" 
              onClick={() => setShowConsult(true)}
            >
              Get a Free Quote for Bookkeeping
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="text-xs sm:text-sm text-white/70 animate-fade-in">
              ⭐ Join 5,000+ satisfied small business owners
            </div>
          </div>
          {/* ConsultForm Modal */}
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
      </div>
    </section>
  );
};

export default FreeTrial;