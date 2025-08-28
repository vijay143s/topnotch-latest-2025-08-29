import Header from "@/components/Header";

const heroDesktop =
  "https://www.remotebooksonline.com/images/nlp/compare-merritt-banner.webp";
const heroMobile =
  "https://www.remotebooksonline.com/images/nlp/compare-merritt-mobile-banner.webp";

const overviewRows = [
  ["Starting Price", "$150/month", "$190/month"],
  ["CPA Review Included", "Yes", "No"],
  ["Supports QuickBooks & Xero", "Yes", "QuickBooks Desktop only"],
  ["Catch-Up Services", "Yes", "No"],
  ["Custom Reporting", "Yes", "Limited"],
  ["White-Label Option", "Yes", "No"],
  ["First Month Free", "Yes", "No"],
  ["Customer Support", "Phone, email, portal", "Email only"],
  ["Scales with Business", "Yes", "Basic plan only"],
];

const keyDifferences = [
  {
    title: "CPA Review Comes Standard",
    desc: "Merritt doesn’t include CPA oversight — TopNotchSolutions does. Your monthly financials are reviewed by a licensed CPA to ensure accuracy, compliance, and tax-readiness.",
  },
  {
    title: "Catch-Up Services Available",
    desc: "TopNotchSolutions offers full catch-up and cleanup services to bring your books up to date. Merritt does not provide support for past-due or historical bookkeeping.",
  },
  {
    title: "Flexible and Scalable",
    desc: "We work with businesses of all types — from sole proprietors to multi-entity organizations — and even offer white-label and partnership options for accounting firms. Merritt's scope is limited to basic small business needs.",
  },
  {
    title: "Supports QuickBooks and Xero",
    desc: "TopNotchSolutions works with both QuickBooks (Online and Desktop) and Xero. Merritt only supports QuickBooks Desktop, which limits cloud-based flexibility and platform compatibility.",
  },
];

const relatedServices = [
  {
    text: "Catch-Up Bookkeeping Services",
    href: "https://www.remotebooksonline.com/catch-up-bookkeeping",
  },
  {
    text: "Monthly Bookkeeping Services",
    href: "https://www.remotebooksonline.com/monthly-bookkeeping",
  },
  {
    text: "Pricing Plans",
    href: "https://www.remotebooksonline.com/pricing",
  },
  {
    text: "White-Label Bookkeeping",
    href: "https://www.remotebooksonline.com/white-label-bookkeeping",
  },
];

const blogPosts = [
  {
    text: "The Hidden Costs of QuickBooks Live Bookkeeping",
    href: "https://www.remotebooksonline.com/blog/hidden-costs-of-quickbooks-live-bookkeeping",
  },
  {
    text: "The Cost of Switching Bookkeepers Every Year",
    href: "https://www.remotebooksonline.com/blog/cost-of-switching-bookkeepers-every-year",
  },
  {
    text: "AI vs CPA: Who Should You Trust with Your Books?",
    href: "https://www.remotebooksonline.com/blog/ai-vs-cpa-bookkeeping",
  },
];

const TopNotchSolutionsVsMerritt = () => (
  <>
    <Header />
    {/* Hero Section */}
    <section className="relative w-full min-h-[340px] flex items-center justify-center bg-[#21409a] overflow-hidden">
      {/* Image removed as per request; section and text remain */}
      <div className="container mx-auto px-4 relative z-10 py-12 flex flex-col md:flex-row items-center md:items-end">
        <div className="md:w-1/2 text-white space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Comparing TopNotchSolutions to Merritt Bookkeeping
          </h1>
          <p className="text-lg mb-4">
            Both TopNotchSolutions and Merritt offer outsourced financial services - but their focus is very different.
          </p>
          
        </div>
      </div>
    </section>

    {/* Overview */}
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <p className="mb-2 text-center text-gray-700 max-w-3xl mx-auto">
          Merritt Bookkeeping is known for its <strong>simplicity and affordability</strong>, offering a $190/month flat-rate plan. But that simplicity comes with trade-offs - no CPA review, no catch-up bookkeeping, and limited customization.
        </p>
        <p className="mb-6 text-center text-gray-700 max-w-3xl mx-auto">
          <strong>TopNotchSolutions</strong> offers a full-service, CPA-reviewed experience - still at an affordable monthly price, starting at just $150/month. Here's how they compare:
        </p>
        <h2 className="text-2xl font-bold text-center mb-6">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto max-w-2xl mx-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
            <thead>
              <tr className="bg-[#21409a] text-white">
                <th className="py-3 px-4 text-left font-semibold">Feature</th>
                <th className="py-3 px-4 font-semibold">TopNotchSolutions</th>
                <th className="py-3 px-4 font-semibold">Merritt Bookkeeping</th>
              </tr>
            </thead>
            <tbody>
              {overviewRows.map(([feature, tns, merritt], i) => (
                <tr key={feature} className={i % 2 ? "bg-gray-50" : ""}>
                  <td className="py-2 px-4 font-medium">{feature}</td>
                  <td className="py-2 px-4">{tns}</td>
                  <td className="py-2 px-4">{merritt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* Key Differences */}
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          Key Differences
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {keyDifferences.map((reason) => (
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
        <h2 className="text-2xl font-bold mb-2">First month free. No contracts. Dedicated support.</h2>
        <p className="mb-4">
          Merritt is great if you're already caught up and want a hands-off QuickBooks Desktop experience. If you need <strong>CPA-reviewed books</strong>, <strong>catch-up help</strong>, or more flexibility — TopNotchSolutions is built for you.
        </p>
        <a
          href="/about"
          className="inline-block bg-[#1ec0f7] hover:bg-[#0ea5e9] text-white font-semibold rounded-lg px-6 py-3 shadow transition"
        >
          Start Your Free Month
        </a>
      </div>
    </section>





    {/* Call to Action */}
    <section className="bg-[#21409a] py-10 text-center text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2">Ready to Get Started?</h2>
        <p className="mb-4">
          Try TopNotchSolutions free for 1 month. No contracts, no setup fees. Just reliable, professional bookkeeping.
        </p>
        <p>
          <strong>Call Now:</strong> <a href="tel:+919666736088" className="underline">+91 9666736088</a> | <strong>Email:</strong> <a href="mailto:info@topnotchsol.com" className="underline">info@topnotchsol.com</a>
        </p>
      </div>
    </section>
  </>
);

export default TopNotchSolutionsVsMerritt;
