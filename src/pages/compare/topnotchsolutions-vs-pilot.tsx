import Header from "@/components/Header";
        <a
          href="/about"
          className="inline-block bg-[#1ec0f7] hover:bg-[#0ea5e9] text-white font-semibold rounded-lg px-6 py-3 shadow transition"
        >
          Start Your Free Month
        </a>
const overviewRows = [
  ["Starting Price", "$150/month", "$599/month and up"],
  ["CPA Review Included", "Yes", "Only on CFO+ plans"],
  ["First Month Free", "Yes", "No"],
  ["Catch-Up Services", "Yes", "Offered, but high cost"],
  ["QuickBooks/Xero Support", "Yes (both)", "QuickBooks Online only"],
  ["White-Label Option", "Yes", "No"],
  ["Dedicated Support", "Yes", "Yes (but rotating staff)"],
  ["Custom Reporting", "Included", "Premium only"],
  ["Contract Required", "No", "Yes (annual commitment)"],
];

const keyDifferences = [
  {
    title: "Lower Monthly Cost — No Contracts",
    desc: "Pilot’s basic bookkeeping plan starts at nearly 4x the cost of TopNotchSolutions — and still doesn’t include CPA review.",
  },
  {
    title: "CPA Review Included",
    desc: "Every TopNotchSolutions client gets monthly financials reviewed by a licensed CPA. With Pilot, you’ll need to upgrade to CFO-level service for that.",
  },
  {
    title: "First Month Free",
    desc: "Try TopNotchSolutions with no upfront cost. Pilot requires payment before onboarding begins.",
  },
  {
    title: "Flexible and Scalable",
    desc: "Pilot’s model is tailored to tech startups. TopNotchSolutions supports real businesses across all industries, with no platform lock-in and optional white-label options for firms.",
  },
];

const relatedServices = [
  {
    text: "Catch-Up Bookkeeping",
    href: "https://www.remotebooksonline.com/catch-up-bookkeeping",
  },
  {
    text: "Monthly Bookkeeping Services",
    href: "https://www.remotebooksonline.com/monthly-bookkeeping",
  },
  {
    text: "Pricing Overview",
    href: "https://www.remotebooksonline.com/pricing",
  },
  {
    text: "White-Label Bookkeeping",
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

const TopNotchSolutionsVsPilot = () => (
  <>
    <Header />
    {/* Hero Section */}
    <section className="relative w-full min-h-[340px] flex items-center justify-center bg-[#21409a] overflow-hidden">
      {/* Image removed as per request; section and text remain */}
      <div className="container mx-auto px-4 relative z-10 py-12 flex flex-col md:flex-row items-center md:items-end">
        <div className="md:w-1/2 text-white space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Comparing TopNotchSolutions to Pilot
          </h1>
          <p className="text-lg mb-4">
            See how TopNotchSolutions stacks up against Pilot in pricing, services, and features.
          </p>
          
        </div>
      </div>
    </section>

    {/* Overview */}
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <p className="mb-6 text-center text-gray-700 max-w-3xl mx-auto">
          Pilot and TopNotchSolutions both offer outsourced bookkeeping services — but they serve very different customers. If you're a small business looking for accurate, CPA-reviewed bookkeeping without paying a startup premium, this comparison is for you.
        </p>
        <h2 className="text-2xl font-bold text-center mb-6">Side-by-Side Feature Comparison</h2>
        <div className="overflow-x-auto max-w-2xl mx-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
            <thead>
              <tr className="bg-[#21409a] text-white">
                <th className="py-3 px-4 text-left font-semibold">Feature</th>
                <th className="py-3 px-4 font-semibold">TopNotchSolutions</th>
                <th className="py-3 px-4 font-semibold">Pilot</th>
              </tr>
            </thead>
            <tbody>
              {overviewRows.map(([feature, tns, pilot], i) => (
                <tr key={feature} className={i % 2 ? "bg-gray-50" : ""}>
                  <td className="py-2 px-4 font-medium">{feature}</td>
                  <td className="py-2 px-4">{tns}</td>
                  <td className="py-2 px-4">{pilot}</td>
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
          Key Reasons to Choose TopNotchSolutions Over Pilot
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
        <h2 className="text-2xl font-bold mb-2">Flat-rate pricing. No contract. First month free.</h2>
        <p className="mb-4">
          Pilot may work for VC-backed startups, but TopNotchSolutions is built for real small businesses that want clean, CPA-reviewed books without inflated pricing.
        </p>
        <a
          href="#get-quote"
          className="inline-block bg-[#1ec0f7] hover:bg-[#0ea5e9] text-white font-semibold rounded-lg px-6 py-3 shadow transition"
        >
          Try TopNotchSolutions
        </a>
      </div>
    </section>





    {/* Insights */}
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 text-center">
        <a href="https://www.remotebooksonline.com/blog/remotebooksonline-vs-pilot" target="_blank" className="text-blue-700 hover:underline">
          This blog outlines
        </a>{' '}
        why CPA review matters - even if you're using software like Xero or working with Pilot.
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

export default TopNotchSolutionsVsPilot;
