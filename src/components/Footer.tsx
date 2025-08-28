import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Twitter } from "lucide-react";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-br from-background via-card to-background text-foreground pt-12 pb-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-8 border-b border-white/20">
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-gradient">Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">Core Bookkeeping Services</li>
              <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">Bookkeeping for Industries</li>
              <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">Outsourced Bookkeeping</li>
              <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">Resources</li>
            </ul>
          </div>
          {/* Businesses we serve */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-gradient">Businesses we serve</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">Real Estate</li>
              <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">Nonprofits</li>
              <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">Law Firms</li>
              <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">Medical Practices</li>
              <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">E-Commerce</li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-gradient">Company</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">Pricing</li>
              <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">Blog</li>
              <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">Testimonials</li>
              <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">FAQs</li>
              <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">Contact Us</li>
              <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">How it works</li>
            </ul>
          </div>
          {/* Quick Links */}
          
          {/* Contact Information */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-gradient">Contact Information</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <span className="text-primary mt-1">📍</span>
                <span className="hover:text-primary transition-colors">India Location: TopNotch Solutions, 506 Manjeera Majestic Commercial, Hyderabad, Telangana 500072</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary mt-1">📍</span>
                <span className="hover:text-primary transition-colors">US Location: 941 W Morse Blvd, Suite#100 Winter Park, FL 32789</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-primary">📞</span>
                <a href="tel:+919666736088" className="hover:text-primary transition-colors hover:underline">+91 9666736088</a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-primary">✉️</span>
                <a href="mailto:info@topnotchsol.com" className="hover:text-primary transition-colors hover:underline">info@topnotchsol.com</a>
              </li>
            </ul>
            
            
          </div>
        </div>
        {/* Disclaimer */}
        <div className="text-xs text-muted-foreground mt-6 max-w-5xl mx-auto text-center leading-relaxed">
          *Disclaimer: TopNotch Solutions provides bookkeeping, tax preparation, tax filing, and accounting services for small businesses using third-party accounting software. We are a THIRD PARTY accounting & bookkeeping solution and we are NOT AFFILIATED with any brands, trademarks, logos, or any other company names used. The brand names, trademarks, and logos belong to their respective owners and are for representation purposes only.
        </div>
        {/* Copyright & Legal */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-6 text-xs text-muted-foreground gap-4 sm:gap-2">
          <div className="flex flex-wrap justify-center gap-4">
            <span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Terms</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Refund Policy</span>
          </div>
          <div className="text-center sm:text-right">
            © {currentYear} TopNotch Solutions Ltd. All rights reserved. Updated May {currentYear}
          </div>
        </div>
        
        {/* Modern footer decoration */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
            <span className="text-xs">Powered by Innovation</span>
            <div className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;