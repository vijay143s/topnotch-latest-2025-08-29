import Header from "@/components/Header";

const heroDesktop =
  "https://www.remotebooksonline.com/images/nlp/compare-bench-banner.webp";
const heroMobile =
  "https://www.remotebooksonline.com/images/nlp/compare-bench-mobile-banner.webp";

const overviewRows = [
  ["Pricing", "Starts at $150/month", "Starts at $299/month"],
  ["First Month Free", "Yes", "No"],
  ["CPA-Reviewed Books", "Included in all plans", "No (add-on with BenchTax only)"],
  ["Supports QuickBooks/Xero", "Yes (both)", "No (proprietary software only)"],
  ["Catch-Up Bookkeeping", "Yes, flat-rate and scalable", "Limited, priced separately"],
  ["White-Label/Partner Options", "Yes", "No"],
  ["Owns Your Books", "Yes (you keep all records)", "No QBO/Xero export by default"],
  ["Real-Time Support", "Phone, Email, Portal", "Email & chat only"],
  ["Industry Flexibility", "All industries supported", "Limited to cash-based service"],
];

const keyReasons = [
  {
    title: "CPA Review Included",
    desc: "Every month, your books are reviewed by a licensed CPA — included in your flat-rate pricing.",
  },
  {
    title: "Keep Using QuickBooks or Xero",
    desc: "No need to learn new software. We work inside your existing QuickBooks or Xero setup, so your CPA/tax preparer stays in sync.",
  },
  {
    title: "More Affordable",
    desc: "Bench starts at nearly double our entry-level price — and doesn't include CPA review unless bundled with their tax package.",
  },
  {
    title: "Catch-Up Bookkeeping Experts",
    desc: "If you're behind, we’ll clean up and reconcile your books affordably — whether it’s 3 months or 3 years.",
  },
  {
    title: "We Scale With You",
    desc: "Solo entrepreneur? 20-entity firm? We’ve got a bookkeeping team model and white-label option to match your growth.",
  },
];

const resources = [
  {
    text: "Learn about our Monthly Bookkeeping Services",
    href: "https://www.remotebooksonline.com/monthly-bookkeeping",
  },
  {
    text: "Behind on books? Explore Catch-Up Bookkeeping",
    href: "https://www.remotebooksonline.com/catch-up-bookkeeping",
  },
  {
    text: "See our full Pricing Breakdown",
    href: "https://www.remotebooksonline.com/pricing",
  },
  {
    text: "View our White-Label Bookkeeping partner program",
    href: "https://www.remotebooksonline.com/white-label-bookkeeping",
  },
];

const blogPosts = [
  {
    text: "Why Most SMBs Overpay for Bookkeeping Tech They Don’t Use",
    href: "https://www.remotebooksonline.com/blog/why-most-smbs-overpay-for-bookkeeping-tech",
  },
  {
    text: "Do You Need a CFO or Just a Great Bookkeeper?",
    href: "https://www.remotebooksonline.com/blog/do-you-need-a-cfo-or-just-a-great-bookkeeper",
  },
  {
    text: "When Basic Bookkeeping Isn’t Enough",
    href: "https://www.remotebooksonline.com/blog/when-basic-bookkeeping-isnt-enough",
  },
];

const RemoteBooksOnlineVsBench = () => (
  <>
    <Header />
    {/* Hero Section */}
    <section className="relative w-full min-h-[340px] flex items-center justify-center bg-[#21409a] overflow-hidden">
      {/* Image removed as per request; section and text remain */}
      <div className="container mx-auto px-4 relative z-10 py-12 flex flex-col md:flex-row items-center md:items-end">
        <div className="md:w-1/2 text-white space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Compare: RemoteBooksOnline vs Bench
          </h1>
          <p className="text-lg mb-4">
            See how RemoteBooksOnline stacks up against Bench in pricing, services, and features.
          </p>
          
        </div>
      </div>
    </section>

    {/* Overview */}
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <p className="mb-6 text-center text-gray-700 max-w-3xl mx-auto">
          Choosing the right bookkeeping partner is critical for your business. If you're comparing <strong>Bench</strong> and <strong>RemoteBooksOnline</strong>, here’s a side-by-side breakdown to help you make the most informed decision - based on features, support, pricing, and flexibility.
        </p>
        <h2 className="text-2xl font-bold text-center mb-6">Quick Overview</h2>
        <div className="overflow-x-auto max-w-2xl mx-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
            <thead>
              <tr className="bg-[#21409a] text-white">
                <th className="py-3 px-4 text-left font-semibold">Feature</th>
                <th className="py-3 px-4 font-semibold">RemoteBooksOnline</th>
                <th className="py-3 px-4 font-semibold">Bench</th>
              </tr>
            </thead>
            <tbody>
              {overviewRows.map(([feature, rbo, bench], i) => (
                <tr key={feature} className={i % 2 ? "bg-gray-50" : ""}>
                  <td className="py-2 px-4 font-medium">{feature}</td>
                  <td className="py-2 px-4">{rbo}</td>
                  <td className="py-2 px-4">{bench}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* Key Reasons */}
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          Key Reasons to Choose RemoteBooksOnline Over Bench
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {keyReasons.map((reason) => (
            <div key={reason.title} className="bg-white rounded-lg shadow p-6">
              <h4 className="font-bold mb-2">{reason.title}</h4>
              <p className="text-gray-700">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Still Not Sure */}
    <section className="bg-[#21409a] py-10 text-center text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2">Still Not Sure?</h2>
        <p className="mb-4">
          Start with your <strong>first month free</strong>. No contracts. No software to install. Just clean, CPA-reviewed financials delivered monthly.
        </p>
        <a
          href="#get-quote"
          className="inline-block bg-[#1ec0f7] hover:bg-[#0ea5e9] text-white font-semibold rounded-lg px-6 py-3 shadow transition"
        >
          Start Now
        </a>
      </div>
    </section>

    {/* Helpful Resources */}
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Helpful Resources</h2>
        <div className="max-w-2xl mx-auto bg-gray-50 rounded-lg shadow p-6">
          <ul className="space-y-3">
            {resources.map((r) => (
              <li key={r.href} className="flex items-center gap-2">
                <img src="https://www.remotebooksonline.com/images/nlp/tick.webp" alt="" width={24} height={24} />
                <a href={r.href} className="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">
                  {r.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>



    {/* Call to Action */}
    <section className="bg-[#21409a] py-10 text-center text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2">Ready to Get Started?</h2>
        <p className="mb-4">
          Try RemoteBooksOnline free for 1 month. No contracts, no setup fees. Just reliable, professional bookkeeping.
        </p>
        <p>
          <strong>Call Now:</strong> <a href="tel:+919666736088" className="underline">+91 9666736088</a> | <strong>Email:</strong> <a href="mailto:info@topnotchsol.com" className="underline">info@topnotchsol.com</a>
        </p>
      </div>
    </section>
  </>
);

export default RemoteBooksOnlineVsBench;