import Hero from "@/components/shared/Hero/Hero";
import CategoryBrowser from "@/components/shared/CategoryBrowser/CategoryBrowser";
import ProductDeals from "@/components/shared/ProductDeals/ProductDeals";
import HowItWorks from "@/components/shared/HowItWorks/HowItWorks";
import WholesalePricing from "@/components/shared/WholesalePricing/WholesalePricing";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryBrowser />
      <ProductDeals />
      <HowItWorks />
      <WholesalePricing />
    </>
  );
}
