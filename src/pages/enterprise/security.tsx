import EnterpriseLayout from "@/components/EnterpriseLayout";
import { Shield, LockKeyhole, FileCheck, Database } from "lucide-react";

const SecurityPage = () => {
  const content = {
    title: "Enterprise Security & Data Protection",
    subtitle: "Bank-Grade Security for Your Financial Data",
    description: "Our enterprise-grade security infrastructure ensures your sensitive financial data remains protected with SOC 2 compliance, encryption, and comprehensive access controls.",
    features: [
      {
        title: "Bank-Level Encryption",
        description: "Advanced encryption for data in transit and at rest using industry-standard protocols",
        icon: <Shield className="w-8 h-8 text-primary" />,
        metrics: "256-bit encryption"
      },
      {
        title: "Access Controls",
        description: "Role-based access control with MFA and detailed audit logging",
        icon: <LockKeyhole className="w-8 h-8 text-accent" />,
        metrics: "100% user activity tracked"
      },
      {
        title: "Compliance Ready",
        description: "SOC 2 compliant infrastructure with regular security assessments",
        icon: <FileCheck className="w-8 h-8 text-trust" />,
        metrics: "Annual SOC 2 audits"
      },
      {
        title: "Data Protection",
        description: "Secure data handling with automated backups and disaster recovery",
        icon: <Database className="w-8 h-8 text-primary" />,
        metrics: "99.99% data durability"
      }
    ],
    benefits: [
      "End-to-end encryption for all financial data",
      "Multi-factor authentication (MFA) for all users",
      "Regular security audits and penetration testing",
      "Detailed audit logs for all system access",
      "Secure document storage and sharing",
      "Automated security patch management",
      "24/7 security monitoring",
      "Compliance documentation support"
    ],
    testimonial: {
      quote: "TopNotch's security measures gave us the confidence to move our sensitive financial operations to their platform. Their SOC 2 compliance and encryption standards meet our strict requirements.",
      author: "Michael R",
      company: "Global Tech Solutions",
      title: "CISO"
    },
    faq: [
      {
        question: "What security certifications do you maintain?",
        answer: "We maintain SOC 2 Type II compliance and follow industry best practices for data security. Our infrastructure undergoes regular third-party security assessments."
      },
      {
        question: "How is data encrypted?",
        answer: "We use 256-bit encryption for data in transit and at rest. All communications are secured via TLS 1.3, and we employ hardware security modules (HSMs) for key management."
      },
      {
        question: "What access controls are in place?",
        answer: "We implement role-based access control (RBAC), mandatory multi-factor authentication, IP whitelisting, and maintain detailed audit logs of all system access."
      },
      {
        question: "How do you handle data backup and recovery?",
        answer: "We perform automated daily backups with 30-day retention, maintain geo-redundant storage, and have documented disaster recovery procedures with regular testing."
      }
    ],
    relatedPages: [
      {
        title: "Enterprise Solutions",
        href: "/enterprise",
        description: "Explore our comprehensive enterprise services"
      },
      {
        title: "Multi-Entity Consolidation",
        href: "/enterprise/multi-entity-consolidation",
        description: "Secure management of multiple entities"
      },
      {
        title: "Case Studies",
        href: "/enterprise/case-studies",
        description: "See how enterprises trust our security"
      }
    ]
  };

  return <EnterpriseLayout {...content} />;
};

export default SecurityPage;
