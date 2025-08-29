import EnterpriseLayout from "@/components/EnterpriseLayout";
import { enterpriseContent } from "@/data/enterpriseContent";

const EnterpriseSaaS = () => {
  const content = enterpriseContent["industry-saas"];
  const features = content.features.map(f => ({
    ...f,
    icon: f.icon ? <f.icon className={f.iconClass} /> : null
  }));
  return <EnterpriseLayout {...content} features={features} />;
};

export default EnterpriseSaaS;
