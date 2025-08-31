import EnterpriseLayout from "@/components/EnterpriseLayout";
import { TrendingUp, Receipt, ClipboardCheck, Clock } from "lucide-react";

const CaseStudiesPage = () => {
  const content = {
    title: "Enterprise Success Stories",
    subtitle: "Real Results from Real Clients",
    description: "Discover how leading enterprises have transformed their financial operations with our solutions. From faster close cycles to improved accuracy, see the measurable impact we deliver.",
    features: [
      {
        title: "Close Cycle Optimization",
        description: "Streamlined month-end processes with automated workflows and controls",
        icon: <Clock className="w-8 h-8 text-primary" />,
        metrics: "40% faster close"
      },
      {
        title: "Multi-Entity Management",
        description: "Unified financial operations across multiple entities with automated consolidation",
        icon: <Receipt className="w-8 h-8 text-accent" />,
        metrics: "99.9% accuracy"
      },
      {
        title: "Compliance Enhancement",
        description: "Improved audit readiness with standardized processes and documentation",
        icon: <ClipboardCheck className="w-8 h-8 text-trust" />,
        metrics: "40% fewer adjustments"
      },
      {
        title: "Growth Support",
        description: "Scalable financial operations that grow with your business",
        icon: <TrendingUp className="w-8 h-8 text-primary" />,
        metrics: "3x faster scaling"
      }
    ],
    benefits: [
      "30-50% reduction in close cycle time",
      "Near-zero error rate in multi-entity consolidations",
      "40% improvement in audit readiness",
      "60% reduction in manual processing",
      "15-25% reduction in DSO",
      "Significant cost savings vs. in-house teams",
      "Enhanced financial visibility and control",
      "Improved stakeholder reporting"
    ],
    testimonial: {
      quote: "TopNotch transformed our financial operations. The automated consolidations and improved reporting have saved us countless hours and provided invaluable insights for our board.",
      author: "Sarah M",
      company: "Global Retail Solutions",
      title: "VP of Finance"
    },
    faq: [
      {
        question: "How long does implementation typically take?",
        answer: "Most clients are fully operational within 4-6 weeks, with basic services running in the first 2 weeks. We use a phased approach to ensure smooth transitions."
      },
      {
        question: "What ROI can we expect?",
        answer: "Clients typically see 30-40% cost savings compared to in-house teams, plus efficiency gains of 40-60% in key processes like month-end close and reporting."
      },
      {
        question: "How do you handle complex integrations?",
        answer: "We have experience with all major ERP systems and can customize our approach to your specific tech stack, ensuring seamless data flow and automation."
      },
      {
        question: "What support do you provide during transitions?",
        answer: "You'll have a dedicated implementation team and ongoing support from your account manager and technical specialists throughout the process."
      }
    ],
    relatedPages: [
      {
        title: "Enterprise Solutions",
        href: "/enterprise",
        description: "Explore our full range of services"
      },
      {
        title: "Security & Compliance",
        href: "/enterprise/security",
        description: "Learn about our security measures"
      },
      {
        title: "Pricing",
        href: "/enterprise/pricing",
        description: "View our flexible pricing options"
      }
    ]
  };

  return <EnterpriseLayout {...content} />;
};

export default CaseStudiesPage;
