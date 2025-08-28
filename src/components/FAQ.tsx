import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What's included in the $150/month plan?",
      answer: "Our base plan includes transaction entry, monthly bank reconciliations, financial reports (P&L, Balance Sheet, Cash Flow), dedicated bookkeeper support, software access (QuickBooks or Xero), and unlimited email support. You'll receive complete, tax-ready books every month."
    },
    {
      question: "Can I upgrade or downgrade anytime?",
      answer: "Yes, absolutely! Our plans are completely flexible and contract-free. You can upgrade to include additional services like payroll or tax prep, or scale down if your business needs change. Changes take effect the following month."
    },
    {
      question: "Do you support QuickBooks and Xero?",
      answer: "Yes, we are certified ProAdvisors in both QuickBooks Online and Xero. We'll help you choose the right platform for your business, or work with your existing setup. Software licenses are included in your monthly fee."
    },
    {
      question: "What if I'm behind on my books?",
      answer: "No problem! We offer comprehensive catch-up bookkeeping services. Our team will clean up and organize your historical financial data before starting monthly service. Most catch-up projects are completed within 2-4 weeks."
    },
    {
      question: "Are there any contracts or hidden fees?",
      answer: "No contracts, ever. Our pricing is completely transparent with no setup fees, hidden charges, or long-term commitments. You can pause or cancel your service anytime with 30 days notice. What you see is what you pay."
    },
    {
      question: "Do I need to manage the bookkeeping software?",
      answer: "Not at all! Your dedicated bookkeeper handles everything software-related. We set up your chart of accounts, manage integrations, handle updates, and ensure everything runs smoothly. You just review the reports we provide."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our bookkeeping services
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg border border-border/50 shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-muted/30 transition-colors rounded-lg"
              >
                <h3 className="text-lg font-semibold text-card-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919666736088" 
              className="text-primary hover:text-primary-dark font-medium transition-colors"
            >
              📞 Call us at +91 9666736088
            </a>
            <a 
              href="mailto:info@topnotchsol.com" 
              className="text-primary hover:text-primary-dark font-medium transition-colors"
            >
              ✉️ Email info@topnotchsol.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;