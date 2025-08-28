import Header from "@/components/Header";
import ServicePageLayout from "@/components/ServicePageLayout";
import { serviceContent } from "@/data/serviceContent";

const BookkeepingUnderYourBrand = () => {
  const content = serviceContent["bookkeeping-under-your-brand"];
  
  return (
    <>
      <Header />
      <ServicePageLayout {...content} />
    </>
  );
};

export default BookkeepingUnderYourBrand;