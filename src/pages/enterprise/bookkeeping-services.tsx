import EnterpriseLayout from "@/components/EnterpriseLayout";
import { enterpriseContent } from "@/data/enterpriseContent";

const EnterpriseBookkeepingServices = () => {
  const content = enterpriseContent["enterprise-bookkeeping-services"];
  const features = content.features.map(f => ({
    ...f,
    icon: f.icon ? <f.icon className={f.iconClass} /> : null
  }));
  return (
        <EnterpriseLayout {...content} features={features} />
  )
};

export default EnterpriseBookkeepingServices;