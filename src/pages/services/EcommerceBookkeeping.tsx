import Header from "@/components/Header";
import ServicePageLayout from "@/components/ServicePageLayout";
import { serviceContent } from "@/data/serviceContent";

const EcommerceBookkeeping = () => {
  const content = serviceContent["ecommerce-bookkeeping"];
  
  return (
    <>
      <Header />
      <ServicePageLayout {...content} />
    </>
  );
};

export default EcommerceBookkeeping;