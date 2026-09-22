import { ChevronRight, Info, LockKeyhole } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

import { useCart } from "@/contexts/CartContext";

import visaLogo from "@/assets/images/payment/visa.png";
import mastercardLogo from "@/assets/images/payment/mastercard.png";
import amexLogo from "@/assets/images/payment/amex.png";

type PaymentMethod = "card" | "gpay";

export default function CheckoutPage() {
  const {
    items,
    subtotal,
    couponCode,
    discount,
    applyCoupon,
    prescriptionFile,
  } = useCart();

  const [coupon, setCoupon] = useState(couponCode);

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");

  const [savePayment, setSavePayment] = useState(true);

  const [cardNumber, setCardNumber] = useState("");

  const [expiry, setExpiry] = useState("");

  const [securityCode, setSecurityCode] = useState("");

  const [nameOnCard, setNameOnCard] = useState("");

  const total = Math.max(0, subtotal - discount);

  const handleApplyCoupon = () => {
    const success = applyCoupon(coupon);

    if (!success) {
      window.alert("Invalid coupon code.");
    }
  };

  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 16);

    return digits.replace(/(\d{4})(?=\d)/g, "$1 ");
  };

  const formatExpiry = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 4);

    if (digits.length <= 2) {
      return digits;
    }

    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!items.length) {
      window.alert("Your cart is empty.");
      return;
    }

    if (!prescriptionFile) {
      window.alert("Please upload your prescription before checkout.");
      return;
    }

    if (paymentMethod === "card") {
      const plainCard = cardNumber.replace(/\s/g, "");

      if (plainCard.length < 16) {
        window.alert("Please enter a valid card number.");
        return;
      }

      if (expiry.length !== 5) {
        window.alert("Please enter a valid expiration date.");
        return;
      }

      if (securityCode.length < 3) {
        window.alert("Please enter a valid security code.");
        return;
      }

      if (!nameOnCard.trim()) {
        window.alert("Please enter the name on card.");
        return;
      }
    }

    window.alert(
      "Checkout information validated successfully. Real payment processing is not connected in this frontend demo.",
    );
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
        <Link to="/" className="text-[#68747B]">
          Home
        </Link>

        <ChevronRight size={17} className="text-[#758189]" />

        <Link to="/medications" className="text-[#68747B]">
          Medications
        </Link>

        <ChevronRight size={17} className="text-[#758189]" />

        <span
          className="
            font-semibold
            text-[#004B68]
          "
        >
          Checkout
        </span>
      </div>

      <div
        className="
          mx-auto
          grid
          max-w-[1080px]
          grid-cols-[575px_480px]
          gap-[48px]
          pt-[42px]
        "
      >
        {/* LEFT PAYMENT */}
        <form
          onSubmit={handleSubmit}
          className="
            border-r
            border-[#E2E8EC]
            pr-[30px]
          "
        >
          <p
            className="
              text-center
              text-[13px]
              text-[#6E767B]
            "
          >
            Express checkout
          </p>

          <div
            className="
              mt-[14px]
              grid
              grid-cols-2
              gap-[14px]
            "
          >
            <button
              type="button"
              onClick={() =>
                window.alert("Link payment is shown as a frontend demo option.")
              }
              className="
                flex
                h-[50px]
                items-center
                justify-center
                rounded-[8px]
                bg-[#00D66F]
                text-[20px]
                font-semibold
                text-black
              "
            >
              ◉ link
            </button>

            <button
              type="button"
              onClick={() =>
                window.alert("Apple Pay is shown as a frontend demo option.")
              }
              className="
                flex
                h-[50px]
                items-center
                justify-center
                rounded-[8px]
                bg-black
                text-[20px]
                font-semibold
                text-white
              "
            >
              Apple Pay
            </button>
          </div>

          <div
            className="
              my-[18px]
              flex
              items-center
              gap-[16px]
            "
          >
            <div className="h-px flex-1 bg-[#E3E8EB]" />

            <span
              className="
                text-[13px]
                text-[#71797E]
              "
            >
              OR
            </span>

            <div className="h-px flex-1 bg-[#E3E8EB]" />
          </div>

          <h1
            className="
              text-[20px]
              font-semibold
              text-[#111719]
            "
          >
            Payment
          </h1>

          <p
            className="
              mt-[8px]
              text-[13px]
              text-[#343B3F]
            "
          >
            All transactions are secure and encrypted
          </p>

          <div
            className="
              mt-[14px]
              overflow-hidden
              rounded-[8px]
              border
              border-[#D7E0E5]
            "
          >
            {/* Credit Card */}
            <button
              type="button"
              onClick={() => setPaymentMethod("card")}
              className={`
                flex
                h-[62px]
                w-full
                items-center
                justify-between
                px-[14px]

                ${
                  paymentMethod === "card"
                    ? "border border-[#08A9DF] bg-white"
                    : "bg-white"
                }
              `}
            >
              <span
                className="
                  flex
                  items-center
                  gap-[10px]
                  text-[15px]
                  font-semibold
                "
              >
                <span
                  className={`
                    flex
                    h-[20px]
                    w-[20px]
                    items-center
                    justify-center
                    rounded-full
                    border

                    ${
                      paymentMethod === "card"
                        ? "border-[#08A9DF] bg-[#08A9DF]"
                        : "border-[#CBD4D9]"
                    }
                  `}
                >
                  {paymentMethod === "card" && (
                    <span
                      className="
                        h-[7px]
                        w-[7px]
                        rounded-full
                        bg-white
                      "
                    />
                  )}
                </span>
                Credit card
              </span>

              {/* Payment card logos */}
              <div
                className="
                  flex
                  items-center
                  gap-[8px]
                "
              >
                {/* VISA */}
                <div
                  className="
                    flex
                    h-[34px]
                    w-[56px]
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[5px]
                    border
                    border-[#D8DEE2]
                    bg-white
                  "
                >
                  <img
                    src={visaLogo}
                    alt="Visa"
                    className="
                      h-full
                      w-full
                      scale-[1.7]
                      object-cover
                    "
                  />
                </div>

                {/* Mastercard */}
                <div
                  className="
                    flex
                    h-[34px]
                    w-[56px]
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[5px]
                    border
                    border-[#D8DEE2]
                    bg-white
                  "
                >
                  <img
                    src={mastercardLogo}
                    alt="Mastercard"
                    className="
                      h-full
                      w-full
                      scale-[1.7]
                      object-cover
                    "
                  />
                </div>

                {/* AMEX */}
                <div
                  className="
                    flex
                    h-[34px]
                    w-[56px]
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[5px]
                    border
                    border-[#D8DEE2]
                    bg-white
                  "
                >
                  <img
                    src={amexLogo}
                    alt="American Express"
                    className="
                      h-full
                      w-full
                      scale-[1.7]
                      object-cover
                    "
                  />
                </div>

                {/* More */}
                <div
                  className="
                    flex
                    h-[34px]
                    min-w-[44px]
                    items-center
                    justify-center
                    rounded-[5px]
                    border
                    border-[#D8DEE2]
                    bg-white
                    px-[9px]
                    text-[13px]
                    font-medium
                    text-[#171B1D]
                  "
                >
                  +6
                </div>
              </div>
            </button>

            {paymentMethod === "card" && (
              <div
                className="
                  space-y-[12px]
                  bg-[#F4F6F8]
                  p-[12px]
                "
              >
                <div className="relative">
                  <input
                    value={cardNumber}
                    onChange={(event) =>
                      setCardNumber(formatCardNumber(event.target.value))
                    }
                    placeholder="Card number"
                    inputMode="numeric"
                    className={paymentInputClass}
                  />

                  <LockKeyhole
                    size={19}
                    strokeWidth={1.7}
                    className="
                      absolute
                      right-[16px]
                      top-1/2
                      -translate-y-1/2
                      text-[#5B6469]
                    "
                  />
                </div>

                <input
                  value={expiry}
                  onChange={(event) =>
                    setExpiry(formatExpiry(event.target.value))
                  }
                  placeholder="Expiration date (MM/YY)"
                  inputMode="numeric"
                  className={paymentInputClass}
                />

                <div className="relative">
                  <input
                    value={securityCode}
                    onChange={(event) =>
                      setSecurityCode(
                        event.target.value.replace(/\D/g, "").slice(0, 4),
                      )
                    }
                    placeholder="Security code"
                    inputMode="numeric"
                    className={paymentInputClass}
                  />

                  <Info
                    size={19}
                    strokeWidth={1.7}
                    className="
                      absolute
                      right-[16px]
                      top-1/2
                      -translate-y-1/2
                      text-[#5B6469]
                    "
                  />
                </div>

                <input
                  value={nameOnCard}
                  onChange={(event) => setNameOnCard(event.target.value)}
                  placeholder="Name on card"
                  className={paymentInputClass}
                />

                <label
                  className="
                    flex
                    cursor-pointer
                    items-center
                    gap-[10px]
                    py-[2px]
                    text-[12px]
                    text-[#21272A]
                  "
                >
                  <input
                    type="checkbox"
                    checked={savePayment}
                    onChange={(event) => setSavePayment(event.target.checked)}
                    className="
                      h-[18px]
                      w-[18px]
                      accent-[#08A9DF]
                    "
                  />
                  Save my payment information for future purchases
                </label>
              </div>
            )}

            {/* GPay */}
            <button
              type="button"
              onClick={() => setPaymentMethod("gpay")}
              className="
                flex
                h-[52px]
                w-full
                items-center
                justify-between
                border-t
                border-[#D7E0E5]
                bg-white
                px-[14px]
              "
            >
              <span
                className="
                  flex
                  items-center
                  gap-[12px]
                  text-[14px]
                  font-medium
                "
              >
                <span
                  className={`
                    flex
                    h-[18px]
                    w-[18px]
                    items-center
                    justify-center
                    rounded-full
                    border

                    ${
                      paymentMethod === "gpay"
                        ? "border-[#08A9DF] bg-[#08A9DF]"
                        : "border-[#CBD4D9]"
                    }
                  `}
                >
                  {paymentMethod === "gpay" && (
                    <span
                      className="
                        h-[6px]
                        w-[6px]
                        rounded-full
                        bg-white
                      "
                    />
                  )}
                </span>
                GPay
              </span>

              <span className="font-semibold">G Pay</span>
            </button>
          </div>

          <button type="submit" className="sr-only">
            Submit checkout
          </button>
        </form>

        {/* RIGHT ORDER SUMMARY */}
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
            <span
              className="
                text-[17px]
                font-semibold
                text-[#20262A]
              "
            >
              Total Amount
            </span>

            <span
              className="
                text-[18px]
                font-semibold
                text-[#20262A]
              "
            >
              ${total.toFixed(2)}
            </span>
          </div>

          <button
            type="button"
            disabled={items.length === 0 || !prescriptionFile}
            onClick={() => {
              const form = document.querySelector("form");

              form?.requestSubmit();
            }}
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
              transition-colors
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

const paymentInputClass = `
  h-[50px]
  w-full
  rounded-[8px]
  border
  border-[#E0E5E8]
  bg-white
  px-[16px]
  text-[13px]
  text-[#252C30]
  outline-none
  transition-colors
  placeholder:text-[#7C858A]
  focus:border-[#08A9DF]
`;
