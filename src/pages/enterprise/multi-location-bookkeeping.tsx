import EnterpriseLayout from "@/components/EnterpriseLayout";
import { enterpriseContent } from "@/data/enterpriseContent";

const MultiLocationBookkeeping = () => {
  const content = enterpriseContent["multi-location-bookkeeping"];
  const features = content.features.map(f => ({
    ...f,
    icon: f.icon ? <f.icon className={f.iconClass} /> : null
  }));
  return (
        <EnterpriseLayout {...content} features={features} />
  )
};

export default MultiLocationBookkeeping;