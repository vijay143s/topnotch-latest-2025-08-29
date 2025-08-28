import { Check, X } from "lucide-react";

const ComparisonTable = () => {
  const features = [
    { name: "CPA Review Included", topnotch: true, bench: false, quickbooks: false, pilot: false },
    { name: "Supports QuickBooks/Xero", topnotch: true, bench: false, quickbooks: "QuickBooks only", pilot: true },
    { name: "Catch-Up Services", topnotch: true, bench: "Limited", quickbooks: false, pilot: true },
    { name: "White-Label Available", topnotch: true, bench: false, quickbooks: false, pilot: false },
    { name: "Free First Month", topnotch: true, bench: false, quickbooks: false, pilot: false },
    { name: "Flat Monthly Pricing", topnotch: true, bench: true, quickbooks: false, pilot: false }
  ];

  const CheckIcon = () => <Check className="w-5 h-5 text-trust" />;
  const XIcon = () => <X className="w-5 h-5 text-destructive" />;

  const renderCell = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? <CheckIcon /> : <XIcon />;
    }
    return <span className="text-sm text-muted-foreground">{value}</span>;
  };

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How TopNotch Compares
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See why small businesses choose TopNotch over the competition
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Mobile-friendly stacked layout */}
          <div className="md:hidden space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border/50 shadow-card">
                <h3 className="font-semibold text-card-foreground mb-4">{feature.name}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">TopNotch</span>
                    {renderCell(feature.topnotch)}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Bench</span>
                    {renderCell(feature.bench)}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">QuickBooks Live</span>
                    {renderCell(feature.quickbooks)}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Pilot</span>
                    {renderCell(feature.pilot)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop table layout */}
          <div className="hidden md:block bg-card rounded-xl overflow-hidden shadow-card border border-border/50">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold bg-accent text-accent-foreground">
                    TopNotch
                  </th>
                  <th className="text-center p-4 font-semibold">Bench</th>
                  <th className="text-center p-4 font-semibold">QuickBooks Live</th>
                  <th className="text-center p-4 font-semibold">Pilot</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-border/30 ${index % 2 === 0 ? 'bg-muted/20' : 'bg-card'}`}
                  >
                    <td className="p-4 font-medium text-card-foreground">
                      {feature.name}
                    </td>
                    <td className="p-4 text-center bg-accent/10">
                      {renderCell(feature.topnotch)}
                    </td>
                    <td className="p-4 text-center">
                      {renderCell(feature.bench)}
                    </td>
                    <td className="p-4 text-center">
                      {renderCell(feature.quickbooks)}
                    </td>
                    <td className="p-4 text-center">
                      {renderCell(feature.pilot)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 p-6 bg-accent/5 rounded-lg border border-accent/20">
            <p className="text-muted-foreground mb-4">
              Ready to experience the TopNotch difference?
            </p>
            <div className="text-sm text-accent font-medium">
              ⚡ Get started with your free 30-day trial today
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;