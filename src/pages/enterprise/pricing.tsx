import EnterpriseLayout from "@/components/EnterpriseLayout";
import { enterpriseContent } from "@/data/enterpriseContent";

const EnterprisePricing = () => {
  const content = enterpriseContent["enterprise-pricing"];
  const features = content.features.map(f => ({
    ...f,
    icon: f.icon ? <f.icon className={f.iconClass} /> : null
  }));
  return (
        <EnterpriseLayout {...content} features={features} />
  )
};

export default EnterprisePricing;