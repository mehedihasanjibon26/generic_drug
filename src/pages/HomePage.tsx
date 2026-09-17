import Hero from "@/components/shared/Hero/Hero";
import CategoryBrowser from "@/components/shared/CategoryBrowser/CategoryBrowser";
import ProductDeals from "@/components/shared/ProductDeals/ProductDeals";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryBrowser />
      <ProductDeals />
    </>
  );
}
