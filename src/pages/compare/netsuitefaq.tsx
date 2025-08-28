import Header from "@/components/Header";

const faqs = [
  {
    question: "What types of businesses use NetSuite and benefit from your services?",
    answer: "NetSuite is ideal for mid-size to enterprise businesses, multi-entity organizations, SaaS companies, and those with complex reporting or global operations. Our services help these businesses streamline bookkeeping, ensure compliance, and scale efficiently."
  },
  {
    question: "Do you offer NetSuite cleanup for messy or outdated accounts?",
    answer: "Yes, we provide NetSuite cleanup services for businesses with outdated, messy, or unreconciled accounts. We help you get current and organized, no matter how far behind you are."
  },
  {
    question: "How is bookkeeping different in NetSuite vs. QuickBooks?",
    answer: "NetSuite offers advanced features like multi-entity consolidation, ASC 606 revenue recognition, and global capabilities. QuickBooks is best for simpler needs, while NetSuite supports complex, growing businesses."
  },
  {
    question: "Can you handle multi-currency and global consolidation?",
    answer: "Yes, NetSuite supports multi-currency, multi-tax, and global consolidation. We help clients manage international operations and reporting."
  },
  {
    question: "What reports do you generate each month?",
    answer: "We deliver monthly P&L, balance sheet, and cash flow reports, along with AR/AP aging, deferred revenue, and project/job-level summaries."
  },
  {
    question: "Can you reconcile Stripe, Shopify, or PayPal with NetSuite?",
    answer: "Yes, we reconcile all major payment platforms with NetSuite, ensuring your books are accurate and up to date."
  },
  {
    question: "Do you help with revenue recognition and ASC 606 compliance?",
    answer: "Absolutely. We help SaaS and subscription businesses implement and maintain ASC 606-compliant revenue recognition in NetSuite."
  },
  {
    question: "Can you work within our NetSuite environment, or do you export data?",
    answer: "We work directly within your NetSuite environment, maintaining data integrity and security. We can also export data as needed for your team or auditors."
  },
  {
    question: "Do you provide job costing or department-level reports?",
    answer: "Yes, we generate job costing, department, and project-level reports tailored to your business needs."
  },
  {
    question: "How secure is my NetSuite data with RemoteBooksOnline?",
    answer: "We use secure, encrypted connections and follow best practices for data privacy and compliance. Your NetSuite data remains protected at all times."
  },
  {
    question: "Do you support integrations with Salesforce, HubSpot, or NetSuite CRM?",
    answer: "Yes, we support and help manage integrations with Salesforce, HubSpot, and NetSuite CRM to streamline your workflows."
  },
  {
    question: "What's the cost of NetSuite bookkeeping?",
    answer: "Pricing depends on your business size and complexity. Contact us for a custom quote—our plans are flat-rate, with no hidden fees."
  },
  {
    question: "How fast can you get started?",
    answer: "We can typically onboard new NetSuite clients in 1-2 business days."
  },
  {
    question: "Do you provide tax-ready books or interface with our CPA?",
    answer: "Yes, we deliver tax-ready financials and work directly with your CPA or tax preparer as needed."
  },
  {
    question: "How do I start using RemoteBooksOnline with NetSuite?",
    answer: "Contact us for a free consultation. We'll review your needs, set up secure access, and get your books in order quickly."
  }
];

const NetsuiteFAQ = () => (
  <>
    <Header />
    {/* Banner Section */}
    <section className="relative w-full min-h-[320px] flex items-center bg-gradient-to-r from-[#21409a] to-blue-400 overflow-hidden">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-white z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">FAQ – NetSuite Bookkeeping Services</h1>
          <p className="mb-4 text-lg">Common questions and answers about our NetSuite bookkeeping services.</p>
          <a href="/about" className="inline-block bg-white text-[#21409a] font-semibold rounded px-6 py-3 shadow hover:bg-blue-100 transition">TALK TO A BOOKKEEPING EXPERT TODAY</a>
        </div>
        
      </div>
    </section>

    {/* Intro Paragraph */}
    <section className="bg-white py-4">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-700 max-w-3xl mx-auto">
          This FAQ page addresses the most common questions from businesses using or transitioning to NetSuite. Whether you’re already operating on NetSuite or just evaluating your bookkeeping options, this guide covers service features, technical capabilities, and onboarding.
        </p>
      </div>
    </section>

    {/* FAQ Accordion */}
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, i) => (
            <details key={i} className="mb-3 border rounded shadow-sm">
              <summary className="cursor-pointer font-semibold px-4 py-3 bg-gray-50 hover:bg-blue-50 transition">{faq.question}</summary>
              <div className="px-4 py-3 text-gray-700 border-t bg-white">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>

    

    {/* Why Small Businesses Trust Section */}
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Why Small Businesses Trust Remote Books Online</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <img src="https://www.remotebooksonline.com/images/fixed-price.webp" alt="Fixed Monthly Pricing" className="w-16 h-16 mb-2" />
            <span className="font-semibold">Fixed Monthly Pricing</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://www.remotebooksonline.com/images/secure.webp" alt="100% Secure & Compliant" className="w-16 h-16 mb-2" />
            <span className="font-semibold">100% Secure & Compliant</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://www.remotebooksonline.com/images/trust.webp" alt="Trusted by Thousands of Small Businesses" className="w-16 h-16 mb-2" />
            <span className="font-semibold">Trusted by Thousands of Small Businesses</span>
          </div>
        </div>
      </div>
    </section>

    {/* Call to Action Footer */}
    <footer className="bg-[#21409a] py-10 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2">Ready to Get Started?</h2>
        <p className="mb-2 text-lg">Try TopNotch Solutions free for 1 month. No contracts, no setup fees. Just reliable, professional bookkeeping.</p>
        <p className="mb-2">
          <strong>Call Now:</strong> <a href="tel:+919666736088" className="underline">+91 9666736088</a> | <strong>Email:</strong> <a href="mailto:info@topnotchsol.com" className="underline">info@topnotchsol.com</a>
        </p>
        <p className="text-gray-200 text-sm">&copy; 2025 Remote Books Online LLC. All rights reserved.</p>
      </div>
    </footer>
  </>
);

export default NetsuiteFAQ;
