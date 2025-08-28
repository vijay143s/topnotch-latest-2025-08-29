import Header from "@/components/Header";

const CHECK_ICON = (
  <img
    src="https://www.remotebooksonline.com/images/nlp/tick.webp"
    alt="tick"
    loading="lazy"
    width={30}
    height={30}
    className="inline-block mr-2 align-middle"
  />
);

const NetSuiteVsQuickBooks = () => (
  <>
    <Header />
    <main className="bg-white">
      {/* Hero Section */}
      <section className="w-full min-h-[320px] flex items-center bg-[#21419a]">
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              Comparing NetSuite vs QuickBooks
            </h1>
            <p className="mb-4 text-lg font-medium">
              Explore the differences between NetSuite and QuickBooks in terms of pricing, features, scalability, and support to find the right fit for your business.
            </p>
            <div className="flex md:hidden mb-4">
              <button className="btn btn-primary bg-[#21409a] text-white px-6 py-2 rounded" onClick={() => window.scrollTo({top: 9999, behavior: 'smooth'})}>
                Call Me Back
              </button>
            </div>
            {/* 'Get a Free Quote' button removed as requested */}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-6">Choosing the Right Accounting System for Growing Businesses</h2>
          <p>As your business scales, bookkeeping complexity increases—and so does the need for better systems. QuickBooks may work well for startups and small businesses, but NetSuite is often the next step for companies expanding into multi-entity operations, international markets, or subscription billing.</p>
          <p>In this detailed comparison, we break down the key differences between NetSuite and QuickBooks from a bookkeeping perspective, so you can choose the best fit for your current stage.</p>
        </div>
      </section>

      {/* Side-by-Side Feature Comparison */}
      <section className="py-10 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-6">Side-by-Side Feature Comparison</h2>
          <div className="max-w-3xl mx-auto bg-white rounded shadow p-4">
            <div className="overflow-x-auto">
              <table className="min-w-full border text-sm">
                <thead>
                  <tr className="bg-[#21409a] text-white">
                    <th className="text-left p-2">Feature</th>
                    <th className="text-left p-2">NetSuite</th>
                    <th className="text-left p-2">QuickBooks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Target User</td>
                    <td className="p-2">Mid-size to Enterprise</td>
                    <td className="p-2">Small to Mid-size Businesses</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Multi-Entity Support</td>
                    <td className="p-2">Native, Built-in</td>
                    <td className="p-2">Requires separate files or add-ons</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Revenue Recognition</td>
                    <td className="p-2">ASC 606 compliant out-of-the-box</td>
                    <td className="p-2">Manual or App-Dependent</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Global Capabilities</td>
                    <td className="p-2">Multi-currency, multi-tax, localized</td>
                    <td className="p-2">Limited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Custom Reports</td>
                    <td className="p-2">Highly customizable</td>
                    <td className="p-2">Standard only (unless upgraded)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Inventory & Manufacturing</td>
                    <td className="p-2">Deep, native integration</td>
                    <td className="p-2">Basic with 3rd-party apps</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Subscription Billing</td>
                    <td className="p-2">Native with modules</td>
                    <td className="p-2">Requires integration apps</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Scalability</td>
                    <td className="p-2">High</td>
                    <td className="p-2">Medium</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Implementation Time</td>
                    <td className="p-2">Weeks to months</td>
                    <td className="p-2">Hours to days</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Cost</td>
                    <td className="p-2">$$$ (ERP pricing)</td>
                    <td className="p-2">$ to $$ (Affordable tiers)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Use QuickBooks? */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-6">Who Should Use QuickBooks?</h2>
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="bg-white rounded shadow p-4 flex-1 min-w-[250px]">
              <h4 className="font-bold mb-2">QuickBooks is ideal for</h4>
              <ul className="space-y-2">
                <li>{CHECK_ICON} Freelancers and solopreneurs</li>
                <li>{CHECK_ICON} Local service-based businesses</li>
                <li>{CHECK_ICON} Retail or simple ecommerce</li>
                <li>{CHECK_ICON} Teams without dedicated accounting staff</li>
              </ul>
            </div>
            <div className="bg-white rounded shadow p-4 flex-1 min-w-[250px]">
              <h4 className="font-bold mb-2">Best use cases include</h4>
              <ul className="space-y-2">
                <li>{CHECK_ICON} Basic invoicing and expense tracking</li>
                <li>{CHECK_ICON} Tax prep with Schedule C or 1120S</li>
                <li>{CHECK_ICON} Bank and credit card reconciliation</li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded shadow p-4 max-w-2xl mx-auto">
            <h4 className="font-bold mb-2">Limitations</h4>
            <ul className="space-y-2">
              <li>{CHECK_ICON} Not ideal for complex reporting, global expansion, or deferred revenue tracking</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who Should Use NetSuite? */}
      <section className="py-10 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-6">Who Should Use NetSuite?</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="bg-white rounded shadow p-4 flex-1 min-w-[250px]">
              <h4 className="font-bold mb-2">QuickBooks is ideal for</h4>
              <ul className="space-y-2">
                <li>{CHECK_ICON} SaaS companies needing ASC 606 compliance</li>
                <li>{CHECK_ICON} Ecommerce brands scaling internationally</li>
                <li>{CHECK_ICON} Multi-location or multi-entity businesses</li>
                <li>{CHECK_ICON} Venture-funded startups with investor reporting needs</li>
                <li>{CHECK_ICON} Complex approval workflows or intercompany consolidation</li>
              </ul>
            </div>
            <div className="bg-white rounded shadow p-4 flex-1 min-w-[250px]">
              <h4 className="font-bold mb-2">Best use cases include</h4>
              <ul className="space-y-2">
                <li>{CHECK_ICON} Monthly consolidated reporting by entity</li>
                <li>{CHECK_ICON} Revenue tracking by contract, location, and product</li>
                <li>{CHECK_ICON} Deferred income and prepaid expenses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bookkeeping Differences */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-6">Bookkeeping Differences: NetSuite vs QuickBooks</h2>
          <div className="flex flex-col md:flex-row md:flex-wrap gap-6">
            <div className="bg-white rounded shadow p-4 flex-1 min-w-[250px]">
              <h4 className="font-bold mb-2">Bank Reconciliation</h4>
              <p><strong>QuickBooks:</strong> Bank feeds and reconciliation tools are straightforward</p>
              <p><strong>NetSuite:</strong> Supports complex cash management across multiple entities</p>
            </div>
            <div className="bg-white rounded shadow p-4 flex-1 min-w-[250px]">
              <h4 className="font-bold mb-2">Chart of Accounts</h4>
              <p><strong>QuickBooks:</strong> One chart per company</p>
              <p><strong>NetSuite:</strong> Can support a global chart or subsidiary-specific COAs</p>
            </div>
            <div className="bg-white rounded shadow p-4 flex-1 min-w-[250px]">
              <h4 className="font-bold mb-2">Revenue Recognition</h4>
              <p><strong>QuickBooks:</strong> Requires 3rd-party apps or manual tracking</p>
              <p><strong>NetSuite:</strong> Native modules support compliance and automation</p>
            </div>
            <div className="bg-white rounded shadow p-4 flex-1 min-w-[250px]">
              <h4 className="font-bold mb-2">Expense Categorization</h4>
              <p><strong>Both:</strong> Offer clear expense tagging</p>
              <p><strong>NetSuite:</strong> Supports approval workflows, vendor records, and more granular project tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Verdict */}
      <section className="py-10 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-6">Final Verdict: Which One is Right for You?</h2>
          <div className="max-w-3xl mx-auto bg-white rounded shadow p-4">
            <h4 className="font-bold mb-2">Choose QuickBooks if</h4>
            <ul className="space-y-2 mb-4">
              <li>{CHECK_ICON} You’re early-stage, single-entity, or managing fewer than 500 transactions/month</li>
              <li>{CHECK_ICON} You prioritize speed and ease of use</li>
            </ul>
            <h4 className="font-bold mb-2">Choose NetSuite if</h4>
            <ul className="space-y-2">
              <li>{CHECK_ICON} You operate multiple entities or global subsidiaries</li>
              <li>{CHECK_ICON} You require advanced reporting and compliance</li>
              <li>{CHECK_ICON} You’re outgrowing QuickBooks and want an ERP foundation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Still Deciding CTA */}
      <section className="py-10 bg-[#21409a] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2">Still Deciding? Talk to Our Bookkeeping Team</h2>
          <p className="mb-4">RemoteBooksOnline supports clients on <strong>both platforms</strong> - and we help businesses transition from QuickBooks to NetSuite when the time is right.</p>
          <button className="btn btn-primary bg-white text-[#21409a] px-6 py-2 rounded font-bold" onClick={() => window.scrollTo({top: 9999, behavior: 'smooth'})}>
            Book a Free Consultation
          </button>
        </div>
      </section>



      

      {/* Insights Section */}
      <section className="py-10">
        <div className="container mx-auto text-center">
          <p>
            Already using NetSuite? Head to our{' '}
            <a href="/netsuitefaq" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">
              NetSuite bookkeeping FAQs
            </a>{' '}to see what’s included and how we help.
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-white border-t py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-2">Ready to Get Started?</h2>
          <p className="text-center mb-2 text-lg">Try RemoteBooksOnline free for 1 month. No contracts, no setup fees. Just reliable, professional bookkeeping.</p>
          <p className="text-center mb-2">
            <strong>Call Now:</strong> <a href="tel:+919666736088" className="text-blue-700 underline">+91 9666736088</a> | <strong>Email:</strong> <a href="mailto:info@topnotchsol.com" className="text-blue-700 underline">info@topnotchsol.com</a>
          </p>
          <hr className="my-4" />
          <p className="text-center text-gray-500">&copy; 2025 Remote Books Online LLC. All rights reserved.</p>
        </div>
      </footer>
    </main>
  </>
);

export default NetSuiteVsQuickBooks;
import { Link } from "react-router-dom";
