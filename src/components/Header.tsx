import { useState, useEffect } from "react";
import { useSound } from "@/hooks/useSound";

// Collapsible mobile menu for Services/Compare
function MobileMenuItem({ href, children, onClick }) {
  const { playClickSound } = useSound();
  
  const handleClick = (e) => {
    playClickSound();
    onClick?.(e);
  };

  return (
    <Link
      to={href}
      className="block w-full px-4 py-2 text-sm text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-md hover:shadow-lg hover:scale-[1.02] active:scale-95"
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}

function MobileSubmenu({ label, categories, type, onLinkClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    onLinkClick?.();
    setIsOpen(false);
  };

  const items = type === 'services' ? categories.flatMap(cat => cat.services) : categories.flatMap(cat => cat.links);

  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={handleToggle}
        className="flex w-full items-center justify-between px-4 py-3 text-white hover:bg-white/5 transition-colors"
      >
        <span className="font-medium">{label}</span>
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      
      {isOpen && (
        <div className="bg-black/20 py-1">
          {categories.map((category) => (
            <div key={category.title || category.heading}>
              <div className="px-4 py-2 text-xs font-medium text-[#e71a21] uppercase">
                {category.title || category.heading}
              </div>
              {(category.services || category.links).map((item) => (
                <MobileMenuItem
                  key={item.href}
                  href={item.href}
                  onClick={handleItemClick}
                >
                  {item.name}
                </MobileMenuItem>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

import { Button } from "@/components/ui/button";
import ConsultForm from "@/components/ConsultForm";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { serviceCategories } from "@/data/services";
import { compareCategories } from "@/data/compare";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showConsult, setShowConsult] = useState(false);

  const waveStyles = `
    .wave-header {
      background: linear-gradient(135deg, #FF69B4, #9370DB, #40E0D0);
      background-size: 200% 200%;
      animation: gradient 15s ease infinite;
    }
    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `;

  const menuItems = [
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
  ];

  // Import enterprise related pages
  // If not imported, require: import { enterpriseContent } from "@/data/enterpriseContent";
  // For this patch, assume available:
  // Enterprise menu structure as per image
  const enterpriseMenu = [
    {
      heading: "Core Enterprise Services",
      links: [
        { name: "Outsourced Accounting", href: "/enterprise/outsourced-accounting" },
        { name: "Controller & Fractional CFO", href: "/enterprise/controller-cfo" },
        { name: "Accounts Payable Outsourcing", href: "/enterprise/accounts-payable" },
        { name: "Accounts Receivable Outsourcing", href: "/enterprise/accounts-receivable" },
        { name: "Multi-Entity Consolidation", href: "/enterprise/multi-entity-consolidation" },
        { name: "Revenue Recognition (ASC 606)", href: "/enterprise/revenue-recognition" },
        { name: "Sales-Tax Compliance", href: "/enterprise/sales-tax-compliance" },
      ]
    },
    {
      heading: "Industries",
      links: [
        { name: "Ecommerce", href: "/enterprise/industry/ecommerce" },
        { name: "Construction", href: "/enterprise/industry/construction" },
        { name: "Healthcare", href: "/enterprise/industry/healthcare" },
        { name: "SaaS", href: "/enterprise/industry/saas" },
        { name: "Manufacturing", href: "/enterprise/industry/manufacturing" },
        { name: "Professional Services", href: "/enterprise/industry/professional-services" },
      ]
    },
    {
      heading: "Proof & Resources",
      links: [
        { name: "Enterprise Overview", href: "/enterprise" },
        { name: "Case Studies", href: "/enterprise/case-studies" },
        { name: "Security & Data Protection", href: "/enterprise/security" },
        { name: "Pricing", href: "/enterprise/pricing" }
      ]
    }
  ];

  return (
    <>
      <style>{waveStyles}</style>
      <header className="fixed top-0 left-0 right-0 z-50 wave-header border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4">
            <img
              src="/favicon.ico"
              alt="Logo"
              className="w-10 h-10 object-contain"
              style={{ background: '#f4f4f4', borderRadius: '0.5rem' }}
            />
            <span className="text-xl font-bold text-white hover:text-[#e71a21] transition-colors">
              TopNotch Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="text-white hover:text-[#e71a21] font-bold bg-transparent transition-all hover:bg-gradient-to-r hover:from-[#FF69B4]/20 hover:via-[#9370DB]/20 hover:to-[#40E0D0]/20 backdrop-blur-sm hover:backdrop-blur-md"
                    onClick={() => useSound().playClickSound()}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[min(90vw,800px)] p-6 glass border border-white/20 rounded-lg shadow-hero bg-gradient-to-br from-[#101624]/90 via-[#1a2336]/90 to-[#18304b]/90 backdrop-blur-md backdrop-saturate-150 relative overflow-hidden hover:shadow-2xl transition-all duration-300">
                      <div className="absolute -top-20 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
                      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                        {serviceCategories.map((category, i) => (
                          <div key={i}>
                            <h4 className="font-semibold text-[#e71a21] mb-3 text-sm">{category.title}</h4>
                            <ul className="space-y-2">
                              {category.services.map((svc) => (
                                <li key={svc.slug}>
                                  <NavigationMenuLink asChild>
                                    <Link to={svc.href} className="block text-sm text-muted-foreground hover:text-[#e71a21] py-1">
                                      {svc.name}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Enterprise Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-[#e71a21] font-bold bg-transparent transition-all hover:bg-gradient-to-r hover:from-[#FF69B4]/20 hover:via-[#9370DB]/20 hover:to-[#40E0D0]/20">
                    Enterprise
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[min(90vw,800px)] p-6 glass border border-white/20 rounded-lg shadow-hero bg-gradient-to-br from-[#101624] via-[#1a2336] to-[#18304b] relative overflow-hidden">
                      <div className="absolute -top-20 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
                      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                        {enterpriseMenu.map((section, idx) => (
                          <div key={section.heading}>
                            <h4 className="font-semibold text-[#e71a21] mb-3 text-sm">{section.heading}</h4>
                            <ul className="space-y-2">
                              {section.links.map(link => (
                                <li key={link.href}>
                                  <NavigationMenuLink asChild>
                                    <Link to={link.href} className="block text-sm text-muted-foreground hover:text-[#e71a21] py-1">
                                      {link.name}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Compare Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-[#e71a21] font-bold bg-transparent transition-all hover:bg-gradient-to-r hover:from-[#FF69B4]/20 hover:via-[#9370DB]/20 hover:to-[#40E0D0]/20">
                    Compare
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[min(90vw,800px)] p-6 glass border border-white/20 rounded-lg shadow-hero bg-gradient-to-br from-[#101624] via-[#1a2336] to-[#18304b] relative overflow-hidden">
                      <div className="absolute -top-20 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
                      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                        {compareCategories.map((category, i) => (
                          <div key={i}>
                            <h4 className="font-semibold text-[#e71a21] mb-3 text-sm">{category.title}</h4>
                            <ul className="space-y-2">
                              {category.links.map((l) => (
                                <li key={l.slug}>
                                  <NavigationMenuLink asChild>
                                    <Link to={l.href} className="block text-sm text-muted-foreground hover:text-[#e71a21] py-1">
                                      {l.name}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Pricing/About links */}
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} className="text-white hover:text-[#e71a21] font-bold transition-colors">
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-3 mb-3">
              <Phone className="w-5 h-5 text-white" />
              <span className="text-base font-medium text-white">+91 9666736088</span>
            </div>
            
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => {
              useSound().playClickSound();
              setIsMenuOpen(!isMenuOpen);
            }} 
            className="lg:hidden p-2 text-foreground backdrop-blur-sm hover:backdrop-blur-md rounded-lg transition-all duration-300 hover:bg-white/10 active:scale-95"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 z-[99] bg-black/60 lg:hidden backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            <div
              className="fixed inset-x-0 top-[3.5rem] z-[100] lg:hidden mx-4"
              onClick={e => e.stopPropagation()}
            >
              <nav className="relative bg-gradient-to-br from-[#101624] via-[#1a2336] to-[#18304b] rounded-lg shadow-2xl overflow-hidden">
                <div className="max-h-[calc(100vh-8rem)] overflow-y-auto">
                  {/* Main Menu Items */}
                  <div className="divide-y divide-white/10">
                    <MobileSubmenu
                      label="Services"
                      categories={serviceCategories}
                      type="services"
                      onLinkClick={() => setIsMenuOpen(false)}
                    />
                    <MobileSubmenu
                      label="Enterprise"
                      categories={enterpriseMenu.map(section => ({
                        title: section.heading,
                        links: section.links
                      }))}
                      type="compare"
                      onLinkClick={() => setIsMenuOpen(false)}
                    />
                    <MobileSubmenu
                      label="Compare"
                      categories={compareCategories}
                      type="compare"
                      onLinkClick={() => setIsMenuOpen(false)}
                    />
                  </div>

                  {/* Direct Links */}
                  <div className="bg-white/5">
                    {menuItems.map((item) => (
                      <MobileMenuItem
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </MobileMenuItem>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </>
        )}

        {/* ConsultForm Modal (opened by any sparkly CTA that sets showConsult) */}
        {showConsult && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black p-4">
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
    </header>
    </>
  );
};

export default Header;