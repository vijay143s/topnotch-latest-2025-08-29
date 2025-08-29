import { getCompetitorId } from "@/utils/compareUtils";
import ComparePageTemplate from "@/components/ComparePageTemplate";

const TopNotchSolutionsVsPilot = () => {
  return (
    <div className="min-h-screen bg-gradient-section pt-20">
      <ComparePageTemplate competitorId="pilot" />
    </div>
  );
};

export default TopNotchSolutionsVsPilot;
