import { ArrowUpRight, ChevronRight, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";

import featuredImage from "@/assets/images/blog/blog-featured.png";
import authorImage from "@/assets/images/blog/author-annette.jpg";

const tocItems = [
  {
    label: "Start With A Business Challenge",
    id: "business-challenge",
  },
  {
    label: "Focus On Quick Wins",
    id: "quick-wins",
  },
  {
    label: "Involve Your Team Early",
    id: "team-early",
  },
  {
    label: "Measure The Results",
    id: "measure-results",
  },
  {
    label: "Start Small, Grow With Confidence",
    id: "start-small",
  },
  {
    label: "Final Thoughts",
    id: "final-thoughts",
  },
  {
    label: "Ready To Explore AI In Your Business?",
    id: "explore-ai",
  },
];

export default function BlogDetailsPage() {
  return (
    <div className="bg-[#F4F7F9]">
      {/* Hero */}
      <section
        className="
          w-full
          bg-[#F4F7F9]
          px-[40px]
          pb-[120px]
          pt-[72px]
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1220px]
            grid-cols-[460px_680px]
            items-center
            justify-between
            gap-[80px]
          "
        >
          {/* Left content */}
          <div>
            <div
              className="
                flex
                items-center
                gap-[7px]
                text-[14px]
                text-[#737D83]
              "
            >
              <Link
                to="/blog"
                className="transition-colors hover:text-[#08A9DF]"
              >
                Blog
              </Link>

              <ChevronRight size={16} strokeWidth={1.8} />

              <span className="truncate">Why Generic medicines Less...</span>
            </div>

            <h1
              className="
                mt-[26px]
                text-[52px]
                font-semibold
                leading-[1.02]
                tracking-[-2px]
                text-[#202528]
              "
            >
              Why Generic
              <br />
              medicines Less
            </h1>

            <div
              className="
                mt-[28px]
                flex
                items-center
                gap-[12px]
              "
            >
              <img
                src={authorImage}
                alt="Annette Black"
                className="
                  h-[48px]
                  w-[48px]
                  rounded-[6px]
                  object-cover
                "
              />

              <div>
                <p
                  className="
                    text-[14px]
                    font-semibold
                    text-[#293034]
                  "
                >
                  Annette Black
                </p>

                <p
                  className="
                    mt-[3px]
                    text-[12px]
                    text-[#7A848A]
                  "
                >
                  Updated on: June 3, 2026
                </p>
              </div>
            </div>

            <div className="mt-[44px]">
              <p
                className="
                  text-[15px]
                  font-semibold
                  text-[#293034]
                "
              >
                AI &amp; Innovation
              </p>

              <div
                className="
                  mt-[10px]
                  flex
                  items-center
                  gap-[7px]
                  text-[13px]
                  text-[#7B858B]
                "
              >
                <Clock3 size={17} strokeWidth={1.6} />5 Minutes to read
              </div>
            </div>
          </div>

          {/* Hero image - same as BlogHeroFeatured */}
          <div
            className="
              relative
              h-[560px]
              w-[680px]
              overflow-hidden
              rounded-[18px]
              bg-[#E9EEF0]
            "
          >
            <img
              src={featuredImage}
              alt="Doctor holding a stethoscope"
              className="
                absolute
                left-0
                top-0
                h-full
                w-full
                origin-top
                scale-[1.26]
                object-cover
                object-top
              "
            />
          </div>
        </div>
      </section>

      {/* Article */}
      <section
        className="
          w-full
          bg-white
          px-[40px]
          py-[120px]
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1030px]
            grid-cols-[250px_minmax(0,1fr)]
            items-start
            gap-[70px]
          "
        >
          {/* Table of contents */}
          <aside
            className="
              sticky
              top-[30px]
              self-start
            "
          >
            <h2
              className="
                text-[18px]
                font-semibold
                text-[#22282B]
              "
            >
              Table of contents
            </h2>

            <div className="mt-[22px] flex">
              <div
                className="
                  mr-[16px]
                  w-[2px]
                  shrink-0
                  bg-[#D6DEE2]
                "
              >
                <div
                  className="
                    h-[52px]
                    w-[2px]
                    bg-[#08A9DF]
                  "
                />
              </div>

              <nav className="flex flex-col gap-[14px]">
                {tocItems.map((item, index) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`
                      text-[13px]
                      leading-[18px]
                      transition-colors
                      hover:text-[#08A9DF]

                      ${
                        index === 0
                          ? "font-medium text-[#08A9DF]"
                          : "text-[#747E84]"
                      }
                    `}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Share */}
            <div
              className="
                mt-[60px]
                flex
                items-center
                gap-[12px]
              "
            >
              <span
                className="
                  text-[12px]
                  text-[#81898E]
                "
              >
                Share this article
              </span>

              <button
                type="button"
                aria-label="Share on Facebook"
                className="
                  flex
                  h-[32px]
                  w-[32px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#7D858A]
                  text-white
                "
              >
                <FacebookIcon />
              </button>

              <button
                type="button"
                aria-label="Share on LinkedIn"
                className="
                  flex
                  h-[32px]
                  w-[32px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#7D858A]
                  text-white
                "
              >
                <LinkedInIcon />
              </button>
            </div>
          </aside>

          {/* Main article */}
          <article
            className="
              min-w-0
              text-[14px]
              leading-[1.65]
              text-[#6D777D]
            "
          >
            {/* Key takeaways */}
            <div
              className="
                rounded-[14px]
                border
                border-[#DCE3E7]
                bg-white
                px-[28px]
                py-[26px]
              "
            >
              <h2
                className="
                  text-[20px]
                  font-semibold
                  text-[#22282B]
                "
              >
                Key takeaways
              </h2>

              <ul
                className="
                  mt-[20px]
                  list-disc
                  space-y-[12px]
                  pl-[20px]
                "
              >
                <li>
                  Artificial Intelligence (AI) is no longer something reserved
                  for large corporations with dedicated technology teams.
                </li>

                <li>
                  Today, businesses of all sizes are finding practical ways to
                  use AI to save time, improve customer experiences, and support
                  growth.
                </li>

                <li>
                  The good news is that getting started with AI does not need to
                  be complicated, expensive, or disruptive.
                </li>
              </ul>
            </div>

            {/* Intro */}
            <div className="mt-[36px] space-y-[14px]">
              <p>
                Artificial Intelligence (AI) is no longer something reserved for
                large corporations with dedicated technology teams.
              </p>

              <p>
                Today, businesses of all sizes are finding practical{" "}
                <span className="font-semibold text-[#08A9DF]">
                  ways to use AI
                </span>{" "}
                to save time, improve customer experiences, and support growth.
              </p>

              <p>Yet many business owners still have one important question:</p>

              <p className="font-semibold text-[#22282B]">
                "Where do I start?"
              </p>

              <p>
                The good news is that getting started with AI does not need to
                be complicated, expensive, or disruptive. In fact, the most
                successful businesses often begin with a single problem they
                want to solve.
              </p>
            </div>

            {/* Business Challenge */}
            <section
              id="business-challenge"
              className="scroll-mt-[40px] pt-[38px]"
            >
              <h2 className={articleHeadingClass}>
                Start With A Business Challenge
              </h2>

              <p className="mt-[16px]">
                Rather than focusing on technology, start by identifying areas
                where your business faces everyday challenges.
              </p>

              <p className="mt-[14px]">Ask yourself:</p>

              <ul
                className="
                  mt-[12px]
                  list-disc
                  space-y-[5px]
                  pl-[20px]
                "
              >
                <li>Are customers waiting too long for replies?</li>

                <li>Is your team spending time on repetitive tasks?</li>

                <li>Are important enquiries being missed?</li>

                <li>Is information difficult to access or organize?</li>

                <li>Are operational costs increasing?</li>
              </ul>

              <p className="mt-[14px]">
                AI works best when it helps solve a real business problem.
              </p>

              <p className="mt-[12px] font-semibold text-[#202629]">
                The goal is not to add more technology.{" "}
                <span className="text-[#08A9DF]">The goal is to improve</span>{" "}
                how your business operates.
              </p>
            </section>

            {/* Quick Wins */}
            <section id="quick-wins" className="scroll-mt-[40px] pt-[48px]">
              <h2 className={articleHeadingClass}>Focus On Quick Wins</h2>

              <p className="mt-[16px]">
                Many business owners assume AI requires a complete
                transformation.
              </p>

              <p className="mt-[14px]">
                In reality, the best starting point is often a{" "}
                <span className="font-semibold text-[#08A9DF]">
                  simple improvement
                </span>{" "}
                that delivers immediate value.
              </p>

              <p className="mt-[14px]">Examples include:</p>

              <h3 className={articleSubheadingClass}>Customer Support</h3>

              <p className="mt-[6px]">
                AI can help answer common questions, respond to enquiries
                outside business hours, and support customers across multiple
                channels.
              </p>

              <h3 className={articleSubheadingClass}>Business Operations</h3>

              <p className="mt-[6px]">
                AI can help organize information, automate repetitive processes,
                and reduce manual work.
              </p>

              <h3 className={articleSubheadingClass}>
                Procurement &amp; Spending
              </h3>

              <p className="mt-[6px]">
                AI can help businesses review{" "}
                <span className="text-[#08A9DF]">purchasing activities</span>,
                compare suppliers, and identify opportunities for better
                decision-making.
              </p>

              <p className="mt-[18px]">
                Small improvements often create momentum for larger
                opportunities later.
              </p>
            </section>

            {/* CTA */}
            <section
              id="explore-ai"
              className="
                mt-[48px]
                rounded-[14px]
                bg-black
                px-[40px]
                py-[38px]
                text-center
                text-white
              "
            >
              <h2
                className="
                  text-[30px]
                  font-semibold
                  leading-[1.06]
                  tracking-[-0.8px]
                "
              >
                Ready to Turn Work Into
                <br />
                Automation?
              </h2>

              <p
                className="
                  mx-auto
                  mt-[14px]
                  max-w-[500px]
                  text-[13px]
                  leading-[20px]
                  text-[#AEB5B9]
                "
              >
                Let's identify where AI can save time, reduce costs, and improve
                customer experience across your operations.
              </p>

              <Link
                to="/contact-us"
                className="
                  mt-[24px]
                  inline-flex
                  h-[44px]
                  items-center
                  justify-center
                  gap-[8px]
                  rounded-full
                  bg-[#08A9DF]
                  px-[24px]
                  text-[14px]
                  font-medium
                  text-white
                  transition-colors
                  hover:bg-[#0798C8]
                "
              >
                Contact us
                <ArrowUpRight size={16} strokeWidth={1.8} />
              </Link>
            </section>

            <section id="team-early" className="scroll-mt-[40px] pt-[48px]">
              <h2 className={articleHeadingClass}>Involve Your Team Early</h2>

              <p className="mt-[16px]">
                Teams are more likely to adopt new tools when they understand
                the problem being solved and have an opportunity to contribute.
              </p>
            </section>

            <section
              id="measure-results"
              className="scroll-mt-[40px] pt-[48px]"
            >
              <h2 className={articleHeadingClass}>Measure The Results</h2>

              <p className="mt-[16px]">
                Track whether the improvement saves time, reduces repetitive
                work, improves response times, or creates a better customer
                experience.
              </p>
            </section>

            <section id="start-small" className="scroll-mt-[40px] pt-[48px]">
              <h2 className={articleHeadingClass}>
                Start Small, Grow With Confidence
              </h2>

              <p className="mt-[16px]">
                A focused first step makes it easier to learn what works before
                expanding automation into other areas.
              </p>
            </section>

            <section id="final-thoughts" className="scroll-mt-[40px] pt-[48px]">
              <h2 className={articleHeadingClass}>Final Thoughts</h2>

              <p className="mt-[16px]">
                Successful AI adoption starts with a useful business outcome,
                not with technology for its own sake.
              </p>
            </section>
          </article>
        </div>
      </section>
    </div>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.7 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.7 1.8-1.7h1.9V2.5c-.3 0-1.5-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.8v2.3H7v3.5h2.9v9h3.8Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.2 8.6H1.7V20h3.5V8.6ZM3.4 3A2.1 2.1 0 1 0 3.4 7.2 2.1 2.1 0 0 0 3.4 3ZM9 8.6V20h3.5v-5.6c0-1.5.3-3 2.2-3 1.9 0 1.9 1.8 1.9 3.1V20H20v-6.1c0-3-.6-5.6-4.4-5.6-1.8 0-3 .9-3.5 1.8H12V8.6H9Z" />
    </svg>
  );
}

const articleHeadingClass = `
  text-[22px]
  font-semibold
  leading-[30px]
  tracking-[-0.3px]
  text-[#202629]
`;

const articleSubheadingClass = `
  mt-[24px]
  text-[16px]
  font-semibold
  text-[#202629]
`;
