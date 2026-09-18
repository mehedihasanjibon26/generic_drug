import { CalendarDays, Truck } from "lucide-react";

type MedicationProductDescriptionProps = {
  medication: {
    overviewDescription: string;
    genericName: string;
    strength: string;
    form: string;
    supply: string;
    deliveryType: string;
    dispatchedTo: string;
    deliveryAddress: string;
    estimatedDelivery: string;
  };
};

export default function MedicationProductDescription({
  medication,
}: MedicationProductDescriptionProps) {
  const overviewRows = [
    {
      label: "Generic name",
      value: medication.genericName,
    },
    {
      label: "Strength",
      value: medication.strength,
    },
    {
      label: "Form",
      value: medication.form,
    },
    {
      label: "Supply",
      value: medication.supply,
    },
  ];

  return (
    <section
      className="
        flex
        w-full
        min-h-[718px]
        flex-col
        items-start
        gap-[16px]
        px-[60px]
      "
    >
      <div
        className="
          w-full
          rounded-[10px]
          border
          border-[#D9E3E8]
          bg-[#F4F7F9]
          px-[24px]
          py-[22px]
        "
      >
        {/* Medication overview */}
        <div>
          <h2
            className="
              text-[22px]
              font-semibold
              leading-[30px]
              tracking-[-0.4px]
              text-[#190832]
            "
          >
            Medication overview
          </h2>

          <p
            className="
              mt-[14px]
              max-w-[1240px]
              text-[14px]
              leading-[22px]
              text-[#4F5961]
            "
          >
            {medication.overviewDescription}
          </p>

          {/* Details table */}
          <div
            className="
              mt-[34px]
              overflow-hidden
              rounded-[8px]
              border
              border-[#E1E7EA]
              bg-white
            "
          >
            {overviewRows.map((row, index) => (
              <div
                key={row.label}
                className={`
                  grid
                  min-h-[52px]
                  grid-cols-2
                  ${
                    index !== overviewRows.length - 1
                      ? "border-b border-[#E1E7EA]"
                      : ""
                  }
                `}
              >
                <div
                  className="
                    flex
                    items-center
                    bg-[#F8FAFB]
                    px-[16px]
                    text-[14px]
                    font-medium
                    text-[#190832]
                  "
                >
                  {row.label}
                </div>

                <div
                  className="
                    flex
                    items-center
                    px-[16px]
                    text-[14px]
                    text-[#190832]
                  "
                >
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery & Returns */}
        <div className="mt-[42px]">
          <h2
            className="
              text-[22px]
              font-semibold
              leading-[30px]
              tracking-[-0.4px]
              text-[#190832]
            "
          >
            Delivery &amp; Returns
          </h2>

          <div
            className="
              mt-[14px]
              space-y-[5px]
              text-[14px]
              leading-[20px]
              text-[#4F5961]
            "
          >
            <p>
              Delivery: <span className="font-medium">Free Delivery</span>
            </p>

            <p>
              Dispatched to:{" "}
              <span className="font-medium">{medication.dispatchedTo}</span>
            </p>

            <p>
              Ships via:{" "}
              <button
                type="button"
                className="
                  font-semibold
                  text-[#190832]
                  underline
                  underline-offset-[2px]
                "
              >
                {medication.deliveryType}
              </button>
            </p>
          </div>

          <p
            className="
              mt-[22px]
              text-[14px]
              text-[#4F5961]
            "
          >
            Deliver to:{" "}
            <button
              type="button"
              className="
                font-semibold
                text-[#190832]
                underline
                underline-offset-[2px]
              "
            >
              {medication.deliveryAddress}
            </button>
          </p>

          {/* Delivery card */}
          <div
            className="
              mt-[14px]
              flex
              min-h-[72px]
              w-full
              items-center
              gap-[14px]
              rounded-[8px]
              border
              border-[#D8E2E7]
              bg-white
              px-[16px]
              py-[12px]
            "
          >
            <Truck
              size={24}
              strokeWidth={1.7}
              className="shrink-0 text-[#190832]"
            />

            <div>
              <p
                className="
                  text-[15px]
                  font-semibold
                  leading-[20px]
                  text-[#190832]
                "
              >
                {medication.deliveryType}
              </p>

              <div
                className="
                  mt-[4px]
                  flex
                  items-center
                  gap-[7px]
                  text-[13px]
                  text-[#5F6970]
                "
              >
                <span>Estimated delivery:</span>

                <CalendarDays size={15} strokeWidth={1.8} />

                <span
                  className="
                    font-semibold
                    text-[#252D32]
                  "
                >
                  {medication.estimatedDelivery}
                </span>
              </div>
            </div>
          </div>

          {/* Policies */}
          <div
            className="
              mt-[24px]
              flex
              items-center
              gap-[18px]
            "
          >
            <button
              type="button"
              className="
                text-[14px]
                font-semibold
                text-[#190832]
                underline
                underline-offset-[3px]
              "
            >
              Delivery Policy
            </button>

            <button
              type="button"
              className="
                text-[14px]
                font-semibold
                text-[#190832]
                underline
                underline-offset-[3px]
              "
            >
              30-Day Return Policy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
