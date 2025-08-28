import Header from "@/components/Header";
import ServicePageLayout from "@/components/ServicePageLayout";
import { serviceContent } from "@/data/serviceContent";

const FranchiseBookkeeping = () => {
  const content = serviceContent["franchise-bookkeeping"];
  
  return (
    <>
      <Header />
      <ServicePageLayout {...content} />
    </>
  );
};

export default FranchiseBookkeeping;