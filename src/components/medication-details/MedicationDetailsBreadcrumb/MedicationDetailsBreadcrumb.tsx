import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

type MedicationDetailsBreadcrumbProps = {
  medicationName: string;
};

export default function MedicationDetailsBreadcrumb({
  medicationName,
}: MedicationDetailsBreadcrumbProps) {
  return (
    <section
      className="
        flex h-[56px] w-full
        items-center
        bg-[#F4F7F9]
        px-[40px]
        py-[16px]
      "
    >
      <nav
        aria-label="Breadcrumb"
        className="
          flex h-[24px]
          items-center
          gap-[4px]
        "
      >
        <Link
          to="/"
          className="
            whitespace-nowrap
            text-[16px]
            font-normal
            leading-[24px]
            text-[#6C7278]
            transition-colors
            hover:text-[#004C68]
          "
        >
          Home
        </Link>

        <ChevronRight
          size={20}
          strokeWidth={2}
          className="shrink-0 text-[#69747D]"
        />

        <Link
          to="/medications"
          className="
            whitespace-nowrap
            text-[16px]
            font-normal
            leading-[24px]
            text-[#6C7278]
            transition-colors
            hover:text-[#004C68]
          "
        >
          Medications
        </Link>

        <ChevronRight
          size={20}
          strokeWidth={2}
          className="shrink-0 text-[#69747D]"
        />

        <span
          className="
            whitespace-nowrap
            text-[16px]
            font-semibold
            leading-[24px]
            text-[#004A68]
          "
        >
          {medicationName}
        </span>
      </nav>
    </section>
  );
}
