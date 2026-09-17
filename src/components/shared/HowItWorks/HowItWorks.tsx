import searchMedicationImage from "@/assets/images/how-it-works/search-medication.png";
import secureDetailsImage from "@/assets/images/how-it-works/secure-details.png";
import pharmacyDeliveryImage from "@/assets/images/how-it-works/pharmacy-delivery.png";

const steps = [
  {
    id: 1,
    step: "STEP-1",
    title: "Search for your medication",
    description:
      "Find generic or brand-name options and view clear starting prices.",
    image: searchMedicationImage,
    cardColor: "#D7C7FF",
    stepColor: "#806AA9",
    titleColor: "#10155C",
    descriptionColor: "#665A9C",
    imageClass: "h-[190px] w-[205px]",
  },
  {
    id: 2,
    step: "STEP-2",
    title: "Complete your secure details",
    description:
      "Upload a prescription, request a transfer, or use a provider-sent prescription.",
    image: secureDetailsImage,
    cardColor: "#0D8D82",
    stepColor: "#07564F",
    titleColor: "#FFFFFF",
    descriptionColor: "#86D4CC",
    imageClass: "h-[195px] w-[205px]",
  },
  {
    id: 3,
    step: "STEP-3",
    title: "Receive pharmacy delivery",
    description:
      "Our pharmacists review the order before preparation and delivery.",
    image: pharmacyDeliveryImage,
    cardColor: "#EE975F",
    stepColor: "#A63C00",
    titleColor: "#572400",
    descriptionColor: "#925225",
    imageClass: "h-[185px] w-[220px]",
  },
];

function MedicalLogo() {
  return (
    <svg
      width="20"
      height="20"
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
        stroke="#08ACE0"
        strokeWidth="3"
      />

      <rect
        x="1.5"
        y="12.5"
        width="32"
        height="10"
        rx="5"
        stroke="#08ACE0"
        strokeWidth="3"
      />

      <rect x="14" y="14" width="7" height="7" rx="2.5" fill="#08ACE0" />
    </svg>
  );
}

function CornerMark() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute right-0 top-0
        h-[150px] w-[150px]
        overflow-hidden
        opacity-[0.07]
      "
    >
      <div
        className="
          absolute right-[-14px] top-[-33px]
          h-[122px] w-[58px]
          rounded-full
          border-[18px] border-current
        "
      />

      <div
        className="
          absolute right-[20px] top-[17px]
          h-[58px] w-[122px]
          rounded-full
          border-[18px] border-current
        "
      />
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="bg-[#F3F6F7] px-6 py-[110px] lg:px-[44px] lg:py-[125px]">
      <div className="mx-auto w-full max-w-[1450px]">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <div
            className="
              inline-flex h-[38px]
              items-center gap-[8px]
              rounded-full
              border border-[#0AAEE1]
              px-[13px]
            "
          >
            <MedicalLogo />

            <span className="text-[17px] font-medium leading-none text-[#303638]">
              How it works
            </span>
          </div>

          <h2
            className="
              mt-[20px]
              max-w-[900px]
              text-[44px]
              font-medium
              leading-[1.05]
              tracking-[-1.7px]
              text-[#050505]
              sm:text-[50px]
              lg:text-[57px]
            "
          >
            Your{" "}
            <span className="font-serif font-semibold italic text-[#0AA9DE]">
              medication journey
            </span>{" "}
            in three clear steps
          </h2>
        </div>

        {/* Cards */}
        <div
          className="
            mt-[128px]
            grid grid-cols-1
            justify-center
            gap-[24px]
            lg:grid-cols-[repeat(3,minmax(0,468px))]
          "
        >
          {steps.map((step) => (
            <article
              key={step.id}
              className="
                relative
                mx-auto
                h-[493px]
                w-full
                max-w-[468px]
                overflow-hidden
                rounded-[38px]
                px-[35px]
                pt-[34px]
              "
              style={{
                backgroundColor: step.cardColor,
                color: step.titleColor,
              }}
            >
              <CornerMark />

              {/* Step badge */}
              <div
                className="
                  relative z-10
                  inline-flex h-[35px]
                  items-center justify-center
                  rounded-full
                  px-[18px]
                "
                style={{
                  backgroundColor: step.stepColor,
                }}
              >
                <span className="text-[16px] font-semibold tracking-[2px] text-white">
                  {step.step}
                </span>
              </div>

              {/* Text */}
              <div className="relative z-10 mt-[23px]">
                <h3
                  className="
                    max-w-[355px]
                    text-[34px]
                    font-semibold
                    leading-[1.17]
                    tracking-[-1.15px]
                  "
                  style={{
                    color: step.titleColor,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-[24px]
                    max-w-[380px]
                    text-[18px]
                    font-normal
                    leading-[1.42]
                  "
                  style={{
                    color: step.descriptionColor,
                  }}
                >
                  {step.description}
                </p>
              </div>

              {/* Illustration */}
              <img
                src={step.image}
                alt=""
                aria-hidden="true"
                className={`
                  absolute
                  bottom-[27px]
                  left-1/2
                  -translate-x-1/2
                  object-contain
                  ${step.imageClass}
                `}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
