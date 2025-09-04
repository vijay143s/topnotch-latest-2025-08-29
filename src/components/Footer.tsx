import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative bg-gradient-to-br from-[#101624] via-[#1a2336] to-[#18304b] text-white pt-14 pb-8 border-t border-accent/20 shadow-hero glass-dark overflow-hidden">
      {/* Glassy overlay and floating neon orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float z-0"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float z-0" style={{ animationDelay: '1.5s' }}></div>
      {/* Subtle dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-8 border-b border-accent/30">
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-gradient">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/services/bookkeeping-services" className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">Core Bookkeeping Services</a>
              </li>
              <li>
                <a href="/services/outsourced-bookkeeping" className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">Outsourced Bookkeeping</a>
              </li>
            </ul>
          </div>
          {/* Businesses we serve */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-gradient">Businesses we serve</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/services/real-estate-bookkeeping" className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">Real Estate</a></li>
              <li><a href="/services/nonprofits-bookkeeping" className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">Nonprofits</a></li>
              <li><a href="/services/lawyers-bookkeeping" className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">Law Firms</a></li>
              <li><a href="/services/medical-bookkeeping" className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">Medical Practices</a></li>
              <li><a href="/services/ecommerce-bookkeeping" className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">E-Commerce</a></li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-gradient">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/pricing" className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">Pricing</a></li>
              {/* <li><a href="/testimonials" className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">Testimonials</a></li> */}
              {/* <li><a href="/faq" className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">FAQs</a></li> */}
              <li><a href="/about" className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">Contact Us</a></li>
              <li><a href="/how-it-works" className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">How it works</a></li>
            </ul>
          </div>
          {/* Quick Links */}
          
          {/* Contact Information */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-gradient">Contact Information</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <span className="text-accent mt-1">📍</span>
                <span className="hover:text-accent transition-colors">US Location: 941 W Morse Blvd, Suite#100 Winter Park, FL 32789</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent mt-1">📍</span>
                <span className="hover:text-accent transition-colors">India Location: TopNotch Solutions, 506 Manjeera Majestic Commercial, Hyderabad, Telangana 500072, Mob +91 9666736088</span>
              </li>
              
              <li className="flex items-center space-x-2">
                <span className="text-accent">📞</span>
                <a href="tel:+919666736088" className="hover:text-accent transition-colors hover:underline">+1 972-666-6214</a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent">✉️</span>
                <a href="mailto:info@topnotchsol.com" className="hover:text-accent transition-colors hover:underline">info@topnotchsol.com</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Disclaimer */}
        <div className="text-xs text-white/80 mt-6 max-w-5xl mx-auto text-center leading-relaxed">
          *Disclaimer: TopNotch Solutions provides bookkeeping, tax preparation, tax filing, and accounting services for small businesses using third-party accounting software. We are a THIRD PARTY accounting & bookkeeping solution and we are NOT AFFILIATED with any brands, trademarks, logos, or any other company names used. The brand names, trademarks, and logos belong to their respective owners and are for representation purposes only.
        </div>
        {/* Copyright & Legal */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-6 text-xs text-white/80 gap-4 sm:gap-2">
          <div className="flex flex-wrap justify-center gap-4">
            <span className="hover:text-accent transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-accent transition-colors cursor-pointer">Terms</span>
            <span className="hover:text-accent transition-colors cursor-pointer">Refund Policy</span>
          </div>
          <div className="text-center sm:text-right">
            © {currentYear} TopNotch Solutions Ltd. All rights reserved. Updated May {currentYear}
          </div>
        </div>
        
        {/* Modern footer decoration */}
        <div className="mt-8 pt-6 border-t border-accent/20 text-center">
          <div className="inline-flex items-center space-x-2 text-primary">
            <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse shadow-glow"></div>
            <span className="text-xs tracking-wider font-semibold">Powered by Innovation</span>
            <div className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full animate-pulse shadow-glow"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;