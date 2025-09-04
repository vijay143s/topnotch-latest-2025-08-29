import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Header from './Header';

const ContactInfo = () => {
  return (
    <> 
    <div className="glass neon-border rounded-xl card-padding space-y-6 sm:space-y-8 hover-lift">
      <h3 className="text-xl sm:text-2xl font-bold text-gradient">Contact Information</h3>
      
      <div className="space-y-6 sm:space-y-8">
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 text-primary">
              <MapPin size={20} className="sm:w-6 sm:h-6" />
            </div>
            <div className="space-y-3">
              
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-foreground">US Location</h4>
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  941 W Morse Blvd, Suite#100 Winter Park, FL 32789
                </p>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-foreground">India Location</h4>
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  TopNotch Solutions, 506 Manjeera Majestic Commercial, Hyderabad, Telangana 500072
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 text-primary">
            <Phone size={20} className="sm:w-6 sm:h-6 animate-pulse" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-foreground">Phone Number</h4>
            <p className="text-white text-sm sm:text-base mt-1">
              <a href="tel:+919666736088" className="hover:text-primary transition-colors hover:underline">
                +1 972-666-6214
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 text-primary">
            <Mail size={20} className="sm:w-6 sm:h-6" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-foreground">Email Address</h4>
            <p className="text-white text-sm sm:text-base mt-1">
              <a href="mailto:info@topnotchsol.com" className="hover:text-primary transition-colors hover:underline">
                info@topnotchsol.com
              </a>
            </p>
          </div>
        </div>
        
        {/* Business Hours */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 text-primary">
            <Clock size={20} className="sm:w-6 sm:h-6" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-foreground">Business Hours</h4>
            <div className="text-white text-sm sm:text-base mt-1 space-y-1">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        {/* Response Time */}
        <div className="glass rounded-lg p-4 border border-primary/20">
          <div className="flex items-center space-x-2 text-primary mb-2">
            <div className="w-2 h-2 bg-trust rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold">Quick Response Guarantee</span>
          </div>
          <p className="text-white text-xs sm:text-sm">
            We typically respond to all inquiries within 2 hours during business hours.
          </p>
        </div>
      </div>
    </div> 
    </>
    
  );
};

export default ContactInfo;