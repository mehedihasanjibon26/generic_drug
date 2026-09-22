import BlogHeroFeatured from "@/components/blog/BlogHeroFeatured/BlogHeroFeatured";
import BlogArticleGrid from "@/components/blog/BlogArticleGrid/BlogArticleGrid";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#F4F7F9]">
      <BlogHeroFeatured />

      <BlogArticleGrid />
    </div>
  );
}
