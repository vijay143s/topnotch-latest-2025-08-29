import CompareLayout from "@/components/CompareLayout";
import { compareContent } from "@/data/compareContent";

const ComparePageTemplate = ({ competitorId }: { competitorId: string }) => {
  const content = compareContent[competitorId];
  
  return (
    <CompareLayout
      title={content.title}
      subtitle={content.subtitle}
    >
      {/* Overview */}
      <section className="section-padding bg-gradient-section">
        <div className="container mx-auto px-4">
          <p className="mb-6 text-center text-muted-foreground max-w-3xl mx-auto">
            {content.overview.description}
          </p>
          <h2 className="text-2xl font-bold text-center mb-6 text-gradient">
            Side-by-Side Feature Comparison
          </h2>
          <div className="overflow-x-auto">
            <div className="glass neon-border rounded-xl p-6 shadow-hero">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
                    <th className="py-3 px-4 text-left font-semibold rounded-tl-lg">
                      Feature
                    </th>
                    <th className="py-3 px-4 font-semibold">
                      TopNotchSolutions
                    </th>
                    <th className="py-3 px-4 font-semibold rounded-tr-lg">
                      {content.competitor}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {content.overview.rows.map(
                    ([feature, tns, competitor], i) => (
                      <tr
                        key={feature}
                        className={i % 2 ? "bg-white/5" : ""}
                      >
                        <td className="py-2 px-4 font-medium text-foreground">
                          {feature}
                        </td>
                        <td className="py-2 px-4 text-center text-primary font-semibold">
                          {tns}
                        </td>
                        <td className="py-2 px-4 text-center text-muted-foreground">
                          {competitor}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differences */}
      <section className="section-padding bg-gradient-section relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-2xl font-bold text-center mb-8 text-gradient">
            Key Reasons to Choose TopNotchSolutions Over {content.competitor}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {content.keyDifferences.map((reason, index) => (
              <div
                key={reason.title}
                className="glass neon-border rounded-xl p-6 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="font-bold mb-2">{reason.title}</h4>
                <p className="text-muted-foreground">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {content.relatedServices && (
        <section className="section-padding bg-gradient-section">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
            <h2 className="text-2xl font-bold text-gradient">
              Related Services
            </h2>
            <div className="glass neon-border rounded-xl p-6 hover-lift">
              <div className="flex flex-wrap justify-center gap-4">
                {content.relatedServices.map((service, index) => (
                  <a
                    key={service.href}
                    href={service.href}
                    className="text-primary hover:text-primary/80 underline-offset-4 hover:underline animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {service.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {content.blogPosts && (
        <section className="section-padding relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-8 relative z-10">
            <h2 className="text-2xl font-bold text-gradient">Learn More</h2>
            <div className="glass neon-border rounded-xl p-6 hover-lift">
              <div className="flex flex-col items-center gap-4">
                {content.blogPosts.map((post, index) => (
                  <a
                    key={post.href}
                    href={post.href}
                    className="text-primary hover:text-primary/80 underline-offset-4 hover:underline animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {post.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </CompareLayout>
  );
};

export default ComparePageTemplate;
