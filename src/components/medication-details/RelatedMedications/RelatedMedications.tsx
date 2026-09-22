import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Plus, Star } from "lucide-react";
import { Link } from "react-router-dom";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { useCart } from "@/contexts/CartContext";

import tyrosineImage from "@/assets/images/products/tyrosine.png";
import nitrileGlovesImage from "@/assets/images/products/nitrile-gloves.png";
import amberVitaminsImage from "@/assets/images/products/amber-vitamins.png";
import handSoapImage from "@/assets/images/products/hand-soap.png";

type RelatedMedicationsProps = {
  currentSlug: string;
};

const relatedProducts = [
  {
    id: 1,
    slug: "n-acetyl-l-tyrosine",
    category: "Nutrition",
    name: "N-Acetyl L-Tyrosine",
    subtitle: "Dietary Supplement · 60 capsules",
    pack: "60 pcs · 1 strip",
    image: tyrosineImage,
    price: 64,
    oldPrice: 80,
    discount: "20% Off",
  },
  {
    id: 2,
    slug: "nitrile-disposable-gloves-100",
    category: "Healthcare",
    name: "Nitrile Disposable gloves 100",
    subtitle: "Healthcare · Disposable gloves",
    pack: "100 pcs · 1 pack",
    image: nitrileGlovesImage,
    price: 140,
  },
  {
    id: 3,
    slug: "womens-multi-vitamins",
    category: "Medicine",
    name: "Womens multi Vitamins A, Biotin- cranberry",
    subtitle: "Medicine · Daily vitamins",
    pack: "30 pcs · 1 strip",
    image: amberVitaminsImage,
    price: 64,
    oldPrice: 80,
    discount: "50% Off",
  },
  {
    id: 4,
    slug: "antibacterial-liquid-hand-soap",
    category: "Healthcare",
    name: "Antibacterial Liquid Hand Soap",
    subtitle: "Healthcare · Antibacterial hand wash",
    pack: "1 bottle",
    image: handSoapImage,
    price: 80,
  },
  {
    id: 5,
    slug: "atorvastatin-20-mg",
    category: "Medicine",
    name: "Atorvastatin 20 mg",
    subtitle: "Generic for Lipitor® · Oral tablets",
    pack: "14 pcs · 1 strip",
    image: tyrosineImage,
    price: 24.95,
    oldPrice: 34.95,
    discount: "45% Off",
  },
];

export default function RelatedMedications({
  currentSlug,
}: RelatedMedicationsProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const { addItem, isInCart } = useCart();

  const products = relatedProducts.filter(
    (product) => product.slug !== currentSlug,
  );

  const updateNavigation = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section
      className="
        flex
        min-h-[657px]
        w-full
        flex-col
        items-start
        gap-[64px]
        bg-[#F4F7F9]
        px-[40px]
      "
    >
      <div className="flex w-full items-end justify-between">
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
              bg-white
              px-[13px]
              text-[15px]
              text-[#30373C]
            "
          >
            <span className="text-[#08A9DF]">✚</span>
            You may also like
          </div>

          <h2
            className="
              mt-[14px]
              flex
              items-baseline
              gap-[12px]
              text-[48px]
              font-semibold
              leading-none
              tracking-[-1.8px]
              text-black
            "
          >
            Related
            <span
              className="
                font-serif
                text-[52px]
                font-medium
                italic
                text-[#08A9DF]
              "
            >
              medication
            </span>
          </h2>
        </div>

        <div className="flex items-center gap-[16px]">
          <button
            type="button"
            disabled={isBeginning}
            onClick={() => swiperRef.current?.slidePrev()}
            className="
              flex h-[50px] w-[50px]
              items-center justify-center
              rounded-full
              border border-[#E0E5E8]
              bg-white
              disabled:opacity-40
            "
          >
            <ChevronLeft size={23} />
          </button>

          <button
            type="button"
            disabled={isEnd}
            onClick={() => swiperRef.current?.slideNext()}
            className="
              flex h-[50px] w-[50px]
              items-center justify-center
              rounded-full
              bg-[#08A9DF]
              text-white
              disabled:opacity-40
            "
          >
            <ChevronRight size={23} />
          </button>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <Swiper
          slidesPerView={4}
          slidesPerGroup={1}
          spaceBetween={24}
          speed={500}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            updateNavigation(swiper);
          }}
          onSlideChange={updateNavigation}
          className="w-full"
        >
          {products.map((product) => {
            const added = isInCart(product.slug);

            return (
              <SwiperSlide key={product.slug}>
                <article
                  className="
                    relative
                    h-[440px]
                    overflow-hidden
                    rounded-[22px]
                    bg-white
                  "
                >
                  {product.discount && (
                    <span
                      className="
                        absolute
                        right-0 top-[24px]
                        z-10
                        rounded-l-[4px]
                        bg-[#F2945D]
                        px-[16px]
                        py-[10px]
                        text-[14px]
                        text-white
                      "
                    >
                      {product.discount}
                    </span>
                  )}

                  {/* Image click -> details */}
                  <Link
                    to={`/medications/${product.slug}`}
                    className="
                      flex
                      h-[282px]
                      w-full
                      items-center
                      justify-center
                    "
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="
                        max-h-[210px]
                        max-w-[215px]
                        object-contain
                        transition-transform
                        duration-300
                        hover:scale-[1.04]
                      "
                    />
                  </Link>

                  <div className="px-[16px] pb-[16px]">
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] text-[#89969F]">
                        {product.category}
                      </span>

                      <span
                        className="
                          flex
                          items-center
                          gap-[4px]
                          text-[13px]
                          text-[#89969F]
                        "
                      >
                        <Star size={16} fill="#FF7A32" strokeWidth={0} />
                        (4.5)
                      </span>
                    </div>

                    {/* Name click -> details */}
                    <Link to={`/medications/${product.slug}`}>
                      <h3
                        className="
                          mt-[8px]
                          min-h-[44px]
                          text-[15px]
                          font-medium
                          leading-[1.25]
                          text-[#00516B]
                          hover:text-[#08A9DF]
                        "
                      >
                        {product.name}
                      </h3>
                    </Link>

                    <div
                      className="
                        mt-[14px]
                        flex
                        items-center
                        justify-between
                        gap-[10px]
                      "
                    >
                      {/* Shared cart */}
                      <button
                        type="button"
                        disabled={added}
                        onClick={() =>
                          addItem({
                            slug: product.slug,
                            name: product.name,
                            subtitle: product.subtitle,
                            pack: product.pack,
                            image: product.image,
                            price: product.price,
                          })
                        }
                        className={`
                          inline-flex
                          h-[36px]
                          items-center
                          gap-[5px]
                          rounded-full
                          border
                          px-[15px]
                          text-[13px]
                          font-medium

                          ${
                            added
                              ? "border-[#08A9DF] bg-[#08A9DF] text-white"
                              : "border-[#00617B] bg-white text-[#00617B]"
                          }
                        `}
                      >
                        <Plus size={14} />

                        {added ? "Added" : "Add to Cart"}
                      </button>

                      <div className="flex items-end gap-[6px]">
                        {product.oldPrice && (
                          <span className="text-[12px] text-[#8B979D] line-through">
                            ${product.oldPrice.toFixed(2)}
                          </span>
                        )}

                        <span className="text-[20px] font-bold text-[#00516B]">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
