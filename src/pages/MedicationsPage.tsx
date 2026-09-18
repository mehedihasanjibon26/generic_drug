import MedicationBreadcrumb from "@/components/medications/MedicationBreadcrumb/MedicationBreadcrumb";
import MedicationFilters from "@/components/medications/MedicationFilters/MedicationFilters";
import MedicationProductListing from "@/components/medications/MedicationProductListing/MedicationProductListing";

export default function MedicationsPage() {
  return (
    <div className="min-h-screen bg-[#F4F7F9]">
      <MedicationBreadcrumb />

      <section className="px-[40px] pb-[110px] pt-[28px]">
        <div className="flex w-full items-start gap-[24px]">
          <MedicationFilters />

          <MedicationProductListing />
        </div>
      </section>
    </div>
  );
}
