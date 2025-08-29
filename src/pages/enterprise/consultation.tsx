import EnterpriseLayout from "@/components/EnterpriseLayout";
import { enterpriseContent } from "@/data/enterpriseContent";
import ConsultForm from "@/components/ConsultForm";

const EnterpriseConsultation = () => {
  return (
    <div className="min-h-screen bg-gradient-section py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Schedule a Consultation</h1>
            <p className="text-lg text-muted-foreground">
              Speak with our enterprise team about your organization's needs
            </p>
          </div>
          <div className="glass border border-white/20 rounded-xl shadow-hero p-8">
            <ConsultForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseConsultation;
