import { 
  Building2, Users, TrendingUp, Shield, Zap, Globe, BarChart3, 
  Settings, Database, Clock, CheckCircle2, Briefcase, FileCheck, 
  Receipt, Banknote, CircleDollarSign, FileSpreadsheet, Wallet,
  Building, Calculator, PieChart, ArrowUpDown
} from "lucide-react";

export const enterpriseContent = {
  "accounts-payable": {
    title: "Enterprise Accounts Payable Services",
    subtitle: "Transform Your AP Process with Intelligent Automation",
    description: "Streamline your accounts payable operations with our enterprise-grade automation solutions. Reduce costs, eliminate manual work, and gain real-time visibility into your payables with advanced AI-powered processing.",
    features: [
      {
        title: "Intelligent Invoice Processing",
        description: "AI-powered OCR and machine learning for automated invoice capture and processing with 99.9% accuracy.",
        icon: FileCheck,
        iconClass: "w-8 h-8 text-primary",
        metrics: "95% automation rate"
      },
      {
        title: "Smart Payment Optimization",
        description: "Strategic payment scheduling to maximize early payment discounts and optimize cash flow management.",
        icon: Wallet,
        iconClass: "w-8 h-8 text-accent",
        metrics: "3.2% avg savings"
      },
      {
        title: "Vendor Portal & Management",
        description: "Self-service vendor portal for invoice submission, payment status tracking, and document management.",
        icon: Building,
        iconClass: "w-8 h-8 text-trust",
        metrics: "100% vendor adoption"
      },
      {
        title: "Advanced Analytics & Reporting",
        description: "Real-time dashboards and analytics for spend analysis, cash flow forecasting, and vendor performance.",
        icon: PieChart,
        iconClass: "w-8 h-8 text-primary",
        metrics: "Real-time insights"
      }
    ],
    benefits: [
      "Reduce AP processing costs by up to 80%",
      "Automated three-way matching and validation",
      "Real-time cash flow forecasting and analytics",
      "Seamless ERP and accounting software integration",
      "Mobile approval workflows for faster processing",
      "Automated accrual and month-end reporting",
      "Built-in fraud detection and prevention",
      "Global payment processing in 135+ currencies",
      "Vendor self-service and management portal",
      "Custom approval hierarchies and workflows"
    ],
    pricing: {
      title: "Enterprise AP Pricing",
      description: "Customized pricing based on your transaction volume and complexity. Implementation starting from $5,000.",
      features: [
        "Volume-based pricing with tier discounts",
        "Full implementation and training included",
        "Custom workflow configuration",
        "Dedicated support team",
        "Monthly performance reviews",
        "ROI and savings tracking"
      ],
      cta: "Get Custom Quote"
    },
    testimonial: {
      quote: "The automation capabilities have transformed our AP department. We've reduced processing costs by 75% and our team can now focus on strategic initiatives instead of manual data entry.",
      author: "Michael Chen",
      title: "VP of Finance",
      company: "Global Manufacturing Corp"
    },
    faq: [
      {
        question: "How long does implementation take?",
        answer: "Enterprise AP implementation typically takes 4-6 weeks, including system integration, workflow setup, and team training. Our dedicated implementation team ensures a smooth transition with minimal disruption."
      },
      {
        question: "Which ERP systems do you integrate with?",
        answer: "We offer pre-built integrations with major ERP systems including SAP, Oracle, NetSuite, Microsoft Dynamics, and Sage. We can also develop custom integrations for other systems."
      },
      {
        question: "How do you handle global payments?",
        answer: "Our platform supports payments in 135+ currencies with competitive exchange rates, automated compliance checks, and local payment methods in major markets worldwide."
      },
      {
        question: "What security measures are in place?",
        answer: "We maintain SOC 2 Type II certification, use bank-grade encryption, and provide role-based access controls. Our system includes fraud detection, duplicate payment prevention, and detailed audit trails."
      },
      {
        question: "Can you handle high transaction volumes?",
        answer: "Yes, our platform is designed for enterprise-scale processing. We handle millions of invoices monthly for our enterprise clients with 99.9% accuracy and automated exception handling."
      }
    ],
    relatedPages: [
      {
        title: "Enterprise Billing Services",
        href: "/enterprise/billing-services",
        description: "Streamline your billing operations with automated invoice generation and processing."
      },
      {
        title: "Accounts Receivable",
        href: "/enterprise/accounts-receivable",
        description: "Optimize your AR processes with intelligent automation and collections management."
      },
      {
        title: "Financial Reporting",
        href: "/enterprise/financial-reporting",
        description: "Get real-time insights with advanced financial reporting and analytics."
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
    testimonial: {
      quote: "TopNotch Solutions transformed our financial operations across 12 subsidiaries. Their enterprise team handles everything from daily transactions to board-level reporting. The time savings and accuracy improvements have been incredible.",
      author: "Sarah Martinez",
      title: "CFO",
      company: "TechCorp Industries"
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
    ],
    relatedPages: [
      {
        title: "Multi-Location Bookkeeping",
        href: "/enterprise/multi-location-bookkeeping",
        description: "Specialized solutions for businesses operating across multiple locations and jurisdictions."
      },
      {
        title: "Enterprise Financial Reporting",
        href: "/enterprise/financial-reporting",
        description: "Advanced reporting, analytics, and executive dashboards for enterprise decision-making."
      },
      {
        title: "White-Label Enterprise",
        href: "/enterprise/white-label-solutions",
        description: "Private-label enterprise bookkeeping solutions for accounting firms and consultants."
      }
    ]
  },

  "enterprise-bookkeeping-services": {
    title: "Enterprise Bookkeeping Services",
    subtitle: "Comprehensive financial management for large organizations",
    description: "Our enterprise bookkeeping services are designed for complex businesses with multiple entities, high transaction volumes, and sophisticated reporting requirements. Get the accuracy and insights your organization needs to drive growth.",
    features: [
      {
        title: "Complex Entity Management",
        description: "Handle parent-subsidiary relationships, joint ventures, partnerships, and complex ownership structures.",
        icon: Building2,
        iconClass: "w-8 h-8 text-primary",
        metrics: "Unlimited entities"
      },
      {
        title: "High-Volume Processing",
        description: "Process thousands of transactions monthly with automated workflows and exception management.",
        icon: Database,
        iconClass: "w-8 h-8 text-accent",
        metrics: "10,000+ transactions/month"
      },
      {
        title: "Custom Reporting Suite",
        description: "Board-ready financial statements, management reports, and custom analytics tailored to your business.",
        icon: BarChart3,
        iconClass: "w-8 h-8 text-trust",
        metrics: "Unlimited custom reports"
      },
      {
        title: "Compliance Management",
        description: "Stay compliant with SOX, GAAP, IFRS, and industry-specific regulations with expert oversight.",
        icon: Shield,
        iconClass: "w-8 h-8 text-primary",
        metrics: "100% compliance rate"
      }
    ],
    benefits: [
      "Dedicated enterprise accounting team with CPA oversight",
      "Custom chart of accounts designed for your industry",
      "Automated month-end close processes",
      "Advanced cash flow forecasting and budget analysis",
      "Intercompany transaction elimination and consolidation",
      "Custom KPI dashboards for executive teams",
      "Audit support and documentation management",
      "Integration with enterprise software (SAP, Oracle, NetSuite)",
      "Multi-currency and international operation support",
      "Scalable infrastructure that grows with your business"
    ],
    faq: [
      {
        question: "How do you handle multiple subsidiaries?",
        answer: "We create separate books for each entity while maintaining consolidated reporting capabilities. Our team manages intercompany transactions, eliminations, and produces both individual entity and consolidated financial statements."
      },
      {
        question: "What's included in enterprise-level support?",
        answer: "Enterprise support includes dedicated account management, priority processing, custom reporting development, quarterly business reviews, audit support, and 24/7 access to senior accounting professionals."
      },
      {
        question: "How do you ensure data security for enterprise clients?",
        answer: "We maintain SOC 2 Type II certification, use enterprise-grade encryption, provide role-based access controls, maintain audit trails, and offer on-premise integration options for highly sensitive data."
      }
    ]
  },

  "multi-location-bookkeeping": {
    title: "Multi-Location Bookkeeping",
    subtitle: "Centralized financial management for businesses with multiple locations",
    description: "Streamline bookkeeping across all your business locations with our specialized multi-location services. Perfect for franchises, retail chains, and businesses with distributed operations.",
    features: [
      {
        title: "Centralized Processing",
        description: "Consolidate bookkeeping from all locations into unified reporting while maintaining location-specific insights.",
        icon: Globe,
        iconClass: "w-8 h-8 text-primary",
        metrics: "Unlimited locations"
      },
      {
        title: "Location Performance Analytics",
        description: "Compare performance across locations with detailed P&L statements and key metrics for each site.",
        icon: BarChart3,
        iconClass: "w-8 h-8 text-accent",
        metrics: "Real-time comparisons"
      },
      {
        title: "Standardized Processes",
        description: "Implement consistent bookkeeping procedures across all locations with automated quality checks.",
        icon: Settings,
        iconClass: "w-8 h-8 text-trust",
        metrics: "99.8% accuracy rate"
      },
      {
        title: "Rapid Scaling",
        description: "Add new locations seamlessly with pre-built templates and established workflows.",
        icon: Zap,
        iconClass: "w-8 h-8 text-primary",
        metrics: "New location setup in 24hrs"
      }
    ],
    benefits: [
      "Individual P&L statements for each location",
      "Consolidated financial reporting for the entire organization",
      "Cross-location expense allocation and cost center management",
      "Automated inter-location transaction handling",
      "Location-specific tax compliance and reporting",
      "Franchise fee tracking and royalty calculations",
      "Performance benchmarking between locations",
      "Centralized vendor management and AP processing",
      "Location-specific budget vs. actual analysis",
      "Standardized month-end close across all sites"
    ],
    faq: [
      {
        question: "How many locations can you handle?",
        answer: "There's no limit to the number of locations we can manage. We currently serve clients with 2-100+ locations and have scalable infrastructure to support rapid expansion."
      },
      {
        question: "Do you provide location-specific reports?",
        answer: "Yes, each location receives its own detailed P&L, balance sheet, and performance metrics, while you also get consolidated reports showing enterprise-wide performance."
      },
      {
        question: "How do you handle different state tax requirements?",
        answer: "Our team tracks location-specific tax obligations including state sales tax, local business taxes, and multi-state compliance requirements for each of your business locations."
      }
    ]
  },

  "enterprise-financial-reporting": {
    title: "Enterprise Financial Reporting",
    subtitle: "Executive-level reporting and financial analytics",
    description: "Transform your financial data into strategic insights with our enterprise reporting solutions. Custom dashboards, advanced analytics, and board-ready presentations.",
    features: [
      {
        title: "Executive Dashboards",
        description: "Real-time KPI tracking with customizable dashboards designed for C-level decision making.",
        icon: TrendingUp,
        iconClass: "w-8 h-8 text-primary",
        metrics: "50+ KPI options"
      },
      {
        title: "Board-Ready Reports",
        description: "Professional financial presentations formatted for board meetings and investor relations.",
        icon: Briefcase,
        iconClass: "w-8 h-8 text-accent",
        metrics: "Monthly board packages"
      },
      {
        title: "Advanced Analytics",
        description: "Trend analysis, variance reporting, and predictive financial modeling for strategic planning.",
        icon: BarChart3,
        iconClass: "w-8 h-8 text-trust",
        metrics: "13-month forecasting"
      },
      {
        title: "Automated Reporting",
        description: "Schedule and deliver reports automatically to stakeholders with customizable frequency and formats.",
        icon: Clock,
        iconClass: "w-8 h-8 text-primary",
        metrics: "Real-time delivery"
      }
    ],
    benefits: [
      "Custom KPI dashboards tailored to your industry",
      "Automated monthly board packages and investor reports",
      "Budget vs. actual variance analysis with commentary",
      "Cash flow forecasting and working capital analysis",
      "Segment and division reporting for operational insights",
      "Custom financial ratios and performance metrics",
      "Year-over-year and trend analysis reporting",
      "Integration with business intelligence tools",
      "Automated stakeholder report distribution",
      "Real-time financial data access via secure portals"
    ],
    faq: [
      {
        question: "What types of reports do you provide?",
        answer: "We provide full suite financial statements (P&L, Balance Sheet, Cash Flow), custom management reports, KPI dashboards, budget variance reports, board presentations, and industry-specific analytics."
      },
      {
        question: "Can you integrate with our existing BI tools?",
        answer: "Yes, we can integrate with popular business intelligence platforms like Tableau, Power BI, and Looker to provide real-time financial data feeds for your existing analytics infrastructure."
      },
      {
        question: "How quickly can we get custom reports developed?",
        answer: "Custom report development typically takes 1-2 weeks depending on complexity. We work closely with your team to understand requirements and deliver reports that meet your specific needs."
      }
    ]
  },

  "white-label-enterprise": {
    title: "White-Label Enterprise Solutions",
    subtitle: "Private-label bookkeeping services for accounting firms",
    description: "Expand your firm's capacity with our white-label enterprise bookkeeping solutions. Serve large clients under your brand while maintaining quality and professionalism.",
    features: [
      {
        title: "Your Brand, Our Expertise",
        description: "All client communications, reports, and deliverables carry your firm's branding and identity.",
        icon: Building2,
        iconClass: "w-8 h-8 text-primary",
        metrics: "100% white-label"
      },
      {
        title: "Scalable Team Extension",
        description: "Access our enterprise bookkeeping team as an extension of your firm without hiring overhead.",
        icon: Users,
        iconClass: "w-8 h-8 text-accent",
        metrics: "Scale up to 50+ clients"
      },
      {
        title: "Quality Assurance",
        description: "Multi-level review processes ensure all work meets your firm's standards before client delivery.",
        icon: CheckCircle2,
        iconClass: "w-8 h-8 text-trust",
        metrics: "99.9% accuracy rate"
      },
      {
        title: "Partner Portal",
        description: "Dedicated portal for managing all white-label clients with project tracking and communication tools.",
        icon: Settings,
        iconClass: "w-8 h-8 text-primary",
        metrics: "Real-time project status"
      }
    ],
    benefits: [
      "Increase revenue without hiring additional staff",
      "Take on enterprise clients beyond your current capacity",
      "Maintain complete control over client relationships",
      "Access to specialized enterprise bookkeeping expertise",
      "Scalable solution that grows with your firm",
      "Reduced overhead and training costs",
      "Quality guarantees and professional liability coverage",
      "Custom pricing structures for your clients",
      "Dedicated partner success manager",
      "Marketing co-op opportunities and lead sharing"
    ],
    faq: [
      {
        question: "How do you maintain our firm's standards?",
        answer: "We work closely with your firm to understand your processes, quality standards, and client communication preferences. All work is reviewed by our senior team before delivery to ensure it meets your expectations."
      },
      {
        question: "Do clients ever know you're involved?",
        answer: "Never. All communications, reports, and interactions happen under your firm's brand. We operate completely behind the scenes as your bookkeeping team."
      },
      {
        question: "What's the minimum commitment for white-label services?",
        answer: "We offer flexible arrangements starting with individual projects. Most partners find success with a minimum of 3-5 enterprise clients to achieve optimal economies of scale."
      }
    ]
  },

  "industry-professional-services": {
    title: "Enterprise Professional Services Accounting",
    subtitle: "Specialized Financial Management for Professional Services Firms",
    description: "Comprehensive financial management solutions designed for professional services firms. Handle time tracking, project billing, and resource utilization with precision and insight.",
    features: [
      {
        title: "Time & Billing",
        description: "Advanced time tracking and billing with multiple rate structures.",
        icon: Clock,
        iconClass: "w-8 h-8 text-primary",
        metrics: "Real-time tracking"
      },
      {
        title: "Project Profitability",
        description: "Detailed project cost tracking and profitability analysis.",
        icon: BarChart3,
        iconClass: "w-8 h-8 text-accent",
        metrics: "Project-level"
      },
      {
        title: "Resource Management",
        description: "Staff utilization tracking and capacity planning.",
        icon: Users,
        iconClass: "w-8 h-8 text-trust",
        metrics: "Optimal staffing"
      },
      {
        title: "Client Analytics",
        description: "Comprehensive client profitability and relationship analysis.",
        icon: PieChart,
        iconClass: "w-8 h-8 text-primary",
        metrics: "Client insights"
      }
    ],
    benefits: [
      "Automated time tracking",
      "Multi-rate billing",
      "Project profitability",
      "Resource utilization",
      "Client profitability",
      "WIP management",
      "Revenue forecasting",
      "Staff productivity",
      "Engagement tracking",
      "Partner compensation"
    ],
    pricing: {
      title: "Professional Services Pricing",
      description: "Custom pricing based on your firm size and service mix. Starting from $3,500/month.",
      features: [
        "Time & billing system",
        "Project tracking",
        "Resource management",
        "Custom reporting",
        "Monthly reviews",
        "Advisory services"
      ],
      cta: "Get Custom Quote"
    },
    testimonial: {
      quote: "Their understanding of professional services has helped us optimize our operations. The project profitability and resource utilization insights are game-changers.",
      author: "Patricia Lee",
      title: "Managing Partner",
      company: "Elite Consulting Group"
    },
    faq: [
      {
        question: "How do you handle different billing methods?",
        answer: "We support all billing methods including hourly, fixed fee, value-based, and hybrid arrangements, with automated WIP tracking and revenue recognition."
      },
      {
        question: "What about resource management?",
        answer: "Our system tracks staff utilization, availability, and skills to optimize resource allocation and profitability."
      },
      {
        question: "How do you track project profitability?",
        answer: "We provide real-time project profitability analysis including labor costs, overhead allocation, and realization rates."
      },
      {
        question: "Can you handle partner compensation?",
        answer: "Yes, we support complex partner compensation models including revenue sharing, productivity metrics, and client portfolio value."
      }
    ],
    relatedPages: [
      {
        title: "Project Accounting",
        href: "/enterprise/project-accounting",
        description: "Advanced project accounting solutions."
      },
      {
        title: "Financial Reporting",
        href: "/enterprise/financial-reporting",
        description: "Comprehensive financial reporting and analytics."
      },
      {
        title: "Resource Management",
        href: "/enterprise/resource-management",
        description: "Advanced resource planning solutions."
      }
    ]
  },
  "industry-manufacturing": {
    title: "Enterprise Manufacturing Accounting Solutions",
    subtitle: "Specialized Financial Management for Manufacturing Companies",
    description: "Comprehensive financial management solutions designed for manufacturing enterprises. Handle inventory valuation, cost accounting, and production tracking with precision and insight.",
    features: [
      {
        title: "Cost Accounting",
        description: "Advanced cost accounting for materials, labor, and overhead with standard costing.",
        icon: Calculator,
        iconClass: "w-8 h-8 text-primary",
        metrics: "Real-time costing"
      },
      {
        title: "Inventory Management",
        description: "Perpetual inventory system with multiple valuation methods and tracking.",
        icon: Database,
        iconClass: "w-8 h-8 text-accent",
        metrics: "Real-time tracking"
      },
      {
        title: "Production Accounting",
        description: "Detailed tracking of production costs and variances.",
        icon: Settings,
        iconClass: "w-8 h-8 text-trust",
        metrics: "Process-level"
      },
      {
        title: "Supply Chain Finance",
        description: "Comprehensive supplier payment and procurement finance management.",
        icon: ArrowUpDown,
        iconClass: "w-8 h-8 text-primary",
        metrics: "Full integration"
      }
    ],
    benefits: [
      "Standard cost accounting",
      "Material cost tracking",
      "Labor cost allocation",
      "Overhead application",
      "Variance analysis",
      "WIP management",
      "BOM cost tracking",
      "Production reporting",
      "Inventory valuation",
      "Supply chain analytics"
    ],
    pricing: {
      title: "Manufacturing Accounting Pricing",
      description: "Custom pricing based on your production volume and complexity. Starting from $4,500/month.",
      features: [
        "Cost accounting suite",
        "Inventory management",
        "Production tracking",
        "Custom reporting",
        "Monthly reviews",
        "Advisory services"
      ],
      cta: "Get Custom Quote"
    },
    testimonial: {
      quote: "Their manufacturing expertise has helped us optimize our costing and inventory management. The real-time production tracking and variance analysis are invaluable.",
      author: "Tom Anderson",
      title: "VP of Finance",
      company: "Advanced Manufacturing Inc"
    },
    faq: [
      {
        question: "How do you handle cost accounting?",
        answer: "We implement standard costing systems with detailed tracking of material, labor, and overhead costs, including variance analysis and cost allocation methods."
      },
      {
        question: "What about inventory valuation?",
        answer: "We support multiple inventory valuation methods (FIFO, LIFO, Average Cost) with perpetual inventory tracking and regular reconciliation."
      },
      {
        question: "How do you track production costs?",
        answer: "Our system tracks costs at each stage of production, including WIP, finished goods, and variances from standard costs."
      },
      {
        question: "Can you integrate with our ERP?",
        answer: "Yes, we integrate with major manufacturing ERP systems to ensure seamless flow of production and cost data."
      }
    ],
    relatedPages: [
      {
        title: "Cost Accounting",
        href: "/enterprise/cost-accounting",
        description: "Advanced cost accounting solutions."
      },
      {
        title: "Financial Reporting",
        href: "/enterprise/financial-reporting",
        description: "Comprehensive financial reporting and analytics."
      },
      {
        title: "Inventory Management",
        href: "/enterprise/inventory-management",
        description: "Advanced inventory control solutions."
      }
    ]
  },
  "industry-construction": {
    title: "Enterprise Construction Accounting Solutions",
    subtitle: "Specialized Financial Management for Construction Companies",
    description: "Comprehensive financial management solutions designed for construction enterprises. Handle project accounting, job costing, and contractor payments with precision and insight.",
    features: [
      {
        title: "Project Accounting",
        description: "Detailed project-based accounting with real-time cost tracking and analysis.",
        icon: Building,
        iconClass: "w-8 h-8 text-primary",
        metrics: "Project-level"
      },
      {
        title: "Job Costing",
        description: "Advanced job costing with labor, materials, and overhead tracking.",
        icon: Calculator,
        iconClass: "w-8 h-8 text-accent",
        metrics: "Real-time costs"
      },
      {
        title: "Progress Billing",
        description: "Automated AIA progress billing and payment applications.",
        icon: Receipt,
        iconClass: "w-8 h-8 text-trust",
        metrics: "AIA compliant"
      },
      {
        title: "Contract Management",
        description: "Comprehensive contract and change order management.",
        icon: FileCheck,
        iconClass: "w-8 h-8 text-primary",
        metrics: "Full tracking"
      }
    ],
    benefits: [
      "Project-based accounting",
      "Real-time job costing",
      "Progress billing automation",
      "Change order tracking",
      "Subcontractor management",
      "Equipment tracking",
      "Union payroll compliance",
      "Bonding requirement support",
      "WIP reporting automation",
      "Certified payroll reports"
    ],
    pricing: {
      title: "Construction Accounting Pricing",
      description: "Custom pricing based on your project volume and complexity. Starting from $4,000/month.",
      features: [
        "Project accounting suite",
        "Job cost tracking",
        "Progress billing",
        "Custom reporting",
        "Monthly reviews",
        "Advisory services"
      ],
      cta: "Get Custom Quote"
    },
    testimonial: {
      quote: "Their construction-specific expertise has transformed our financial operations. The real-time job costing and progress billing automation save us countless hours.",
      author: "Mike Johnson",
      title: "CFO",
      company: "Premier Construction Group"
    },
    faq: [
      {
        question: "How do you handle job costing?",
        answer: "Our system tracks costs in real-time across labor, materials, equipment, and overhead, providing detailed cost analysis at the project and task level."
      },
      {
        question: "Can you manage progress billing?",
        answer: "Yes, we automate AIA progress billing, including payment applications, lien waivers, and retention tracking."
      },
      {
        question: "What about change orders?",
        answer: "We provide comprehensive change order management, tracking both approved and pending changes with their impact on project budgets and billing."
      },
      {
        question: "How do you handle certified payroll?",
        answer: "Our system generates certified payroll reports compliant with federal and state requirements, including prevailing wage calculations and union requirements."
      }
    ],
    relatedPages: [
      {
        title: "Project Accounting",
        href: "/enterprise/project-accounting",
        description: "Specialized project-based accounting solutions."
      },
      {
        title: "Financial Reporting",
        href: "/enterprise/financial-reporting",
        description: "Advanced financial reporting and analytics."
      },
      {
        title: "Multi-Entity Management",
        href: "/enterprise/multi-entity-consolidation",
        description: "Solutions for complex organizational structures."
      }
    ]
  },
  "industry-healthcare": {
    title: "Enterprise Healthcare Accounting Solutions",
    subtitle: "Specialized Financial Management for Healthcare Organizations",
    description: "Comprehensive financial management solutions designed for healthcare organizations. Handle complex reimbursements, regulatory compliance, and multi-location operations with precision.",
    features: [
      {
        title: "Healthcare Billing",
        description: "Specialized handling of insurance billing, reimbursements, and patient payments.",
        icon: Receipt,
        iconClass: "w-8 h-8 text-primary",
        metrics: "All payers"
      },
      {
        title: "Compliance Management",
        description: "HIPAA-compliant processes and reporting for healthcare organizations.",
        icon: Shield,
        iconClass: "w-8 h-8 text-accent",
        metrics: "100% compliant"
      },
      {
        title: "Revenue Cycle",
        description: "End-to-end revenue cycle management and optimization.",
        icon: ArrowUpDown,
        iconClass: "w-8 h-8 text-trust",
        metrics: "Optimized RCM"
      },
      {
        title: "Cost Accounting",
        description: "Detailed cost accounting and analysis by department and service line.",
        icon: Calculator,
        iconClass: "w-8 h-8 text-primary",
        metrics: "Service-level"
      }
    ],
    benefits: [
      "HIPAA-compliant processes",
      "Medicare/Medicaid billing",
      "Insurance reimbursement tracking",
      "Service line profitability",
      "Cost center accounting",
      "Regulatory compliance",
      "Grant management",
      "Multi-location support",
      "Physician compensation tracking",
      "Statistical reporting"
    ],
    pricing: {
      title: "Healthcare Accounting Pricing",
      description: "Custom pricing based on your organization's size and complexity. Starting from $4,500/month.",
      features: [
        "HIPAA compliance",
        "Revenue cycle management",
        "Cost accounting",
        "Regulatory reporting",
        "Monthly reviews",
        "Advisory services"
      ],
      cta: "Get Custom Quote"
    },
    testimonial: {
      quote: "Their healthcare expertise has been invaluable. They understand the complexities of healthcare finance and have helped us optimize our revenue cycle and reporting.",
      author: "Dr. James Wilson",
      title: "CEO",
      company: "Regional Medical Group"
    },
    faq: [
      {
        question: "How do you handle HIPAA compliance?",
        answer: "Our systems and processes are fully HIPAA-compliant, with encrypted data transmission, secure access controls, and regular compliance audits."
      },
      {
        question: "Can you handle complex billing scenarios?",
        answer: "Yes, we manage all aspects of healthcare billing including insurance, Medicare/Medicaid, self-pay, and sliding scale payments."
      },
      {
        question: "How do you track service line profitability?",
        answer: "We implement detailed cost accounting systems that track direct and indirect costs by service line, providing accurate profitability analysis."
      },
      {
        question: "What about regulatory reporting?",
        answer: "We handle all required regulatory reporting including cost reports, statistical reporting, and grant compliance reporting."
      }
    ],
    relatedPages: [
      {
        title: "Multi-Location Management",
        href: "/enterprise/multi-location-bookkeeping",
        description: "Solutions for multi-location healthcare organizations."
      },
      {
        title: "Financial Reporting",
        href: "/enterprise/financial-reporting",
        description: "Advanced financial reporting and analytics."
      },
      {
        title: "Compliance Services",
        href: "/enterprise/compliance-services",
        description: "Comprehensive regulatory compliance solutions."
      }
    ]
  },
  "industry-ecommerce": {
    title: "Enterprise E-commerce Accounting Solutions",
    subtitle: "Specialized Financial Management for E-commerce Companies",
    description: "Comprehensive financial management solutions designed for enterprise e-commerce operations. Handle multi-channel sales, inventory accounting, and marketplace integrations with precision.",
    features: [
      {
        title: "Multi-Channel Integration",
        description: "Automated sales data consolidation from all channels and marketplaces.",
        icon: Globe,
        iconClass: "w-8 h-8 text-primary",
        metrics: "All platforms"
      },
      {
        title: "Inventory Management",
        description: "Real-time inventory tracking and accounting across all locations and channels.",
        icon: Database,
        iconClass: "w-8 h-8 text-accent",
        metrics: "Real-time sync"
      },
      {
        title: "Sales Tax Automation",
        description: "Automated sales tax calculation and filing for all jurisdictions.",
        icon: Calculator,
        iconClass: "w-8 h-8 text-trust",
        metrics: "50 state coverage"
      },
      {
        title: "Performance Analytics",
        description: "Advanced analytics for sales, margins, and channel performance.",
        icon: BarChart3,
        iconClass: "w-8 h-8 text-primary",
        metrics: "Real-time data"
      }
    ],
    benefits: [
      "Multi-channel sales tracking",
      "Automated marketplace reconciliation",
      "Inventory value automation",
      "Sales tax compliance",
      "Channel profitability analysis",
      "Cash flow forecasting",
      "Payment processor reconciliation",
      "Cost of goods sold tracking",
      "Return and refund management",
      "Multi-currency support"
    ],
    pricing: {
      title: "E-commerce Accounting Pricing",
      description: "Custom pricing based on your sales volume and channels. Starting from $3,500/month.",
      features: [
        "All channels supported",
        "Sales tax automation",
        "Inventory accounting",
        "Custom reporting",
        "Monthly reviews",
        "Advisory services"
      ],
      cta: "Get Custom Quote"
    },
    testimonial: {
      quote: "They transformed our e-commerce accounting from a complex mess to a streamlined operation. The multi-channel integration and real-time inventory tracking are game-changers.",
      author: "Sarah Miller",
      title: "COO",
      company: "Global E-commerce Brands"
    },
    faq: [
      {
        question: "Which platforms do you integrate with?",
        answer: "We integrate with all major e-commerce platforms including Shopify, Amazon, Walmart, eBay, WooCommerce, and can build custom integrations for other platforms."
      },
      {
        question: "How do you handle marketplace sales?",
        answer: "We automatically reconcile marketplace sales, fees, and payouts, providing clear visibility into true profitability by channel and product."
      },
      {
        question: "What about sales tax?",
        answer: "Our system handles economic nexus tracking, tax calculations, and filing across all states and marketplaces, ensuring full compliance."
      },
      {
        question: "How do you manage inventory accounting?",
        answer: "We provide real-time inventory valuation, COGS tracking, and automated journal entries for inventory movements across all locations and channels."
      }
    ],
    relatedPages: [
      {
        title: "Sales Tax Compliance",
        href: "/enterprise/sales-tax-compliance",
        description: "Automated sales tax management for all jurisdictions."
      },
      {
        title: "Multi-Channel Accounting",
        href: "/enterprise/multi-channel-accounting",
        description: "Integrated accounting for all sales channels."
      },
      {
        title: "Financial Reporting",
        href: "/enterprise/financial-reporting",
        description: "Advanced financial reporting and analytics."
      }
    ]
  },
  "industry-saas": {
    title: "Enterprise SaaS Accounting Solutions",
    subtitle: "Specialized Financial Management for SaaS Companies",
    description: "Purpose-built financial management solutions for enterprise SaaS companies. Handle complex revenue recognition, subscription billing, and SaaS metrics with precision and insight.",
    features: [
      {
        title: "SaaS Metrics Tracking",
        description: "Automated calculation and tracking of key SaaS metrics including ARR, MRR, CAC, LTV, and churn.",
        icon: BarChart3,
        iconClass: "w-8 h-8 text-primary",
        metrics: "15+ key metrics"
      },
      {
        title: "Revenue Recognition",
        description: "ASC 606 compliant revenue recognition for subscription and usage-based revenue.",
        icon: CheckCircle2,
        iconClass: "w-8 h-8 text-accent",
        metrics: "100% compliant"
      },
      {
        title: "Subscription Management",
        description: "Automated subscription billing and revenue management across plans and tiers.",
        icon: Receipt,
        iconClass: "w-8 h-8 text-trust",
        metrics: "Any model"
      },
      {
        title: "Investor Reporting",
        description: "SaaS-focused financial reports and metrics for board meetings and investors.",
        icon: FileSpreadsheet,
        iconClass: "w-8 h-8 text-primary",
        metrics: "Board-ready"
      }
    ],
    benefits: [
      "Automated SaaS metrics calculation",
      "Revenue recognition automation",
      "Subscription billing management",
      "Cash flow forecasting",
      "Investor-ready reporting",
      "Unit economics tracking",
      "Cohort analysis automation",
      "Integration with billing systems",
      "Multi-currency support",
      "Real-time metrics dashboard"
    ],
    pricing: {
      title: "SaaS Accounting Pricing",
      description: "Custom pricing based on your revenue volume and complexity. Starting from $4,000/month.",
      features: [
        "Full SaaS metrics suite",
        "Revenue recognition automation",
        "Custom reporting package",
        "System integrations",
        "Monthly reviews",
        "Advisory services"
      ],
      cta: "Get Custom Quote"
    },
    testimonial: {
      quote: "Their understanding of SaaS metrics and revenue recognition has been invaluable. We now have perfect visibility into our key metrics and confidence in our revenue reporting.",
      author: "Alex Rivera",
      title: "CFO",
      company: "CloudTech SaaS"
    },
    faq: [
      {
        question: "How do you handle complex pricing models?",
        answer: "Our system handles all SaaS pricing models including tiered pricing, usage-based billing, hybrid models, and custom enterprise agreements."
      },
      {
        question: "What SaaS metrics do you track?",
        answer: "We track all key SaaS metrics including MRR, ARR, CAC, LTV, churn rate, expansion revenue, gross margin, burn rate, and custom metrics specific to your business."
      },
      {
        question: "How do you manage revenue recognition?",
        answer: "We automate revenue recognition in compliance with ASC 606, handling complex scenarios like multi-element arrangements, usage-based billing, and contract modifications."
      },
      {
        question: "Can you integrate with our tech stack?",
        answer: "Yes, we integrate with popular SaaS platforms like Stripe, Chargebee, Zuora, Salesforce, and can build custom integrations as needed."
      }
    ],
    relatedPages: [
      {
        title: "Revenue Recognition",
        href: "/enterprise/revenue-recognition",
        description: "Automated ASC 606 compliant revenue recognition."
      },
      {
        title: "Financial Reporting",
        href: "/enterprise/financial-reporting",
        description: "Advanced financial reporting and analytics."
      },
      {
        title: "Enterprise Services",
        href: "/enterprise",
        description: "Full suite of enterprise financial solutions."
      }
    ]
  },
  "outsourced-accounting": {
    title: "Enterprise Outsourced Accounting",
    subtitle: "Complete Finance Department Solution",
    description: "Transform your financial operations with our comprehensive outsourced accounting solution. Get a full-service finance department with expert staff, advanced technology, and enterprise-grade processes.",
    features: [
      {
        title: "Full-Service Team",
        description: "Dedicated team of accountants, controllers, and CFO advisors for your organization.",
        icon: Users,
        iconClass: "w-8 h-8 text-primary",
        metrics: "Expert staff"
      },
      {
        title: "Process Automation",
        description: "Advanced automation for all accounting processes and workflows.",
        icon: Settings,
        iconClass: "w-8 h-8 text-accent",
        metrics: "80% automated"
      },
      {
        title: "Strategic Advisory",
        description: "CFO-level strategic guidance and financial planning support.",
        icon: TrendingUp,
        iconClass: "w-8 h-8 text-trust",
        metrics: "Monthly advisory"
      },
      {
        title: "Technology Stack",
        description: "Enterprise-grade accounting and financial management software suite.",
        icon: Database,
        iconClass: "w-8 h-8 text-primary",
        metrics: "Best-in-class"
      }
    ],
    benefits: [
      "Full accounting department coverage",
      "Controller oversight and CFO advisory",
      "Complete process automation",
      "GAAP/IFRS compliance",
      "Audit and tax ready financials",
      "Strategic financial planning",
      "Cash flow management",
      "Budget development and tracking",
      "KPI development and monitoring",
      "Technology implementation and support"
    ],
    pricing: {
      title: "Outsourced Accounting Pricing",
      description: "Custom pricing based on your organization's size and needs. Starting from $5,000/month.",
      features: [
        "Full-service accounting team",
        "Controller oversight",
        "CFO advisory services",
        "All software licenses",
        "Process automation",
        "Monthly reviews"
      ],
      cta: "Get Custom Quote"
    },
    testimonial: {
      quote: "Switching to outsourced accounting was transformative. We got an expert team and enterprise-grade systems at a fraction of the cost of building in-house.",
      author: "Lisa Thompson",
      title: "CEO",
      company: "Innovation Tech Corp"
    },
    faq: [
      {
        question: "What services are included?",
        answer: "We provide complete accounting department services including AP/AR, general ledger, month-end close, financial reporting, payroll, tax preparation support, and CFO advisory services."
      },
      {
        question: "How do you ensure quality?",
        answer: "We use a three-level review process with staff accountants, senior accountants, and controller oversight. All work follows documented procedures and includes audit trails."
      },
      {
        question: "What technology do you use?",
        answer: "We implement best-in-class accounting and financial management software, customized to your needs. This includes ERP, AP/AR automation, expense management, and reporting tools."
      },
      {
        question: "How do you handle transitions?",
        answer: "We follow a proven 60-day implementation process that includes system setup, process documentation, data migration, and team training to ensure a smooth transition."
      }
    ],
    relatedPages: [
      {
        title: "Financial Reporting",
        href: "/enterprise/financial-reporting",
        description: "Advanced financial reporting and analytics solutions."
      },
      {
        title: "CFO Advisory",
        href: "/enterprise/cfo-advisory",
        description: "Strategic financial guidance and planning services."
      },
      {
        title: "Enterprise Services",
        href: "/enterprise",
        description: "Full suite of enterprise financial management solutions."
      }
    ]
  },
  "multi-entity-consolidation": {
    title: "Multi-Entity Consolidation Services",
    subtitle: "Streamlined Financial Consolidation for Complex Organizations",
    description: "Automate and simplify your multi-entity consolidation process. Handle complex ownership structures, intercompany transactions, and foreign currency translations with precision and ease.",
    features: [
      {
        title: "Automated Consolidation",
        description: "Streamlined consolidation process with automated eliminations and adjustments.",
        icon: Building2,
        iconClass: "w-8 h-8 text-primary",
        metrics: "Minutes vs. days"
      },
      {
        title: "Intercompany Management",
        description: "Automated intercompany transaction matching and reconciliation.",
        icon: ArrowUpDown,
        iconClass: "w-8 h-8 text-accent",
        metrics: "100% accuracy"
      },
      {
        title: "Currency Translation",
        description: "Automated foreign currency translation and remeasurement.",
        icon: CircleDollarSign,
        iconClass: "w-8 h-8 text-trust",
        metrics: "Real-time rates"
      },
      {
        title: "Ownership Structure",
        description: "Complex ownership and partial ownership calculations.",
        icon: Users,
        iconClass: "w-8 h-8 text-primary",
        metrics: "Any structure"
      }
    ],
    benefits: [
      "Automated consolidation process",
      "Intercompany elimination automation",
      "Multi-currency translation",
      "Complex ownership handling",
      "Audit trail documentation",
      "Consolidated reporting",
      "Entity-level analytics",
      "Automated adjustments",
      "Compliance documentation",
      "Real-time consolidation"
    ],
    pricing: {
      title: "Consolidation Services Pricing",
      description: "Custom pricing based on number of entities and complexity. Starting from $3,500/month.",
      features: [
        "Unlimited entities",
        "All currencies supported",
        "Automated eliminations",
        "Custom reporting",
        "Audit support",
        "Monthly reviews"
      ],
      cta: "Get Custom Quote"
    },
    testimonial: {
      quote: "The automated consolidation process has reduced our month-end close from weeks to days. The accuracy and efficiency gains are remarkable.",
      author: "David Chen",
      title: "Group Financial Controller",
      company: "Global Holdings Ltd"
    },
    faq: [
      {
        question: "How do you handle complex ownership structures?",
        answer: "Our system manages any ownership structure, including partial ownership, joint ventures, and special purpose entities. We automatically calculate appropriate eliminations and minority interest."
      },
      {
        question: "What about intercompany transactions?",
        answer: "We automate the identification, matching, and elimination of intercompany transactions. Our system handles complex scenarios including partial eliminations and upstream/downstream transactions."
      },
      {
        question: "How do you manage multiple currencies?",
        answer: "We support automated currency translation using daily, average, or historical rates as appropriate. The system handles remeasurement and translation adjustments automatically."
      },
      {
        question: "Can you handle statutory requirements?",
        answer: "Yes, we support both GAAP and IFRS requirements for consolidation, and can handle country-specific statutory reporting requirements."
      }
    ],
    relatedPages: [
      {
        title: "Financial Reporting",
        href: "/enterprise/financial-reporting",
        description: "Comprehensive financial reporting solutions for enterprise organizations."
      },
      {
        title: "Multi-Location Bookkeeping",
        href: "/enterprise/multi-location-bookkeeping",
        description: "Bookkeeping solutions for multi-location businesses."
      },
      {
        title: "Enterprise Services",
        href: "/enterprise",
        description: "Full suite of enterprise financial management solutions."
      }
    ]
  },
  "sales-tax-compliance": {
    title: "Enterprise Sales Tax Compliance",
    subtitle: "Automated Multi-State Sales Tax Management",
    description: "Comprehensive sales tax compliance solution for enterprise businesses. Automate nexus tracking, tax calculations, filing, and remittance across multiple jurisdictions.",
    features: [
      {
        title: "Multi-State Nexus Tracking",
        description: "Automated economic and physical nexus monitoring across all US states and localities.",
        icon: Globe,
        iconClass: "w-8 h-8 text-primary",
        metrics: "50 state coverage"
      },
      {
        title: "Real-Time Calculations",
        description: "Instant, accurate tax calculations for all transactions across multiple jurisdictions.",
        icon: Calculator,
        iconClass: "w-8 h-8 text-accent",
        metrics: "99.99% accuracy"
      },
      {
        title: "Automated Filing",
        description: "Streamlined return preparation and filing for all required jurisdictions.",
        icon: FileCheck,
        iconClass: "w-8 h-8 text-trust",
        metrics: "Auto-filing"
      },
      {
        title: "Compliance Dashboard",
        description: "Real-time visibility into tax obligations, deadlines, and filing status.",
        icon: BarChart3,
        iconClass: "w-8 h-8 text-primary",
        metrics: "100% compliance"
      }
    ],
    benefits: [
      "Automated nexus determination",
      "Real-time tax rate updates",
      "Multi-jurisdiction compliance",
      "Automated return preparation",
      "Economic nexus monitoring",
      "Tax exemption certificate management",
      "Audit trail documentation",
      "Integration with major platforms",
      "Custom tax rules engine",
      "Detailed compliance reporting"
    ],
    pricing: {
      title: "Sales Tax Compliance Pricing",
      description: "Custom pricing based on transaction volume and jurisdictions. Starting from $1,500/month.",
      features: [
        "Unlimited tax calculations",
        "All state filings included",
        "Certificate management system",
        "Custom tax rules setup",
        "Monthly compliance reviews",
        "Audit support included"
      ],
      cta: "Get Custom Quote"
    },
    testimonial: {
      quote: "Managing sales tax across 30 states was a nightmare before implementing this solution. Now it's completely automated and we're confident in our compliance.",
      author: "Robert Chang",
      title: "Tax Director",
      company: "National Retail Group"
    },
    faq: [
      {
        question: "How do you handle multiple states?",
        answer: "Our system automatically tracks nexus triggers, calculates taxes, and manages filings for all US states and localities. We handle both economic and physical nexus requirements."
      },
      {
        question: "What about marketplace facilitator laws?",
        answer: "We stay current with all marketplace facilitator laws and automatically adjust tax calculations and filing requirements based on your business model and each state's requirements."
      },
      {
        question: "How do you manage tax exemptions?",
        answer: "Our certificate management system validates, stores, and tracks exemption certificates. We automatically apply exemptions and flag expired certificates."
      },
      {
        question: "What integrations do you support?",
        answer: "We integrate with all major e-commerce platforms, ERP systems, and accounting software. Custom integrations are also available for enterprise clients."
      }
    ],
    relatedPages: [
      {
        title: "Multi-State Compliance",
        href: "/enterprise/multi-state-compliance",
        description: "Comprehensive compliance solutions for multi-state operations."
      },
      {
        title: "Financial Reporting",
        href: "/enterprise/financial-reporting",
        description: "Advanced financial reporting and analytics solutions."
      },
      {
        title: "Enterprise Bookkeeping",
        href: "/enterprise/bookkeeping-services",
        description: "Full-service enterprise bookkeeping solutions."
      }
    ]
  },
  "revenue-recognition": {
    title: "Enterprise Revenue Recognition Services",
    subtitle: "Automated ASC 606 Compliance & Revenue Management",
    description: "Streamline your revenue recognition processes with our enterprise-grade automation solution. Ensure compliance with ASC 606/IFRS 15 while handling complex multi-element arrangements and contract modifications.",
    features: [
      {
        title: "ASC 606 Automation",
        description: "Automated revenue recognition workflows compliant with ASC 606/IFRS 15 standards for all revenue streams.",
        icon: CheckCircle2,
        iconClass: "w-8 h-8 text-primary",
        metrics: "100% compliance"
      },
      {
        title: "Contract Management",
        description: "Smart contract analysis and management for multi-element arrangements and modifications.",
        icon: FileSpreadsheet,
        iconClass: "w-8 h-8 text-accent",
        metrics: "Automated tracking"
      },
      {
        title: "Performance Obligations",
        description: "Automated identification and tracking of performance obligations with revenue allocation.",
        icon: ArrowUpDown,
        iconClass: "w-8 h-8 text-trust",
        metrics: "Real-time tracking"
      },
      {
        title: "Revenue Analytics",
        description: "Advanced analytics and forecasting for revenue streams with detailed reporting.",
        icon: BarChart3,
        iconClass: "w-8 h-8 text-primary",
        metrics: "Predictive insights"
      }
    ],
    benefits: [
      "Automated revenue recognition schedules",
      "Contract modification tracking and management",
      "Multi-element arrangement handling",
      "Performance obligation identification",
      "Standalone selling price calculations",
      "Revenue allocation automation",
      "Deferred revenue management",
      "Contract asset/liability tracking",
      "Audit-ready documentation",
      "Real-time revenue forecasting"
    ],
    pricing: {
      title: "Revenue Recognition Pricing",
      description: "Custom pricing based on contract volume and complexity. Implementation starting from $7,500.",
      features: [
        "Full ASC 606 compliance automation",
        "Contract management system",
        "Custom revenue rules engine",
        "Integration with existing systems",
        "Audit documentation support",
        "Ongoing compliance updates"
      ],
      cta: "Get Custom Quote"
    },
    testimonial: {
      quote: "The automation has transformed our revenue recognition process. What used to take days now happens automatically, and we're 100% confident in our ASC 606 compliance.",
      author: "Jennifer Wong",
      title: "Director of Revenue",
      company: "TechScale Solutions"
    },
    faq: [
      {
        question: "How do you handle complex contracts?",
        answer: "Our system automatically analyzes contracts to identify performance obligations, allocate transaction prices, and manage modifications. We handle multi-element arrangements, variable consideration, and complex pricing structures."
      },
      {
        question: "What about ASC 606 compliance?",
        answer: "Our solution is built around ASC 606/IFRS 15 requirements. We automatically document the five-step model, manage performance obligations, and generate audit-ready documentation."
      },
      {
        question: "Can you integrate with our current systems?",
        answer: "Yes, we integrate with major ERP systems, CRM platforms, and billing systems. We can also build custom integrations for your specific technology stack."
      },
      {
        question: "How do you handle contract modifications?",
        answer: "Our system automatically tracks and manages contract modifications, calculating the appropriate accounting treatment whether prospective or cumulative catch-up adjustments are required."
      }
    ],
    relatedPages: [
      {
        title: "Enterprise Financial Reporting",
        href: "/enterprise/financial-reporting",
        description: "Comprehensive financial reporting and analytics for enterprise organizations."
      },
      {
        title: "Billing Services",
        href: "/enterprise/billing-services",
        description: "Automated billing and revenue management solutions."
      },
      {
        title: "Multi-Entity Consolidation",
        href: "/enterprise/multi-entity-consolidation",
        description: "Streamlined consolidation for complex organizational structures."
      }
    ]
  },
  "enterprise-pricing": {
    title: "Enterprise Pricing",
    subtitle: "Custom solutions tailored to your organization's needs",
    description: "Our enterprise pricing is designed to scale with your business. We offer flexible packages based on transaction volume, complexity, and support requirements.",
    features: [
      {
        title: "Volume-Based Pricing",
        description: "Pay based on your actual transaction volume with significant discounts for higher volumes.",
        icon: BarChart3,
        iconClass: "w-8 h-8 text-primary",
        metrics: "Up to 40% volume discounts"
      },
      {
        title: "Custom Packages",
        description: "Tailored service packages that include exactly what your organization needs, nothing more, nothing less.",
        icon: Settings,
        iconClass: "w-8 h-8 text-accent",
        metrics: "100% customizable"
      },
      {
        title: "Transparent Pricing",
        description: "No hidden fees or surprise charges. Clear, upfront pricing with detailed service level agreements.",
        icon: CheckCircle2,
        iconClass: "w-8 h-8 text-trust",
        metrics: "No hidden fees"
      },
      {
        title: "Flexible Terms",
        description: "Choose from monthly, quarterly, or annual agreements with options for scaling up or down as needed.",
        icon: Clock,
        iconClass: "w-8 h-8 text-primary",
        metrics: "Flexible contracts"
      }
    ],
    benefits: [
      "Starting at $2,500/month for enterprise clients",
      "Volume discounts for high-transaction businesses",
      "No setup fees for enterprise onboarding",
      "Included: dedicated account manager and CPA oversight",
      "Custom integration development included in enterprise packages",
      "Priority support with guaranteed response times",
      "Quarterly business reviews and strategic planning sessions",
      "Scalable pricing that grows efficiently with your business",
      "Annual contract discounts available",
      "Multi-year agreements with locked-in rates"
    ],
    pricing: {
      title: "Get Your Custom Quote",
      description: "Enterprise pricing varies based on your specific needs. Our team will create a custom proposal based on your transaction volume, complexity, and service requirements.",
      features: [
        "Free consultation and needs assessment",
        "Custom pricing proposal within 48 hours",
        "Flexible payment terms and contract options",
        "30-day trial period for new enterprise clients",
        "Satisfaction guarantee with service level agreements",
        "Annual pricing reviews and optimization"
      ],
      cta: "Request Custom Enterprise Quote"
    },
    faq: [
      {
        question: "What's the minimum spend for enterprise services?",
        answer: "Enterprise services typically start at $2,500/month. This includes dedicated account management, CPA oversight, and priority support that enterprise clients require."
      },
      {
        question: "Do you offer annual contract discounts?",
        answer: "Yes, we provide up to 15% discounts for annual commitments, plus additional savings for multi-year agreements. Annual contracts also include rate protection and enhanced service guarantees."
      },
      {
        question: "What happens if our transaction volume changes?",
        answer: "Our pricing automatically adjusts based on your actual volume. If you grow significantly, you'll benefit from volume discount tiers. If volume decreases, your pricing adjusts accordingly."
      },
      {
        question: "Are there additional fees for custom integrations?",
        answer: "Basic integrations with popular enterprise software are included. Complex custom integrations are quoted separately, but development costs are often included in enterprise packages above $5,000/month."
      }
    ]
  }
};

export default enterpriseContent;