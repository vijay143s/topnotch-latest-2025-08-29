import Header from "@/components/Header";
        <a
          href="/about"
          className="inline-block bg-[#1ec0f7] hover:bg-[#0ea5e9] text-white font-semibold rounded-lg px-6 py-3 shadow transition"
        >
          Start Your Free Month
        </a>
const overviewRows = [
  ["Core Focus", "Monthly Bookkeeping", "Tax Filing & Entry Setup"],
  ["Includes Bookkeeper", "Yes (in-house + CPA-reviewed)", "Yes (assigned, not CPA-reviewed)"],
  ["Monthly Financial Reports", "Yes, CPA-reviewed", "Yes (no CPA review)"],
  ["Catch-Up & Cleanup Services", "Yes", "Limited, extra cost"],
  ["Supports QuickBooks/Xero", "Yes", "Uses internal software"],
  ["First Month Free", "Yes", "No"],
  ["Contract Requirement", "No", "Yes (often annual)"],
  ["CPA Oversight", "Included monthly", "Typically tax only"],
];

const keyDifferences = [
  {
    title: "Built for Bookkeeping — Not Just Tax Filing",
    desc: "TopNotchSolutions specializes in accurate, CPA-reviewed monthly bookkeeping. Unlike 1-800Accountant, you’re not forced into bundled tax packages to get quality books.",
  },
  {
    title: "Flat Monthly Pricing — No Contracts",
    desc: "Our plans start at just $150/month with no hourly rates, surprise fees, or long-term commitments. 1-800Accountant pricing can vary based on bundled services.",
  },
  {
    title: "CPA Review Every Month",
    desc: "Each month, your financials are reviewed by a licensed CPA — ensuring accuracy and readiness. 1-800Accountant emphasizes tax prep, not monthly CPA oversight.",
  },
  {
    title: "Catch-Up and Cleanup Services Included",
    desc: "Whether you're months or years behind, we’ll clean up your books and get you on track. 1-800Accountant focuses on forward-looking tax work, not historical reconciliation.",
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
    text: "Pricing Overview",
    href: "https://www.remotebooksonline.com/pricing",
  },
];

const blogPosts = [
  {
    text: "How to Spot Red Flags in Online Bookkeeping Services",
    href: "https://www.remotebooksonline.com/blog/how-to-spot-red-flags-in-online-bookkeeping-services",
  },
  {
    text: "Why Startups and SMBs Are Switching from Pilot to RemoteBooksOnline",
    href: "https://www.remotebooksonline.com/blog/why-startups-and-smbs-are-switching-from-pilot-to-rbo",
  },
  {
    text: "Outgrowing Free Tools: When It’s Time to Switch Bookkeeping Providers",
    href: "https://www.remotebooksonline.com/blog/outgrowing-free-tools-bookkeeping-switch",
  },
];

const TopNotchSolutionsVs1800Accountant = () => (
  <>
    <Header />
    {/* Hero Section */}
    <section className="relative w-full min-h-[340px] flex items-center justify-center bg-[#21409a] overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 py-12 flex flex-col md:flex-row items-center md:items-end">
        <div className="md:w-1/2 text-white space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Comparing TopNotchSolutions to 1-800Accountant
          </h1>
          <p className="text-lg mb-4">
            Both TopNotchSolutions and 1-800Accountant offer outsourced financial services - but their focus is very different.
          </p>
          
        </div>
      </div>
    </section>

    {/* Overview */}
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <p className="mb-2 text-center text-gray-700 max-w-3xl mx-auto">
          <strong>1-800Accountant is primarily a tax prep company</strong> that bundles in bookkeeping as an add-on. The service connects you with a bookkeeper, but it's not designed around <strong>ongoing, CPA-reviewed monthly support</strong>.
        </p>
        <p className="mb-6 text-center text-gray-700 max-w-3xl mx-auto">
          <strong>TopNotchSolutions</strong>, on the other hand, is a dedicated <strong>bookkeeping service</strong> — delivering flat-rate, CPA-reviewed reports every month without requiring bundled tax prep or long-term contracts.
        </p>
        <h2 className="text-2xl font-bold text-center mb-6">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto max-w-2xl mx-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
            <thead>
              <tr className="bg-[#21409a] text-white">
                <th className="py-3 px-4 text-left font-semibold">Feature</th>
                <th className="py-3 px-4 font-semibold">TopNotchSolutions</th>
                <th className="py-3 px-4 font-semibold">1-800Accountant</th>
              </tr>
            </thead>
            <tbody>
              {overviewRows.map(([feature, tns, acc], i) => (
                <tr key={feature} className={i % 2 ? "bg-gray-50" : ""}>
                  <td className="py-2 px-4 font-medium">{feature}</td>
                  <td className="py-2 px-4">{tns}</td>
                  <td className="py-2 px-4">{acc}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2"><strong>Note:</strong> 1-800Accountant connects you to a bookkeeper, but most monthly work is not CPA-reviewed and not completed by an in-house bookkeeping team.</p>
        </div>
      </div>
    </section>

    {/* Key Differences */}
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          Why TopNotchSolutions May Be the Better Fit
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
        <h2 className="text-2xl font-bold mb-2">TopNotchSolutions is the better long-term fit</h2>
        <p className="mb-4">
          If you’re primarily looking for clean, CPA-reviewed books every month — without having to buy tax services you may not need.
        </p>
        <a
          href="#get-quote"
          className="inline-block bg-[#1ec0f7] hover:bg-[#0ea5e9] text-white font-semibold rounded-lg px-6 py-3 shadow transition"
        >
          Start Free
        </a>
      </div>
    </section>





    {/* Insights */}
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 text-center">
        Learn the key differences between bookkeeping and tax services in{' '}
        <a href="https://www.remotebooksonline.com/blog/remotebooksonline-vs-1800accountant" target="_blank" className="text-blue-700 hover:underline">
          this supporting blog
        </a>.
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

export default TopNotchSolutionsVs1800Accountant;
