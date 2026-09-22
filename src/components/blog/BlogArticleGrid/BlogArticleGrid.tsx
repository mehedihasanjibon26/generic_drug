import authorImage from "@/assets/images/blog/author-annette.jpg";

import blogImage01 from "@/assets/images/blog/blog-card-01.jpg";
import blogImage02 from "@/assets/images/blog/blog-card-02.jpg";
import blogImage03 from "@/assets/images/blog/blog-card-03.jpg";
import blogImage04 from "@/assets/images/blog/blog-card-04.jpg";
import blogImage05 from "@/assets/images/blog/blog-card-05.jpg";
import blogImage06 from "@/assets/images/blog/blog-card-06.jpg";
import blogImage07 from "@/assets/images/blog/blog-card-07.jpg";
import blogImage08 from "@/assets/images/blog/blog-card-08.jpg";
import blogImage09 from "@/assets/images/blog/blog-card-09.jpg";

const articles = [
  {
    id: 1,
    image: blogImage01,
    meta: "8 min read • Cybersecurity",
    title: "Protecting Your Business from Ransomware",
    description:
      "Essential steps to safeguard your data against evolving cyber threats.",
    author: "David Chen",
    date: "May 28, 2026",
    imageScale: 1.9,
    imagePosition: "center top",
  },
  {
    id: 2,
    image: blogImage02,
    meta: "8 min read • Cybersecurity",
    title: "Protecting Your Business from Ransomware",
    description:
      "Essential steps to safeguard your data against evolving cyber threats.",
    author: "David Chen",
    date: "May 28, 2026",
    imageScale: 1.5,
    imagePosition: "center top",
  },
  {
    id: 3,
    image: blogImage03,
    meta: "7 min read • Marketing Strategy",
    title: "Mastering Social Media Analytics",
    description:
      "Unlock the power of data to boost your social media campaigns effectively.",
    author: "Marcus Lee",
    date: "May 22, 2026",
    imageScale: 1.52,
    imagePosition: "center top",
  },
  {
    id: 4,
    image: blogImage04,
    meta: "6 min read • Leadership",
    title: "Building Resilient Teams in Uncertain Times",
    description: "How to empower your workforce to thrive amid change.",
    author: "Olivia Martinez",
    date: "June 3, 2026",
    imageScale: 1,
    imagePosition: "center center",
  },
  {
    id: 5,
    image: blogImage05,
    meta: "5 min read • Product Design",
    title: "Design Thinking for Remote Teams",
    description:
      "Strategies to foster creativity and collaboration across distances.",
    author: "Sara Kim",
    date: "June 1, 2026",
    imageScale: 1.52,
    imagePosition: "center top",
  },
  {
    id: 6,
    image: blogImage06,
    meta: "4 min read • Sustainability",
    title: "Green Tech Innovations Shaping the Future",
    description:
      "Discover breakthroughs that are driving eco-friendly progress.",
    author: "Liam O'Connor",
    date: "May 30, 2026",
    imageScale: 1.35,
    imagePosition: "center top",
  },
  {
    id: 7,
    image: blogImage07,
    meta: "9 min read • Finance",
    title: "Navigating Cryptocurrency Regulations",
    description:
      "A clear overview of the legal landscape around digital currencies.",
    author: "Fatima Zahra",
    date: "June 2, 2026",
    imageScale: 1.35,
    imagePosition: "center top",
  },
  {
    id: 8,
    image: blogImage08,
    meta: "5 min read • Health Tech",
    title: "Telemedicine: The New Frontier of Healthcare",
    description: "How remote consultations are revolutionizing patient care.",
    author: "Ethan Brooks",
    date: "May 26, 2026",
    imageScale: 1.48,
    imagePosition: "center top",
  },
  {
    id: 9,
    image: blogImage09,
    meta: "7 min read • Education",
    title: "AI in Classrooms: Enhancing Learning Experiences",
    description:
      "Exploring tools that personalize education for every student.",
    author: "Aisha Patel",
    date: "June 5, 2026",
    imageScale: 1.52,
    imagePosition: "center top",
  },
];

export default function BlogArticleGrid() {
  return (
    <section className="w-full bg-white px-[112px] py-[112px]">
      <div className="mx-auto grid w-[1216px] grid-cols-[392px_392px_392px] gap-x-[20px] gap-y-[64px]">
        {articles.map((article) => (
          <article
            key={article.id}
            className="flex h-[632px] w-[392px] flex-col items-start gap-[20px]"
          >
            <div className="relative h-[392px] w-[392px] shrink-0 overflow-hidden rounded-[12px] bg-[#FAFAFA]">
              <img
                src={article.image}
                alt={article.title}
                className="absolute inset-0 h-full w-full max-w-none object-cover"
                style={{
                  transform: `scale(${article.imageScale})`,
                  transformOrigin: "top center",
                  objectPosition: article.imagePosition,
                }}
              />
            </div>

            <div className="flex min-h-0 w-full flex-1 flex-col">
              <p className="text-[13px] font-normal leading-[18px] text-[#7B8388]">
                {article.meta}
              </p>

              <h2 className="mt-[8px] text-[20px] font-semibold leading-[26px] tracking-[-0.3px] text-[#24292C]">
                {article.title}
              </h2>

              <p className="mt-[8px] text-[14px] font-normal leading-[20px] text-[#7B8388]">
                {article.description}
              </p>

              <div className="mt-auto flex w-full items-center justify-between gap-[16px]">
                <div className="flex min-w-0 items-center gap-[10px]">
                  <img
                    src={authorImage}
                    alt={article.author}
                    className="h-[34px] w-[34px] shrink-0 rounded-full object-cover"
                  />

                  <span className="truncate text-[13px] font-semibold text-[#32383C]">
                    {article.author}
                  </span>
                </div>

                <span className="shrink-0 text-[12px] font-normal text-[#8A9297]">
                  {article.date}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
