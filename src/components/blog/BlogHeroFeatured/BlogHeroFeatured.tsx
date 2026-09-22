import { Cross } from "lucide-react";
import { Link } from "react-router-dom";

import featuredImage from "@/assets/images/blog/blog-featured.png";
import authorImage from "@/assets/images/blog/author-annette.jpg";

export default function BlogHeroFeatured() {
  return (
    <section
      className="
        w-full
        bg-[#F4F7F9]
        px-[40px]
        pb-[120px]
        pt-[78px]
      "
    >
      <div className="mx-auto w-full max-w-[1220px]">
        {/* Hero heading */}
        <div className="flex flex-col items-center text-center">
          <div
            className="
              inline-flex
              h-[32px]
              items-center
              gap-[7px]
              rounded-full
              border
              border-[#08A9DF]
              bg-white
              px-[13px]
              text-[13px]
              font-medium
              text-[#30383C]
            "
          >
            <Cross size={15} strokeWidth={2} className="text-[#08A9DF]" />
            How it works
          </div>

          <h1
            className="
              mt-[22px]
              max-w-[760px]
              text-[50px]
              font-semibold
              leading-[1.06]
              tracking-[-2px]
              text-[#202528]
            "
          >
            Generic Drugs vs. Brand-
            <br />
            Name Drugs
          </h1>

          <p
            className="
              mt-[24px]
              max-w-[760px]
              text-[16px]
              font-normal
              leading-[25px]
              text-[#7B858B]
            "
          >
            Explore articles, business guides, and real-world perspectives on
            AI, customer engagement, operational efficiency, and business
            growth.
          </p>
        </div>

        {/* Featured article */}
        <div
          className="
            mt-[78px]
            grid
            grid-cols-[680px_minmax(0,1fr)]
            gap-[64px]
          "
        >
          <Link
            to="/blog/why-generic-medicines-less"
            className="
              relative
              block
              h-[560px]
              w-[680px]
              overflow-hidden
              rounded-[18px]
              bg-[#E9EEF0]
            "
          >
            <img
              src={featuredImage}
              alt="Featured healthcare article"
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
                transition-transform
                duration-300
                hover:scale-[1.3]
              "
            />
          </Link>

          <article
            className="
              flex
              min-w-0
              flex-col
              pb-[4px]
              pt-[4px]
            "
          >
            <div>
              <Link to="/blog/why-generic-medicines-less">
                <h2
                  className="
                    max-w-[410px]
                    text-[44px]
                    font-semibold
                    leading-[1.04]
                    tracking-[-1.7px]
                    text-[#111719]
                    transition-colors
                    hover:text-[#08A9DF]
                  "
                >
                  Why Generic
                  <br />
                  medicines Less
                </h2>
              </Link>

              <p
                className="
                  mt-[24px]
                  max-w-[420px]
                  text-[15px]
                  leading-[24px]
                  text-[#737D83]
                "
              >
                Discover how practical AI solutions are helping businesses
                improve customer service, save time, and support growth.
              </p>

              <p
                className="
                  mt-[20px]
                  text-[13px]
                  font-normal
                  text-[#717C82]
                "
              >
                5 min read · AI &amp; Innovation
              </p>
            </div>

            <div
              className="
                mt-auto
                flex
                items-center
                gap-[14px]
              "
            >
              <img
                src={authorImage}
                alt="Annette Black"
                className="
                  h-[46px]
                  w-[46px]
                  rounded-[7px]
                  object-cover
                "
              />

              <span
                className="
                  text-[15px]
                  font-semibold
                  text-[#202629]
                "
              >
                Annette Black
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
