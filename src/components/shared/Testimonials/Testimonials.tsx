import { useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

import leonAbramImage from "@/assets/images/testimonials/leon-abram.png";
import darrellStewardImage from "@/assets/images/testimonials/darrell-steward.png";
import jeromeBellImage from "@/assets/images/testimonials/jerome-bell.png";

const testimonials = [
  {
    id: 1,
    type: "text",
    text: "I was about to cancel my prescription because my monthly cost with insurance was almost $150! Now I can get a 6-month supply for only $37. Thanks Dee for calling and letting me know my options!",
    name: "Darrell Steward",
    avatar: darrellStewardImage,
    time: "Months ago",
  },
  {
    id: 2,
    type: "video",
    name: "Leon Abram",
    image: leonAbramImage,
  },
  {
    id: 3,
    type: "text",
    text: "As someone who struggles with occasional stress and restless nights, Nutergia's stress and sleep support supplements have been a game-changer. I appreciate that they use natural ingredients, and I've found a real sense of calm and improved sleep quality since incorporating them.",
    name: "Jerome Bell",
    avatar: jeromeBellImage,
    time: "Months ago",
  },
  {
    id: 4,
    type: "text",
    text: "The ordering process was simple and clear, and I received helpful guidance throughout the entire experience.",
    name: "Darrell Steward",
    avatar: darrellStewardImage,
    time: "Months ago",
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

function RatingStars() {
  return (
    <div className="flex items-center gap-[3px]">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={18}
          strokeWidth={1.4}
          className="fill-[#FF8734] text-[#FF8734]"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="overflow-hidden bg-[#F3F6F7] py-[110px] lg:py-[125px]">
      {/* Heading */}
      <div className="mx-auto w-full max-w-[1744px] px-6 lg:px-[48px]">
        <div className="flex items-end justify-between gap-12">
          <div>
            <div
              className="
                inline-flex h-[38px]
                items-center gap-[8px]
                rounded-full
                border border-[#08ACE0]
                px-[13px]
              "
            >
              <MedicalLogo />

              <span className="text-[17px] font-medium text-[#303638]">
                Popular generics
              </span>
            </div>

            <h2
              className="
                mt-[24px]
                max-w-[720px]
                text-[44px]
                font-semibold
                leading-[1.08]
                tracking-[-1.8px]
                text-[#242424]
                lg:text-[56px]
              "
            >
              What Clients are Thinking
              <br />
              About{" "}
              <span
                className="
                  font-serif
                  font-semibold
                  italic
                  text-[#00A9E0]
                "
              >
                Our Services
              </span>
            </h2>
          </div>

          {/* Review summary */}
          <div className="hidden items-center gap-[18px] pb-[15px] md:flex">
            <span
              className="
                text-[13px]
                font-bold
                tracking-[1px]
                text-[#29415C]
              "
            >
              5-STAR REVIEWS
            </span>

            <div>
              <div className="flex gap-[2px]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div
                    key={star}
                    className="
                      flex h-[27px] w-[27px]
                      items-center justify-center
                      bg-[#FF8734]
                    "
                  >
                    <Star
                      size={18}
                      strokeWidth={1.5}
                      className="fill-white text-white"
                    />
                  </div>
                ))}
              </div>

              <p
                className="
                  mt-[5px]
                  text-[15px]
                  font-semibold
                  text-[#29415C]
                "
              >
                200 REVIEWS
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative mt-[78px] pl-6 lg:pl-[64px]">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView="auto"
          spaceBetween={20}
          grabCursor
          speed={550}
          className="!overflow-visible"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="!h-auto !w-[390px] lg:!w-[448px]"
            >
              {testimonial.type === "video" ? (
                <article
                  className="
                    relative h-[538px]
                    overflow-hidden
                    rounded-[30px]
                    bg-[#D9D9D9]
                  "
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/5" />

                  {/* Play button */}
                  <button
                    type="button"
                    aria-label="Play testimonial video"
                    className="
                      absolute left-1/2 top-1/2
                      flex h-[54px] w-[54px]
                      -translate-x-1/2 -translate-y-1/2
                      items-center justify-center
                      rounded-full
                      bg-[#A78673]/90
                      text-white
                    "
                  >
                    <Play
                      size={23}
                      strokeWidth={1.7}
                      className="translate-x-[2px] fill-white"
                    />
                  </button>

                  {/* Bottom person info */}
                  <div
                    className="
                      absolute bottom-[24px]
                      left-[24px]
                      flex items-center gap-[11px]
                    "
                  >
                    <img
                      src={testimonial.image}
                      alt=""
                      aria-hidden="true"
                      className="
                        h-[48px] w-[48px]
                        rounded-full
                        border-2 border-white
                        object-cover
                      "
                    />

                    <div>
                      <p className="text-[16px] font-medium text-white">
                        {testimonial.name}
                      </p>

                      <RatingStars />
                    </div>
                  </div>
                </article>
              ) : (
                <article
                  className="
                    flex h-[538px]
                    flex-col justify-between
                    rounded-[30px]
                    bg-white
                    px-[26px]
                    pb-[24px]
                    pt-[27px]
                  "
                >
                  <p
                    className="
                      text-[22px]
                      font-medium
                      leading-[1.37]
                      tracking-[-0.35px]
                      text-[#272727]
                    "
                  >
                    {testimonial.text}
                  </p>

                  <div className="flex items-end justify-between gap-5">
                    <div className="flex items-center gap-[12px]">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="
                          h-[48px] w-[48px]
                          rounded-full
                          object-cover
                        "
                      />

                      <div>
                        <p className="text-[16px] font-medium text-[#303030]">
                          {testimonial.name}
                        </p>

                        <RatingStars />
                      </div>
                    </div>

                    <span className="whitespace-nowrap text-[15px] text-[#686D72]">
                      {testimonial.time}
                    </span>
                  </div>
                </article>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Previous */}
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => swiperRef.current?.slidePrev()}
          className="
            absolute left-[40px] top-1/2 z-20
            hidden h-[54px] w-[54px]
            -translate-y-1/2
            items-center justify-center
            rounded-full
            border border-[#E1E4E6]
            bg-white
            text-[#899094]
            shadow-[0_3px_8px_rgba(0,0,0,0.08)]
            lg:flex
          "
        >
          <ChevronLeft size={21} strokeWidth={1.8} />
        </button>

        {/* Next */}
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => swiperRef.current?.slideNext()}
          className="
            absolute right-[41px] top-1/2 z-20
            hidden h-[54px] w-[54px]
            -translate-y-1/2
            items-center justify-center
            rounded-full
            bg-[#0AAEE1]
            text-white
            shadow-[0_3px_8px_rgba(0,0,0,0.08)]
            lg:flex
          "
        >
          <ChevronRight size={21} strokeWidth={1.8} />
        </button>

        {/* Mobile controls */}
        <div className="mt-6 flex justify-end gap-3 pr-6 lg:hidden">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => swiperRef.current?.slidePrev()}
            className="
              flex h-12 w-12
              items-center justify-center
              rounded-full
              bg-white
              text-[#899094]
            "
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => swiperRef.current?.slideNext()}
            className="
              flex h-12 w-12
              items-center justify-center
              rounded-full
              bg-[#0AAEE1]
              text-white
            "
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
