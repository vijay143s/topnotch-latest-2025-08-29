import { 
  Building2, Users, FileSpreadsheet, Banknote, Receipt, Calculator, 
  Shield, Database, BarChart3, Zap, Globe, FileCheck, Briefcase, 
  Clock, FileBox, FileCog, Settings, CheckCircle2, ShoppingBag, 
  HardHat, Stethoscope, Cloud, Factory, TrendingUp
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: any;
  iconClass: string;
  metrics: string;
}

interface Pricing {
  title: string;
  description: string;
  features: string[];
  cta: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
}

interface RelatedPage {
  title: string;
  href: string;
  description: string;
}

interface ContentSection {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  benefits: string[];
  pricing?: Pricing;
  faq: FAQ[];
  testimonial?: Testimonial;
  relatedPages?: RelatedPage[];
}

type EnterpriseContent = {
  [key: string]: ContentSection;
};

const enterpriseContent: EnterpriseContent = {
  "accounts-payable": {
    title: "Enterprise Accounts Payable Services",
    subtitle: "Streamline Your Enterprise AP Workflow",
    description: "Transform your accounts payable process with our enterprise-grade AP automation and management services. Reduce costs, eliminate manual work, and gain real-time visibility into your payables.",
    features: [
      {
        title: "AP Automation",
        description: "Automate invoice processing, approvals, and payments with intelligent workflows and OCR technology.",
        icon: FileCheck,
        iconClass: "w-8 h-8 text-primary",
        metrics: "95% automation rate"
      },
      {
        title: "Payment Optimization",
        description: "Maximize early payment discounts and optimize cash flow with strategic payment scheduling.",
        icon: Banknote,
        iconClass: "w-8 h-8 text-accent",
        metrics: "2.5% avg savings"
      },
      {
        title: "Vendor Management",
        description: "Centralized vendor portal for document management, communications, and payment status.",
        icon: Users,
        iconClass: "w-8 h-8 text-trust",
        metrics: "100% vendor adoption"
      },
      {
        title: "Compliance & Control",
        description: "Built-in controls, audit trails, and compliance features for enterprise requirements.",
        icon: Shield,
        iconClass: "w-8 h-8 text-primary",
        metrics: "SOX compliant"
      }
    ],
    benefits: [
      "Reduce AP processing costs by up to 80%",
      "Automated three-way matching and validation",
      "Real-time visibility into payables and cash requirements",
      "Seamless integration with major ERP systems",
      "Mobile approval workflows for faster processing",
      "Automated accrual and month-end reporting",
      "Fraud prevention and duplicate payment detection",
      "Global payments in multiple currencies",
      "Vendor self-service portal access",
      "Custom approval hierarchies and rules"
    ],
    pricing: {
      title: "Enterprise AP Pricing",
      description: "Custom pricing based on your monthly invoice volume and complexity. Implementations starting from $5,000.",
      features: [
        "Per-invoice pricing with volume discounts",
        "Implementation and training included",
        "Custom workflow development",
        "Dedicated support team",
        "Monthly performance reviews",
        "ROI reporting and analytics"
      ],
      cta: "Get Custom Quote"
    },
    faq: [
      {
        question: "How long does implementation take?",
        answer: "Enterprise AP implementation typically takes 4-6 weeks, including system integration, workflow setup, and team training."
      },
      {
        question: "Which ERP systems do you integrate with?",
        answer: "We integrate with all major ERP systems including SAP, Oracle, NetSuite, Microsoft Dynamics, and can build custom integrations as needed."
      },
      {
        question: "How do you handle global payments?",
        answer: "Our platform supports payments in 135+ currencies with competitive exchange rates and automated compliance checks for international transactions."
      },
      {
        question: "What security measures are in place?",
        answer: "We maintain SOC 2 Type II certification, use bank-grade encryption, and provide role-based access controls with detailed audit trails."
      }
    ]
  },
  "accounts-receivable": {
    title: "Enterprise Accounts Receivable Services",
    subtitle: "Optimize Your Cash Flow and Collections",
    description: "Transform your accounts receivable operations with our enterprise AR automation and management services. Accelerate cash flow, reduce DSO, and improve customer relationships.",
    features: [
      {
        title: "AR Automation",
        description: "Streamline invoicing, collections, and cash application with intelligent automation.",
        icon: Receipt,
        iconClass: "w-8 h-8 text-primary",
        metrics: "70% faster processing"
      },
      {
        title: "Collections Management",
        description: "Smart collections workflows with predictive analytics and automated communications.",
        icon: Calculator,
        iconClass: "w-8 h-8 text-accent",
        metrics: "45% lower DSO"
      },
      {
        title: "Customer Portal",
        description: "Self-service portal for customers to access invoices, make payments, and manage accounts.",
        icon: Globe,
        iconClass: "w-8 h-8 text-trust",
        metrics: "24/7 access"
      },
      {
        title: "Cash Application",
        description: "Automated cash application with AI-powered matching and exception handling.",
        icon: Database,
        iconClass: "w-8 h-8 text-primary",
        metrics: "98% match rate"
      }
    ],
    benefits: [
      "Reduce DSO by 20-40%",
      "Automated invoice delivery and follow-up",
      "Real-time cash flow forecasting",
      "Integrated payment processing",
      "Automated cash application",
      "Customer credit management",
      "Dispute resolution workflow",
      "Multi-currency support",
      "Custom aging reports",
      "Performance analytics dashboard"
    ],
    pricing: {
      title: "Enterprise AR Pricing",
      description: "Custom pricing based on your monthly invoice volume and collections requirements. Starting from $3,000/month.",
      features: [
        "Volume-based pricing",
        "Full implementation support",
        "Custom workflow configuration",
        "Dedicated account manager",
        "Monthly performance reviews",
        "ROI tracking and reporting"
      ],
      cta: "Request Pricing"
    },
    faq: [
      {
        question: "How quickly can we implement AR automation?",
        answer: "Implementation typically takes 3-5 weeks, including system integration, workflow setup, and team training."
      },
      {
        question: "What payment methods do you support?",
        answer: "We support all major payment methods including ACH, wire transfers, credit cards, and can integrate with your preferred payment processors."
      },
      {
        question: "Can you handle multiple entities?",
        answer: "Yes, our platform supports multi-entity organizations with consolidated reporting and entity-specific workflows."
      },
      {
        question: "How do you handle complex customer hierarchies?",
        answer: "Our system supports complex customer hierarchies with parent-child relationships, multiple bill-to locations, and custom pricing agreements."
      }
    ]
  },
  "billing-services": {
    title: "Enterprise Billing Services",
    subtitle: "Streamline Complex Billing Operations",
    description: "Transform your billing operations with our enterprise-grade billing automation and management services. Handle complex billing scenarios, subscription management, and revenue recognition with ease.",
    features: [
      {
        title: "Automated Billing",
        description: "Streamline recurring billing, usage-based pricing, and complex rate structures.",
        icon: Receipt,
        iconClass: "w-8 h-8 text-primary",
        metrics: "99.9% accuracy"
      },
      {
        title: "Revenue Management",
        description: "Automated revenue recognition and compliance with ASC 606 standards.",
        icon: BarChart3,
        iconClass: "w-8 h-8 text-accent",
        metrics: "GAAP compliant"
      },
      {
        title: "Contract Management",
        description: "Handle complex contracts, amendments, and pricing terms with automated workflows.",
        icon: FileBox,
        iconClass: "w-8 h-8 text-trust",
        metrics: "100% compliance"
      },
      {
        title: "Usage Analytics",
        description: "Real-time usage tracking and analytics for consumption-based billing models.",
        icon: Database,
        iconClass: "w-8 h-8 text-primary",
        metrics: "Real-time data"
      }
    ],
    benefits: [
      "Automate complex billing scenarios",
      "Reduce billing errors by 99%",
      "Streamline subscription management",
      "Handle usage-based billing",
      "Automated proration calculations",
      "Multi-currency support",
      "Flexible payment scheduling",
      "Custom invoice formatting",
      "Automated dunning management",
      "Revenue recognition automation"
    ],
    pricing: {
      title: "Enterprise Billing Pricing",
      description: "Custom pricing based on your billing volume and complexity. Starting from $4,000/month.",
      features: [
        "Volume-based pricing tiers",
        "Full implementation support",
        "Custom integration development",
        "Dedicated support team",
        "Monthly performance reviews",
        "Compliance reporting included"
      ],
      cta: "Get Custom Quote"
    },
    faq: [
      {
        question: "How do you handle complex pricing models?",
        answer: "Our system supports tiered pricing, usage-based billing, subscription billing, and hybrid models with automated calculations and proration."
      },
      {
        question: "What about revenue recognition?",
        answer: "We provide automated revenue recognition compliant with ASC 606, handling complex scenarios like multi-element arrangements and contract modifications."
      },
      {
        question: "Can you integrate with our existing systems?",
        answer: "Yes, we integrate with major ERP systems, CRM platforms, and payment processors, and can build custom integrations as needed."
      },
      {
        question: "How do you handle compliance requirements?",
        answer: "Our platform maintains compliance with GAAP, ASC 606, and other relevant standards, with built-in controls and audit trails."
      }
    ]
  },
  "general-ledger": {
    title: "Enterprise General Ledger Services",
    subtitle: "Streamline Your Core Financial Operations",
    description: "Transform your general ledger management with our enterprise-grade solutions. Automate journal entries, maintain accuracy, and ensure compliance with advanced GL services.",
    features: [
      {
        title: "Automated Entries",
        description: "Smart automation for recurring entries, allocations, and accruals.",
        icon: FileCheck,
        iconClass: "w-8 h-8 text-primary",
        metrics: "90% automation"
      },
      {
        title: "Multi-Entity Support",
        description: "Handle complex organizational structures and intercompany transactions.",
        icon: Building2,
        iconClass: "w-8 h-8 text-accent",
        metrics: "Unlimited entities"
      },
      {
        title: "Compliance Controls",
        description: "Built-in controls and audit trails for regulatory compliance.",
        icon: Shield,
        iconClass: "w-8 h-8 text-trust",
        metrics: "SOX compliant"
      },
      {
        title: "Real-time Access",
        description: "Instant access to GL data with advanced search and filtering.",
        icon: Database,
        iconClass: "w-8 h-8 text-primary",
        metrics: "24/7 access"
      }
    ],
    benefits: [
      "Automated journal entries",
      "Advanced allocation rules",
      "Multi-currency support",
      "Intercompany transactions",
      "Custom chart of accounts",
      "Period-end automation",
      "Audit trail tracking",
      "Dimensional reporting",
      "Bank reconciliation",
      "Compliance reporting"
    ],
    pricing: {
      title: "Enterprise GL Pricing",
      description: "Custom pricing based on your transaction volume and complexity. Starting from $4,500/month.",
      features: [
        "Unlimited transactions",
        "Full implementation support",
        "Custom workflow setup",
        "Dedicated account team",
        "Monthly reviews",
        "Compliance reporting"
      ],
      cta: "Get Custom Quote"
    },
    faq: [
      {
        question: "How do you handle multi-entity structures?",
        answer: "Our system supports complex organizational structures with automated intercompany transactions, eliminations, and consolidated reporting."
      },
      {
        question: "What about system integration?",
        answer: "We integrate with all major ERP systems and can build custom integrations for your specific tech stack."
      },
      {
        question: "How do you ensure accuracy?",
        answer: "We use automated validation rules, reconciliation tools, and multi-level review processes to maintain 99.9% accuracy."
      },
      {
        question: "Can you handle international operations?",
        answer: "Yes, we support multi-currency transactions, foreign exchange calculations, and international accounting standards."
      }
    ]
  },
  "enterprise": {
    title: "Enterprise Bookkeeping Solutions",
    subtitle: "Scale your financial operations with enterprise-grade bookkeeping",
    description: "Comprehensive financial management for growing enterprises. Handle complex multi-entity structures, advanced reporting requirements, and regulatory compliance with dedicated enterprise support.",
    features: [
      {
        title: "Multi-Entity Management",
        description: "Seamlessly manage parent companies, subsidiaries, and complex organizational structures with consolidated reporting.",
        icon: Building2,
        iconClass: "w-8 h-8 text-primary",
        metrics: "Up to 50+ entities"
      },
      {
        title: "Advanced Analytics",
        description: "Executive dashboards with KPI tracking, trend analysis, and custom reporting for data-driven decisions.",
        icon: TrendingUp,
        iconClass: "w-8 h-8 text-accent",
        metrics: "Real-time insights"
      },
      {
        title: "Dedicated Account Team",
        description: "Senior bookkeepers, CPA oversight, and dedicated account managers for enterprise-level support.",
        icon: Users,
        iconClass: "w-8 h-8 text-trust",
        metrics: "3-person team minimum"
      },
      {
        title: "Enterprise Security",
        description: "SOX compliance support, audit trails, role-based access controls, and enterprise-grade data protection.",
        icon: Shield,
        iconClass: "w-8 h-8 text-primary",
        metrics: "SOC 2 Type II certified"
      }
    ],
    benefits: [
      "Handle 1,000+ transactions monthly per entity",
      "Custom chart of accounts for complex business structures",
      "Multi-currency and international transaction support",
      "Automated workflows and approval processes",
      "24/7 priority support with 2-hour response SLA",
      "Custom integrations with ERP, CRM, and HR systems",
      "Audit preparation and regulatory compliance support",
      "Executive-level financial reporting and analysis",
      "Scalable pricing based on transaction volume",
      "Dedicated implementation and onboarding team"
    ],
    pricing: {
      title: "Enterprise Pricing",
      description: "Custom pricing tailored to your organization's complexity and volume requirements. Starting from $2,500/month for enterprise clients.",
      features: [
        "Volume-based transaction pricing",
        "Dedicated enterprise account manager",
        "Custom reporting and dashboard development",
        "Priority 24/7 support with SLA guarantees",
        "Custom integration development included",
        "Quarterly business review meetings"
      ],
      cta: "Get Custom Enterprise Quote"
    },
    faq: [
      {
        question: "What qualifies as an enterprise client?",
        answer: "We consider enterprises to be organizations with multiple entities, complex reporting needs, high transaction volumes (500+ monthly), or specific compliance requirements. This includes corporations with subsidiaries, large franchises, and organizations requiring SOX compliance."
      },
      {
        question: "How quickly can you onboard an enterprise client?",
        answer: "Our enterprise onboarding typically takes 2-4 weeks depending on complexity. We provide dedicated project management, data migration support, and custom setup to ensure a smooth transition."
      },
      {
        question: "Do you support custom integrations?",
        answer: "Yes, we develop custom integrations with your existing ERP, CRM, HR, and other business systems. Our enterprise packages include integration development and ongoing maintenance."
      },
      {
        question: "What level of support do enterprise clients receive?",
        answer: "Enterprise clients receive priority 24/7 support with guaranteed 2-hour response times, dedicated account managers, quarterly business reviews, and direct access to senior accounting professionals."
      },
      {
        question: "Can you handle international operations?",
        answer: "Absolutely. We support multi-currency transactions, international tax compliance, transfer pricing documentation, and consolidated reporting for global operations."
      }
    ]
  }
};

export default enterpriseContent;
