import Header from "@/components/Header";
import ServicePageLayout from "@/components/ServicePageLayout";
import { serviceContent } from "@/data/serviceContent";

const BookkeepingServicesNearMe = () => {
  const content = serviceContent["bookkeeping-services-near-me"];
  
  return (
    <>
      <Header />
      <ServicePageLayout {...content} />
    </>
  );
};

export default BookkeepingServicesNearMe;