import { useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Cross } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

type ValueCard = {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
};

const cards: ValueCard[] = [
  {
    id: 1,
    title: "Affordable Access",
    description:
      "Clear, affordable pricing on meds—no tiers or insurance, just honest savings.",
    icon: <AffordableAccessIcon />,
  },
  {
    id: 2,
    title: "Patient-First Care",
    description:
      "Get real-time help from live clinical advocates, no bots involved.",
    icon: <PatientFirstIcon />,
  },
  {
    id: 3,
    title: "Trusted Guidance",
    description:
      "Our pharmacists verify each order for safety and correct dosage to protect patients.",
    icon: <TrustedGuidanceIcon />,
  },
  {
    id: 4,
    title: "Privacy & Security",
    description:
      "Clear, affordable pricing on meds—no tiers or insurance, just honest savings.",
    icon: <PrivacySecurityIcon />,
  },
  {
    id: 5,
    title: "Affordable Access",
    description:
      "Straightforward medication pricing designed to keep the process clear and predictable.",
    icon: <AffordableAccessIcon />,
  },
  {
    id: 6,
    title: "Patient-First Care",
    description:
      "Helpful support throughout the pharmacy journey whenever patients need guidance.",
    icon: <PatientFirstIcon />,
  },
];

export default function WhyWeStarted() {
  const swiperRef = useRef<SwiperType | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateNavigation = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section
      className="
        flex
        min-h-[690px]
        w-full
        flex-col
        items-start
        gap-[56px]
        bg-[#F4F7F9]
        px-[40px]
        pb-[24px]
        pt-[120px]
      "
    >
      {/* Header */}
      <div
        className="
          flex
          w-full
          items-end
          justify-between
        "
      >
        <div>
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

        <div className="flex items-center gap-[16px] pb-[4px]">
          <button
            type="button"
            aria-label="Previous values"
            disabled={isBeginning}
            onClick={() => swiperRef.current?.slidePrev()}
            className="
              flex
              h-[50px]
              w-[50px]
              items-center
              justify-center
              rounded-full
              border
              border-[#DDE3E7]
              bg-white
              text-[#8B969C]
              shadow-sm
              transition-all
              hover:border-[#08A9DF]
              hover:text-[#08A9DF]
              disabled:cursor-not-allowed
              disabled:opacity-45
            "
          >
            <ChevronLeft size={23} strokeWidth={1.7} />
          </button>

          <button
            type="button"
            aria-label="Next values"
            disabled={isEnd}
            onClick={() => swiperRef.current?.slideNext()}
            className="
              flex
              h-[50px]
              w-[50px]
              items-center
              justify-center
              rounded-full
              bg-[#08A9DF]
              text-white
              shadow-sm
              transition-colors
              hover:bg-[#0797C9]
              disabled:cursor-not-allowed
              disabled:opacity-45
            "
          >
            <ChevronRight size={23} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="w-full overflow-visible pb-[12px]">
        <Swiper
          slidesPerView={4}
          slidesPerGroup={1}
          spaceBetween={24}
          speed={500}
          allowTouchMove
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            updateNavigation(swiper);
          }}
          onSlideChange={updateNavigation}
          onReachBeginning={updateNavigation}
          onReachEnd={updateNavigation}
          className="!overflow-visible"
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id} className="!h-auto">
              <article
                className="
                  flex
                  h-[365px]
                  w-full
                  flex-col
                  overflow-hidden
                  rounded-[28px]
                  bg-white
                  px-[24px]
                  pb-[28px]
                  pt-[25px]
                "
              >
                <div
                  className="
                    flex
                    h-[52px]
                    items-start
                    text-[#181C1E]
                  "
                >
                  {card.icon}
                </div>

                <div className="mt-auto">
                  <h3
                    className="
                      text-[26px]
                      font-semibold
                      leading-[32px]
                      tracking-[-0.6px]
                      text-[#24292C]
                    "
                  >
                    {card.title}
                  </h3>

                  <p
                    className="
                      mt-[18px]
                      max-w-[270px]
                      text-[16px]
                      leading-[24px]
                      text-[#343A3E]
                    "
                  >
                    {card.description}
                  </p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function AffordableAccessIcon() {
  return (
    <svg
      width="44"
      height="52"
      viewBox="0 0 44 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 2H28L38 12V49H8V2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <path
        d="M28 2V12H38"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <path
        d="M13 14H18V9H23V14H28V19H23V24H18V19H13V14Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="M13 31H31"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M13 36H27"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M20 43L23 40L26 45L29 41L32 43"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PatientFirstIcon() {
  return (
    <svg
      width="49"
      height="52"
      viewBox="0 0 49 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="2"
        width="29"
        height="42"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M8 9H26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M8 14H13M17 14H22M8 19H13M17 19H27M8 24H14M18 24H25M8 29H20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <g transform="rotate(34 34 35)">
        <rect
          x="27"
          y="23"
          width="14"
          height="26"
          rx="7"
          fill="white"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path d="M27 36H41" stroke="currentColor" strokeWidth="2" />
      </g>
    </svg>
  );
}

function TrustedGuidanceIcon() {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M14 20V7C14 4.8 15.8 3 18 3H34C36.2 3 38 4.8 38 7V20"
        stroke="currentColor"
        strokeWidth="2"
      />

      <rect
        x="8"
        y="20"
        width="36"
        height="28"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle cx="21" cy="12" r="4" stroke="currentColor" strokeWidth="2" />

      <circle cx="32" cy="12" r="4" stroke="currentColor" strokeWidth="2" />

      <path
        d="M22 31H26V27H30V31H34V35H30V39H26V35H22V31Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="M8 25H4V47H8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M44 25H48V47H44"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PrivacySecurityIcon() {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g transform="rotate(-45 26 26)">
        <rect
          x="18"
          y="5"
          width="16"
          height="42"
          rx="8"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path d="M18 26H34" stroke="currentColor" strokeWidth="2" />
      </g>

      <circle
        cx="17"
        cy="34"
        r="10"
        fill="white"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M12 34H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
