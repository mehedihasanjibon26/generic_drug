import Hero from "@/components/shared/Hero/Hero";
import CategoryBrowser from "@/components/shared/CategoryBrowser/CategoryBrowser";
import ProductDeals from "@/components/shared/ProductDeals/ProductDeals";
import HowItWorks from "@/components/shared/HowItWorks/HowItWorks";
import WholesalePricing from "@/components/shared/WholesalePricing/WholesalePricing";
import DailyMedications from "@/components/shared/DailyMedications/DailyMedications";
import Testimonials from "@/components/shared/Testimonials/Testimonials";
import FAQ from "@/components/shared/FAQ/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryBrowser />
      <ProductDeals />
      <HowItWorks />
      <WholesalePricing />
      <DailyMedications />
      <Testimonials />
      <FAQ />
    </>
  );
}
