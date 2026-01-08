import GridBorders from "./GridBorders";
import DeploymentColumn from "./DeploymentColumn";
import EnterpriseColumn from "./EnterpriseColumn";

/**
 * CTASection component displaying final call-to-action for deployment and enterprise options
 * Features a two-column layout with deployment CTAs on the left and enterprise exploration on the right
 * Highlights Pro and Enterprise tier options with color-coded branding
 */
export default function CTASection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto">
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-0">
          <GridBorders />
          <DeploymentColumn />
          <EnterpriseColumn />
        </div>
      </div>
    </section>
  );
}
