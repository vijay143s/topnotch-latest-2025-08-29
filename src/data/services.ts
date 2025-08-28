export interface ServiceCategory {
  title: string;
  services: ServiceItem[];
}

export interface ServiceItem {
  name: string;
  slug: string;
  description: string;
  href: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Core Bookkeeping Services",
    services: [
      {
        name: "Bookkeeping Services",
        slug: "bookkeeping-services",
        description: "Comprehensive bookkeeping solutions for small businesses",
        href: "/services/bookkeeping-services"
      },
      {
        name: "Monthly Bookkeeping", 
        slug: "monthly-bookkeeping",
        description: "Regular monthly bookkeeping to keep your finances on track",
        href: "/services/monthly-bookkeeping"
      },
      {
        name: "Catch-Up Bookkeeping",
        slug: "catch-up-bookkeeping", 
        description: "Get behind books up to date quickly and accurately",
        href: "/services/catch-up-bookkeeping"
      },
      {
        name: "QuickBooks Bookkeeping",
        slug: "quickbooks-bookkeeping",
        description: "Expert QuickBooks setup and ongoing bookkeeping",
        href: "/services/quickbooks-bookkeeping"
      },
      {
        name: "QuickBooks Cleanup",
        slug: "quickbooks-cleanup",
        description: "Fix and clean up messy QuickBooks files",
        href: "/services/quickbooks-cleanup"
      },
      {
        name: "White-Label Bookkeeping",
        slug: "white-label-bookkeeping",
        description: "Bookkeeping services under your brand name",
        href: "/services/white-label-bookkeeping"
      },
      {
        name: "Bookkeeping Services Near Me",
        slug: "bookkeeping-services-near-me",
        description: "Local bookkeeping expertise with remote convenience",
        href: "/services/bookkeeping-services-near-me"
      }
    ]
  },
  {
    title: "Outsourcing Services", 
    services: [
      {
        name: "Bookkeeping Under Your Brand",
        slug: "bookkeeping-under-your-brand",
        description: "White-label bookkeeping services for accounting firms",
        href: "/services/bookkeeping-under-your-brand"
      },
      {
        name: "Outsourced Bookkeeping",
        slug: "outsourced-bookkeeping",
        description: "Complete outsourced bookkeeping solutions",
        href: "/services/outsourced-bookkeeping"
      },
      {
        name: "Bookkeeping Outsourcing Service",
        slug: "bookkeeping-outsourcing-service",
        description: "Professional bookkeeping outsourcing for businesses",
        href: "/services/bookkeeping-outsourcing-service"
      },
      {
        name: "Virtual Bookkeeping CPA Review",
        slug: "virtual-bookkeeping-cpa-review",
        description: "Virtual bookkeeping with CPA oversight and review",
        href: "/services/virtual-bookkeeping-cpa-review"
      }
    ]
  },
  {
    title: "Specialized Bookkeeping by Industry",
    services: [
      {
        name: "Medical/Dental Bookkeeping",
        slug: "medical-dental-bookkeeping",
        description: "Specialized bookkeeping for healthcare practices",
        href: "/services/medical-dental-bookkeeping"
      },
      {
        name: "E-Commerce Bookkeeping", 
        slug: "ecommerce-bookkeeping",
        description: "Bookkeeping tailored for online businesses",
        href: "/services/ecommerce-bookkeeping"
      },
      {
        name: "Lawyers Bookkeeping",
        slug: "lawyers-bookkeeping",
        description: "Trust accounting and bookkeeping for law firms",
        href: "/services/lawyers-bookkeeping"
      },
      {
        name: "Real Estate Bookkeeping",
        slug: "real-estate-bookkeeping",
        description: "Property management and real estate bookkeeping",
        href: "/services/real-estate-bookkeeping"
      },
      {
        name: "Nonprofits Bookkeeping",
        slug: "nonprofits-bookkeeping",
        description: "Fund accounting and reporting for nonprofits",
        href: "/services/nonprofits-bookkeeping"
      },
      {
        name: "Franchise Bookkeeping",
        slug: "franchise-bookkeeping",
        description: "Multi-location bookkeeping for franchises",
        href: "/services/franchise-bookkeeping"
      },
      {
        name: "Construction Bookkeeping",
        slug: "construction-bookkeeping",
        description: "Job costing and construction industry bookkeeping",
        href: "/services/construction-bookkeeping"
      },
      {
        name: "Restaurants Bookkeeping",
        slug: "restaurants-bookkeeping",
        description: "Food service industry bookkeeping and reporting",
        href: "/services/restaurants-bookkeeping"
      }
    ]
  }
];

export const allServices = serviceCategories.flatMap(category => category.services);