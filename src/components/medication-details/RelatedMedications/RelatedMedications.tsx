import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Plus, Star } from "lucide-react";
import { Link } from "react-router-dom";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import tyrosineImage from "@/assets/images/products/tyrosine.png";
import nitrileGlovesImage from "@/assets/images/products/nitrile-gloves.png";
import amberVitaminsImage from "@/assets/images/products/amber-vitamins.png";
import handSoapImage from "@/assets/images/products/hand-soap.png";

type RelatedMedicationsProps = {
  currentSlug: string;
};

type RelatedProduct = {
  id: number;
  slug: string;
  category: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  highlighted?: boolean;
};

const relatedProducts: RelatedProduct[] = [
  {
    id: 1,
    slug: "n-acetyl-l-tyrosine",
    category: "Nutrition",
    name: "Dietary Supplement Health Products",
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
    image: nitrileGlovesImage,
    price: 140,
    highlighted: true,
  },
  {
    id: 3,
    slug: "womens-multi-vitamins",
    category: "Medicine",
    name: "Womens multi Vitamins A, Biotin- cranberry",
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
    image: handSoapImage,
    price: 80,
  },
  {
    id: 5,
    slug: "n-acetyl-l-tyrosine",
    category: "Nutrition",
    name: "N-Acetyl L-Tyrosine Supplement",
    image: tyrosineImage,
    price: 72,
    oldPrice: 90,
    discount: "20% Off",
  },
  {
    id: 6,
    slug: "womens-multi-vitamins",
    category: "Medicine",
    name: "Daily Womens Multivitamin",
    image: amberVitaminsImage,
    price: 68,
    oldPrice: 85,
    discount: "20% Off",
  },
];

export default function RelatedMedications({
  currentSlug,
}: RelatedMedicationsProps) {
  void currentSlug;

  const swiperRef = useRef<SwiperType | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const [addedItems, setAddedItems] = useState<number[]>([]);

  const toggleCart = (id: number) => {
    setAddedItems((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  const updateNavigationState = (swiper: SwiperType) => {
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
              bg-white
              px-[13px]
              text-[15px]
              text-[#30373C]
            "
          >
            <span
              className="
                flex
                h-[18px]
                w-[18px]
                items-center
                justify-center
                text-[#08A9DF]
              "
            >
              ✚
            </span>
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
                tracking-[-1px]
                text-[#08A9DF]
              "
            >
              medication
            </span>
          </h2>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-[16px] pb-[2px]">
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
            aria-label="Previous related medications"
            className="
              flex
              h-[50px]
              w-[50px]
              items-center
              justify-center
              rounded-full
              border
              border-[#E0E5E8]
              bg-white
              text-[#89949A]
              shadow-sm
              transition-all
              hover:border-[#08A9DF]
              hover:text-[#08A9DF]
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            <ChevronLeft size={23} strokeWidth={1.7} />
          </button>

          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
            aria-label="Next related medications"
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
              transition-all
              hover:bg-[#0797C9]
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            <ChevronRight size={23} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full overflow-hidden">
        <Swiper
          slidesPerView={4}
          slidesPerGroup={1}
          spaceBetween={24}
          speed={500}
          allowTouchMove
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            updateNavigationState(swiper);
          }}
          onSlideChange={updateNavigationState}
          onReachBeginning={updateNavigationState}
          onReachEnd={updateNavigationState}
          className="w-full"
        >
          {relatedProducts.map((product) => {
            const added = addedItems.includes(product.id);

            return (
              <SwiperSlide key={product.id}>
                <article
                  className="
                    relative
                    h-[440px]
                    w-full
                    overflow-hidden
                    rounded-[22px]
                    bg-white
                  "
                >
                  {product.discount && (
                    <span
                      className="
                        absolute
                        right-0
                        top-[24px]
                        z-10
                        flex
                        h-[38px]
                        items-center
                        rounded-l-[4px]
                        bg-[#F2945D]
                        px-[16px]
                        text-[14px]
                        font-medium
                        text-white
                      "
                    >
                      {product.discount}
                    </span>
                  )}

                  {/* Product image */}
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
                      <span
                        className="
                          text-[13px]
                          text-[#89969F]
                        "
                      >
                        {product.category}
                      </span>

                      <div
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
                      </div>
                    </div>

                    {/* Product name */}
                    <Link to={`/medications/${product.slug}`} className="block">
                      <h3
                        className="
                          mt-[8px]
                          min-h-[44px]
                          max-w-[235px]
                          text-[15px]
                          font-medium
                          leading-[1.25]
                          text-[#00516B]
                          transition-colors
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
                      <button
                        type="button"
                        onClick={() => toggleCart(product.id)}
                        className={`
                          inline-flex
                          h-[36px]
                          shrink-0
                          items-center
                          justify-center
                          gap-[5px]
                          rounded-full
                          border
                          px-[15px]
                          text-[13px]
                          font-medium
                          transition-colors

                          ${
                            product.highlighted || added
                              ? "border-[#08A9DF] bg-[#08A9DF] text-white"
                              : "border-[#00617B] bg-white text-[#00617B] hover:bg-[#F0FAFD]"
                          }
                        `}
                      >
                        <Plus size={14} strokeWidth={2} />

                        {added ? "Added" : "Add to Cart"}
                      </button>

                      <div className="flex items-end gap-[6px]">
                        {product.oldPrice && (
                          <span
                            className="
                              text-[12px]
                              text-[#8B979D]
                              line-through
                            "
                          >
                            ${product.oldPrice.toFixed(2)}
                          </span>
                        )}

                        <span
                          className="
                            whitespace-nowrap
                            text-[20px]
                            font-bold
                            leading-none
                            text-[#00516B]
                          "
                        >
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
