const Services = () => {
  const serviceCategories = [
    {
      title: "Core Bookkeeping Services",
      services: [
        "Bookkeeping Services",
        "Monthly Bookkeeping", 
        "Catch-Up Bookkeeping",
        "QuickBooks Bookkeeping",
        "QuickBooks Cleanup",
        "White-Label Bookkeeping",
        "Bookkeeping Services Near Me"
      ]
    },
    {
      title: "Outsourcing Services", 
      services: [
        "Bookkeeping Under Your Brand",
        "Outsourced Bookkeeping",
        "Bookkeeping Outsourcing Service",
        "Virtual Bookkeeping CPA Review"
      ]
    },
    {
      title: "Specialized Bookkeeping by Industry",
      services: [
        "Medical/Dental",
        "E-Commerce", 
        "Lawyers",
        "Real Estate",
        "Nonprofits",
        "Franchise",
        "Construction",
        "Restaurants"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive bookkeeping solutions tailored to your business needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-card rounded-xl p-6 shadow-card border border-border/50 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-xl font-bold text-card-foreground mb-6 text-center">
                {category.title}
              </h3>
              
              <ul className="space-y-3">
                {category.services.map((service, serviceIndex) => (
                  <li 
                    key={serviceIndex}
                    className="flex items-center space-x-3 text-muted-foreground hover:text-card-foreground transition-colors group cursor-pointer"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 group-hover:bg-accent transition-colors"></div>
                    <span className="text-sm font-medium">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Service Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-card rounded-lg border border-border/30">
            <div className="text-2xl mb-2">🎯</div>
            <h4 className="font-semibold text-card-foreground mb-2">Industry Expertise</h4>
            <p className="text-sm text-muted-foreground">Specialized knowledge across multiple industries</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-card rounded-lg border border-border/30">
            <div className="text-2xl mb-2">🔒</div>
            <h4 className="font-semibold text-card-foreground mb-2">Secure & Reliable</h4>
            <p className="text-sm text-muted-foreground">Bank-level encryption and data protection</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-card rounded-lg border border-border/30">
            <div className="text-2xl mb-2">📊</div>
            <h4 className="font-semibold text-card-foreground mb-2">CPA-Ready Reports</h4>
            <p className="text-sm text-muted-foreground">Professional financial statements every month</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;