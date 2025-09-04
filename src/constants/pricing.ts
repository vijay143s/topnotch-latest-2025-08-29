export interface BusinessPlan {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface DedicatedPlan extends BusinessPlan {
  hourlyRate: number;
  hoursPerMonth: number;
}

export const SMALL_BUSINESS_PLANS: { [key: string]: BusinessPlan } = {
  BEGINNER: {
    name: 'BEGINNER',
    price: 125,
    period: 'month',
    description: '1 bank account, includes QuickBooks/Xero subscription, reconciliation, financial reports, dedicated team',
    features: [
      'Dedicated QuickBooks ProAdvisor',
      'Monthly Reconciliation',
      'Tax-Ready Financial Reports',
      'Your First Month Free'
    ]
  },
  INTERMEDIATE: {
    name: 'INTERMEDIATE',
    price: 175,
    period: 'month',
    description: '2 bank or credit card accounts, unlimited transactions, includes software',
    features: [
      'Dedicated QuickBooks ProAdvisor',
      'Monthly Reconciliation',
      'Tax-Ready Financial Reports',
      'Your First Month Free'
    ],
    isPopular: true
  },
  ENTERPRISE: {
    name: 'ENTERPRISE',
    price: 200,
    period: 'month',
    description: '$200–$300/month 3–8 accounts or up to $10k in monthly expenses, unlimited transactions',
    features: [
      'Dedicated QuickBooks ProAdvisor',
      'Monthly Reconciliation',
      'Tax-Ready Financial Reports',
      'Your First Month Free'
    ]
  }
};

export const DEDICATED_BOOKKEEPING_PLANS = {
  BASIC: {
    name: 'BASIC PLAN',
    price: 1200,
    period: 'month',
    hourlyRate: 30,
    hoursPerMonth: 40,
    features: [
      'No long term commitments',
      'Additional hours billed at the same hourly rate',
      'Ideal for businesses needing a dedicated resource'
    ]
  },
  STANDARD: {
    name: 'STANDARD PLAN',
    price: 2000,
    period: 'month',
    hourlyRate: 25,
    hoursPerMonth: 80,
    features: [
      'No long term commitments',
      'Additional hours billed at the same hourly rate',
      'Ideal for businesses needing a dedicated resource'
    ]
  },
  PREMIUM: {
    name: 'PREMIUM PLAN',
    price: 3200,
    period: 'month',
    hourlyRate: 20,
    hoursPerMonth: 160,
    features: [
      'No long term commitments',
      'Additional hours billed at the same hourly rate',
      'Ideal for businesses needing a dedicated resource'
    ]
  }
};

export const CATCHUP_BOOKKEEPING_FEATURES = [
  {
    title: 'Flat-rate pricing based on months and transaction volume',
    icon: '⭐'
  },
  {
    title: 'Up to 12 months cleaned and reconciled within 7 days',
    icon: '⭐'
  },
  {
    title: 'Tax-ready financials delivered fast',
    icon: '⭐'
  }
];

export const FAQ_PRICING = [
  {
    question: "What's included in the $125/month plan?",
    answer: "The Beginner plan includes bookkeeping for one bank account, a QuickBooks or Xero subscription, monthly reconciliation, tax-ready reports, and a dedicated bookkeeping team."
  },
  {
    question: "Can I upgrade anytime?",
    answer: "Yes! You can upgrade to a higher plan at any time based on your account volume, transactions, or business growth."
  },
  {
    question: "Do you support QuickBooks and Xero?",
    answer: "Yes, we support both QuickBooks Online/Desktop and Xero. Your subscription is included with every plan."
  },
  {
    question: "What if I'm behind on my books?",
    answer: "No problem - our Catch-Up Bookkeeping service will clean up your books fast, with a turnaround of 7 days for up to 12 months."
  },
  {
    question: "Are there any contracts or hidden fees?",
    answer: "Nope. All our plans are month-to-month with transparent pricing and no hidden charges."
  },
  {
    question: "Do I need to manage the bookkeeping software?",
    answer: "Not at all. We handle the software for you, so you can focus on running your business."
  }
];
