import AboutHero from "@/components/about/AboutHero/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre/WhoWeAre";
import WhyWeStarted from "@/components/about/WhyWeStarted/WhyWeStarted";
import PharmacyExperience from "@/components/about/PharmacyExperience/PharmacyExperience";
import ProviderWorkflowCTA from "@/components/about/ProviderWorkflowCTA/ProviderWorkflowCTA";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F4F7F9]">
      <AboutHero />

      <WhoWeAre />

      <WhyWeStarted />

      <PharmacyExperience />

      <ProviderWorkflowCTA />
    </div>
  );
}
