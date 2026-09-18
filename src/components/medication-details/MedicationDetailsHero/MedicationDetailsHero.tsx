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
  const [quantity, setQuantity] = useState(1);
  const [favorite, setFavorite] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const gallery = [
    medication.image,
    medication.image,
    medication.image,
    medication.image,
    medication.image,
  ];

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
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
        {/* Left Gallery */}
        <div className="w-[660px] shrink-0">
          <div
            className="
              relative
              flex h-[500px]
              w-full
              items-center
              justify-center
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
              aria-label={
                favorite ? "Remove from favourites" : "Add to favourites"
              }
              onClick={() => setFavorite((current) => !current)}
              className="
                absolute
                right-[22px]
                top-[20px]
                flex h-[46px]
                w-[46px]
                items-center
                justify-center
                rounded-full
                bg-white
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
                absolute
                bottom-[16px]
                left-1/2
                flex
                -translate-x-1/2
                items-center
                gap-[7px]
              "
            >
              {[0, 1, 2, 3].map((dot) => (
                <button
                  key={dot}
                  type="button"
                  onClick={() =>
                    setActiveImage(Math.min(dot, gallery.length - 1))
                  }
                  className={`
                    h-[8px]
                    rounded-full
                    transition-all
                    ${
                      activeImage === dot
                        ? "w-[28px] bg-[#08A9DF]"
                        : "w-[8px] bg-[#CDD5DA]"
                    }
                  `}
                  aria-label={`View image ${dot + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-[16px] grid grid-cols-5 gap-[16px]">
            {gallery.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`
                  flex h-[112px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[8px]
                  bg-white
                  transition-colors
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

        {/* Right Details */}
        <div className="min-w-0 flex-1 pt-[4px]">
          <div className="flex items-start justify-between gap-[20px]">
            <div>
              <h1
                className="
                  text-[34px]
                  font-semibold
                  leading-[1.2]
                  tracking-[-0.7px]
                  text-[#23282C]
                "
              >
                {medication.name}
              </h1>

              <p
                className="
                  mt-[8px]
                  text-[15px]
                  leading-[22px]
                  text-[#7B858B]
                "
              >
                {medication.subtitle}
              </p>
            </div>

            <button
              type="button"
              onClick={handleShare}
              className="
                flex h-[40px]
                shrink-0
                items-center
                gap-[7px]
                rounded-full
                border
                border-[#DDE4E8]
                bg-white
                px-[14px]
                text-[13px]
                text-[#3D474D]
              "
            >
              <Share2 size={15} strokeWidth={1.8} />
              Share
            </button>
          </div>

          {/* Rating */}
          <div className="mt-[16px] flex items-center gap-[5px]">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={17} fill="#FF7A32" strokeWidth={0} />
            ))}

            <span className="ml-[4px] text-[13px] font-medium text-[#465158]">
              ({medication.rating})
            </span>

            <span className="text-[12px] text-[#929BA0]">
              {medication.reviewCount} verified reviews
            </span>
          </div>

          <p
            className="
              mt-[18px]
              max-w-[650px]
              text-[14px]
              leading-[22px]
              text-[#747E84]
            "
          >
            {medication.description}
          </p>

          <div className="my-[28px] h-px w-full bg-[#DCE3E7]" />

          {/* Price */}
          <div className="flex items-center gap-[10px]">
            <span
              className="
                text-[36px]
                font-semibold
                leading-none
                text-[#252A2D]
              "
            >
              ${medication.price.toFixed(2)}
            </span>

            {medication.oldPrice && (
              <span
                className="
                  text-[13px]
                  text-[#9AA4AA]
                  line-through
                "
              >
                ${medication.oldPrice.toFixed(2)}
              </span>
            )}

            {medication.discount && (
              <span
                className="
                  text-[13px]
                  font-semibold
                  text-[#08A9DF]
                "
              >
                {medication.discount}
              </span>
            )}
          </div>

          <div className="mt-[16px] flex items-center gap-[14px]">
            <span className="text-[14px] font-semibold text-[#333A3E]">
              1 Strip
            </span>

            <span
              className="
                rounded-full
                bg-white
                px-[12px]
                py-[6px]
                text-[12px]
                text-[#6F7A80]
              "
            >
              {medication.packLabel}
            </span>
          </div>

          {/* Quantity */}
          <div className="mt-[30px] flex items-center gap-[24px]">
            <span
              className="
                text-[14px]
                font-semibold
                text-[#353D42]
              "
            >
              Select Quantity:
            </span>

            <div
              className="
                flex h-[42px]
                items-center
                rounded-full
                border
                border-[#D9E2E7]
                bg-white
                p-[3px]
              "
            >
              <button
                type="button"
                onClick={decreaseQuantity}
                disabled={quantity === 1}
                className="
                  flex h-[34px]
                  w-[34px]
                  items-center
                  justify-center
                  rounded-full
                  text-[#08A9DF]
                  transition-colors
                  hover:bg-[#EFF9FC]
                  disabled:opacity-40
                "
              >
                <Minus size={17} strokeWidth={2} />
              </button>

              <span
                className="
                  min-w-[32px]
                  text-center
                  text-[15px]
                  font-medium
                  text-[#313A3F]
                "
              >
                {quantity}
              </span>

              <button
                type="button"
                onClick={increaseQuantity}
                className="
                  flex h-[34px]
                  w-[34px]
                  items-center
                  justify-center
                  rounded-full
                  text-[#08A9DF]
                  transition-colors
                  hover:bg-[#EFF9FC]
                "
              >
                <Plus size={17} strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-[24px] grid grid-cols-2 gap-[16px]">
            <button
              type="button"
              className="
                flex h-[54px]
                items-center
                justify-center
                gap-[8px]
                rounded-full
                bg-[#08A9DF]
                text-[14px]
                font-medium
                text-white
                transition-colors
                hover:bg-[#0798C9]
              "
            >
              Buy Now
              <Zap size={16} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              onClick={() => setAddedToCart((current) => !current)}
              className={`
                flex h-[54px]
                items-center
                justify-center
                gap-[8px]
                rounded-full
                border
                text-[14px]
                font-medium
                transition-colors
                ${
                  addedToCart
                    ? "border-[#08A9DF] bg-[#08A9DF] text-white"
                    : "border-[#D9E2E7] bg-white text-[#3E474C] hover:border-[#08A9DF]"
                }
              `}
            >
              {addedToCart ? "Added to Cart" : "Add to Cart"}

              <ShoppingCart size={17} strokeWidth={1.8} />
            </button>
          </div>

          {/* Help */}
          <div
            className="
              mt-[28px]
              flex h-[54px]
              items-center
              gap-[8px]
              rounded-[8px]
              border
              border-[#D8E1E6]
              px-[16px]
              text-[13px]
              text-[#747D82]
            "
          >
            <span
              className="
                flex h-[18px]
                w-[18px]
                items-center
                justify-center
                rounded-full
                border
                border-[#727C82]
                text-[11px]
              "
            >
              ?
            </span>
            Any Confusion?
            <button
              type="button"
              className="
                font-semibold
                text-[#353C40]
                underline
                underline-offset-[2px]
              "
            >
              Help
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
