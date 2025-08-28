import { useState } from "react";
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

  const menuItems = [
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/10">
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
            <span className="text-xl font-bold" style={{ color: '#e71a21' }}>
              TopNotch Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary font-medium bg-transparent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[min(90vw,800px)] p-6 glass border border-white/20 rounded-lg shadow-hero">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {serviceCategories.map((category, i) => (
                          <div key={i}>
                            <h4 className="font-semibold text-foreground mb-3 text-sm">{category.title}</h4>
                            <ul className="space-y-2">
                              {category.services.map((svc) => (
                                <li key={svc.slug}>
                                  <NavigationMenuLink asChild>
                                    <Link to={svc.href} className="block text-sm text-muted-foreground hover:text-primary py-1">
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

            {menuItems.map((item) => (
              <a key={item.name} href={item.href} className="text-foreground hover:text-primary font-medium">
                {item.name}
              </a>
            ))}

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary font-medium bg-transparent">
                    Compare
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[min(90vw,800px)] p-6 glass border border-white/20 rounded-lg shadow-hero">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {compareCategories.map((category, i) => (
                          <div key={i}>
                            <h4 className="font-semibold text-foreground mb-3 text-sm">{category.title}</h4>
                            <ul className="space-y-2">
                              {category.links.map((l) => (
                                <li key={l.slug}>
                                  <NavigationMenuLink asChild>
                                    <Link to={l.href} className="block text-sm text-muted-foreground hover:text-primary py-1">
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
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-3 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+91 9666736088</span>
            </div>
            
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-foreground">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mobile-menu mt-2">
            <nav className="flex flex-col space-y-4 p-4 bg-surface/40 rounded-lg">
              <div>
                <span className="text-foreground font-semibold">Services</span>
                <div className="mt-2 pl-3 space-y-3">
                  {serviceCategories.map((cat) => (
                    <div key={cat.title}>
                      <div className="text-xs text-muted-foreground font-medium uppercase">{cat.title}</div>
                      {cat.services.map((svc) => (
                        <Link key={svc.slug} to={svc.href} className="block text-sm py-1 pl-2 text-muted-foreground" onClick={() => setIsMenuOpen(false)}>
                          {svc.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-foreground font-semibold">Compare</span>
                <div className="mt-2 pl-3 space-y-3">
                  {compareCategories.map((cat) => (
                    <div key={cat.title}>
                      <div className="text-xs text-muted-foreground font-medium uppercase">{cat.title}</div>
                      {cat.links.map((l) => (
                        <Link key={l.slug} to={l.href} className="block text-sm py-1 pl-2 text-muted-foreground" onClick={() => setIsMenuOpen(false)}>
                          {l.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center space-x-3 text-muted-foreground mb-3">
                  <Phone className="w-5 h-5" />
                  <span className="text-base font-medium">+91 9666736088</span>
                </div>
                <Button 
                  variant="cta" 
                  size="xl" 
                  className="btn-modern animate-glow"
                  onClick={() => setShowConsult(true)}
                >
                  Get a Free Quote for Bookkeeping
                </Button>
              </div>
            </nav>
          </div>
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
  );
};

export default Header;