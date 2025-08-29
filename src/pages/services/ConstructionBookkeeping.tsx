import Header from "@/components/Header";
import ServicePageLayout from "@/components/ServicePageLayout";
import { serviceContent } from "@/data/serviceContent";

const ConstructionBookkeeping = () => {
  const content = serviceContent["construction-bookkeeping"];
  
  return (
    <div className="min-h-screen bg-gradient-section pt-20">
      <Header />
      <ServicePageLayout {...content} />
    </div>
  );
};

export default ConstructionBookkeeping;