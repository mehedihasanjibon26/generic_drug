import { ArrowUpRight, Cross } from "lucide-react";
import { Link } from "react-router-dom";

import whoWeAreImage from "@/assets/images/about/about-who-we-are.jpg";

export default function WhoWeAre() {
  return (
    <section
      className="
        flex
        h-[807px]
        w-full
        items-start
        bg-[#F4F7F9]
        px-[40px]
        pt-[120px]
      "
    >
      <div
        className="
          relative
          flex
          h-[647px]
          w-full
          overflow-hidden
          rounded-[30px]
          bg-[#075E70]
          px-[76px]
          py-[32px]
        "
      >
        {/* Decorative marks */}
        <div
          className="
            pointer-events-none
            absolute
            -left-[40px]
            -top-[55px]
            h-[190px]
            w-[190px]
            rounded-full
            border-[32px]
            border-[#0B6D7E]
            opacity-50
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -left-[30px]
            top-[80px]
            h-[110px]
            w-[110px]
            rounded-full
            border-[26px]
            border-[#0B6D7E]
            opacity-40
          "
        />

        {/* Left content */}
        <div
          className="
            relative
            z-10
            flex
            w-[48%]
            flex-col
            justify-center
            pr-[55px]
          "
        >
          <div
            className="
              inline-flex
              h-[34px]
              w-fit
              items-center
              gap-[8px]
              rounded-full
              border
              border-[#74CDE4]
              px-[13px]
              text-[15px]
              text-white
            "
          >
            <Cross size={16} strokeWidth={2} className="text-[#16B9E8]" />
            Who We Are
          </div>

          <h2
            className="
              mt-[22px]
              max-w-[520px]
              text-[48px]
              font-semibold
              leading-[1.12]
              tracking-[-1.8px]
              text-white
            "
          >
            Healthcare should
            <br />
            feel personal,{" "}
            <span
              className="
                font-serif
                font-medium
                italic
                text-[#55C4E9]
              "
            >
              not
            </span>
            <br />
            <span
              className="
                font-serif
                font-medium
                italic
                text-[#55C4E9]
              "
            >
              complicated.
            </span>
          </h2>

          <p
            className="
              mt-[30px]
              max-w-[520px]
              text-[17px]
              leading-[28px]
              text-white/90
            "
          >
            We are building a simpler pharmacy experience around transparent
            pricing, secure prescription support, and clear steps from
            medication search to delivery.
          </p>

          <Link
            to="/medications"
            className="
              mt-[38px]
              inline-flex
              h-[50px]
              w-fit
              items-center
              justify-center
              gap-[10px]
              rounded-full
              bg-[#08A9DF]
              px-[24px]
              text-[16px]
              font-medium
              text-white
              transition-colors
              hover:bg-[#0797C9]
            "
          >
            Browse medications
            <ArrowUpRight size={17} strokeWidth={1.8} />
          </Link>
        </div>

        {/* Right image */}
        <div
          className="
            ml-auto
            h-full
            w-[52%]
            overflow-hidden
            rounded-[28px]
          "
        >
          <img
            src={whoWeAreImage}
            alt="Pharmacist assisting a patient"
            className="
              h-full
              w-full
              object-cover
            "
          />
        </div>
      </div>
    </section>
  );
}
