import { useRef, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Plus,
  Star,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

import tyrosineImage from "@/assets/images/products/tyrosine.png";
import nitrileGlovesImage from "@/assets/images/products/nitrile-gloves.png";
import amberVitaminsImage from "@/assets/images/products/amber-vitamins.png";
import handSoapImage from "@/assets/images/products/hand-soap.png";

const baseProducts = [
  {
    category: "Nutrition",
    name: "Dietary Supplement Health Products",
    image: tyrosineImage,
    rating: "4.5",
    oldPrice: "$80.00",
    price: "$64.00",
    discount: "20% Off",
    highlightedCart: false,
  },
  {
    category: "Healthcare",
    name: "Nitrile Disposable gloves 100",
    image: nitrileGlovesImage,
    rating: "4.5",
    price: "$140.00",
    highlightedCart: true,
  },
  {
    category: "Medicine",
    name: "Womens multi Vitamins A, Biotin- cranberry",
    image: amberVitaminsImage,
    rating: "4.5",
    oldPrice: "$80.00",
    price: "$64.00",
    discount: "50% Off",
    highlightedCart: false,
  },
  {
    category: "Healthcare",
    name: "Antibacterial Liquid Hand Soap",
    image: handSoapImage,
    rating: "4.5",
    price: "$80.00",
    highlightedCart: false,
  },
];

const products = [...baseProducts, ...baseProducts].map((product, index) => ({
  ...product,
  id: index + 1,
}));

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
        stroke="#0EB2E2"
        strokeWidth="3"
      />

      <rect
        x="1.5"
        y="12.5"
        width="32"
        height="10"
        rx="5"
        stroke="#0EB2E2"
        strokeWidth="3"
      />

      <rect x="14" y="14" width="7" height="7" rx="2.5" fill="#0EB2E2" />
    </svg>
  );
}

export default function ProductDeals() {
  const swiperRef = useRef<SwiperType | null>(null);

  // Figma reference visually starts at 03/08
  const [activeIndex, setActiveIndex] = useState(2);

  const currentNumber = activeIndex + 1;
  const totalProducts = products.length;

  const progressPercentage = (currentNumber / totalProducts) * 100;

  return (
    <section className="overflow-hidden bg-[#075F70] py-[100px] lg:py-[118px]">
      {/* Heading */}
      <div className="mx-auto w-full max-w-[1744px] px-6 lg:px-[48px]">
        <div className="flex items-end justify-between gap-10">
          <div>
            {/* Products label */}
            <div
              className="
                inline-flex h-[38px] items-center gap-[8px]
                rounded-full border border-[#4B91A0]
                px-[13px]
              "
            >
              <MedicalLogo />

              <span className="text-[17px] font-normal leading-none text-white">
                Products
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                mt-[20px]
                text-[44px] font-medium leading-[1.05]
                tracking-[-1.8px] text-white
                sm:text-[52px]
                lg:text-[58px]
              "
            >
              Todays{" "}
              <span className="font-serif font-semibold italic text-[#37B9E5]">
                best deals
              </span>{" "}
              for you!
            </h2>
          </div>

          {/* See all */}
          <a
            href="#"
            className="
              mb-[9px] hidden items-center gap-[13px]
              text-[17px] font-medium text-white
              transition-opacity hover:opacity-80
              md:flex
            "
          >
            See All Products
            <ArrowRight size={22} strokeWidth={1.7} />
          </a>
        </div>
      </div>

      {/* Product slider */}
      <div className="mt-[78px] pl-6 lg:mt-[82px] lg:pl-[48px]">
        <Swiper
          initialSlide={2}
          loop
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setActiveIndex(swiper.realIndex);
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          slidesPerView="auto"
          spaceBetween={24}
          grabCursor
          speed={550}
          className="!overflow-visible"
        >
          {products.map((product) => (
            <SwiperSlide
              key={product.id}
              className="
                !h-auto !w-[292px]
                sm:!w-[310px]
                lg:!w-[320px]
              "
            >
              <article className="overflow-hidden rounded-[22px] bg-white">
                {/* Image area */}
                <div
                  className="
                    relative flex h-[294px]
                    items-center justify-center
                    bg-[#F2F5F7]
                    px-8
                  "
                >
                  {product.discount && (
                    <div
                      className="
                        absolute right-0 top-[26px]
                        rounded-l-[5px]
                        bg-[#F29A5E]
                        px-[18px] py-[10px]
                        text-[16px] font-medium text-white
                      "
                    >
                      {product.discount}
                    </div>
                  )}

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[220px] w-[88%] object-contain"
                  />
                </div>

                {/* Details */}
                <div
                  className="
                    min-h-[168px]
                    rounded-t-[26px]
                    bg-white
                    px-[18px] pb-[18px] pt-[20px]
                  "
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[15px] text-[#8795A7]">
                      {product.category}
                    </span>

                    <div className="flex items-center gap-[4px]">
                      <Star
                        size={17}
                        strokeWidth={1.5}
                        className="fill-[#F47F42] text-[#F47F42]"
                      />

                      <span className="text-[15px] text-[#8795A7]">
                        ({product.rating})
                      </span>
                    </div>
                  </div>

                  <h3
                    className="
                      mt-[8px] min-h-[49px]
                      text-[17px] font-semibold
                      leading-[1.25] tracking-[-0.3px]
                      text-[#07586B]
                    "
                  >
                    {product.name}
                  </h3>

                  <div className="mt-[12px] flex items-center justify-between gap-3">
                    <button
                      type="button"
                      className={[
                        "inline-flex h-[39px] shrink-0 items-center gap-[5px]",
                        "rounded-full px-[16px] text-[14px] font-semibold",
                        product.highlightedCart
                          ? "border border-[#0AAEE1] bg-[#0AAEE1] text-white"
                          : "border border-[#086579] bg-white text-[#07586B]",
                      ].join(" ")}
                    >
                      <Plus size={15} strokeWidth={2.2} />
                      Add to Cart
                    </button>

                    <div className="flex items-baseline gap-[5px] whitespace-nowrap">
                      {product.oldPrice && (
                        <span className="text-[13px] text-[#8C98A7] line-through">
                          {product.oldPrice}
                        </span>
                      )}

                      <span className="text-[21px] font-bold text-[#07586B]">
                        {product.price}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom controls */}
      <div
        className="
          mx-auto mt-[58px]
          flex w-full max-w-[1744px]
          items-center gap-[25px]
          px-6 lg:px-[48px]
        "
      >
        {/* Dynamic counter */}
        <span className="shrink-0 text-[27px] font-semibold text-white">
          {String(currentNumber).padStart(2, "0")}/
          {String(totalProducts).padStart(2, "0")}
        </span>

        {/* Dynamic progress */}
        <div className="relative h-[4px] flex-1 overflow-hidden rounded-full bg-white">
          <div
            className="
              absolute inset-y-0 left-0
              bg-[#0CAFE1]
              transition-[width] duration-500
            "
            style={{
              width: `${progressPercentage}%`,
            }}
          />
        </div>

        {/* Navigation */}
        <div className="flex shrink-0 items-center gap-[17px]">
          <button
            type="button"
            aria-label="Previous product"
            onClick={() => swiperRef.current?.slidePrev()}
            className="
              flex h-[56px] w-[56px]
              items-center justify-center
              rounded-full bg-white
              text-[#8A9397]
              transition-transform duration-200
              hover:-translate-y-0.5
            "
          >
            <ChevronLeft size={21} strokeWidth={1.8} />
          </button>

          <button
            type="button"
            aria-label="Next product"
            onClick={() => swiperRef.current?.slideNext()}
            className="
              flex h-[56px] w-[56px]
              items-center justify-center
              rounded-full bg-[#0AAEE1]
              text-white
              transition-transform duration-200
              hover:-translate-y-0.5
            "
          >
            <ChevronRight size={21} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </section>
  );
}
