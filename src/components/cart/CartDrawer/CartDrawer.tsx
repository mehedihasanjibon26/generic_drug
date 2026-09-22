import { FileText, Minus, Plus, Trash2, Upload, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useCart } from "@/contexts/CartContext";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const navigate = useNavigate();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const {
    items,
    itemCount,
    subtotal,
    updateQuantity,
    removeItem,
    prescriptionFile,
    prescriptionPreviewUrl,
    setPrescription,
    removePrescription,
  } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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

  const goToShoppingCart = () => {
    onClose();
    navigate("/shopping-cart");
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`
          fixed
          inset-0
          z-[90]
          bg-black/30
          transition-opacity
          duration-300

          ${
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* Drawer */}
      <aside
        aria-hidden={!isOpen}
        className={`
          fixed
          right-0
          top-0
          z-[100]
          flex
          h-dvh
          w-full
          max-w-[505px]
          flex-col
          bg-white
          shadow-[-12px_0_40px_rgba(0,0,0,0.08)]
          transition-transform
          duration-300
          ease-out

          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div
          className="
            flex
            h-[80px]
            shrink-0
            items-center
            justify-between
            border-b
            border-[#E4E9EC]
            px-[24px]
          "
        >
          <h2
            className="
              text-[24px]
              font-semibold
              tracking-[-0.5px]
              text-[#171B1D]
            "
          >
            Your Cart
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="
              flex
              h-[42px]
              w-[42px]
              items-center
              justify-center
              rounded-full
              bg-[#F1F3F5]
              text-[#24292C]
              transition-colors
              hover:bg-[#E6EAED]
            "
          >
            <X size={24} strokeWidth={2} />
          </button>
        </div>

        {/* Scrollable body */}
        <div
          className="
            min-h-0
            flex-1
            overflow-y-auto
            px-[24px]
          "
        >
          {items.length === 0 ? (
            <div
              className="
                flex
                min-h-[300px]
                flex-col
                items-center
                justify-center
                text-center
              "
            >
              <p
                className="
                  text-[18px]
                  font-semibold
                  text-[#242B2F]
                "
              >
                Your cart is empty
              </p>

              <p
                className="
                  mt-[8px]
                  text-[14px]
                  text-[#7B858B]
                "
              >
                Add a medication to get started.
              </p>
            </div>
          ) : (
            <>
              {/* Items */}
              {items.map((item) => (
                <div
                  key={item.slug}
                  className="
                    flex
                    gap-[16px]
                    border-b
                    border-[#E5E9EC]
                    py-[24px]
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
                      rounded-[8px]
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
                        gap-[12px]
                      "
                    >
                      <div className="min-w-0">
                        <h3
                          className="
                            text-[18px]
                            font-semibold
                            leading-[24px]
                            text-[#1E2326]
                          "
                        >
                          {item.name}
                        </h3>

                        <p
                          className="
                            mt-[5px]
                            text-[14px]
                            text-[#3E474C]
                          "
                        >
                          {item.subtitle}
                        </p>

                        <p
                          className="
                            mt-[4px]
                            text-[14px]
                            text-[#3E474C]
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
                          text-[#1C2225]
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
                          h-[34px]
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
                            h-[28px]
                            w-[28px]
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
                            font-medium
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
                            h-[28px]
                            w-[28px]
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
                          text-[#697379]
                          transition-colors
                          hover:text-red-500
                        "
                      >
                        <Trash2 size={20} strokeWidth={1.7} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Prescription */}
              <div className="py-[26px]">
                <h3
                  className="
                    text-[20px]
                    font-semibold
                    text-[#1E2326]
                  "
                >
                  Upload prescription
                </h3>

                <p
                  className="
                    mt-[7px]
                    text-[14px]
                    text-[#40494E]
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

                {!prescriptionFile ? (
                  <div
                    className="
                      mt-[18px]
                      flex
                      min-h-[160px]
                      w-full
                      flex-col
                      items-center
                      justify-center
                      rounded-[14px]
                      border
                      border-dashed
                      border-[#D1DCE2]
                      px-[20px]
                      text-center
                    "
                  >
                    <Upload
                      size={22}
                      strokeWidth={1.7}
                      className="
                        mb-[9px]
                        text-[#343D42]
                      "
                    />

                    <p
                      className="
                        text-[15px]
                        font-semibold
                        text-[#252C30]
                      "
                    >
                      Upload prescription
                    </p>

                    <p
                      className="
                        mt-[8px]
                        text-[14px]
                        text-[#424B50]
                      "
                    >
                      PDF, JPG or PNG · Maximum 10 MB
                    </p>

                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="
                        mt-[16px]
                        rounded-full
                        border
                        border-[#D8E0E5]
                        px-[16px]
                        py-[8px]
                        text-[13px]
                        font-medium
                        text-[#4A5358]
                        transition-colors
                        hover:border-[#08A9DF]
                        hover:text-[#08A9DF]
                      "
                    >
                      Upload prescription
                    </button>
                  </div>
                ) : (
                  <div
                    className="
                      mt-[18px]
                      flex
                      min-h-[118px]
                      items-start
                      gap-[14px]
                      rounded-[14px]
                      border
                      border-dashed
                      border-[#8AE1AC]
                      bg-[#EDFCF3]
                      px-[16px]
                      py-[16px]
                    "
                  >
                    <div
                      className="
                        flex
                        h-[50px]
                        w-[50px]
                        shrink-0
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-full
                        bg-white
                        shadow-sm
                      "
                    >
                      {prescriptionPreviewUrl ? (
                        <img
                          src={prescriptionPreviewUrl}
                          alt="Prescription preview"
                          className="
                            h-full
                            w-full
                            object-cover
                          "
                        />
                      ) : (
                        <FileText
                          size={24}
                          strokeWidth={1.6}
                          className="text-[#5D696F]"
                        />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p
                        className="
                          truncate
                          text-[14px]
                          font-semibold
                          text-[#252C30]
                        "
                      >
                        {prescriptionFile.name}
                      </p>

                      <p
                        className="
                          mt-[6px]
                          text-[14px]
                          text-[#3D474C]
                        "
                      >
                        Prescription uploaded successfully
                      </p>

                      <div
                        className="
                          mt-[16px]
                          flex
                          items-center
                          gap-[22px]
                        "
                      >
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="
                            text-[13px]
                            font-semibold
                            text-[#08A9DF]
                            hover:underline
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
                            hover:underline
                          "
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Summary */}
        <div
          className="
            shrink-0
            border-t
            border-[#E4E9EC]
            bg-white
            px-[24px]
            pb-[24px]
            pt-[18px]
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
              text-[14px]
              text-[#262D31]
            "
          >
            <span>
              Subtotal ({itemCount} {itemCount === 1 ? "Item" : "Items"})
            </span>

            <span className="font-semibold">${subtotal.toFixed(2)}</span>
          </div>

          <div
            className="
              mt-[16px]
              flex
              items-center
              justify-between
              text-[14px]
            "
          >
            <span>Shipping</span>

            <span
              className="
                font-semibold
                text-[#22B842]
              "
            >
              Free
            </span>
          </div>

          <div
            className="
              my-[20px]
              h-px
              bg-[#E6EAED]
            "
          />

          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <span
              className="
                text-[14px]
                font-medium
                text-[#20262A]
              "
            >
              Total
            </span>

            <span
              className="
                text-[16px]
                font-semibold
                text-[#20262A]
              "
            >
              ${subtotal.toFixed(2)}
            </span>
          </div>

          <button
            type="button"
            onClick={goToShoppingCart}
            disabled={items.length === 0}
            className={`
              mt-[22px]
              flex
              h-[54px]
              w-full
              items-center
              justify-center
              rounded-full
              text-[16px]
              font-medium
              transition-colors

              ${
                prescriptionFile
                  ? "bg-[#08A9DF] text-white hover:bg-[#0797C9]"
                  : "bg-[#E7F8FD] text-[#9EA9AE]"
              }

              disabled:cursor-not-allowed
              disabled:opacity-50
            `}
          >
            Continue Shopping
          </button>
        </div>
      </aside>
    </>
  );
}
