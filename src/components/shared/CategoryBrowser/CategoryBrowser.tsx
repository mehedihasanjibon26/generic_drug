import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

import cardiovascularImage from "@/assets/images/categories/cardiovascular.png";
import thyroidImage from "@/assets/images/categories/thyroid.png";
import metabolicDiabetesImage from "@/assets/images/categories/metabolic-diabetes.png";
import mentalHealthImage from "@/assets/images/categories/mental-health.png";
import respiratoryImage from "@/assets/images/categories/respiratory.png";

const categories = [
  {
    id: 1,
    name: "Cardiovascular",
    image: cardiovascularImage,
  },
  {
    id: 2,
    name: "Thyroid",
    image: thyroidImage,
  },
  {
    id: 3,
    name: "Metabolic and Diabetes",
    image: metabolicDiabetesImage,
  },
  {
    id: 4,
    name: "Mental Health",
    image: mentalHealthImage,
  },
  {
    id: 5,
    name: "Respiratory",
    image: respiratoryImage,
  },
];

function MedicalLogo() {
  return (
    <svg
      width="22"
      height="22"
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

export default function CategoryBrowser() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="overflow-hidden bg-[#F3F6F7] pb-[110px] pt-[98px]">
      <div className="mx-auto w-full max-w-[1744px] px-[48px]">
        <div className="relative">
          <div
            className="
              inline-flex h-[40px] items-center gap-[9px]
              rounded-full border border-[#12AFE0]
              px-[13px]
            "
          >
            <MedicalLogo />

            <span className="text-[18px] font-normal leading-none text-[#303638]">
              Browse by Category
            </span>
          </div>

          <h2
            className="
              mt-[25px] max-w-[620px]
              text-[58px] font-medium
              leading-[1.08] tracking-[-2px]
              text-[#050505]
            "
          >
            Find{" "}
            <span
              className="
                font-serif text-[60px]
                font-semibold italic
                tracking-[-1.7px]
                text-[#09A9DE]
              "
            >
              medication
            </span>
            <br />
            information faster
          </h2>

          <div
            className="
              absolute right-[8px] top-[132px]
              hidden items-center gap-[18px]
              md:flex
            "
          >
            <button
              type="button"
              aria-label="Previous category"
              onClick={() => swiperRef.current?.slidePrev()}
              className="
                flex h-[59px] w-[59px]
                items-center justify-center
                rounded-full border border-[#E1E4E5]
                bg-white text-[#899094]
                shadow-[0_3px_8px_rgba(0,0,0,0.08)]
                transition-transform duration-200
                hover:-translate-y-0.5
              "
            >
              <ChevronLeft size={22} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              aria-label="Next category"
              onClick={() => swiperRef.current?.slideNext()}
              className="
                flex h-[59px] w-[59px]
                items-center justify-center
                rounded-full bg-[#0AAAE0]
                text-white
                shadow-[0_3px_8px_rgba(0,0,0,0.08)]
                transition-transform duration-200
                hover:-translate-y-0.5
              "
            >
              <ChevronRight size={22} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[84px] pl-[48px]">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView="auto"
          spaceBetween={24}
          grabCursor
          className="!overflow-visible"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id} className="!h-auto !w-[305px]">
              <article className="h-[355px] overflow-hidden rounded-[20px]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover"
                />
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-7 flex justify-end gap-3 px-6 md:hidden">
        <button
          type="button"
          aria-label="Previous category"
          onClick={() => swiperRef.current?.slidePrev()}
          className="
            flex h-12 w-12 items-center justify-center
            rounded-full border border-[#E1E4E5]
            bg-white text-[#899094]
          "
        >
          <ChevronLeft size={20} />
        </button>

        <button
          type="button"
          aria-label="Next category"
          onClick={() => swiperRef.current?.slideNext()}
          className="
            flex h-12 w-12 items-center justify-center
            rounded-full bg-[#0AAAE0]
            text-white
          "
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
