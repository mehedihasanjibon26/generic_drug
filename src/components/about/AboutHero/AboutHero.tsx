import { ArrowUpRight, CirclePlay, Cross } from "lucide-react";
import { Link } from "react-router-dom";

import heroImage01 from "@/assets/images/about/about-hero-01.jpg.jpg";
import heroImage02 from "@/assets/images/about/about-hero-02.jpg.jpg";
import heroImage03 from "@/assets/images/about/about-hero-03.jpg.png";
import heroImage04 from "@/assets/images/about/about-hero-04.jpg.png";
import heroImage05 from "@/assets/images/about/about-hero-05.jpg.png";

export default function AboutHero() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#F4F7F9]
        pt-[58px]
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-[850px]
          flex-col
          items-center
          px-[24px]
          text-center
        "
      >
        <div
          className="
            inline-flex
            h-[34px]
            items-center
            gap-[7px]
            rounded-full
            border
            border-[#B9DCE7]
            bg-white
            px-[13px]
            text-[14px]
            text-[#516066]
          "
        >
          <Cross size={15} strokeWidth={2} className="text-[#08A9DF]" />
          About Generic Drug
        </div>

        <h1
          className="
            mt-[18px]
            text-[52px]
            font-semibold
            leading-[1.04]
            tracking-[-2px]
            text-[#24292C]
          "
        >
          Affordable medication,
          <span
            className="
              block
              font-serif
              text-[55px]
              font-medium
              italic
              tracking-[-1.3px]
              text-[#08A9DF]
            "
          >
            handled with care
          </span>
        </h1>

        <p
          className="
            mt-[24px]
            max-w-[700px]
            text-[14px]
            leading-[22px]
            text-[#626D73]
          "
        >
          We are building a simpler pharmacy experience around transparent
          pricing, secure prescription support, and clear steps from medication
          search to delivery.
        </p>

        <div
          className="
            mt-[30px]
            flex
            items-center
            gap-[12px]
          "
        >
          <Link
            to="/medications"
            className="
              inline-flex
              h-[44px]
              items-center
              justify-center
              gap-[8px]
              rounded-full
              bg-[#08A9DF]
              px-[20px]
              text-[14px]
              font-medium
              text-white
              transition-colors
              hover:bg-[#0797C9]
            "
          >
            Browse medications
            <ArrowUpRight size={15} strokeWidth={1.8} />
          </Link>

          <button
            type="button"
            className="
              inline-flex
              h-[44px]
              items-center
              justify-center
              gap-[8px]
              rounded-full
              border
              border-[#08A9DF]
              bg-white
              px-[20px]
              text-[14px]
              font-medium
              text-[#08A9DF]
              transition-colors
              hover:bg-[#EFFAFE]
            "
          >
            How it works
            <CirclePlay size={16} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {/* Figma image group */}
      <div className="mt-[55px] w-full px-[16px]">
        <div
          className="
            relative
            mx-auto
            aspect-[1599/369]
            w-full
            max-w-[1599px]
          "
        >
          {/* Image 01 */}
          <div
            className="
              absolute
              left-0
              top-[15.7%]
              h-[84.3%]
              w-[15.82%]
              overflow-hidden
              rounded-[24px]
            "
          >
            <img
              src={heroImage01}
              alt="Patient consultation"
              className="
                h-full
                w-full
                rounded-[24px]
                object-cover
              "
            />
          </div>

          {/* Image 02 */}
          <div
            className="
              absolute
              left-[16.89%]
              top-0
              h-[84.6%]
              w-[21.33%]
              overflow-hidden
              rounded-[24px]
            "
          >
            <img
              src={heroImage02}
              alt="Pharmacist reviewing medication"
              className="
                h-full
                w-full
                rounded-[24px]
                object-cover
              "
            />
          </div>

          {/* Image 03 */}
          <div
            className="
              absolute
              left-[39.34%]
              top-[15.7%]
              h-[84.3%]
              w-[21.39%]
              overflow-hidden
              rounded-[24px]
            "
          >
            <img
              src={heroImage03}
              alt="Healthcare professional"
              className="
                h-full
                w-full
                rounded-[24px]
                object-cover
              "
            />
          </div>

          {/* Image 04 */}
          <div
            className="
              absolute
              left-[61.79%]
              top-0
              h-[84.6%]
              w-[21.33%]
              overflow-hidden
              rounded-[24px]
            "
          >
            <img
              src={heroImage04}
              alt="Healthcare consultation"
              className="
                h-full
                w-full
                rounded-[24px]
                object-cover
              "
            />
          </div>

          {/* Image 05 */}
          <div
            className="
              absolute
              right-0
              top-[15.7%]
              h-[84.3%]
              w-[15.82%]
              overflow-hidden
              rounded-[24px]
            "
          >
            <img
              src={heroImage05}
              alt="Doctor consultation"
              className="
                h-full
                w-full
                rounded-[24px]
                object-cover
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
