import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Star,ArrowRight } from "lucide-react";
import { useState } from "react";
import ConsultForm from "@/components/ConsultForm";
const Pricing = () => {
  const [showConsult, setShowConsult] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-section pt-20">
      <Header />

      {/* Hero Section with Blue BG and Image */}
      <section className="relative min-h-[340px] md:min-h-[400px] flex items-center overflow-hidden bg-gradient-hero pt-20">
        {/* Desktop/Tablet BG Image */}
        <div className="hidden md:block absolute inset-0 w-full h-full opacity-30">
          <img
            src="https://www.remotebooksonline.com/images/nlp/latest-pricing-banner.webp"
            alt="Pricing Hero"
            className="w-full h-full object-cover object-center"
            style={{ minHeight: 340 }}
          />
        </div>
        {/* Mobile BG Image */}
        <div className="md:hidden absolute inset-0 w-full h-full opacity-30">
          <img
            src="https://www.remotebooksonline.com/images/nlp/latest-pricing-mobile-banner.webp"
            alt="Pricing Hero"
            className="w-full h-full object-cover object-center"
            style={{ minHeight: 340 }}
          />
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center relative z-10 py-12 md:py-16 min-h-[340px] md:min-h-[400px]">
          <div className="text-white max-w-3xl text-center space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight animate-fade-in">
              TopNotch Bookkeeping – Simple Pricing
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 animate-fade-in">
              No contracts. No hourly fees. No hidden charges.
            </p>
            <div className="space-y-4 sm:space-y-6 animate-fade-in">
              <Button variant="hero" size="xl" className="btn-modern animate-glow" onClick={() => setShowConsult(true)}>
              First Month Free
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
          </div>
          </div>
        </div>
      </section>

      {/* Small Business Bookkeeping Plans */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-gradient">Small Business Bookkeeping Plans</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Clear, Flat Pricing for Small Business Owners
            </p>
          </div>
          <div className="responsive-grid max-w-6xl mx-auto">
            {/* Beginner Plan */}
            <div className="glass neon-border rounded-xl card-padding text-center space-y-6 hover-lift animate-fade-in">
              <div>
                <h3 className="text-xl font-bold text-gradient mb-4">BEGINNER</h3>
                <div className="flex items-end justify-center">
                  <span className="text-3xl sm:text-4xl font-bold text-foreground">$150</span>
                  <span className="text-muted-foreground ml-2 text-lg">/month</span>
                </div>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  1 bank account, includes QuickBooks/Xero subscription, reconciliation, financial reports, dedicated team
                </p>
              </div>
              <div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="w-4 h-4 text-trust mr-3 flex-shrink-0" /> 
                    <span>Dedicated QuickBooks ProAdvisor</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="w-4 h-4 text-trust mr-3 flex-shrink-0" /> 
                    <span>Monthly Reconciliation</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="w-4 h-4 text-trust mr-3 flex-shrink-0" /> 
                    <span>Tax-Ready Financial Reports</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="w-4 h-4 text-trust mr-3 flex-shrink-0" /> 
                    <span>Your First Month Free</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 btn-modern" size="lg" onClick={() => setShowConsult(true)}>Get Started</Button>
              </div>
            </div>
            
            {/* Intermediate Plan */}
            <div className="glass neon-border rounded-xl card-padding text-center space-y-6 hover-lift animate-fade-in relative scale-105 shadow-glow" style={{ animationDelay: '100ms' }}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-primary text-white font-bold px-4 py-2 rounded-full shadow-glow text-sm">
                Most Popular
              </div>
              <div>
                <h3 className="text-xl font-bold text-gradient mb-4">INTERMEDIATE</h3>
                <div className="flex items-end justify-center">
                  <span className="text-3xl sm:text-4xl font-bold text-foreground">$195</span>
                  <span className="text-muted-foreground ml-2 text-lg">/month</span>
                </div>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  2 bank or credit card accounts, unlimited transactions, includes software
                </p>
              </div>
              <div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="w-4 h-4 text-trust mr-3 flex-shrink-0" /> 
                    <span>Dedicated QuickBooks ProAdvisor</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="w-4 h-4 text-trust mr-3 flex-shrink-0" /> 
                    <span>Monthly Reconciliation</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="w-4 h-4 text-trust mr-3 flex-shrink-0" /> 
                    <span>Tax-Ready Financial Reports</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="w-4 h-4 text-trust mr-3 flex-shrink-0" /> 
                    <span>Your First Month Free</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 btn-modern animate-glow" size="lg"onClick={() => setShowConsult(true)}>Get Started</Button>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="glass neon-border rounded-xl card-padding text-center space-y-6 hover-lift animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div>
                <h3 className="text-xl font-bold text-gradient mb-4">ENTERPRISE</h3>
                <div className="flex items-end justify-center">
                  <span className="text-3xl sm:text-4xl font-bold text-foreground">$225</span>
                  <span className="text-muted-foreground ml-2 text-lg">/month</span>
                </div>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  $225–$375/month 3–8 accounts or up to $10k in monthly expenses, unlimited transactions
                </p>
              </div>
              <div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="w-4 h-4 text-trust mr-3 flex-shrink-0" /> 
                    <span>Dedicated QuickBooks ProAdvisor</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="w-4 h-4 text-trust mr-3 flex-shrink-0" /> 
                    <span>Monthly Reconciliation</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="w-4 h-4 text-trust mr-3 flex-shrink-0" /> 
                    <span>Tax-Ready Financial Reports</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="w-4 h-4 text-trust mr-3 flex-shrink-0" /> 
                    <span>Your First Month Free</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 btn-modern" size="lg"onClick={() => setShowConsult(true)}>Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blue CTA Section */}
      <section className="bg-gradient-hero py-12 sm:py-16 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center">
          <div className="relative z-10 space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white animate-fade-in">
              Let's Get Started - Your First Month is Free
            </h2>
            <Button variant="hero" size="xl" className="btn-modern animate-glow" onClick={() => setShowConsult(true)}>
              Get a Free Quote for Bookkeeping
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
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
      </section>

      {/* Dedicated Bookkeeping for Growing Businesses */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-gradient">Dedicated Bookkeeping for Growing Businesses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Need Full Time Support? We've Got You Covered.
            </p>
          </div>
          <div className="responsive-grid max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="glass neon-border rounded-xl card-padding text-center space-y-6 hover-lift animate-fade-in">
              <div>
                <h3 className="text-xl font-bold text-gradient mb-4">BASIC PLAN</h3>
                <div className="flex items-end justify-center">
                  <span className="text-3xl sm:text-4xl font-bold text-foreground">$1,400</span>
                  <span className="text-muted-foreground ml-2 text-lg">/month</span>
                </div>
                <div className="mt-4 text-muted-foreground text-sm space-y-1">
                  <span className="font-semibold">Hourly Rate:</span> $35/hour<br />
                  <span className="font-semibold">Commitment:</span> 40 hours / Month<br />
                  <span className="font-semibold">Total Monthly Cost:</span> $1,400
                </div>
              </div>
              <div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="w-4 h-4 text-trust mr-3 flex-shrink-0" /> 
                    <span>No long term commitments</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="w-4 h-4 text-trust mr-3 flex-shrink-0" /> 
                    <span>Additional hours billed at the same hourly rate</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="w-4 h-4 text-trust mr-3 flex-shrink-0" /> 
                    <span>Ideal for businesses needing a dedicated resource</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 btn-modern" size="lg"onClick={() => setShowConsult(true)}>Get Started</Button>
              </div>
            </div>
            
            {/* Standard Plan */}
            <div className="glass neon-border rounded-xl card-padding text-center space-y-6 hover-lift animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div>
                <h3 className="text-xl font-bold text-gradient mb-4">STANDARD PLAN</h3>
                <div className="flex items-end justify-center">
                  <span className="text-3xl sm:text-4xl font-bold text-foreground">$2,400</span>
                  <span className="text-muted-foreground ml-2 text-lg">/month</span>
                </div>
                <div className="mt-4 text-muted-foreground text-sm space-y-1">
                  <span className="font-semibold">Hourly Rate:</span> $30/hour<br />
                  <span className="font-semibold">Commitment:</span> 80 hours / Month<br />
                  <span className="font-semibold">Total Monthly Cost:</span> $2,400
                </div>
              </div>
              <div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="w-4 h-4 text-trust mr-3 flex-shrink-0" /> 
                    <span>No long term commitments</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="w-4 h-4 text-trust mr-3 flex-shrink-0" /> 
                    <span>Additional hours billed at the same hourly rate</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="w-4 h-4 text-trust mr-3 flex-shrink-0" /> 
                    <span>Ideal for businesses needing a dedicated resource</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 btn-modern" size="lg"onClick={() => setShowConsult(true)}>Get Started</Button>
              </div>
            </div>
            
            {/* Premium Plan */}
            <div className="glass neon-border rounded-xl card-padding text-center space-y-6 hover-lift animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div>
                <h3 className="text-xl font-bold text-gradient mb-4">PREMIUM PLAN</h3>
                <div className="flex items-end justify-center">
                  <span className="text-3xl sm:text-4xl font-bold text-foreground">$4,000</span>
                  <span className="text-muted-foreground ml-2 text-lg">/month</span>
                </div>
                <div className="mt-4 text-muted-foreground text-sm space-y-1">
                  <span className="font-semibold">Hourly Rate:</span> $25/hour<br />
                  <span className="font-semibold">Commitment:</span> 160 hours / Month<br />
                  <span className="font-semibold">Total Monthly Cost:</span> $4,000
                </div>
              </div>
              <div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="w-4 h-4 text-trust mr-3 flex-shrink-0" /> 
                    <span>No long term commitments</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="w-4 h-4 text-trust mr-3 flex-shrink-0" /> 
                    <span>Additional hours billed at the same hourly rate</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="w-4 h-4 text-trust mr-3 flex-shrink-0" /> 
                    <span>Ideal for businesses needing a dedicated resource</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 btn-modern" size="lg"onClick={() => setShowConsult(true)}>Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catch-Up Bookkeeping Services */}
      <section className="section-padding bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-gradient">Catch-Up Bookkeeping Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Behind on Your Books? We'll Catch You Up.
            </p>
          </div>
          <div className="responsive-grid max-w-5xl mx-auto">
            <div className="glass neon-border rounded-xl card-padding text-center space-y-6 hover-lift animate-fade-in">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-foreground leading-tight">
                Flat-rate pricing based on months and transaction volume
              </h3>
            </div>
            
            <div className="glass neon-border rounded-xl card-padding text-center space-y-6 hover-lift animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-foreground leading-tight">
                Up to 12 months cleaned and reconciled within 7 days
              </h3>
            </div>
            
            <div className="glass neon-border rounded-xl card-padding text-center space-y-6 hover-lift animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-foreground leading-tight">
                Tax-ready financials delivered fast
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-gradient">Why Choose Remote Books Online</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the advantages that make us the preferred choice
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {[
              { title: "First Month Free", desc: "Try before you commit", icon: "🎁" },
              { title: "No Software Headaches", desc: "We manage QuickBooks or Xero for you", icon: "⚡" },
              { title: "Dedicated, Certified Bookkeepers", desc: "Always accurate, always professional", icon: "👨‍💼" },
              { title: "Secure & Encrypted", desc: "256-bit SSL, bank-level security", icon: "🔒" },
              { title: "Trusted Nationwide", desc: "Thousands of small business owners rely on us", icon: "🌟" }
            ].map((item, index) => (
              <div 
                key={index}
                className="glass neon-border rounded-xl card-padding text-center space-y-4 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl sm:text-4xl animate-float" style={{ animationDelay: `${index * 200}ms` }}>
                  {item.icon}
                </div>
                <h3 className="font-semibold text-base sm:text-lg text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-gradient">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about our pricing and services
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  question: "What's included in the $150/month plan?",
                  answer: "The Beginner plan includes bookkeeping for one bank account, a QuickBooks or Xero subscription, monthly reconciliation, tax-ready reports, and a dedicated bookkeeping team."
                },
                {
                  question: "Can I upgrade anytime?",
                  answer: "Yes! You can upgrade to a higher plan at any time based on your account volume, transactions, or business growth."
                },
                {
                  question: "Do you support QuickBooks and Xero?",
                  answer: "Yes, we support both QuickBooks Online/Desktop and Xero. Your subscription is included with every plan."
                },
                {
                  question: "What if I'm behind on my books?",
                  answer: "No problem - our Catch-Up Bookkeeping service will clean up your books fast, with a turnaround of 7 days for up to 12 months."
                },
                {
                  question: "Are there any contracts or hidden fees?",
                  answer: "Nope. All our plans are month-to-month with transparent pricing and no hidden charges."
                },
                {
                  question: "Do I need to manage the bookkeeping software?",
                  answer: "Not at all. We handle the software for you, so you can focus on running your business."
                }
              ].map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="glass neon-border rounded-xl px-6 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
