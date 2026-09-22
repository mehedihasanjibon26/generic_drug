import { useState } from "react";
import {
  Heart,
  Minus,
  Plus,
  Share2,
  ShoppingCart,
  Star,
  Zap,
} from "lucide-react";
import { useParams } from "react-router-dom";

import { useCart } from "@/contexts/CartContext";

type MedicationDetailsHeroProps = {
  medication: {
    name: string;
    subtitle: string;
    description: string;
    image: string;
    price: number;
    oldPrice?: number;
    discount?: string;
    packLabel: string;
    rating: number;
    reviewCount: number;
  };
};

export default function MedicationDetailsHero({
  medication,
}: MedicationDetailsHeroProps) {
  const { slug = medication.name } = useParams();

  const { addItem, isInCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [favorite, setFavorite] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const alreadyInCart = isInCart(slug);

  const gallery = [
    medication.image,
    medication.image,
    medication.image,
    medication.image,
    medication.image,
  ];

  const addToCart = () => {
    if (alreadyInCart) {
      return;
    }

    addItem(
      {
        slug,
        name: medication.name,
        subtitle: medication.subtitle,
        pack: `${medication.packLabel} · 1 strip`,
        image: medication.image,
        price: medication.price,
      },
      quantity,
    );
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: medication.name,
        url: window.location.href,
      });

      return;
    }

    await navigator.clipboard.writeText(window.location.href);
  };

  return (
    <section className="w-full px-[40px] pt-[24px]">
      <div className="mx-auto flex w-full items-start gap-[48px]">
        {/* Gallery */}
        <div className="w-[660px] shrink-0">
          <div
            className="
              relative
              flex h-[500px] w-full
              items-center justify-center
              overflow-hidden
              rounded-[16px]
              bg-white
            "
          >
            <img
              src={gallery[activeImage]}
              alt={medication.name}
              className="
                max-h-[390px]
                max-w-[520px]
                object-contain
              "
            />

            <button
              type="button"
              onClick={() => setFavorite((current) => !current)}
              className="
                absolute right-[22px]
                top-[20px]
                flex h-[46px] w-[46px]
                items-center justify-center
                rounded-full bg-white
                shadow-sm
              "
            >
              <Heart
                size={22}
                strokeWidth={1.8}
                fill={favorite ? "#08A9DF" : "none"}
                className="text-[#08A9DF]"
              />
            </button>

            <div
              className="
                absolute bottom-[16px]
                left-1/2
                flex -translate-x-1/2
                gap-[7px]
              "
            >
              {[0, 1, 2, 3].map((dot) => (
                <button
                  key={dot}
                  type="button"
                  onClick={() => setActiveImage(dot)}
                  className={`
                      h-[8px] rounded-full
                      ${
                        activeImage === dot
                          ? "w-[28px] bg-[#08A9DF]"
                          : "w-[8px] bg-[#CDD5DA]"
                      }
                    `}
                />
              ))}
            </div>
          </div>

          <div className="mt-[16px] grid grid-cols-5 gap-[16px]">
            {gallery.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`
                    flex h-[112px]
                    items-center justify-center
                    overflow-hidden
                    rounded-[8px]
                    bg-white
                    ${
                      activeImage === index
                        ? "border-2 border-[#08A9DF]"
                        : "border border-transparent"
                    }
                  `}
              >
                <img
                  src={image}
                  alt={`${medication.name} view ${index + 1}`}
                  className="
                      max-h-[94px]
                      max-w-[100px]
                      object-contain
                    "
                />
              </button>
            ))}
          </div>
        </div>

        {/* Information */}
        <div className="min-w-0 flex-1 pt-[4px]">
          <div className="flex items-start justify-between gap-[20px]">
            <div>
              <h1 className="text-[34px] font-semibold leading-[1.2] text-[#23282C]">
                {medication.name}
              </h1>

              <p className="mt-[8px] text-[15px] text-[#7B858B]">
                {medication.subtitle}
              </p>
            </div>

            <button
              type="button"
              onClick={handleShare}
              className="
                flex h-[40px]
                items-center gap-[7px]
                rounded-full
                border border-[#DDE4E8]
                bg-white px-[14px]
              "
            >
              <Share2 size={15} />
              Share
            </button>
          </div>

          <div className="mt-[16px] flex items-center gap-[5px]">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={17} fill="#FF7A32" strokeWidth={0} />
            ))}

            <span className="ml-[4px] text-[13px] font-medium">
              ({medication.rating})
            </span>

            <span className="text-[12px] text-[#929BA0]">
              {medication.reviewCount} verified reviews
            </span>
          </div>

          <p className="mt-[18px] max-w-[650px] text-[14px] leading-[22px] text-[#747E84]">
            {medication.description}
          </p>

          <div className="my-[28px] h-px bg-[#DCE3E7]" />

          <div className="flex items-center gap-[10px]">
            <span className="text-[36px] font-semibold">
              ${medication.price.toFixed(2)}
            </span>

            {medication.oldPrice && (
              <span className="text-[13px] text-[#9AA4AA] line-through">
                ${medication.oldPrice.toFixed(2)}
              </span>
            )}

            {medication.discount && (
              <span className="text-[13px] font-semibold text-[#08A9DF]">
                {medication.discount}
              </span>
            )}
          </div>

          <div className="mt-[16px] flex items-center gap-[14px]">
            <span className="text-[14px] font-semibold">1 Strip</span>

            <span className="rounded-full bg-white px-[12px] py-[6px] text-[12px]">
              {medication.packLabel}
            </span>
          </div>

          {/* Quantity */}
          <div className="mt-[30px] flex items-center gap-[24px]">
            <span className="text-[14px] font-semibold">Select Quantity:</span>

            <div
              className="
                flex h-[42px]
                items-center rounded-full
                border border-[#D9E2E7]
                bg-white p-[3px]
              "
            >
              <button
                type="button"
                onClick={() =>
                  setQuantity((current) => Math.max(1, current - 1))
                }
                className="flex h-[34px] w-[34px] items-center justify-center text-[#08A9DF]"
              >
                <Minus size={17} />
              </button>

              <span className="min-w-[32px] text-center">{quantity}</span>

              <button
                type="button"
                onClick={() => setQuantity((current) => current + 1)}
                className="flex h-[34px] w-[34px] items-center justify-center text-[#08A9DF]"
              >
                <Plus size={17} />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-[24px] grid grid-cols-2 gap-[16px]">
            <button
              type="button"
              className="
                flex h-[54px]
                items-center justify-center
                gap-[8px]
                rounded-full
                bg-[#08A9DF]
                text-white
              "
            >
              Buy Now
              <Zap size={16} />
            </button>

            <button
              type="button"
              onClick={addToCart}
              disabled={alreadyInCart}
              className={`
                flex h-[54px]
                items-center justify-center
                gap-[8px]
                rounded-full border
                font-medium
                ${
                  alreadyInCart
                    ? "border-[#08A9DF] bg-[#08A9DF] text-white"
                    : "border-[#D9E2E7] bg-white text-[#3E474C]"
                }
              `}
            >
              {alreadyInCart ? "Added to Cart" : "Add to Cart"}

              <ShoppingCart size={17} />
            </button>
          </div>

          <div
            className="
              mt-[28px]
              flex h-[54px]
              items-center gap-[8px]
              rounded-[8px]
              border border-[#D8E1E6]
              px-[16px]
            "
          >
            <span>?</span>
            Any Confusion?
            <button type="button" className="font-semibold underline">
              Help
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
