import { ArrowUpRight, Download } from "lucide-react";

const supplyOptions = [
  {
    id: 1,
    duration: "3 MONTHS",
    price: "$20",
    color: "#EBCB79",
  },
  {
    id: 2,
    duration: "6 MONTHS",
    price: "$20",
    color: "#ED935D",
  },
  {
    id: 3,
    duration: "12 MONTHS",
    price: "$20",
    color: "#37C7C2",
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

export default function WholesalePricing() {
  return (
    <section className="bg-white px-6 py-[110px] lg:px-[48px] lg:py-[138px]">
      <div
        className="
          mx-auto grid w-full max-w-[1640px]
          items-center gap-[70px]
          lg:grid-cols-[0.86fr_1.14fr]
        "
      >
        {/* Left content */}
        <div className="max-w-[650px]">
          <div
            className="
              inline-flex h-[40px]
              items-center gap-[9px]
              rounded-full
              border border-[#18ADE0]
              px-[14px]
            "
          >
            <MedicalLogo />

            <span className="text-[17px] font-normal text-[#303638]">
              Low-cost generics
            </span>
          </div>

          <h2
            className="
              mt-[28px]
              text-[46px]
              font-medium
              leading-[1.08]
              tracking-[-1.8px]
              text-[#252525]
              lg:text-[58px]
            "
          >
            <span
              className="
                font-serif font-semibold italic
                text-[#08A9DE]
              "
            >
              Wholesale pricing
            </span>{" "}
            for
            <br />
            common medications
          </h2>

          <p
            className="
              mt-[24px]
              max-w-[625px]
              text-[18px]
              leading-[1.55]
              text-[#6C6F72]
            "
          >
            Explore an easy-to-scan price list covering common medications for
            cardiovascular care, thyroid conditions, diabetes, mental health,
            and more.
          </p>

          <div className="mt-[40px] flex flex-wrap items-center gap-[20px]">
            <a
              href="#"
              className="
                inline-flex h-[62px]
                items-center gap-[13px]
                rounded-full
                bg-[#0BAAE0]
                px-[29px]
                text-[17px] font-medium
                text-white
                transition-transform duration-200
                hover:-translate-y-0.5
              "
            >
              View full price list
              <ArrowUpRight size={20} strokeWidth={1.8} />
            </a>

            <button
              type="button"
              className="
                inline-flex h-[62px]
                items-center gap-[13px]
                rounded-full
                border border-[#D9DEE2]
                bg-white
                px-[29px]
                text-[17px] font-medium
                text-[#2F3335]
                transition-colors
                hover:border-[#0BAAE0]
              "
            >
              Download List
              <Download size={19} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        {/* Right pricing panel */}
        <div
          className="
            rounded-[22px]
            border border-[#DFE4E7]
            bg-[#F4F6F7]
            px-[28px]
            pb-[23px]
            pt-[30px]
            lg:px-[31px]
          "
        >
          <h3
            className="
              text-[31px]
              font-semibold
              tracking-[-1px]
              text-[#292929]
            "
          >
            Choose a supply option
          </h3>

          <p className="mt-[7px] text-[17px] text-[#696D70]">
            Review starting prices before continuing.
          </p>

          {/* Supply cards */}
          <div className="mt-[25px] grid gap-[18px] md:grid-cols-3">
            {supplyOptions.map((option) => (
              <article
                key={option.id}
                className="
                  rounded-[19px]
                  border border-[#DFE3E6]
                  bg-white
                  p-[18px]
                "
              >
                <div
                  className="
                    flex h-[53px]
                    items-center justify-center
                    rounded-[10px]
                  "
                  style={{
                    backgroundColor: option.color,
                  }}
                >
                  <span
                    className="
                      text-[20px]
                      font-bold
                      text-[#22272A]
                    "
                  >
                    {option.duration}
                  </span>
                </div>

                <div
                  className="
                    flex h-[108px]
                    items-center justify-center
                  "
                >
                  <span
                    className="
                      text-[54px]
                      font-semibold
                      tracking-[-2px]
                      text-[#242424]
                    "
                  >
                    {option.price}
                  </span>
                </div>

                <button
                  type="button"
                  className="
                    flex h-[47px]
                    w-full
                    items-center justify-center
                    rounded-full
                    border border-[#DEE2E4]
                    bg-white
                    text-[16px]
                    font-semibold
                    text-[#292929]
                    transition-colors
                    hover:border-[#0AAEE1]
                  "
                >
                  Get it now
                </button>
              </article>
            ))}
          </div>

          {/* Product banner */}
          <div
            className="
              mt-[27px]
              flex flex-col gap-5
              rounded-[18px]
              bg-[#075F70]
              px-[27px]
              py-[26px]
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <p
                className="
                  text-[38px]
                  font-medium
                  leading-none
                  tracking-[-1.4px]
                  text-white
                "
              >
                7,000+ products
              </p>

              <p className="mt-[14px] text-[17px] text-white/95">
                available across a wide range of categories
              </p>
            </div>

            <a
              href="#"
              className="
                inline-flex h-[59px]
                shrink-0 items-center
                justify-center gap-[14px]
                rounded-full
                border border-white
                px-[29px]
                text-[17px]
                font-medium
                text-white
                transition-colors
                hover:bg-white hover:text-[#075F70]
              "
            >
              Explore all
              <ArrowUpRight size={19} strokeWidth={1.8} />
            </a>
          </div>

          <p
            className="
              mt-[16px]
              text-[17px]
              leading-[1.45]
              text-[#74787B]
            "
          >
            Prices shown are starting points and may vary by medication, dosage,
            quantity, and prescription requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
