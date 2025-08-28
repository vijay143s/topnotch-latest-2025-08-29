import Header from "@/components/Header";

const heroDesktop =
  "https://www.remotebooksonline.com/images/nlp/compare-xero-banner.webp";
const heroMobile =
  "https://www.remotebooksonline.com/images/nlp/compare-xero-mobile-banner.webp";

const overviewRows = [
  ["What It Is", "Bookkeeping Service", "Accounting Software"],
  ["Starting Price", "$150/month (with CPA review)", "$13–$70/month (software only)"],
  ["Includes Bookkeeper", "Yes", "No"],
  ["CPA Review Included", "Yes", "No"],
  ["Cleanup / Catch-Up Services", "Yes", "No"],
  ["Software Access", "Works with Xero or QuickBooks", "Xero-only"],
  ["Customer Support", "Dedicated team + CPA oversight", "Ticket/email only"],
  ["Custom Reporting", "Yes", "Self-service only"],
];

const keyDifferences = [
  {
    title: "Xero is Software — We're a Full-Service Solution",
    desc: "Xero is a DIY accounting tool. TopNotchSolutions is a done-for-you bookkeeping service — we handle the work so you don’t have to.",
  },
  {
    title: "We Work Directly in Xero",
    desc: "Already using Xero? Perfect. We’ll connect directly to your account, handle reconciliations, and deliver monthly reports — no need to switch platforms.",
  },
  {
    title: "CPA Review Comes Standard",
    desc: "With TopNotchSolutions, your monthly financials are reviewed by a licensed CPA. Xero offers the software, but not the professional oversight — unless you hire outside help.",
  },
  {
    title: "Behind on Your Books? We’ve Got You",
    desc: "TopNotchSolutions offers catch-up and cleanup services to bring your books current. Xero gives you the tools — but not the team to do the work for you.",
  },
];

const relatedServices = [
  {
    text: "Monthly Bookkeeping Services",
    href: "https://www.remotebooksonline.com/monthly-bookkeeping",
  },
  {
    text: "QuickBooks and Xero Cleanup",
    href: "https://www.remotebooksonline.com/quickbooks-cleanup",
  },
  {
    text: "Catch-Up Bookkeeping Services",
    href: "https://www.remotebooksonline.com/catch-up-bookkeeping",
  },
  {
    text: "Compare Pricing Plans",
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

const TopNotchSolutionsVsXero = () => (
  <>
    <Header />
    {/* Hero Section */}
    <section className="relative w-full min-h-[340px] flex items-center justify-center bg-[#21409a] overflow-hidden">
      {/* Image removed as per request; section and text remain */}
      <div className="container mx-auto px-4 relative z-10 py-12 flex flex-col md:flex-row items-center md:items-end">
        <div className="md:w-1/2 text-white space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Comparing TopNotchSolutions to Xero
          </h1>
          <p className="text-lg mb-4">
            See how TopNotchSolutions stacks up against Xero in pricing, services, and features.
          </p>
          
        </div>
      </div>
    </section>

    {/* Overview */}
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <p className="mb-6 text-center text-gray-700 max-w-3xl mx-auto">
          <strong>TopNotchSolutions</strong> and <strong>Xero</strong> are often mentioned together — but they’re not direct competitors. Xero is accounting software. TopNotchSolutions is a <strong>bookkeeping service</strong> that can work inside Xero. Still, people searching for alternatives or evaluating platforms ask: “Which should I use?”
        </p>
        <h2 className="text-2xl font-bold text-center mb-6">Side-by-Side Feature Comparison</h2>
        <div className="overflow-x-auto max-w-2xl mx-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
            <thead>
              <tr className="bg-[#21409a] text-white">
                <th className="py-3 px-4 text-left font-semibold">Feature</th>
                <th className="py-3 px-4 font-semibold">TopNotchSolutions</th>
                <th className="py-3 px-4 font-semibold">Xero</th>
              </tr>
            </thead>
            <tbody>
              {overviewRows.map(([feature, tns, xero], i) => (
                <tr key={feature} className={i % 2 ? "bg-gray-50" : ""}>
                  <td className="py-2 px-4 font-medium">{feature}</td>
                  <td className="py-2 px-4">{tns}</td>
                  <td className="py-2 px-4">{xero}</td>
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
        <h2 className="text-2xl font-bold mb-2">First month free. CPA-reviewed. Works with Xero.</h2>
        <p className="mb-4">
          Xero is great software. TopNotchSolutions is a great service. If you want a <strong>hands-off bookkeeping solution that works with Xero</strong>, choose us. If you want to do it yourself, Xero is a solid platform.
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
        <a href="https://www.remotebooksonline.com/blog/remotebooksonline-vs-xero" target="_blank" className="text-blue-700 hover:underline">
          Check out our post</a> explaining the difference between bookkeeping software and full-service bookkeeping.
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

export default TopNotchSolutionsVsXero;
