import Header from "@/components/Header";
import ServicePageLayout from "@/components/ServicePageLayout";
import { serviceContent } from "@/data/serviceContent";

const OutsourcedBookkeeping = () => {
  const content = serviceContent["outsourced-bookkeeping"];
  
  return (
    <>
      <Header />
      <ServicePageLayout {...content} />
    </>
  );
};

export default OutsourcedBookkeeping;