import React, { useRef, useState } from 'react';

interface ConsultFormProps {
  onSuccess?: () => void;
}
import emailjs from '@emailjs/browser';

const ConsultForm = ({ onSuccess }: ConsultFormProps) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    quantity: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_8d9eq4l',
        'template_if6cjo4',
        {
          from_name: form.name,
          from_email: form.email,
          from_phone: form.phone,
          company: form.company,
          quantity: form.quantity,
          message: form.message,
        },
        'c7cPitxpV5icrooZX'
      );
      setForm({ name: '', email: '', phone: '', company: '', quantity: '', message: '' });
      if (popupRef.current) {
        popupRef.current.style.display = 'block';
        setTimeout(() => {
          if (popupRef.current) popupRef.current.style.display = 'none';
          if (onSuccess) onSuccess();
        }, 1000);
      } else if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      // Optionally handle error
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="glass rounded-xl shadow-hero p-6 mb-6 relative text-foreground">
      {/* Success Popup */}
      <div
        ref={popupRef}
        style={{ display: 'none' }}
        className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-trust to-trust/80 text-white px-6 py-3 rounded-lg shadow-glow text-base font-semibold animate-fade-in"
      >
        Thank you for your message! We'll get back to you soon.
      </div>
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gradient">Get Your Free Quote</h2>
      <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
        <input 
          className="w-full border border-border/50 rounded-lg p-3 sm:p-4 bg-background/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300" 
          placeholder="Full Name" 
          name="name" 
          value={form.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          className="w-full border border-border/50 rounded-lg p-3 sm:p-4 bg-background/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300" 
          placeholder="Email Address" 
          name="email" 
          type="email"
          value={form.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          className="w-full border border-border/50 rounded-lg p-3 sm:p-4 bg-background/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300" 
          placeholder="Phone Number" 
          name="phone" 
          type="tel"
          value={form.phone} 
          onChange={handleChange} 
        />
                
        <textarea 
          className="w-full border border-border/50 rounded-lg p-3 sm:p-4 bg-background/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 min-h-[100px] resize-none" 
          placeholder="Tell us about your bookkeeping needs..." 
          name="message" 
          value={form.message} 
          onChange={handleChange} 
          required 
        />
        <button 
          className="btn-modern w-full font-semibold text-base sm:text-lg py-3 sm:py-4 disabled:opacity-50 disabled:cursor-not-allowed" 
          type="submit" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Get a Free Quote for Bookkeeping'}
        </button>
      </form>
    </section>
  );
};

export default ConsultForm;
