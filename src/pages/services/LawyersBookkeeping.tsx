import Header from "@/components/Header";
import ServicePageLayout from "@/components/ServicePageLayout";
import { serviceContent } from "@/data/serviceContent";

const LawyersBookkeeping = () => {
  const content = serviceContent["lawyers-bookkeeping"];
  
  return (
    <>
      <Header />
      <ServicePageLayout {...content} />
    </>
  );
};

export default LawyersBookkeeping;