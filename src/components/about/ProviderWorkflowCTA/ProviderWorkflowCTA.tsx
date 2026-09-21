import { ArrowUpRight } from "lucide-react";

export default function ProviderWorkflowCTA() {
  return (
    <section
      className="
        flex
        h-[623px]
        w-full
        items-start
        bg-[#F4F7F9]
        px-[40px]
        pb-[120px]
      "
    >
      <div
        className="
          relative
          flex
          h-[503px]
          w-full
          overflow-hidden
          rounded-[32px]
          bg-[#075E70]
          px-[40px]
        "
      >
        {/* Left decorative mark */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-[26px]
            -left-[26px]
            opacity-[0.18]
          "
        >
          <BrandMark size={220} />
        </div>

        {/* Right decorative mark */}
        <div
          className="
            pointer-events-none
            absolute
            -right-[18px]
            -top-[20px]
            opacity-[0.18]
          "
        >
          <BrandMark size={220} />
        </div>

        {/* Center content */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            h-full
            max-w-[940px]
            flex-col
            items-center
            justify-center
            text-center
          "
        >
          <div
            className="
              inline-flex
              h-[34px]
              items-center
              gap-[8px]
              rounded-full
              border
              border-[#1687A1]
              px-[14px]
              text-[15px]
              font-normal
              text-white
            "
          >
            <BrandMark size={18} />
            For healthcare providers
          </div>

          <h2
            className="
              mt-[26px]
              max-w-[900px]
              text-[50px]
              font-semibold
              leading-[1.08]
              tracking-[-1.8px]
              text-white
            "
          >
            Send{" "}
            <span
              className="
                font-serif
                font-medium
                italic
                text-[#08A9DF]
              "
            >
              prescriptions
            </span>{" "}
            through a secure
            <br />
            provider workflow.
          </h2>

          <p
            className="
              mt-[24px]
              text-[17px]
              leading-[26px]
              text-white/75
            "
          >
            Search for a patient, select medication details, and submit for
            pharmacist review.
          </p>

          <button
            type="button"
            className="
              mt-[36px]
              inline-flex
              h-[54px]
              items-center
              justify-center
              gap-[10px]
              rounded-full
              bg-[#08A9DF]
              px-[28px]
              text-[16px]
              font-medium
              text-white
              transition-colors
              hover:bg-[#0797C9]
            "
          >
            Provider registration
            <ArrowUpRight size={18} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </section>
  );
}

type BrandMarkProps = {
  size: number;
};

function BrandMark({ size }: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="text-[#08A9DF]"
    >
      <rect
        x="38"
        y="5"
        width="24"
        height="90"
        rx="12"
        stroke="currentColor"
        strokeWidth="8"
      />

      <rect
        x="5"
        y="38"
        width="90"
        height="24"
        rx="12"
        stroke="currentColor"
        strokeWidth="8"
      />

      <rect x="42" y="42" width="16" height="16" rx="5" fill="currentColor" />
    </svg>
  );
}
