import { ChevronRight, FileText, Minus, Plus, Trash2 } from "lucide-react";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useCart } from "@/contexts/CartContext";

export default function ShoppingCartPage() {
  const navigate = useNavigate();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const {
    items,
    subtotal,
    updateQuantity,
    removeItem,
    prescriptionFile,
    prescriptionPreviewUrl,
    setPrescription,
    removePrescription,
    couponCode,
    discount,
    applyCoupon,
  } = useCart();

  const [coupon, setCoupon] = useState(couponCode);

  const total = Math.max(0, subtotal - discount);

  const handleApplyCoupon = () => {
    const success = applyCoupon(coupon);

    if (!success) {
      window.alert("Invalid coupon code.");
    }
  };

  const handlePrescription = (file: File | undefined) => {
    if (!file) {
      return;
    }

    const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];

    if (!allowedTypes.includes(file.type)) {
      window.alert("Only PDF, JPG and PNG files are allowed.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      window.alert("Maximum file size is 10 MB.");
      return;
    }

    setPrescription(file);
  };

  const handleRemovePrescription = () => {
    removePrescription();

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div
      className="
        min-h-[960px]
        bg-white
        px-[40px]
        pb-[120px]
      "
    >
      {/* Breadcrumb */}
      <div
        className="
          flex
          h-[72px]
          items-center
          gap-[8px]
          text-[15px]
        "
      >
        <Link
          to="/"
          className="
            text-[#68747B]
            transition-colors
            hover:text-[#08A9DF]
          "
        >
          Home
        </Link>

        <ChevronRight size={17} className="text-[#758189]" />

        <Link
          to="/medications"
          className="
            text-[#68747B]
            transition-colors
            hover:text-[#08A9DF]
          "
        >
          Medications
        </Link>

        <ChevronRight size={17} className="text-[#758189]" />

        <span
          className="
            font-semibold
            text-[#004B68]
          "
        >
          Shopping Cart
        </span>
      </div>

      <div
        className="
          grid
          grid-cols-[minmax(0,1fr)_480px]
          gap-[40px]
          pt-[24px]
        "
      >
        {/* Left */}
        <div>
          <h1
            className="
              text-[34px]
              font-semibold
              tracking-[-1px]
              text-[#111719]
            "
          >
            Your Shopping Cart
          </h1>

          <p
            className="
              mt-[10px]
              text-[16px]
              text-[#6E777C]
            "
          >
            Review your medication and delivery details before checkout.
          </p>

          <div className="mt-[22px] space-y-[20px]">
            {items.length === 0 ? (
              <div
                className="
                  rounded-[16px]
                  border
                  border-[#D8E1E6]
                  p-[40px]
                  text-center
                "
              >
                <p
                  className="
                    text-[18px]
                    font-semibold
                    text-[#283035]
                  "
                >
                  Your cart is empty
                </p>

                <Link
                  to="/medications"
                  className="
                    mt-[16px]
                    inline-block
                    text-[14px]
                    font-semibold
                    text-[#08A9DF]
                  "
                >
                  Browse medications
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.slug}
                  className="
                    flex
                    min-h-[142px]
                    items-center
                    gap-[18px]
                    rounded-[16px]
                    border
                    border-[#D7E0E5]
                    px-[16px]
                    py-[14px]
                  "
                >
                  <div
                    className="
                      flex
                      h-[112px]
                      w-[112px]
                      shrink-0
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-[9px]
                      bg-[#F4F7F9]
                    "
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        h-full
                        w-full
                        object-contain
                      "
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div
                      className="
                        flex
                        items-start
                        justify-between
                        gap-[16px]
                      "
                    >
                      <div className="min-w-0">
                        <h3
                          className="
                            text-[18px]
                            font-semibold
                            text-[#202629]
                          "
                        >
                          {item.name}
                        </h3>

                        <p
                          className="
                            mt-[5px]
                            text-[14px]
                            text-[#3E464A]
                          "
                        >
                          {item.subtitle}
                        </p>

                        <p
                          className="
                            mt-[4px]
                            text-[14px]
                            text-[#3E464A]
                          "
                        >
                          {item.pack}
                        </p>
                      </div>

                      <span
                        className="
                          whitespace-nowrap
                          text-[18px]
                          font-semibold
                          text-[#1E2427]
                        "
                      >
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>

                    <div
                      className="
                        mt-[14px]
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <div
                        className="
                          flex
                          h-[32px]
                          items-center
                          rounded-full
                          bg-[#F4F6F7]
                          px-[4px]
                        "
                      >
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.slug,
                              Math.max(1, item.quantity - 1),
                            )
                          }
                          className="
                            flex
                            h-[26px]
                            w-[26px]
                            items-center
                            justify-center
                          "
                        >
                          <Minus size={14} strokeWidth={2} />
                        </button>

                        <span
                          className="
                            min-w-[34px]
                            text-center
                            text-[14px]
                          "
                        >
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.slug, item.quantity + 1)
                          }
                          className="
                            flex
                            h-[26px]
                            w-[26px]
                            items-center
                            justify-center
                          "
                        >
                          <Plus size={14} strokeWidth={2} />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.slug)}
                        aria-label={`Remove ${item.name}`}
                        className="
                          flex
                          h-[34px]
                          w-[34px]
                          items-center
                          justify-center
                          text-[#667278]
                          transition-colors
                          hover:text-red-500
                        "
                      >
                        <Trash2 size={20} strokeWidth={1.7} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="mt-[20px]">
              <h2
                className="
                  text-[20px]
                  font-semibold
                  text-[#1E2427]
                "
              >
                Upload prescription
              </h2>

              <p
                className="
                  mt-[6px]
                  text-[14px]
                  text-[#444D52]
                "
              >
                Upload a valid prescription to unlock the next step.
              </p>

              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                onChange={(event) =>
                  handlePrescription(event.target.files?.[0])
                }
              />

              {prescriptionFile ? (
                <div
                  className="
                    mt-[16px]
                    flex
                    min-h-[84px]
                    items-center
                    gap-[14px]
                    rounded-[14px]
                    border
                    border-dashed
                    border-[#86E2AA]
                    bg-[#EDFCF3]
                    px-[16px]
                  "
                >
                  <div
                    className="
                      flex
                      h-[48px]
                      w-[48px]
                      shrink-0
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-full
                      bg-white
                    "
                  >
                    {prescriptionPreviewUrl ? (
                      <img
                        src={prescriptionPreviewUrl}
                        alt="Prescription"
                        className="
                          h-full
                          w-full
                          object-cover
                        "
                      />
                    ) : (
                      <FileText
                        size={22}
                        strokeWidth={1.6}
                        className="text-[#566168]"
                      />
                    )}
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        truncate
                        text-[14px]
                        font-semibold
                        text-[#252D31]
                      "
                    >
                      {prescriptionFile.name}
                    </p>

                    <p
                      className="
                        mt-[5px]
                        text-[14px]
                        text-[#3E474C]
                      "
                    >
                      Prescription uploaded successfully
                    </p>
                  </div>

                  <div
                    className="
                      ml-auto
                      flex
                      items-center
                      gap-[24px]
                    "
                  >
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="
                        text-[13px]
                        font-semibold
                        text-[#08A9DF]
                      "
                    >
                      Replace
                    </button>

                    <button
                      type="button"
                      onClick={handleRemovePrescription}
                      className="
                        text-[13px]
                        font-semibold
                        text-[#F05A5A]
                      "
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="
                    mt-[16px]
                    flex
                    h-[100px]
                    w-full
                    items-center
                    justify-center
                    rounded-[14px]
                    border
                    border-dashed
                    border-[#D4DEE4]
                    text-[14px]
                    font-medium
                    text-[#4F5A60]
                  "
                >
                  Upload prescription
                </button>
              )}
            </div>
          )}
        </div>

        {/* Summary */}
        <aside
          className="
            h-fit
            rounded-[18px]
            bg-[#F4F7F9]
            px-[24px]
            py-[24px]
          "
        >
          <h2
            className="
              text-[22px]
              font-semibold
              text-[#1F2529]
            "
          >
            Order Summary
          </h2>

          <div
            className="
              mt-[22px]
              flex
              h-[50px]
              items-center
              rounded-full
              border
              border-[#D7E1E6]
              bg-white
              p-[4px]
              pl-[18px]
            "
          >
            <input
              value={coupon}
              onChange={(event) => setCoupon(event.target.value)}
              placeholder="Apply Coupon"
              className="
                min-w-0
                flex-1
                bg-transparent
                text-[14px]
                outline-none
              "
            />

            <button
              type="button"
              onClick={handleApplyCoupon}
              className="
                h-[42px]
                shrink-0
                rounded-full
                bg-black
                px-[20px]
                text-[13px]
                font-semibold
                text-white
              "
            >
              Apply Coupon
            </button>
          </div>

          <div className="mt-[22px] space-y-[15px]">
            {items.map((item) => (
              <div
                key={item.slug}
                className="
                  flex
                  justify-between
                  gap-[15px]
                  text-[15px]
                "
              >
                <span
                  className="
                    min-w-0
                    truncate
                    text-[#343B40]
                  "
                >
                  {item.name}
                </span>

                <span className="font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}

            <div className="flex justify-between text-[15px]">
              <span>Delivery</span>

              <span className="font-semibold text-[#21B840]">Free</span>
            </div>

            <div className="flex justify-between text-[15px]">
              <span>Discount</span>

              <span className="font-medium">−${discount.toFixed(2)}</span>
            </div>
          </div>

          <div className="my-[18px] h-px bg-[#D4DDE2]" />

          <div className="flex items-center justify-between">
            <span className="text-[17px] font-semibold text-[#20262A]">
              Total Amount
            </span>

            <span className="text-[18px] font-semibold text-[#20262A]">
              ${total.toFixed(2)}
            </span>
          </div>

          <button
            type="button"
            onClick={goToCheckout}
            disabled={items.length === 0 || !prescriptionFile}
            className="
              mt-[32px]
              flex
              h-[54px]
              w-full
              items-center
              justify-center
              rounded-full
              bg-[#08A9DF]
              text-[16px]
              font-medium
              text-white
              hover:bg-[#0797C9]
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            Continue Checkout
          </button>
        </aside>
      </div>
    </div>
  );
}
