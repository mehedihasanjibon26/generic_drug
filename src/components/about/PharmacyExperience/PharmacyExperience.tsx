import { ArrowUpRight, Check, Cross } from "lucide-react";
import { Link } from "react-router-dom";

import pharmacyExperienceImage from "@/assets/images/about/about-pharmacy-experience.jpg";

const benefits = [
  "Affordable medication options",
  "Easy prescription and refill management",
  "Professional pharmacy support",
  "Convenient delivery or pickup",
  "Secure digital experience",
];

export default function PharmacyExperience() {
  return (
    <section
      className="
        flex
        h-[1071px]
        w-full
        flex-col
        items-center
        gap-[48px]
        bg-[#F4F7F9]
        px-[40px]
        py-[120px]
      "
    >
      {/* Heading */}
      <div className="flex shrink-0 flex-col items-center text-center">
        <div
          className="
            inline-flex
            h-[34px]
            items-center
            gap-[8px]
            rounded-full
            border
            border-[#08A9DF]
            px-[13px]
            text-[14px]
            font-medium
            text-[#252A2D]
          "
        >
          <Cross size={16} strokeWidth={2} className="text-[#08A9DF]" />
          Why We Started
        </div>

        <h2
          className="
            mt-[20px]
            text-[48px]
            font-semibold
            leading-[1.08]
            tracking-[-1.8px]
            text-[#24292C]
          "
        >
          Built to simplify the
          <br />
          pharmacy{" "}
          <span
            className="
              font-serif
              font-medium
              italic
              text-[#08A9DF]
            "
          >
            experience
          </span>
        </h2>
      </div>

      {/* Exact Figma block */}
      <div
        className="
          grid
          h-[623px]
          w-full
          max-w-[1360px]
          shrink-0
          grid-cols-2
          gap-[24px]
        "
      >
        {/* Left */}
        <div
          className="
            flex
            h-[623px]
            min-w-0
            flex-col
            overflow-hidden
            rounded-[32px]
            bg-white
            px-[40px]
            pb-[44px]
            pt-[42px]
          "
        >
          <p
            className="
              max-w-[590px]
              text-[17px]
              font-normal
              leading-[28px]
              text-[#2E3438]
            "
          >
            Our service provides clear, upfront pricing and expert support at
            every step, designed to simplify medication management and make it
            more dependable and hassle-free for you. We focus on transparency
            and reliability to ensure you have peace of mind while managing your
            medications.
          </p>

          <div className="mt-[34px] flex flex-col gap-[20px]">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-[12px]">
                <Check
                  size={18}
                  strokeWidth={2}
                  className="shrink-0 text-[#20272B]"
                />

                <span
                  className="
                    text-[17px]
                    font-normal
                    leading-[24px]
                    text-[#30363A]
                  "
                >
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          <Link
            to="/medications"
            className="
              mt-auto
              inline-flex
              h-[52px]
              w-fit
              items-center
              justify-center
              gap-[10px]
              rounded-full
              bg-[#08A9DF]
              px-[26px]
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

        {/* Right - image forced to fill entire card */}
        <div
          className="
            relative
            h-[623px]
            min-w-0
            overflow-hidden
            rounded-[32px]
            bg-white
          "
        >
          <img
            src={pharmacyExperienceImage}
            alt="Pharmacist assisting a customer"
            className="
              absolute
              inset-0
              block
              h-full
              w-full
              object-cover
            "
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </section>
  );
}
