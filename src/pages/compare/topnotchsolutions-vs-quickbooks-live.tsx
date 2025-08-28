import Header from "@/components/Header";

const heroDesktop =
  "https://www.remotebooksonline.com/images/nlp/compare-qb-banner.webp";
const heroMobile =
  "https://www.remotebooksonline.com/images/nlp/compare-qb-mobile-banner.webp";

const overviewRows = [
  ["Pricing", "Starts at $150/month", "Starts at $599/month"],
  ["First Month Free", "Yes", "No"],
  ["CPA-Reviewed Books", "Included in all plans", "Only available on CFO+ plans"],
  ["Supports QuickBooks/Xero", "Yes (both)", "QuickBooks Online only"],
  ["Catch-Up Bookkeeping", "Yes", "Yes, but high cost"],
  ["White-Label/Partner Options", "Yes", "No"],
  ["Real-Time Support", "Dedicated support team", "Yes, but rotating staff"],
  ["Custom Reporting", "Included", "Available on Premium plans"],
  ["Contract Requirement", "No", "Yes (annual commitment)"],
];

const keyDifferences = [
  {
    title: "Lower Monthly Cost — No Contracts",
    desc: "TopNotchSolutions offers a flat, affordable monthly rate — nearly 4x less than QuickBooks Live’s basic plan — with no long-term contracts and no hidden fees.",
  },
  {
    title: "CPA Review Comes Standard",
    desc: "Every TopNotchSolutions client receives monthly financial statements reviewed by a Certified Public Accountant — unlike QuickBooks Live, which charges extra for CPA-level review or doesn’t offer it at all.",
  },
  {
    title: "First Month Free",
    desc: "Start with TopNotchSolutions at no cost — your first month is completely free. With QuickBooks Live, you pay upfront before services even begin.",
  },
  {
    title: "More Flexible and Scalable",
    desc: "TopNotchSolutions supports businesses of all sizes and industries, whether you use QuickBooks or Xero. With optional white-label solutions and no platform lock-in, we scale as you grow — unlike QuickBooks Live’s software dependency.",
  },
  {
    title: "Flat Pricing — No Surprises",
    desc: "Our transparent, fixed monthly pricing doesn’t fluctuate with your transaction volume. QuickBooks Live’s pricing varies based on your activity, making budgeting unpredictable.",
  },
  {
    title: "Catch-Up & Cleanup Services",
    desc: "Falling behind? We offer dedicated catch-up and cleanup services. QuickBooks Live requires you to be fully caught up — or manage the backlog on your own before starting.",
  },
];

const relatedServices = [
  {
    text: "QuickBooks Cleanup",
    href: "https://www.remotebooksonline.com/quickbooks-cleanup",
  },
  {
    text: "Catch-Up Bookkeeping Services",
    href: "https://www.remotebooksonline.com/catch-up-bookkeeping",
  },
  {
    text: "Monthly Bookkeeping Services",
    href: "https://www.remotebooksonline.com/monthly-bookkeeping",
  },
  {
    text: "Compare Pricing",
    href: "https://www.remotebooksonline.com/pricing",
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

const TopNotchSolutionsVsQuickbooksLive = () => (
  <>
    <Header />
    {/* Hero Section */}
    <section className="relative w-full min-h-[340px] flex items-center justify-center bg-[#21409a] overflow-hidden">
      {/* Image removed as per request; section and text remain */}
      <div className="container mx-auto px-4 relative z-10 py-12 flex flex-col md:flex-row items-center md:items-end">
        <div className="md:w-1/2 text-white space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Comparing TopNotchSolutions to QuickBooks Live
          </h1>
          <p className="text-lg mb-4">
            See how TopNotchSolutions stacks up against QuickBooks Live in pricing, services, and features.
          </p>
          
        </div>
      </div>
    </section>

    {/* Overview */}
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <p className="mb-6 text-center text-gray-700 max-w-3xl mx-auto">
          Both TopNotchSolutions and QuickBooks Live offer online bookkeeping — but the experience, pricing, and flexibility are very different. If you’re looking for a bookkeeping solution with <strong>predictable pricing</strong>, <strong>CPA oversight</strong>, and <strong>support for more than just QuickBooks</strong>, here’s what you need to know.
        </p>
        <h2 className="text-2xl font-bold text-center mb-6">Side-by-Side Feature Comparison</h2>
        <div className="overflow-x-auto max-w-2xl mx-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
            <thead>
              <tr className="bg-[#21409a] text-white">
                <th className="py-3 px-4 text-left font-semibold">Feature</th>
                <th className="py-3 px-4 font-semibold">TopNotchSolutions</th>
                <th className="py-3 px-4 font-semibold">QuickBooks Live</th>
              </tr>
            </thead>
            <tbody>
              {overviewRows.map(([feature, tns, qbl], i) => (
                <tr key={feature} className={i % 2 ? "bg-gray-50" : ""}>
                  <td className="py-2 px-4 font-medium">{feature}</td>
                  <td className="py-2 px-4">{tns}</td>
                  <td className="py-2 px-4">{qbl}</td>
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
        <h2 className="text-2xl font-bold mb-2">TopNotchSolutions is built for you. No contracts. First month free.</h2>
        <p className="mb-4">
          If you want simple pricing, CPA-reviewed reports, and long-term support — not just access to QuickBooks help.
        </p>
        <a
          href="/about"
          className="inline-block bg-[#1ec0f7] hover:bg-[#0ea5e9] text-white font-semibold rounded-lg px-6 py-3 shadow transition"
        >
          Start Your Free Month
        </a>
      </div>
    </section>





    {/* Insights */}
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 text-center">
        Need a deeper dive?{' '}
        <a href="https://www.remotebooksonline.com/blog/remotebooksonline-vs-quickbooks-live" target="_blank" className="text-blue-700 hover:underline">
          Here's our blog
        </a>{' '}
        on how flat-rate bookkeeping with CPA review compares to hourly models.
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

export default TopNotchSolutionsVsQuickbooksLive;
