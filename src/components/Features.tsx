
const features = [
  {
    img: "https://www.remotebooksonline.com/images/nlp/catch-up-kb-4.webp",
    alt: "Dedicated bookkeeper assigned to your business",
    title: "Dedicated bookkeeper assigned to your business"
  },
  {
    img: "https://www.remotebooksonline.com/images/nlp/sap-kb-4.webp",
    alt: "QuickBooks or Xero software included",
    title: "QuickBooks or Xero software included"
  },
  {
    img: "https://www.remotebooksonline.com/images/nlp/reconciliation.webp",
    alt: "Monthly bank reconciliations and categorized reports",
    title: "Monthly bank reconciliations and categorized reports"
  },
  {
    img: "https://www.remotebooksonline.com/images/nlp/cpa-key-benefits-3.webp",
    alt: "Secure uploads with bank-level encryption",
    title: "Secure uploads with bank-level encryption"
  },
  {
    img: "https://www.remotebooksonline.com/images/nlp/sap-kb-1.webp",
    alt: "Flat-rate pricing starting at just $150/month",
    title: "Flat-rate pricing starting at just $150/month"
  },
  {
    img: "https://www.remotebooksonline.com/images/nlp/sap-kb-2.webp",
    alt: "Try it free for 30 days — no credit card, no contract",
    title: "Try it free for 30 days — no credit card, no contract"
  }
];

const Features = () => {
  return (
    <section className="section-padding bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-gradient">Why Choose TopNotch Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the future of bookkeeping with our cutting-edge solutions
          </p>
        </div>
        <div className="responsive-grid">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="glass neon-border rounded-2xl card-padding flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 interactive-card animate-fade-in" 
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <img
                  src={feature.img}
                  alt={feature.alt}
                  loading="lazy"
                  width={48}
                  height={48}
                  className="rounded-lg object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-base sm:text-lg font-semibold text-foreground leading-tight">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;