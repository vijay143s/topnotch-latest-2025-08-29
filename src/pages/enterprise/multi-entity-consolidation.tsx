import EnterpriseLayout from "@/components/EnterpriseLayout";
import { enterpriseContent } from "@/data/enterpriseContent";

const MultiEntityConsolidation = () => {
  const content = enterpriseContent["multi-entity-consolidation"];
  const features = content.features.map(f => ({
    ...f,
    icon: f.icon ? <f.icon className={f.iconClass} /> : null
  }));
  return (
      <EnterpriseLayout {...content} features={features} />
  );
};

export default MultiEntityConsolidation;
