import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FreeTrial from "@/components/FreeTrial";
import TrustedBy from "@/components/TrustedBy";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ComparisonTable from "@/components/ComparisonTable";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <FreeTrial />
        <Testimonials />
        <ComparisonTable />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
