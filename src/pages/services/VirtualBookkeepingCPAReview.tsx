import Header from "@/components/Header";
import ServicePageLayout from "@/components/ServicePageLayout";
import { serviceContent } from "@/data/serviceContent";

const VirtualBookkeepingCPAReview = () => {
  const content = serviceContent["virtual-bookkeeping-cpa-review"];
  
  return (
    <>
      <Header />
      <ServicePageLayout {...content} />
    </>
  );
};

export default VirtualBookkeepingCPAReview;