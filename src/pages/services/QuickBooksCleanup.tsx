import Header from "@/components/Header";
import ServicePageLayout from "@/components/ServicePageLayout";
import { serviceContent } from "@/data/serviceContent";

const QuickBooksCleanup = () => {
  const content = serviceContent["quickbooks-cleanup"];
  
  return (
    <>
      <Header />
      <ServicePageLayout {...content} />
    </>
  );
};

export default QuickBooksCleanup;