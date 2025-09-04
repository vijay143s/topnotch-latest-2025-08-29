import { useState } from "react";

// Collapsible mobile menu for Services/Compare
// Collapsible mobile menu for Services/Compare
function MobileCollapseMenu({ label, categories, type, onLinkClick }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="w-full flex items-center justify-between font-bold text-white py-2 px-2 rounded hover:bg-gradient-to-r hover:from-[#FF69B4]/20 hover:via-[#9370DB]/20 hover:to-[#40E0D0]/20 focus:outline-none focus:ring"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`mobile-collapse-${label}`}
      >
        <span>{label}</span>
        <span className="ml-2 text-[#e71a21]">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div id={`mobile-collapse-${label}`} className="pl-3 pt-2 space-y-3">
          {categories.map((cat) => (
            <div key={cat.title}>
              <div className="text-xs text-[#e71a21] font-medium uppercase">{cat.title}</div>
              {(type === "services" ? cat.services : cat.links).map((item) => {
                const itemKey = item.slug || item.href;
                return (
                  <Link
                    key={itemKey}
                    to={item.href}
                    className="block text-sm py-1 pl-2 text-white/80 hover:text-[#e71a21]"
                    onClick={(e) => {
                      e.preventDefault();
                      onLinkClick();
                      window.location.href = item.href;
                    }}
                  >
                    {item.name}
                  </Link>
                );
              })}
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
        <div className="flex items-center justify-between h-16 sm:h-20">
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
                  <NavigationMenuTrigger className="text-white hover:text-[#e71a21] font-bold bg-transparent transition-all hover:bg-gradient-to-r hover:from-[#FF69B4]/20 hover:via-[#9370DB]/20 hover:to-[#40E0D0]/20">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[min(90vw,800px)] p-6 glass border border-white/20 rounded-lg shadow-hero bg-gradient-to-br from-[#101624] via-[#1a2336] to-[#18304b] relative overflow-hidden">
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
              <span className="text-base font-medium text-white">+1 972-666-6214</span>
            </div>
            
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-foreground">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}

        {isMenuOpen && (
          <>
            {/* Overlay to close menu on outside click */}
            <div
              className="fixed inset-0 z-[99] bg-black/30 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close mobile menu overlay"
            />
            <div
              className="fixed inset-x-0 top-[4.5rem] z-[100] lg:hidden mobile-menu mt-2 pointer-events-auto"
              onClick={e => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute top-2 right-4 text-white text-3xl font-bold z-[101] focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                style={{ background: 'none', border: 'none' }}
              >
                &times;
              </button>
              <nav className="flex flex-col space-y-4 p-4 pt-12 bg-gradient-to-br from-[#101624] via-[#1a2336] to-[#18304b] shadow-xl rounded-lg text-white relative glass border border-white/20">
                {/* Collapsible Services */}
                <MobileCollapseMenu
                  label="Services"
                  categories={serviceCategories}
                  type="services"
                  onLinkClick={() => setIsMenuOpen(false)}
                />
                {/* Enterprise Menu */}
                <MobileCollapseMenu
                  label="Enterprise"
                  categories={enterpriseMenu.map(section => ({
                    title: section.heading,
                    links: section.links
                  }))}
                  type="compare"
                  onLinkClick={() => setIsMenuOpen(false)}
                />
                {/* Collapsible Compare */}
                <MobileCollapseMenu
                  label="Compare"
                  categories={compareCategories}
                  type="compare"
                  onLinkClick={() => setIsMenuOpen(false)}
                />

                {/* Pricing and About links */}
                <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
                  <Link to="/pricing" className="block text-base font-bold py-2 px-2 hover:text-[#e71a21]" onClick={() => setIsMenuOpen(false)}>
                    Pricing
                  </Link>
                  <Link to="/about" className="block text-base font-bold py-2 px-2 hover:text-[#e71a21]" onClick={() => setIsMenuOpen(false)}>
                    About
                  </Link>
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