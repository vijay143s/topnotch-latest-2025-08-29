import { useState } from "react";
import { Button } from '@/components/ui/button';
import ConsultForm from './ConsultForm';
import { Sparkles } from 'lucide-react'; 
import heroBanner from '@/assets/herobanner.jpeg';
const Hero = () => {
  const [showConsult, setShowConsult] = useState(false);
  return (
    <>
      <section
        className="relative min-h-screen flex items-center overflow-hidden pt-20 sm:pt-24 md:pt-32 mt-20"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-label="Hero Section"
        role="region"
      >
        
        <div className="container mx-auto px-4 relative z-5">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left space-y-6 sm:space-y-8 animate-fade-in text-white">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-gradient text-white drop-shadow-lg" tabIndex={0} aria-label="Online Bookkeeping Services for Small Businesses">
                  Online Bookkeeping Services for Small Businesses
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow">
                  Accurate, CPA-ready financials from certified QuickBooks and Xero experts. 
                  Flat pricing. No contracts.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  variant="cta" 
                  size="xl" 
                  className="btn-modern animate-glow"
                  onClick={() => setShowConsult(true)}
                >
                  {/* wrap text in an element so z-index applies above the ::before overlay */}
                  <span className="relative z-10">Start Free Trial</span>
                  <Sparkles className="w-5 h-5 ml-2 relative z-10" />
                </Button>
                <Button 
                  variant="outline" 
                  size="xl" 
                  className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  onClick={() => window.location.href = '/pricing'}
                >
                  View Pricing
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-6">
                <div className="flex items-center space-x-2 text-white/80 hover:text-primary transition-colors">
                  <div className="w-2 h-2 bg-trust rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm font-medium">Trusted by 5,000+ Businesses</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80 hover:text-primary transition-colors">
                  <div className="w-2 h-2 bg-trust rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm font-medium">QuickBooks Certified ProAdvisor</span> 
                </div>
                <div className="flex items-center space-x-2 text-white/80 hover:text-primary transition-colors">
                  <div className="w-2 h-2 bg-trust rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm font-medium">BBB Accredited</span>
                </div>
              </div>
              
            </div>
            
            {/* Modern floating elements */}
            <div className="hidden lg:block relative" style={{ top: '40%' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-float"></div>
              <div className="relative glass rounded-2xl p-8 hover-lift">
                <div className="space-y-6 text-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-trust rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium drop-shadow">Real-time Financial Insights</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium drop-shadow">CPA-Reviewed Monthly Reports</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium drop-shadow">24/7 Secure Access</span>
                  </div>
                </div>
              </div>
            </div>
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
      </section>
      
      
    </>
  );
};

export default Hero;