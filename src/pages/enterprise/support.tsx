import EnterpriseLayout from "@/components/EnterpriseLayout";
import { HeadphonesIcon, BookOpen, GraduationCap, Users } from "lucide-react";

const SupportPage = () => {
  const content = {
    title: "Enterprise Support & Resources",
    subtitle: "Comprehensive Support for Your Success",
    description: "Get the support and resources you need to maximize the value of your financial operations. From dedicated account management to training and documentation, we're here to help.",
    features: [
      {
        title: "24/7 Expert Support",
        description: "Round-the-clock access to our technical and accounting experts",
        icon: <HeadphonesIcon className="w-8 h-8 text-primary" />,
        metrics: "< 2hr response time"
      },
      {
        title: "Knowledge Base",
        description: "Comprehensive documentation, guides, and best practices",
        icon: <BookOpen className="w-8 h-8 text-accent" />,
        metrics: "500+ articles"
      },
      {
        title: "Training Programs",
        description: "Customized training for your team on our platform and processes",
        icon: <GraduationCap className="w-8 h-8 text-trust" />,
        metrics: "98% satisfaction"
      },
      {
        title: "Account Management",
        description: "Dedicated account managers for strategic guidance and optimization",
        icon: <Users className="w-8 h-8 text-primary" />,
        metrics: "Monthly reviews"
      }
    ],
    benefits: [
      "Dedicated account management team",
      "Priority technical support",
      "Custom training programs",
      "Regular business reviews",
      "Best practices consultation",
      "Process optimization guidance",
      "Change management support",
      "Implementation assistance"
    ],
    testimonial: {
      quote: "The support team has been exceptional. They're not just responsive but proactive in helping us optimize our processes and get the most value from the platform.",
      author: "Robert K",
      company: "Enterprise Solutions Inc",
      title: "Director of Finance"
    },
    faq: [
      {
        question: "What support channels are available?",
        answer: "We offer multiple support channels including phone, email, chat, and a comprehensive knowledge base. Enterprise clients get priority support with dedicated response SLAs."
      },
      {
        question: "How do you handle urgent issues?",
        answer: "We maintain 24/7 emergency support for critical issues with a guaranteed response time of under 2 hours. Your dedicated account manager is also available for escalations."
      },
      {
        question: "What training do you provide?",
        answer: "We offer customized training programs including platform training, process workshops, and best practices sessions. All training can be tailored to your specific needs."
      },
      {
        question: "How often do you conduct business reviews?",
        answer: "We conduct monthly operational reviews and quarterly strategic reviews to ensure you're getting maximum value from our services and identify areas for optimization."
      }
    ],
    relatedPages: [
      {
        title: "Enterprise Solutions",
        href: "/enterprise",
        description: "Explore our enterprise services"
      },
      {
        title: "Case Studies",
        href: "/enterprise/case-studies",
        description: "See client success stories"
      },
      {
        title: "Security",
        href: "/enterprise/security",
        description: "Learn about our security measures"
      }
    ]
  };

  return <EnterpriseLayout {...content} />;
};

export default SupportPage;
