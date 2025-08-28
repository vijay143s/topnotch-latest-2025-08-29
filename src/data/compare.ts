export interface CompareCategory {
  title: string;
  links: CompareItem[];
}

export interface CompareItem {
  name: string;
  slug: string;
  description: string;
  href: string;
}

export const compareCategories: CompareCategory[] = [
  {
    title: "TopNotchSolutions vs Competitors",
    links: [
      {
        name: "TopNotchSolutions vs Bench",
        slug: "topnotchsolutions-vs-bench",
        description: "Compare TopNotchSolutions with Bench bookkeeping services",
        href: "/compare/topnotchsolutions-vs-bench"
      },
      {
        name: "TopNotchSolutions vs Xero",
        slug: "topnotchsolutions-vs-xero",
        description: "Compare TopNotchSolutions with Xero bookkeeping services",
        href: "/compare/topnotchsolutions-vs-xero"
      },
      {
        name: "TopNotchSolutions vs Quickbooks Live",
        slug: "topnotchsolutions-vs-quickbooks-live",
        description: "Compare TopNotchSolutions with Quickbooks Live bookkeeping services",
        href: "/compare/topnotchsolutions-vs-quickbooks-live"
      },
      {
        name: "TopNotchSolutions vs Wave",
        slug: "topnotchsolutions-vs-wave",
        description: "Compare TopNotchSolutions with Wave bookkeeping services",
        href: "/compare/topnotchsolutions-vs-wave"
      },
      {
        name: "TopNotchSolutions vs Pilot",
        slug: "topnotchsolutions-vs-pilot",
        description: "Compare TopNotchSolutions with Pilot bookkeeping services",
        href: "/compare/topnotchsolutions-vs-pilot"
      },
      {
        name: "TopNotchSolutions vs 1-800 Accountant",
        slug: "topnotchsolutions-vs-1-800accountant",
        description: "Compare TopNotchSolutions with 1-800 Accountant bookkeeping services",
        href: "/compare/topnotchsolutions-vs-1-800accountant"
      },
      {
        name: "TopNotchSolutions vs Merritt",
        slug: "topnotchsolutions-vs-merritt-bookkeeping",
        description: "Compare TopNotchSolutions with Merritt bookkeeping services",
        href: "/compare/topnotchsolutions-vs-merritt-bookkeeping"
      },
      {
        name: "TopNotchSolutions vs Bookkeeper360",
        slug: "topnotchsolutions-vs-bookkeeper360",
        description: "Compare TopNotchSolutions with Bookkeeper360 bookkeeping services",
        href: "/compare/topnotchsolutions-vs-bookkeeper360"
      },
      {
        name: "TopNotchSolutions vs inDinero",
        slug: "topnotchsolutions-vs-indinero",
        description: "Compare TopNotchSolutions with inDinero bookkeeping services",
        href: "/compare/topnotchsolutions-vs-indinero"
      },
      {
        name: "TopNotchSolutions vs Botkeeper",
        slug: "topnotchsolutions-vs-botkeeper",
        description: "Compare TopNotchSolutions with Botkeeper bookkeeping services",
        href: "/compare/topnotchsolutions-vs-botkeeper"
      },
      {
        name: "TopNotchSolutions vs Bark",
        slug: "topnotchsolutions-vs-bark",
        description: "Compare TopNotchSolutions with Bark bookkeeping services",
        href: "/compare/topnotchsolutions-vs-bark"
      },
      {
        name: "TopNotchSolutions vs Paro",
        slug: "topnotchsolutions-vs-paro",
        description: "Compare TopNotchSolutions with Paro bookkeeping services",
        href: "/compare/topnotchsolutions-vs-paro"
      }
    ]
  },
  {
    title: "Other Comparisons",
    links: [
      {
        name: "NetSuite vs QuickBooks",
        slug: "netsuite-vs-quickbooks",
        description: "Compare NetSuite with QuickBooks bookkeeping software",
        href: "/compare/netsuite-vs-quickbooks"
      }
    ]
  }
];

export const allCompareLinks = compareCategories.flatMap(category => category.links);
