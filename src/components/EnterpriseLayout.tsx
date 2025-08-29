import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ConsultForm from "@/components/ConsultForm";
import { Phone, ArrowRight, CheckCircle, Building2, Users, Shield, Zap } from "lucide-react";

interface EnterpriseLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage?: string;
  features: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
    metrics?: string;
  }>;
  benefits: string[];
  pricing?: {
    title: string;
    description: string;
    features: string[];
    cta: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    company: string;
    title: string;
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
  relatedPages?: Array<{
    title: string;
    href: string;
    description: string;
  }>;
}

const EnterpriseLayout = ({
  title,
  subtitle,
  description,
  heroImage,
  features,
  benefits,
  pricing,
  testimonial,
  faq,
  relatedPages
}: EnterpriseLayoutProps) => {
  const [showConsult, setShowConsult] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-section">
      <Header />

      {/* Enterprise Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 relative overflow-hidden bg-gradient-to-br from-[#0f1419] via-[#1a2336] to-[#2c1810]">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px] z-0"></div>
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-trust/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 text-accent text-sm font-medium animate-fade-in">
              <Building2 className="w-4 h-4" />
              <span>Enterprise Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg animate-fade-in leading-tight">
              {title}
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/95 drop-shadow animate-fade-in max-w-3xl mx-auto">
              {subtitle}
            </p>
            
            <p className="text-base sm:text-lg text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow animate-fade-in">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in pt-4">
              <Button variant="hero" size="xl" onClick={() => setShowConsult(true)} className="btn-modern text-lg">
                Get Enterprise Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="xl" className="border-white/40 text-white hover:bg-white/10 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
            </div>

            {/* Enterprise Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
              <div className="flex items-center space-x-2 text-white/80">
                <Users className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">500+ Enterprise Clients</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Shield className="w-5 h-5 text-trust" />
                <span className="text-sm font-medium">SOX Compliance Ready</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Zap className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">99.9% SLA Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-gradient">Enterprise-Grade Features</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Powerful solutions designed for organizations that demand scale, security, and precision
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="glass neon-border rounded-xl card-padding text-center space-y-6 interactive-card animate-fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center">
                    <div className="p-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    {feature.metrics && (
                      <div className="mt-4 text-accent font-semibold text-sm">
                        {feature.metrics}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Benefits */}
      <section className="section-padding bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-gradient">Why Enterprises Choose TopNotch</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Scale your financial operations with confidence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-4 glass rounded-xl p-6 hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  <CheckCircle className="w-6 h-6 text-trust flex-shrink-0 animate-pulse" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {testimonial && (
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="glass neon-border rounded-2xl p-8 md:p-12 text-center space-y-6 hover-lift">
                <div className="text-4xl text-accent mb-6">"</div>
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic">
                  {testimonial.quote}
                </blockquote>
                <div className="border-t border-border/30 pt-6">
                  <div className="font-semibold text-foreground text-lg">{testimonial.author}</div>
                  <div className="text-accent font-medium">{testimonial.title}</div>
                  <div className="text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Enterprise Pricing */}
      {pricing && (
        <section className="section-padding bg-gradient-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-gradient">{pricing.title}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  {pricing.description}
                </p>
              </div>
              
              <div className="glass neon-border rounded-2xl p-8 hover-lift">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    {pricing.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 text-left">
                        <CheckCircle className="w-5 h-5 text-trust flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <Button 
                      variant="hero" 
                      size="xl" 
                      onClick={() => setShowConsult(true)} 
                      className="btn-modern text-lg w-full"
                    >
                      {pricing.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-gradient">Enterprise FAQ</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Common questions from enterprise clients
              </p>
            </div>
            
            <div className="space-y-6">
              {faq.map((item, index) => (
                <div 
                  key={index} 
                  className="glass neon-border rounded-xl card-padding hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-lg font-semibold text-foreground mb-4">
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

      {/* Related Pages */}
      {relatedPages && (
        <section className="section-padding bg-gradient-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-gradient">Explore Enterprise Solutions</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Discover our complete range of enterprise services
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPages.map((page, index) => (
                  <a
                    key={index}
                    href={page.href}
                    className="glass neon-border rounded-xl p-6 hover-lift interactive-card animate-fade-in group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {page.description}
                    </p>
                    <div className="mt-4 text-accent text-sm font-medium group-hover:translate-x-1 transition-transform duration-300 flex items-center">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Enterprise CTA */}
      <section className="section-padding bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 glass-dark p-12 rounded-2xl shadow-hero border border-white/10">
            <h2 className="text-4xl font-bold text-white animate-fade-in drop-shadow-lg">
              Ready to Scale Your Financial Operations?
            </h2>
            <p className="text-xl text-white/90 animate-fade-in max-w-2xl mx-auto">
              Join hundreds of enterprises who trust TopNotch Solutions with their complex bookkeeping needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in pt-4">
              <Button variant="hero" size="xl" onClick={() => setShowConsult(true)} className="btn-modern text-lg">
                Get Enterprise Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="xl" className="border-white/40 text-white hover:bg-white/10 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo Call
              </Button>
            </div>
            <div className="text-sm text-white/70 animate-fade-in pt-4">
              ⚡ Enterprise onboarding in 48 hours • Dedicated account manager included
            </div>
          </div>
        </div>
      </section>

      <Footer />

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
  );
};

export default EnterpriseLayout;