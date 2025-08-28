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


  return (
    <div className="min-h-screen bg-gradient-section">
      <Header />
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16 space-y-4">
              <h1 className="text-gradient">Get in Touch</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ready to transform your bookkeeping? Let's discuss your needs and get you started.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              <div className="order-2 lg:order-1">
                <ConsultForm />
              </div>

              <div className="order-1 lg:order-2">
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