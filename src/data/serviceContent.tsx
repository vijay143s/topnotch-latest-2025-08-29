import React from "react";
import { Shield, Clock, DollarSign, Users, CheckCircle, TrendingUp, Award, Zap } from "lucide-react";

export const serviceContent = {
  "bookkeeping-services": {
    title: "Professional Bookkeeping Services",
    subtitle: "Comprehensive bookkeeping solutions for small businesses",
    description: "Get accurate, CPA-ready financials with our comprehensive bookkeeping services. We handle everything from transaction categorization to monthly reporting, so you can focus on growing your business.",
    features: [
      "Monthly bank reconciliations",
      "Transaction categorization", 
      "Financial statement preparation",
      "CPA review included",
      "QuickBooks/Xero included"
    ],
    whatIncluded: [
      "Dedicated bookkeeper assigned to your account",
      "Monthly bank reconciliations",
      "Transaction categorization and coding",
      "Profit & Loss statements",
      "Balance sheets",
      "Cash flow statements", 
      "QuickBooks or Xero software included",
      "CPA review of all work",
      "Unlimited phone and email support",
      "Monthly financial reporting",
      "Year-end tax preparation support",
      "Secure document management"
    ],
    benefits: [
      {
        title: "Expert Bookkeepers",
        description: "Certified professionals with years of experience in small business accounting",
        icon: <Award className="w-8 h-8 text-primary" />
      },
      {
        title: "Fast Turnaround",
        description: "Monthly books completed within 5 business days of receiving documents",
        icon: <Clock className="w-8 h-8 text-primary" />
      },
      {
        title: "Affordable Pricing", 
        description: "Flat-rate pricing starting at $150/month with no hidden fees",
        icon: <DollarSign className="w-8 h-8 text-primary" />
      }
    ],
    faq: [
      {
        question: "What's included in your bookkeeping services?",
        answer: "Our services include transaction categorization, bank reconciliations, financial statement preparation, CPA review, and unlimited support. Software is included."
      },
      {
        question: "How quickly can you get my books up to date?",
        answer: "Most catch-up projects are completed within 2-4 weeks, depending on the volume of transactions and complexity."
      },
      {
        question: "Do you work with my existing accounting software?",
        answer: "Yes, we work with QuickBooks, Xero, and other popular accounting platforms. Software is included in our pricing."
      }
    ]
  },

  "monthly-bookkeeping": {
    title: "Monthly Bookkeeping Services",
    subtitle: "Keep your books current with regular monthly bookkeeping",
    description: "Stay on top of your finances with our monthly bookkeeping service. We'll handle all your bookkeeping tasks every month, ensuring your books are always current and tax-ready.",
    features: [
      "Monthly financial statements",
      "Bank reconciliations",
      "Expense categorization",
      "Revenue tracking",
      "CPA oversight"
    ],
    whatIncluded: [
      "Monthly bank and credit card reconciliations",
      "Transaction categorization and coding",
      "Monthly Profit & Loss statements",
      "Monthly Balance sheets",
      "Accounts receivable management",
      "Accounts payable tracking",
      "Expense report preparation",
      "Sales tax reporting support",
      "Monthly financial review call",
      "CPA review of all work",
      "QuickBooks or Xero included",
      "Unlimited email support"
    ],
    benefits: [
      {
        title: "Monthly Accuracy",
        description: "Books completed and reviewed every month for maximum accuracy",
        icon: <CheckCircle className="w-8 h-8 text-primary" />
      },
      {
        title: "Business Insights",
        description: "Monthly reports help you understand your business performance",
        icon: <TrendingUp className="w-8 h-8 text-primary" />
      },
      {
        title: "Tax Readiness",
        description: "Always be prepared for tax season with current, organized books",
        icon: <Shield className="w-8 h-8 text-primary" />
      }
    ],
    faq: [
      {
        question: "When do you complete my monthly books?",
        answer: "We complete your books by the 15th of each month for the previous month, provided we receive all documents by the 5th."
      },
      {
        question: "What if I need to see my financials sooner?",
        answer: "We can provide preliminary reports within 24-48 hours for urgent needs. Final reports follow our standard schedule."
      },
      {
        question: "Can I cancel my monthly service anytime?",
        answer: "Yes, our monthly service has no contracts. You can cancel with 30 days notice."
      }
    ]
  },

  "catch-up-bookkeeping": {
    title: "Catch-Up Bookkeeping Services", 
    subtitle: "Get behind books up to date quickly and accurately",
    description: "Fallen behind on your bookkeeping? Our catch-up specialists will get your books current fast. We'll organize, categorize, and reconcile months or years of transactions to get you back on track.",
    features: [
      "Multi-year catch-up capability",
      "Document organization",
      "Bank reconciliation cleanup",
      "Tax preparation support",
      "Fast turnaround"
    ],
    whatIncluded: [
      "Complete transaction review and categorization",
      "Bank and credit card reconciliations for all periods",
      "Cleanup of existing QuickBooks or Xero files",
      "Correction of coding errors",
      "Financial statement preparation for all periods",
      "Tax document organization",
      "CPA review of catch-up work",
      "Training on maintaining current books",
      "Transition to monthly bookkeeping service",
      "Document management system setup",
      "Software cleanup and optimization",
      "Detailed summary of work completed"
    ],
    benefits: [
      {
        title: "Fast Results",
        description: "Most catch-up projects completed within 2-4 weeks",
        icon: <Zap className="w-8 h-8 text-primary" />
      },
      {
        title: "Complete Cleanup",
        description: "We fix errors and organize everything from the ground up",
        icon: <Shield className="w-8 h-8 text-primary" />
      },
      {
        title: "Tax Ready",
        description: "Get organized financials ready for tax preparation",
        icon: <CheckCircle className="w-8 h-8 text-primary" />
      }
    ],
    faq: [
      {
        question: "How far back can you go with catch-up bookkeeping?",
        answer: "We can handle catch-up bookkeeping for any period - from a few months to several years behind."
      },
      {
        question: "What if my books are a complete mess?", 
        answer: "We specialize in messy books! Our team will organize everything and create a clean, accurate set of books."
      },
      {
        question: "Do you provide ongoing service after catch-up?",
        answer: "Yes, we offer seamless transition to our monthly bookkeeping service to keep your books current going forward."
      }
    ]
  },

  "quickbooks-bookkeeping": {
    title: "QuickBooks Bookkeeping Services",
    subtitle: "Expert QuickBooks setup and ongoing bookkeeping",
    description: "Maximize the power of QuickBooks with our certified QuickBooks ProAdvisors. We'll set up, maintain, and optimize your QuickBooks file for accurate financial reporting.",
    features: [
      "QuickBooks setup and optimization",
      "Certified ProAdvisor support",
      "Custom chart of accounts",
      "QuickBooks training",
      "Integration support"
    ],
    whatIncluded: [
      "QuickBooks software license",
      "Initial setup and chart of accounts creation",
      "Bank feed setup and management",
      "Custom reporting templates",
      "QuickBooks optimization",
      "Monthly bank reconciliations",
      "Transaction categorization",
      "Financial statement preparation",
      "QuickBooks user training",
      "Backup and data security",
      "CPA review of QuickBooks data",
      "Technical support and troubleshooting"
    ],
    benefits: [
      {
        title: "Certified Experts",
        description: "Our team includes QuickBooks Certified ProAdvisors",
        icon: <Award className="w-8 h-8 text-primary" />
      },
      {
        title: "Optimized Setup",
        description: "Properly configured QuickBooks for maximum efficiency",
        icon: <CheckCircle className="w-8 h-8 text-primary" />
      },
      {
        title: "Ongoing Support",
        description: "Technical support and training whenever you need it",
        icon: <Users className="w-8 h-8 text-primary" />
      }
    ],
    faq: [
      {
        question: "Do you provide QuickBooks software?",
        answer: "Yes, QuickBooks software is included in our monthly pricing. We handle licensing and updates."
      },
      {
        question: "Can you fix my existing QuickBooks file?",
        answer: "Absolutely! We specialize in cleaning up and optimizing existing QuickBooks files."
      },
      {
        question: "Do you provide QuickBooks training?",
        answer: "Yes, we provide training to help you understand and use QuickBooks effectively for your business needs."
      }
    ]
  },

  "quickbooks-cleanup": {
    title: "QuickBooks Cleanup Services",
    subtitle: "Fix and clean up messy QuickBooks files",
    description: "Is your QuickBooks file a mess? Our cleanup specialists will fix errors, reorganize data, and optimize your file for accurate reporting and better performance.",
    features: [
      "Error correction and cleanup",
      "Data reorganization",
      "Performance optimization",
      "Chart of accounts restructuring",
      "Report customization"
    ],
    whatIncluded: [
      "Complete QuickBooks file review and diagnosis",
      "Correction of data entry errors",
      "Chart of accounts cleanup and optimization",
      "Bank reconciliation corrections",
      "Duplicate transaction removal",
      "Proper inventory setup (if applicable)",
      "Customer and vendor list cleanup",
      "Custom report template creation",
      "File performance optimization",
      "Data backup and security setup",
      "CPA review of cleaned file",
      "Training on maintaining clean books"
    ],
    benefits: [
      {
        title: "Error-Free Books",
        description: "Complete cleanup of all errors and inconsistencies",
        icon: <CheckCircle className="w-8 h-8 text-primary" />
      },
      {
        title: "Better Performance",
        description: "Optimized file runs faster and more efficiently",
        icon: <Zap className="w-8 h-8 text-primary" />
      },
      {
        title: "Accurate Reports",
        description: "Clean data means reliable financial reports",
        icon: <TrendingUp className="w-8 h-8 text-primary" />
      }
    ],
    faq: [
      {
        question: "How do you know if my QuickBooks file needs cleanup?",
        answer: "We provide a free file review to identify errors, inconsistencies, and optimization opportunities."
      },
      {
        question: "Will cleanup affect my historical data?",
        answer: "We preserve all your historical data while correcting errors and improving organization."
      },
      {
        question: "How long does QuickBooks cleanup take?",
        answer: "Most cleanup projects are completed within 1-2 weeks, depending on file size and complexity."
      }
    ]
  },

  "white-label-bookkeeping": {
    title: "White-Label Bookkeeping Services",
    subtitle: "Bookkeeping services under your brand name",
    description: "Expand your service offerings with our white-label bookkeeping solutions. We handle the bookkeeping while you maintain the client relationship under your brand.",
    features: [
      "Your branding and communication",
      "Dedicated team for your clients",
      "Quality control and CPA review",
      "Scalable solution",
      "Competitive wholesale pricing"
    ],
    whatIncluded: [
      "Complete bookkeeping services under your brand",
      "Dedicated bookkeeping team",
      "Custom client communication templates",
      "Your logo and branding on all reports",
      "Quality control and CPA review",
      "Client onboarding support",
      "Regular progress reporting to you",
      "Training and support for your team",
      "Scalable capacity for growth",
      "Competitive wholesale pricing",
      "Professional liability insurance coverage",
      "Confidentiality and non-disclosure agreements"
    ],
    benefits: [
      {
        title: "Expand Services",
        description: "Offer bookkeeping without hiring additional staff",
        icon: <TrendingUp className="w-8 h-8 text-primary" />
      },
      {
        title: "Your Brand",
        description: "All work completed under your company name and branding",
        icon: <Award className="w-8 h-8 text-primary" />
      },
      {
        title: "Scale Quickly",
        description: "Handle more clients without increasing overhead",
        icon: <Zap className="w-8 h-8 text-primary" />
      }
    ],
    faq: [
      {
        question: "How does white-label bookkeeping work?",
        answer: "We perform all bookkeeping services while you maintain the client relationship. All communication and reports use your branding."
      },
      {
        question: "Do my clients know you're involved?",
        answer: "No, all work is completed under your brand. Your clients will only see your company name and branding."
      },
      {
        question: "What's the minimum commitment?",
        answer: "We offer flexible arrangements starting with as few as 3-5 clients, with no long-term contracts required."
      }
    ]
  },

  "bookkeeping-services-near-me": {
    title: "Local Bookkeeping Services", 
    subtitle: "Local bookkeeping expertise with remote convenience",
    description: "Get the personal touch of local bookkeeping services with the convenience and efficiency of remote work. We serve businesses nationwide with dedicated, local-feeling service.",
    features: [
      "Local market knowledge",
      "Personal service approach",
      "Remote efficiency",
      "Same-day support",
      "Community focus"
    ],
    whatIncluded: [
      "Dedicated local bookkeeper",
      "Understanding of local business requirements",
      "State and local tax expertise",
      "Personal phone support",
      "Same business day response",
      "Local business network connections",
      "Community involvement awareness",
      "Regional industry knowledge",
      "Local compliance understanding",
      "Personal relationship building",
      "Face-to-face meetings when needed",
      "Local referral network access"
    ],
    benefits: [
      {
        title: "Local Expertise",
        description: "Understanding of local business environment and requirements",
        icon: <Users className="w-8 h-8 text-primary" />
      },
      {
        title: "Personal Service",
        description: "Direct communication with your dedicated bookkeeper",
        icon: <Award className="w-8 h-8 text-primary" />
      },
      {
        title: "Remote Efficiency",
        description: "Fast, efficient service without the overhead of local offices",
        icon: <Clock className="w-8 h-8 text-primary" />
      }
    ],
    faq: [
      {
        question: "Do you serve my local area?",
        answer: "We serve businesses nationwide while providing personalized, local-feeling service to each client."
      },
      {
        question: "Can I meet with my bookkeeper in person?",
        answer: "While we primarily work remotely, we can arrange in-person meetings for local clients when needed."
      },
      {
        question: "Do you understand local tax requirements?",
        answer: "Yes, our team includes expertise in state and local tax requirements for all areas we serve."
      }
    ]
  },

  "bookkeeping-under-your-brand": {
    title: "Bookkeeping Under Your Brand",
    subtitle: "White-label bookkeeping services for accounting firms",
    description: "Offer comprehensive bookkeeping services to your clients under your brand. We handle the work while you maintain client relationships and grow your practice.",
    features: [
      "Complete white-label solution",
      "Your branding on everything",
      "Dedicated support team",
      "CPA oversight included",
      "Scalable pricing model"
    ],
    whatIncluded: [
      "Full bookkeeping services under your brand",
      "Custom branded reporting templates",
      "Your logo on all client communications",
      "Dedicated account management",
      "CPA review and oversight",
      "Quality assurance protocols",
      "Client onboarding assistance",
      "Marketing material customization",
      "Training for your staff",
      "24/7 support for urgent issues",
      "Confidentiality agreements",
      "Professional liability coverage"
    ],
    benefits: [
      {
        title: "Revenue Growth",
        description: "Expand service offerings without additional overhead",
        icon: <TrendingUp className="w-8 h-8 text-primary" />
      },
      {
        title: "Brand Control",
        description: "Maintain complete control over client experience and branding",
        icon: <Shield className="w-8 h-8 text-primary" />
      },
      {
        title: "Expert Team",
        description: "Access to experienced bookkeepers and CPA oversight",
        icon: <Award className="w-8 h-8 text-primary" />
      }
    ],
    faq: [
      {
        question: "How quickly can we start offering bookkeeping services?",
        answer: "Most firms can start offering services within 1-2 weeks of signing up, including branding setup and training."
      },
      {
        question: "What level of involvement do we need?",
        answer: "Minimal involvement required. We handle the work while you manage client relationships and billing."
      },
      {
        question: "Can we customize the service offerings?",
        answer: "Yes, we can customize service packages to match your firm's needs and client requirements."
      }
    ]
  },

  "outsourced-bookkeeping": {
    title: "Outsourced Bookkeeping Services",
    subtitle: "Complete outsourced bookkeeping solutions",
    description: "Fully outsource your bookkeeping function to our expert team. Reduce costs, improve accuracy, and focus on your core business while we handle all your bookkeeping needs.",
    features: [
      "Complete bookkeeping outsourcing",
      "Cost-effective solution",
      "Expert team management",
      "Scalable services",
      "Technology integration"
    ],
    whatIncluded: [
      "Complete bookkeeping department replacement",
      "Dedicated team of bookkeepers",
      "All bookkeeping software and tools",
      "Process documentation and procedures",
      "Quality control and management",
      "Regular reporting and communication",
      "Scalable capacity for growth",
      "Backup and redundancy planning",
      "Technology integration support",
      "Cost savings analysis and reporting",
      "Performance metrics and KPIs",
      "Transition planning and support"
    ],
    benefits: [
      {
        title: "Cost Savings",
        description: "Reduce bookkeeping costs by 40-60% compared to in-house staff",
        icon: <DollarSign className="w-8 h-8 text-primary" />
      },
      {
        title: "Expert Team",
        description: "Access to experienced bookkeepers and latest technology",
        icon: <Users className="w-8 h-8 text-primary" />
      },
      {
        title: "Scalability",
        description: "Easily scale bookkeeping capacity up or down as needed",
        icon: <TrendingUp className="w-8 h-8 text-primary" />
      }
    ],
    faq: [
      {
        question: "How much can we save by outsourcing bookkeeping?",
        answer: "Most businesses save 40-60% compared to hiring in-house bookkeeping staff, including salary, benefits, and overhead."
      },
      {
        question: "How do you ensure data security?",
        answer: "We use bank-level encryption, secure cloud storage, and strict access controls to protect your financial data."
      },
      {
        question: "What if we need to scale up quickly?",
        answer: "Our team can quickly scale to handle increased volume without the time and cost of hiring additional staff."
      }
    ]
  },

  "bookkeeping-outsourcing-service": {
    title: "Bookkeeping Outsourcing Service",
    subtitle: "Professional bookkeeping outsourcing for businesses",
    description: "Transform your bookkeeping with our professional outsourcing service. Get expert bookkeeping, advanced technology, and significant cost savings all in one solution.",
    features: [
      "Professional outsourcing solution",
      "Advanced technology platform",
      "Experienced team management",
      "Quality assurance processes",
      "Flexible service levels"
    ],
    whatIncluded: [
      "Complete bookkeeping process outsourcing",
      "Advanced bookkeeping technology platform",
      "Dedicated team assignment",
      "Project management and oversight",
      "Quality assurance and control",
      "Regular performance reporting",
      "Process improvement recommendations",
      "Technology integration support",
      "Training and documentation",
      "Backup and disaster recovery",
      "Compliance monitoring",
      "Cost optimization analysis"
    ],
    benefits: [
      {
        title: "Process Excellence",
        description: "Proven processes and best practices for optimal results",
        icon: <CheckCircle className="w-8 h-8 text-primary" />
      },
      {
        title: "Technology Advantage",
        description: "Access to latest bookkeeping technology and tools",
        icon: <Zap className="w-8 h-8 text-primary" />
      },
      {
        title: "Risk Reduction",
        description: "Reduce operational risk with professional oversight",
        icon: <Shield className="w-8 h-8 text-primary" />
      }
    ],
    faq: [
      {
        question: "What's included in your outsourcing service?",
        answer: "Complete bookkeeping process management, technology platform, dedicated team, and ongoing optimization."
      },
      {
        question: "How do you ensure quality in outsourced work?",
        answer: "Multi-level quality assurance including peer review, supervisor approval, and CPA oversight."
      },
      {
        question: "Can you integrate with our existing systems?",
        answer: "Yes, we can integrate with most existing accounting systems and business applications."
      }
    ]
  },

  "virtual-bookkeeping-cpa-review": {
    title: "Virtual Bookkeeping with CPA Review",
    subtitle: "Virtual bookkeeping with CPA oversight and review", 
    description: "Get the convenience of virtual bookkeeping combined with the assurance of CPA review. Our certified public accountants oversee all work to ensure accuracy and compliance.",
    features: [
      "100% virtual service delivery",
      "CPA oversight on all work",
      "Cloud-based technology",
      "Real-time access to books",
      "Professional review process"
    ],
    whatIncluded: [
      "Complete virtual bookkeeping service",
      "Dedicated CPA review of all work",
      "Cloud-based accounting platform",
      "Real-time financial reporting",
      "Virtual meeting capabilities",
      "Secure document exchange",
      "Digital signature capabilities",
      "Mobile app access",
      "Automated backup and security",
      "Compliance monitoring and alerts",
      "Tax preparation coordination",
      "Strategic financial consulting"
    ],
    benefits: [
      {
        title: "CPA Assurance",
        description: "Every transaction reviewed by certified public accountant",
        icon: <Award className="w-8 h-8 text-primary" />
      },
      {
        title: "Virtual Convenience",
        description: "Access your books anytime, anywhere with cloud technology",
        icon: <Zap className="w-8 h-8 text-primary" />
      },
      {
        title: "Real-time Insights",
        description: "Live financial data and reporting for better decision making",
        icon: <TrendingUp className="w-8 h-8 text-primary" />
      }
    ],
    faq: [
      {
        question: "What does CPA review include?",
        answer: "Our CPAs review all transaction coding, reconciliations, and financial statements for accuracy and compliance."
      },
      {
        question: "Can I access my books in real-time?",
        answer: "Yes, you have 24/7 access to your books through our secure cloud platform with mobile app access."
      },
      {
        question: "Do you provide tax preparation services?",
        answer: "We coordinate with tax preparation and can provide all necessary documentation, though tax prep is a separate service."
      }
    ]
  },

  "medical-dental-bookkeeping": {
    title: "Medical & Dental Practice Bookkeeping",
    subtitle: "Specialized bookkeeping for healthcare practices",
    description: "Expert bookkeeping services designed specifically for medical and dental practices. We understand healthcare industry requirements, insurance billing, and compliance needs.",
    features: [
      "Healthcare industry expertise",
      "Insurance billing support",
      "Compliance monitoring",
      "Practice management integration",
      "Revenue cycle optimization"
    ],
    whatIncluded: [
      "Specialized healthcare bookkeeping",
      "Insurance billing and A/R management",
      "Practice management software integration",
      "Revenue cycle analysis",
      "Compliance monitoring and reporting",
      "Provider credentialing support",
      "Medical equipment depreciation",
      "Staff payroll and benefits tracking",
      "Patient payment processing",
      "Insurance contract analysis",
      "HIPAA compliant data handling",
      "Healthcare financial reporting"
    ],
    benefits: [
      {
        title: "Industry Expertise",
        description: "Deep understanding of healthcare practice finances",
        icon: <Award className="w-8 h-8 text-primary" />
      },
      {
        title: "Compliance Focus",
        description: "Stay compliant with healthcare regulations and requirements",
        icon: <Shield className="w-8 h-8 text-primary" />
      },
      {
        title: "Revenue Optimization",
        description: "Optimize revenue cycle and reduce billing errors",
        icon: <TrendingUp className="w-8 h-8 text-primary" />
      }
    ],
    faq: [
      {
        question: "Do you integrate with practice management software?",
        answer: "Yes, we integrate with most major practice management systems including Epic, Cerner, and others."
      },
      {
        question: "How do you handle HIPAA compliance?",
        answer: "We maintain HIPAA compliance with secure data handling, signed BAAs, and staff training on healthcare privacy."
      },
      {
        question: "Can you help with insurance billing issues?",
        answer: "Yes, we can help track insurance payments, identify billing issues, and optimize your revenue cycle."
      }
    ]
  },

  "ecommerce-bookkeeping": {
    title: "E-Commerce Bookkeeping Services",
    subtitle: "Bookkeeping tailored for online businesses",
    description: "Specialized bookkeeping for e-commerce businesses. We handle multi-channel sales, inventory tracking, marketplace fees, and complex tax requirements for online retailers.",
    features: [
      "Multi-channel sales tracking",
      "Inventory management",
      "Marketplace integration",
      "Sales tax compliance",
      "Cost of goods tracking"
    ],
    whatIncluded: [
      "Multi-channel sales reconciliation",
      "Inventory tracking and valuation",
      "Marketplace fee categorization",
      "Sales tax compliance monitoring",
      "Cost of goods sold calculations",
      "Shipping and fulfillment tracking",
      "Return and refund processing",
      "Platform integration (Shopify, Amazon, etc.)",
      "Payment processor reconciliation",
      "Digital marketing expense tracking",
      "Profitability analysis by product",
      "International sales tax support"
    ],
    benefits: [
      {
        title: "Multi-Channel Expertise",
        description: "Handle sales across multiple platforms and marketplaces",
        icon: <TrendingUp className="w-8 h-8 text-primary" />
      },
      {
        title: "Inventory Mastery",
        description: "Accurate inventory tracking and cost of goods calculations",
        icon: <CheckCircle className="w-8 h-8 text-primary" />
      },
      {
        title: "Tax Compliance",
        description: "Stay compliant with complex e-commerce tax requirements",
        icon: <Shield className="w-8 h-8 text-primary" />
      }
    ],
    faq: [
      {
        question: "Do you integrate with e-commerce platforms?",
        answer: "Yes, we integrate with Shopify, Amazon, eBay, WooCommerce, and other major e-commerce platforms."
      },
      {
        question: "How do you handle inventory tracking?",
        answer: "We track inventory across all channels, handle COGS calculations, and provide detailed inventory reports."
      },
      {
        question: "Can you help with sales tax compliance?",
        answer: "Yes, we monitor sales tax requirements across states and help ensure compliance with nexus laws."
      }
    ]
  },

  "lawyers-bookkeeping": {
    title: "Law Firm Bookkeeping Services",
    subtitle: "Trust accounting and bookkeeping for law firms",
    description: "Specialized bookkeeping for law firms with expertise in trust accounting, client billing, case expense tracking, and legal industry compliance requirements.",
    features: [
      "Trust accounting expertise",
      "Client billing integration",
      "Case expense tracking",
      "Legal compliance focus",
      "Time and billing optimization"
    ],
    whatIncluded: [
      "Trust account management and reconciliation",
      "Client billing and accounts receivable",
      "Case expense tracking and allocation",
      "Operating account bookkeeping",
      "Legal software integration",
      "Compliance monitoring and reporting",
      "Client cost advancement tracking",
      "Retainer management",
      "Court cost and filing fee tracking",
      "Expert witness expense management",
      "Bar association compliance reporting",
      "Detailed financial reporting by case"
    ],
    benefits: [
      {
        title: "Trust Account Expertise",
        description: "Proper trust accounting to maintain bar compliance",
        icon: <Shield className="w-8 h-8 text-primary" />
      },
      {
        title: "Legal Software Integration",
        description: "Integration with major legal practice management systems",
        icon: <CheckCircle className="w-8 h-8 text-primary" />
      },
      {
        title: "Compliance Focus",
        description: "Maintain compliance with legal industry regulations",
        icon: <Award className="w-8 h-8 text-primary" />
      }
    ],
    faq: [
      {
        question: "Do you handle trust account reconciliation?",
        answer: "Yes, we specialize in trust account management and ensure compliance with bar association requirements."
      },
      {
        question: "Can you integrate with legal practice management software?",
        answer: "Yes, we integrate with Clio, MyCase, PracticePanther, and other major legal software platforms."
      },
      {
        question: "How do you track case expenses?",
        answer: "We track all case-related expenses and allocate them properly for accurate case profitability analysis."
      }
    ]
  },

  "real-estate-bookkeeping": {
    title: "Real Estate Bookkeeping Services",
    subtitle: "Property management and real estate bookkeeping",
    description: "Specialized bookkeeping for real estate professionals and property managers. We handle rental income, property expenses, depreciation, and investor reporting.",
    features: [
      "Property-by-property tracking",
      "Rental income management",
      "Expense categorization",
      "Depreciation calculations",
      "Investor reporting"
    ],
    whatIncluded: [
      "Property-by-property financial tracking",
      "Rental income and deposit management",
      "Property expense categorization",
      "Depreciation schedule management",
      "Investor and owner reporting",
      "Tenant receivables tracking",
      "Maintenance and repair tracking",
      "Property tax and insurance tracking",
      "1031 exchange support",
      "Capital improvement tracking",
      "Property management fee reconciliation",
      "Detailed property performance reports"
    ],
    benefits: [
      {
        title: "Property Expertise",
        description: "Specialized knowledge of real estate accounting requirements",
        icon: <Award className="w-8 h-8 text-primary" />
      },
      {
        title: "Investor Reporting",
        description: "Detailed reports for property owners and investors",
        icon: <TrendingUp className="w-8 h-8 text-primary" />
      },
      {
        title: "Tax Optimization",
        description: "Proper expense tracking and depreciation for tax benefits",
        icon: <DollarSign className="w-8 h-8 text-primary" />
      }
    ],
    faq: [
      {
        question: "Do you track income and expenses by property?",
        answer: "Yes, we maintain separate tracking for each property to provide detailed performance analysis."
      },
      {
        question: "Can you help with depreciation schedules?",
        answer: "Yes, we maintain detailed depreciation schedules for all properties and capital improvements."
      },
      {
        question: "Do you provide investor reports?",
        answer: "Yes, we provide detailed monthly and annual reports for property owners and investors."
      }
    ]
  },

  "nonprofits-bookkeeping": {
    title: "Nonprofit Organization Bookkeeping",
    subtitle: "Fund accounting and reporting for nonprofits",
    description: "Specialized bookkeeping for nonprofit organizations with expertise in fund accounting, grant tracking, donor management, and compliance reporting.",
    features: [
      "Fund accounting expertise",
      "Grant tracking and reporting",
      "Donor management",
      "Compliance monitoring",
      "Board reporting"
    ],
    whatIncluded: [
      "Fund accounting and tracking",
      "Grant compliance and reporting",
      "Donor contribution tracking",
      "Board-ready financial statements",
      "Annual filing support (Form 990)",
      "Restricted fund management",
      "Program expense allocation",
      "Volunteer hour tracking",
      "In-kind donation valuation",
      "Audit preparation support",
      "Budget vs. actual reporting",
      "Compliance monitoring and alerts"
    ],
    benefits: [
      {
        title: "Fund Accounting",
        description: "Proper fund accounting to track restricted and unrestricted funds",
        icon: <CheckCircle className="w-8 h-8 text-primary" />
      },
      {
        title: "Grant Compliance",
        description: "Ensure compliance with grant requirements and reporting",
        icon: <Shield className="w-8 h-8 text-primary" />
      },
      {
        title: "Board Reporting",
        description: "Professional reports for board meetings and stakeholders",
        icon: <Users className="w-8 h-8 text-primary" />
      }
    ],
    faq: [
      {
        question: "Do you understand nonprofit fund accounting?",
        answer: "Yes, we specialize in fund accounting and understand the unique requirements of nonprofit organizations."
      },
      {
        question: "Can you help with Form 990 preparation?",
        answer: "We provide all the financial data and support needed for Form 990 preparation and filing."
      },
      {
        question: "How do you track restricted funds?",
        answer: "We maintain separate tracking for restricted and unrestricted funds to ensure proper compliance."
      }
    ]
  },

  "franchise-bookkeeping": {
    title: "Franchise Bookkeeping Services",
    subtitle: "Multi-location bookkeeping for franchises",
    description: "Specialized bookkeeping for franchise businesses with multi-location tracking, royalty management, and consolidated reporting across all franchise locations.",
    features: [
      "Multi-location tracking",
      "Royalty fee management",
      "Consolidated reporting",
      "Franchise compliance",
      "Location profitability analysis"
    ],
    whatIncluded: [
      "Multi-location financial tracking",
      "Royalty fee calculations and tracking",
      "Franchise fee management",
      "Consolidated financial reporting",
      "Location-specific profit and loss",
      "Advertising fund tracking",
      "Franchise compliance monitoring",
      "Territory performance analysis",
      "Franchisor reporting requirements",
      "Location comparison analytics",
      "Budget vs. actual by location",
      "Growth opportunity identification"
    ],
    benefits: [
      {
        title: "Multi-Location Expertise",
        description: "Handle bookkeeping across multiple franchise locations",
        icon: <TrendingUp className="w-8 h-8 text-primary" />
      },
      {
        title: "Franchise Knowledge",
        description: "Understanding of franchise-specific requirements and compliance",
        icon: <Award className="w-8 h-8 text-primary" />
      },
      {
        title: "Consolidated Reporting",
        description: "Combined reporting across all locations for better insights",
        icon: <CheckCircle className="w-8 h-8 text-primary" />
      }
    ],
    faq: [
      {
        question: "Can you handle multiple franchise locations?",
        answer: "Yes, we specialize in multi-location franchise bookkeeping with consolidated reporting."
      },
      {
        question: "Do you track royalty fees and franchise costs?",
        answer: "Yes, we track all franchise-related fees, royalties, and advertising contributions accurately."
      },
      {
        question: "Can you provide location-specific reports?",
        answer: "Yes, we provide detailed reports for each location as well as consolidated franchise reports."
      }
    ]
  },

  "construction-bookkeeping": {
    title: "Construction Industry Bookkeeping",
    subtitle: "Job costing and construction industry bookkeeping",
    description: "Specialized bookkeeping for construction companies with expertise in job costing, progress billing, equipment tracking, and construction industry compliance.",
    features: [
      "Job costing expertise",
      "Progress billing management",
      "Equipment depreciation",
      "Subcontractor tracking",
      "Union and prevailing wage compliance"
    ],
    whatIncluded: [
      "Detailed job costing and tracking",
      "Progress billing and AIA forms",
      "Equipment and asset tracking",
      "Subcontractor payment management",
      "Material and labor cost allocation",
      "Union and prevailing wage compliance",
      "Work in progress (WIP) reporting",
      "Change order tracking",
      "Retention receivable management",
      "Lien waiver tracking",
      "Project profitability analysis",
      "Cash flow forecasting"
    ],
    benefits: [
      {
        title: "Job Costing Mastery",
        description: "Accurate job costing to track project profitability",
        icon: <TrendingUp className="w-8 h-8 text-primary" />
      },
      {
        title: "Industry Compliance",
        description: "Stay compliant with construction industry regulations",
        icon: <Shield className="w-8 h-8 text-primary" />
      },
      {
        title: "Cash Flow Management",
        description: "Better cash flow management with progress billing tracking",
        icon: <DollarSign className="w-8 h-8 text-primary" />
      }
    ],
    faq: [
      {
        question: "Do you handle job costing for construction projects?",
        answer: "Yes, we specialize in detailed job costing to track labor, materials, and overhead by project."
      },
      {
        question: "Can you manage progress billing and AIA forms?",
        answer: "Yes, we handle progress billing, AIA forms, and all related construction billing requirements."
      },
      {
        question: "Do you track subcontractor payments and lien waivers?",
        answer: "Yes, we track all subcontractor payments and can help manage lien waiver collection."
      }
    ]
  },

  "restaurants-bookkeeping": {
    title: "Restaurant & Food Service Bookkeeping", 
    subtitle: "Food service industry bookkeeping and reporting",
    description: "Specialized bookkeeping for restaurants and food service businesses with expertise in food costs, labor tracking, tip reporting, and restaurant industry compliance.",
    features: [
      "Food cost tracking",
      "Labor and tip management",
      "Inventory optimization",
      "Sales tax compliance",
      "Multi-location support"
    ],
    whatIncluded: [
      "Food and beverage cost tracking",
      "Labor cost management and optimization",
      "Tip reporting and allocation",
      "Inventory tracking and valuation",
      "Daily sales reconciliation",
      "Point-of-sale system integration",
      "Sales tax and liquor tax compliance",
      "Vendor payment management",
      "Food waste and spoilage tracking",
      "Profit margin analysis by menu item",
      "Labor scheduling optimization",
      "Multi-location consolidated reporting"
    ],
    benefits: [
      {
        title: "Food Cost Control",
        description: "Detailed tracking of food costs and profit margins",
        icon: <DollarSign className="w-8 h-8 text-primary" />
      },
      {
        title: "Labor Optimization",
        description: "Track and optimize labor costs and scheduling",
        icon: <Users className="w-8 h-8 text-primary" />
      },
      {
        title: "Industry Expertise",
        description: "Understanding of restaurant industry challenges and solutions",
        icon: <Award className="w-8 h-8 text-primary" />
      }
    ],
    faq: [
      {
        question: "Do you integrate with POS systems?",
        answer: "Yes, we integrate with major POS systems including Square, Toast, Clover, and others."
      },
      {
        question: "How do you track food costs and inventory?",
        answer: "We track food costs by category and menu item, plus manage inventory valuation and waste tracking."
      },
      {
        question: "Can you handle tip reporting requirements?",
        answer: "Yes, we ensure compliance with tip reporting requirements and proper payroll tax handling."
      }
    ]
  }
};