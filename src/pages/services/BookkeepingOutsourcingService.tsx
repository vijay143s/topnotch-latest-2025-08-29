import Header from "@/components/Header";
import ServicePageLayout from "@/components/ServicePageLayout";
import { serviceContent } from "@/data/serviceContent";

const BookkeepingOutsourcingService = () => {
  const content = serviceContent["bookkeeping-outsourcing-service"];
  
  return (
    <>
      <Header />
      <ServicePageLayout {...content} />
    </>
  );
};

export default BookkeepingOutsourcingService;