import { Upload, Settings, FileCheck } from "lucide-react";
import Header from "./Header";

const HowItWorks = () => {
  const steps = [
    {
      step: 'Step 1',
      title: 'Upload Your Financials',
      description: 'Securely upload your bank statements or connect your accounts. We take it from there.',
      icon: '📤'
    },
    {
      step: 'Step 2',
      title: 'We Handle Your Bookkeeping',
      description: 'Your dedicated bookkeeper categorizes and reconciles all transactions and prepares your monthly reports.',
      icon: '⚡'
    },
    {
      step: 'Step 3',
      title: 'Receive CPA-Ready Books',
      description: 'Get tax-ready financials each month. Contact your lead accountant anytime by phone or email.',
      icon: '✅'
    }
  ];

  return (
    <div>
      <Header/>
      <section className="section-padding bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-gradient">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Simple, streamlined process to get your books in perfect order
          </p>
        </div>
        <div className="responsive-grid max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="glass neon-border rounded-2xl card-padding flex flex-col items-center text-center relative interactive-card animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Step number with modern design */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-glow">
                  <span className="text-white font-bold text-lg">{idx + 1}</span>
                </div>
              </div>
              
              {/* Icon */}
              <div className="text-4xl mb-4 mt-8 animate-float" style={{ animationDelay: `${idx * 200}ms` }}>
                {step.icon}
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              
              {/* Connection line for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-accent opacity-50"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  
    
  );
};

export default HowItWorks;