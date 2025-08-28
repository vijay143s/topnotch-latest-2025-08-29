import Header from "@/components/Header";

const heroDesktop =
  "https://www.remotebooksonline.com/images/nlp/compare-wave-banner.webp";
const heroMobile =
  "https://www.remotebooksonline.com/images/nlp/compare-wave-mobile-banner.webp";

const overviewRows = [
  ["What It Is", "Bookkeeping Service", "DIY Software"],
  ["Starting Price", "$150/month", "Free"],
  ["Includes Bookkeeper", "Yes", "No"],
  ["CPA Review Included", "Yes", "No"],
  ["Catch-Up Services", "Yes", "No"],
  ["Custom Reporting", "Yes", "Limited / self-serve"],
  ["Software Required", "None (we use QBO/Xero)", "Web-based app only"],
  ["Support Model", "Dedicated team + CPA oversight", "Ticket/email"],
];

const keyDifferences = [
  {
    title: "Wave is Free — But You Do the Work",
    desc: "Wave gives you bookkeeping tools, but you’re responsible for all the data entry, reconciliations, and reports. TopNotchSolutions handles everything for you — so you can focus on your business.",
  },
  {
    title: "CPA Review You Can Rely On",
    desc: "With Wave, your reports are only as good as your inputs — and there's no CPA oversight. TopNotchSolutions delivers accurate, CPA-reviewed financials every month, ensuring you're always tax-ready.",
  },
  {
    title: "We Catch You Up — Wave Can’t",
    desc: "If you're behind, Wave has no team to help. TopNotchSolutions offers catch-up and cleanup services, getting your books in order and keeping them that way.",
  },
  {
    title: "Flat Pricing, Real Human Support",
    desc: "TopNotchSolutions offers predictable monthly pricing and dedicated support from real people — not just help articles or automated responses like Wave.",
  },
];

const relatedServices = [
  {
    text: "Monthly Bookkeeping Services",
    href: "https://www.remotebooksonline.com/monthly-bookkeeping",
  },
  {
    text: "Catch-Up Bookkeeping Services",
    href: "https://www.remotebooksonline.com/catch-up-bookkeeping",
  },
  {
    text: "QuickBooks Cleanup",
    href: "https://www.remotebooksonline.com/quickbooks-cleanup",
  },
  {
    text: "Pricing Plans",
    href: "https://www.remotebooksonline.com/pricing",
  },
];

const blogPosts = [
  {
    text: "What CPA-Reviewed Bookkeeping Really Means",
    href: "https://www.remotebooksonline.com/blog/what-cpa-reviewed-bookkeeping-really-means",
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

const TopNotchSolutionsVsWave = () => (
  <>
    <Header />
    {/* Hero Section */}
    <section className="relative w-full min-h-[340px] flex items-center justify-center bg-[#21409a] overflow-hidden">
      {/* Image removed as per request; section and text remain */}
      <div className="container mx-auto px-4 relative z-10 py-12 flex flex-col md:flex-row items-center md:items-end">
        <div className="md:w-1/2 text-white space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Comparing TopNotchSolutions to Wave
          </h1>
          <p className="text-lg mb-4">
            See how TopNotchSolutions stacks up against Wave in pricing, services, and features.
          </p>
          
        </div>
      </div>
    </section>

    {/* Overview */}
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <p className="mb-2 text-center text-gray-700 max-w-3xl mx-auto">
          <strong>Wave</strong> is free accounting software for small businesses. <strong>TopNotchSolutions</strong> is a full-service, CPA-reviewed bookkeeping solution. They serve different needs — but many business owners compare them when deciding how to manage their books.
        </p>
        <p className="mb-6 text-center text-gray-700 max-w-3xl mx-auto">
          If you’re choosing between <strong>doing it yourself with Wave</strong> or <strong>outsourcing your books to a team of professionals</strong>, here’s what you should know.
        </p>
        <h2 className="text-2xl font-bold text-center mb-6">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto max-w-2xl mx-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
            <thead>
              <tr className="bg-[#21409a] text-white">
                <th className="py-3 px-4 text-left font-semibold">Feature</th>
                <th className="py-3 px-4 font-semibold">TopNotchSolutions</th>
                <th className="py-3 px-4 font-semibold">Wave</th>
              </tr>
            </thead>
            <tbody>
              {overviewRows.map(([feature, tns, wave], i) => (
                <tr key={feature} className={i % 2 ? "bg-gray-50" : ""}>
                  <td className="py-2 px-4 font-medium">{feature}</td>
                  <td className="py-2 px-4">{tns}</td>
                  <td className="py-2 px-4">{wave}</td>
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
        <h2 className="text-2xl font-bold mb-2">Try it free. Get caught up. Stay accurate.</h2>
        <p className="mb-4">
          Wave is great if you want to do your own bookkeeping and have time to manage it. If you’d rather have a team do it for you - and ensure it's CPA-reviewed - TopNotchSolutions is the smarter choice.
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

export default TopNotchSolutionsVsWave;
