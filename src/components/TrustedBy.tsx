const TrustedBy = () => {
  const platforms = [
    {
      name: "QuickBooks",
      logo: "https://www.remotebooksonline.com/images/nlp/quickbooks-logo.webp",
      description: "Certified ProAdvisor"
    },
    {
      name: "Xero",
      logo: "https://www.remotebooksonline.com/images/nlp/xero-logo.webp", 
      description: "Xero Partner"
    },
    {
      name: "Wave",
      logo: "https://www.remotebooksonline.com/images/nlp/wave.webp",
      description: "Wave Certified"
    },
    {
      name: "FreshBooks", 
      logo: "https://www.remotebooksonline.com/images/nlp/freshbooks.webp",
      description: "FreshBooks Partner"
    },
    {
      name: "NetSuite",
      logo: "https://www.remotebooksonline.com/images/nlp/NetSuite.webp", 
      description: "NetSuite Certified"
    }
  ];

  return (
    <section className="section-padding bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 sm:space-y-12">
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient">
              Trusted Platform Integrations
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We work with the platforms you trust, making bookkeeping easy and efficient.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
            {platforms.map((platform, index) => (
              <div 
                key={index}
                className="group text-center hover-lift animate-fade-in glass rounded-xl p-4 sm:p-6 neon-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative w-16 h-12 sm:w-20 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <img
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-primary transition-colors font-medium">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Additional trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 pt-8 border-t border-white/10">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <div className="w-2 h-2 bg-trust rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium">Bank-Level Security</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium">99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;