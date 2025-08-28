import Header from "@/components/Header";
import ServicePageLayout from "@/components/ServicePageLayout";
import { serviceContent } from "@/data/serviceContent";


const BookkeepingServices = () => {
  const content = serviceContent["bookkeeping-services"];

  return (
      <>
      <Header />
           
      <ServicePageLayout {...content} />
      
    </>
  );
};

export default BookkeepingServices;