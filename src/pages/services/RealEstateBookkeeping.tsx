import Header from "@/components/Header";
import ServicePageLayout from "@/components/ServicePageLayout";
import { serviceContent } from "@/data/serviceContent";

const RealEstateBookkeeping = () => {
  const content = serviceContent["real-estate-bookkeeping"];
  
  return (
    <>
      <Header />
      <ServicePageLayout {...content} />
    </>
  );
};

export default RealEstateBookkeeping;