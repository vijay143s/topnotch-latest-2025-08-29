import EnterpriseLayout from "@/components/EnterpriseLayout";
import { enterpriseContent } from "@/data/enterpriseContent";

const Enterprise = () => {
  const content = enterpriseContent["enterprise"];
  const features = content.features.map(f => ({
    ...f,
    icon: f.icon ? <f.icon className={f.iconClass} /> : null
  }));
  return (
    <div className="min-h-screen bg-gradient-section pt-20">
        <EnterpriseLayout {...content} features={features} />;
    </div>
  )
};

export default Enterprise;