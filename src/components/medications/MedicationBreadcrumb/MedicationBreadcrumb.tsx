import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function MedicationBreadcrumb() {
  return (
    <section
      className="
        flex h-[56px] w-full
        flex-col
        items-start
        justify-center
        bg-[#F4F7F9]
        px-[40px]
        py-[16px]
      "
    >
      <nav
        aria-label="Breadcrumb"
        className="
          flex h-[24px] w-[169px]
          flex-row
          items-center
          gap-[4px]
          p-0
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
          className="shrink-0 text-[#65717B]"
          aria-hidden="true"
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
          Medications
        </span>
      </nav>
    </section>
  );
}
