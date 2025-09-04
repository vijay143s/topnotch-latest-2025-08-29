import { useState } from "react";
import { Button } from "@/components/ui/button";
import ConsultForm from "@/components/ConsultForm";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Phone, Shield, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  pricing?: {
    startingPrice: string;
    description: string;
  };
  whatIncluded: string[];
  benefits: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

const ServicePageLayout = ({
  title,
  subtitle,
  description,
  features,
  pricing,
  whatIncluded,
  benefits,
  faq
}: ServicePageLayoutProps) => {
  const [showConsult, setShowConsult] = useState(false);
  const [showCopySuccess, setShowCopySuccess] = useState(false);

  const handleCopyNumber = (number: string) => {
    navigator.clipboard.writeText(number).then(() => {
      setShowCopySuccess(true);
      setTimeout(() => setShowCopySuccess(false), 2000);
    });
  };
  return (
    <div className="min-h-screen bg-gradient-section">
      {/* Hero Section */}
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg animate-fade-in">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-white/95 drop-shadow animate-fade-in">
              {subtitle}
            </p>
            <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow animate-fade-in">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button variant="hero" size="xl" onClick={() => setShowConsult(true)} className="btn-modern">
                Get a Free Quote for Bookkeeping
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="border-white/40 text-white hover:bg-white/10"
                onClick={() => handleCopyNumber('+19726666214')}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 space-y-4">
              <h2 className="text-gradient">
                Why Choose Our {title}?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover the advantages that set us apart from the competition
              </p>
            </div>
            <div className="responsive-grid">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="glass neon-border rounded-xl card-padding text-center space-y-4 sm:space-y-6 interactive-card animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center">
                    <div className="p-3 sm:p-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 space-y-4">
              <h2 className="text-gradient">
                What's Included
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need for professional bookkeeping
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {whatIncluded.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 glass rounded-lg p-3 sm:p-4 hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-trust flex-shrink-0 animate-pulse" />
                  <span className="text-foreground text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 space-y-4">
              <h2 className="text-gradient">
                How It Works
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Simple steps to get your bookkeeping on track
              </p>
            </div>
            <div className="responsive-grid">
              {[
                {
                  step: 1,
                  title: "Upload Your Financials",
                  description: "Securely upload bank statements or connect your accounts through our secure portal.",
                  icon: "📤"
                },
                {
                  step: 2,
                  title: "We Handle Your Bookkeeping", 
                  description: "Your dedicated bookkeeper categorizes transactions, reconciles accounts, and prepares reports.",
                  icon: "⚡"
                },
                {
                  step: 3,
                  title: "Receive CPA-Ready Books",
                  description: "Get professional financial statements monthly. Contact your lead accountant anytime.",
                  icon: "✅"
                }
              ].map((step, index) => (
                <div 
                  key={index}
                  className="text-center space-y-4 sm:space-y-6 relative animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto shadow-glow">
                      <span className="text-2xl sm:text-3xl font-bold text-white">{step.step}</span>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl animate-float" style={{ animationDelay: `${index * 300}ms` }}>
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                    {step.description}
                  </p>
                  
                  {/* Connection line for desktop */}
                  {index < 2 && (
                    <div className="hidden lg:block absolute top-10 -right-8 w-16 h-0.5 bg-gradient-to-r from-primary to-accent opacity-50"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 space-y-4">
              <h2 className="text-gradient">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get answers to common questions about our services
              </p>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {faq.map((item, index) => (
                <div 
                  key={index} 
                  className="glass neon-border rounded-xl card-padding hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 relative z-10 glass-dark p-8 sm:p-12 rounded-2xl shadow-hero border border-white/10">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground animate-fade-in drop-shadow-lg">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg text-accent-foreground animate-fade-in">
              Join thousands of businesses who trust TopNotch Solutions with their bookkeeping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in mt-2">
              <Button variant="hero" size="xl" onClick={() => setShowConsult(true)} className="btn-modern">
                Get a Free Quote for Bookkeeping
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="border-accent/40 text-accent-foreground hover:bg-accent/10"
                onClick={() => handleCopyNumber('+19726666214')}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Single ConsultForm Modal for all buttons, rendered at the root of the page */}
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
      <Footer />

      {/* Copy Success Popup */}
      {showCopySuccess && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-trust to-trust/80 text-white px-6 py-3 rounded-lg shadow-glow text-base font-semibold animate-fade-in">
          Phone number copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default ServicePageLayout;