import React from 'react';
import ContactInfo from '../components/ContactInfo';
import ConsultForm from '../components/ConsultForm';
import Header  from '../components/Header'; // Adjust the import path as necessary
import Footer from '../components/Footer'; // Adjust the import path as necessary
const Contact = () => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const waveStyles = `
    .wave-gradient {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#101624] via-[#1a2336] to-[#18304b]">
      <Header />
      <style>{waveStyles}</style>
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 wave-gradient relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 sm:mb-16 space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg">Get in Touch</h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto drop-shadow">
                Ready to transform your bookkeeping? Let's discuss your needs and get you started.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              <div className="order-2 lg:order-1 glass border border-white/10 rounded-xl p-6 shadow-xl backdrop-blur-sm">
                <ConsultForm />
              </div>

              <div className="order-1 lg:order-2 glass border border-white/10 rounded-xl p-6 shadow-xl backdrop-blur-sm">
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>
      
      {showScrollTop && (
          <button
            onClick={handleScrollToTop}
            className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white rounded-full shadow-glow p-3 transition-all duration-300 hover:scale-110 animate-float"
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        )}
      <Footer />
    </div>
  );
};

export default Contact;