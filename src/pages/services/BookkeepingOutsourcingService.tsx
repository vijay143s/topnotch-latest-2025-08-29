import Header from "@/components/Header";
import ServicePageLayout from "@/components/ServicePageLayout";
import { serviceContent } from "@/data/serviceContent";

const BookkeepingOutsourcingService = () => {
  const content = serviceContent["bookkeeping-outsourcing-service"];
  
  return (
    <div className="min-h-screen bg-gradient-section pt-20">
      <Header />
      <ServicePageLayout {...content} />
    </div>
  );
};

export default BookkeepingOutsourcingService;