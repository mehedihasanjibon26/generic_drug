import { useState } from "react";
import { ArrowRight, Plus, SlidersHorizontal, Star } from "lucide-react";

import tyrosineImage from "@/assets/images/products/tyrosine.png";
import nitrileGlovesImage from "@/assets/images/products/nitrile-gloves.png";
import amberVitaminsImage from "@/assets/images/products/amber-vitamins.png";
import handSoapImage from "@/assets/images/products/hand-soap.png";

const filters = [
  "Your Favourite",
  "New Product",
  "Officers",
  "Natural Defences",
];

const products = [
  {
    id: 1,
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
    id: 2,
    category: "Healthcare",
    name: "Nitrile Disposable gloves 100",
    image: nitrileGlovesImage,
    rating: "4.5",
    price: "$140.00",
    highlightedCart: true,
  },
  {
    id: 3,
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
    id: 4,
    category: "Healthcare",
    name: "Antibacterial Liquid Hand Soap",
    image: handSoapImage,
    rating: "4.5",
    price: "$80.00",
    highlightedCart: false,
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

export default function DailyMedications() {
  const [activeFilter, setActiveFilter] = useState("Your Favourite");

  return (
    <section className="bg-[#075F70] px-6 py-[105px] lg:px-[42px] lg:py-[120px]">
      <div className="mx-auto w-full max-w-[1450px]">
        <div className="flex flex-col items-center text-center">
          <div
            className="
              inline-flex h-[38px]
              items-center gap-[8px]
              rounded-full
              border border-[#268697]
              px-[13px]
            "
          >
            <MedicalLogo />

            <span className="text-[17px] font-normal text-white">
              Popular generics
            </span>
          </div>

          <h2
            className="
              mt-[20px]
              text-[44px]
              font-semibold
              leading-[1.04]
              tracking-[-2px]
              text-[#FFFFFF]
              sm:text-[50px]
              lg:text-[56px]
            "
          >
            Daily{" "}
            <span
              className="
                font-serif
                font-semibold
                italic
                text-[#00A9E0]
              "
            >
              medications
            </span>{" "}
            at best prices
          </h2>

          <div
            className="
              mt-[24px]
              flex flex-wrap
              items-center
              justify-center
              gap-[10px]
            "
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={[
                    "inline-flex h-[38px] items-center justify-center",
                    "rounded-full border px-[15px]",
                    "text-[15px] font-medium transition-colors",
                    isActive
                      ? "border-[#0AAEE1] bg-[#0AAEE1] text-white"
                      : "border-white/80 bg-transparent text-white hover:bg-white/10",
                  ].join(" ")}
                >
                  {filter}
                </button>
              );
            })}

            <button
              type="button"
              className="
                inline-flex h-[38px]
                items-center gap-[8px]
                rounded-full
                border border-[#202428]
                bg-[#202428]
                px-[17px]
                text-[15px]
                font-medium
                text-white
              "
            >
              All Filters
              <SlidersHorizontal size={16} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        <div
          className="
            mt-[67px]
            grid grid-cols-1
            gap-[24px]
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {products.map((product) => (
            <article
              key={product.id}
              className="
                mx-auto w-full
                max-w-[326px]
                overflow-hidden
                rounded-[28px]
                bg-white
              "
            >
              <div
                className="
                  relative flex
                  h-[282px]
                  items-center
                  justify-center
                  bg-[#F2F5F7]
                  px-[28px]
                "
              >
                {product.discount && (
                  <div
                    className="
                      absolute right-0 top-[25px]
                      rounded-l-[5px]
                      bg-[#F0945D]
                      px-[18px] py-[9px]
                      text-[16px]
                      font-medium
                      text-white
                    "
                  >
                    {product.discount}
                  </div>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[210px] w-[88%] object-contain"
                />
              </div>

              <div
                className="
                  min-h-[160px]
                  rounded-t-[25px]
                  bg-white
                  px-[17px]
                  pb-[18px]
                  pt-[18px]
                "
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[15px] text-[#8593A5]">
                    {product.category}
                  </span>

                  <div className="flex items-center gap-[4px]">
                    <Star
                      size={17}
                      strokeWidth={1.5}
                      className="fill-[#F47F42] text-[#F47F42]"
                    />

                    <span className="text-[15px] text-[#8593A5]">
                      ({product.rating})
                    </span>
                  </div>
                </div>

                <h3
                  className="
                    mt-[7px]
                    min-h-[48px]
                    text-[17px]
                    font-semibold
                    leading-[1.25]
                    tracking-[-0.3px]
                    text-[#07586B]
                  "
                >
                  {product.name}
                </h3>

                <div className="mt-[10px] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    className={[
                      "inline-flex h-[38px] shrink-0 items-center gap-[5px]",
                      "rounded-full px-[15px] text-[14px] font-semibold",
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
          ))}
        </div>

        <div className="mt-[62px] flex justify-center">
          <a
            href="#"
            className="
              inline-flex h-[58px]
              items-center gap-[15px]
              rounded-full
              border border-white
              px-[27px]
              text-[17px]
              font-medium
              text-white
              transition-colors
              hover:bg-white hover:text-[#075F70]
            "
          >
            See All products
            <ArrowRight size={20} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </section>
  );
}
