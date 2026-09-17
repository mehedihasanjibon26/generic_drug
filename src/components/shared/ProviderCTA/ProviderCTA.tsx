import { ArrowUpRight } from "lucide-react";

import providerDoctorImage from "@/assets/images/provider/provider-doctor.png";

function MedicalLogo() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect
        x="12.5"
        y="1.5"
        width="10"
        height="32"
        rx="5"
        stroke="#00A9E0"
        strokeWidth="3"
      />

      <rect
        x="1.5"
        y="12.5"
        width="32"
        height="10"
        rx="5"
        stroke="#00A9E0"
        strokeWidth="3"
      />

      <rect x="14" y="14" width="7" height="7" rx="2.5" fill="#00A9E0" />
    </svg>
  );
}

export default function ProviderCTA() {
  return (
    <section className="bg-white px-4 py-[78px] lg:px-5 lg:py-[92px]">
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1360px]
          overflow-hidden
          rounded-[32px]
          bg-[#075F70]

          md:aspect-[1360/503]
        "
      >
        {/* Left content */}
        <div
          className="
            px-8 py-14

            md:absolute
            md:left-[5%]
            md:top-[11.1%]
            md:w-[42%]
            md:p-0
          "
        >
          {/* Label */}
          <div
            className="
              inline-flex h-[33px]
              w-fit items-center gap-[8px]
              rounded-full
              border border-[#16899D]
              px-[12px]
            "
          >
            <MedicalLogo />

            <span
              className="
                whitespace-nowrap
                text-[14px]
                font-normal
                leading-none
                text-white
              "
            >
              For healthcare providers
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              mt-[22px]
              max-w-[500px]
              text-[40px]
              font-semibold
              leading-[1.08]
              tracking-[-1.7px]
              text-white

              md:text-[clamp(30px,3.38vw,46px)]
            "
          >
            Send{" "}
            <span
              className="
                font-serif
                font-semibold
                italic
                tracking-[-1.4px]
                text-[#00A9E0]
              "
            >
              prescriptions
            </span>
            <br />
            through a secure
            <br />
            provider workflow.
          </h2>

          {/* Description */}
          <p
            className="
              mt-[16px]
              max-w-[500px]
              text-[15px]
              font-normal
              leading-[1.55]
              tracking-[-0.1px]
              text-white/80

              md:text-[clamp(12px,1.18vw,16px)]
            "
          >
            Search for a patient, select medication details, and submit for
            <br className="hidden md:block" />
            pharmacist review.
          </p>

          {/* CTA */}
          <a
            href="#"
            className="
              mt-[28px]
              inline-flex
              h-[54px]
              min-w-[233px]
              items-center
              justify-center
              gap-[13px]
              rounded-full
              border border-[#5BC9EB]
              bg-[#09A9DF]
              px-[23px]
              text-[15px]
              font-medium
              text-white
              transition-transform duration-200
              hover:-translate-y-0.5
            "
          >
            Provider registration
            <ArrowUpRight size={18} strokeWidth={1.8} />
          </a>
        </div>

        {/* Exact Figma image frame */}
        <div
          className="
            mx-6 mb-6
            h-[390px]
            rounded-[32px]
            bg-cover
            bg-center
            bg-no-repeat

            md:absolute
            md:right-[1.7647%]
            md:top-1/2
            md:mx-0
            md:mb-0
            md:h-[90.457%]
            md:w-[47.7206%]
            md:-translate-y-1/2
          "
          style={{
            backgroundImage: `url(${providerDoctorImage})`,
            backgroundColor: "#035065",
          }}
          role="img"
          aria-label="Healthcare provider working with prescription software"
        />
      </div>
    </section>
  );
}
