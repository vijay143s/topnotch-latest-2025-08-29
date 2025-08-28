import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Doni Orsini",
      business: "Digital Marketing Agency",
      quote: "They cleaned up two years of books in less than a month. Now I have complete clarity on my business finances and can focus on growing my agency.",
      rating: 5,
      avatar: "DO"
    },
    {
      name: "Rena Cruz", 
      business: "E-commerce Store Owner",
      quote: "I finally have clarity on what's profitable and what's not. The monthly reports are incredibly detailed and easy to understand.",
      rating: 5,
      avatar: "RC"
    },
    {
      name: "Gregory Hopkins",
      business: "Construction Contractor", 
      quote: "I don't stress about tax season anymore—my books are always ready. My CPA loves working with TopNotch's organized financial reports.",
      rating: 5,
      avatar: "GH"
    },
    {
      name: "Sarah Mitchell",
      business: "Restaurant Owner",
      quote: "The flat-rate pricing is refreshing. No surprises, no hidden fees. Just professional bookkeeping at a price I can budget for.",
      rating: 5,
      avatar: "SM"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section className="section-padding gradient-section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-gradient">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real stories from small business owners who trust TopNotch with their finances
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main Testimonial */}
          <div className="relative">
            <div className="glass neon-border rounded-2xl p-6 sm:p-8 md:p-12 text-center animate-fade-in hover-lift">
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-glow">
                  {testimonials[currentIndex].avatar}
                </div>
              </div>
              
              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-4 sm:mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed mb-6 sm:mb-8 italic font-medium">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="space-y-1 sm:space-y-2">
                <div className="font-semibold text-foreground text-base sm:text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-muted-foreground text-sm sm:text-base">
                  {testimonials[currentIndex].business}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-glow glass border-white/20 hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-glow glass border-white/20 hover:scale-110 transition-all duration-300"
            >
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary shadow-glow scale-125' 
                    : 'bg-muted hover:bg-muted-foreground hover:scale-110'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;