import { useParams } from "react-router-dom";

import MedicationDetailsBreadcrumb from "@/components/medication-details/MedicationDetailsBreadcrumb/MedicationDetailsBreadcrumb";
import MedicationDetailsHero from "@/components/medication-details/MedicationDetailsHero/MedicationDetailsHero";
import MedicationProductDescription from "@/components/medication-details/MedicationProductDescription/MedicationProductDescription";
import RelatedMedications from "@/components/medication-details/RelatedMedications/RelatedMedications";

import tyrosineImage from "@/assets/images/products/tyrosine.png";
import nitrileGlovesImage from "@/assets/images/products/nitrile-gloves.png";
import amberVitaminsImage from "@/assets/images/products/amber-vitamins.png";
import handSoapImage from "@/assets/images/products/hand-soap.png";

const medications = {
  "n-acetyl-l-tyrosine": {
    name: "N-Acetyl L-Tyrosine",
    subtitle: "Dietary Supplement · 60 capsules",
    description:
      "A dietary supplement product designed for everyday nutritional support. Product information, dosage and usage instructions can be shown here based on the selected medication.",
    image: tyrosineImage,
    price: 64,
    oldPrice: 80,
    discount: "20% Off",
    packLabel: "60 pcs",
    rating: 4.5,
    reviewCount: 126,

    overviewDescription:
      "N-Acetyl L-Tyrosine is a dietary supplement commonly used as part of everyday nutritional support. Usage instructions and duration should follow the information provided with the product.",
    genericName: "N-Acetyl L-Tyrosine",
    strength: "350 mg",
    form: "Capsule",
    supply: "60 capsules",
    deliveryType: "Small Parcel Delivery",
    dispatchedTo: "XYZ",
    deliveryAddress: "EC1A 7ES - LONDON",
    estimatedDelivery: "14/12/2024",
  },

  "nitrile-disposable-gloves-100": {
    name: "Nitrile Disposable gloves 100",
    subtitle: "Healthcare · Disposable gloves",
    description:
      "Disposable nitrile gloves suitable for everyday healthcare and protective use. Product specifications and package information can be loaded dynamically for this item.",
    image: nitrileGlovesImage,
    price: 140,
    packLabel: "100 pcs",
    rating: 4.5,
    reviewCount: 98,

    overviewDescription:
      "Disposable nitrile gloves designed for healthcare, hygiene and general protective use. Product specifications may vary according to packaging and manufacturer.",
    genericName: "Nitrile Disposable Gloves",
    strength: "Standard",
    form: "Disposable glove",
    supply: "100 pieces",
    deliveryType: "Small Parcel Delivery",
    dispatchedTo: "XYZ",
    deliveryAddress: "EC1A 7ES - LONDON",
    estimatedDelivery: "14/12/2024",
  },

  "womens-multi-vitamins": {
    name: "Womens multi Vitamins A, Biotin- cranberry",
    subtitle: "Medicine · Daily vitamins",
    description:
      "A daily multivitamin product with vitamin and nutritional support. Full product information will come from the medicine record when the backend is connected.",
    image: amberVitaminsImage,
    price: 64,
    oldPrice: 80,
    discount: "50% Off",
    packLabel: "30 pcs",
    rating: 4.5,
    reviewCount: 114,

    overviewDescription:
      "A daily multivitamin supplement formulated with vitamins and nutritional ingredients for routine dietary support.",
    genericName: "Multivitamin",
    strength: "Daily formula",
    form: "Tablet",
    supply: "30 tablets",
    deliveryType: "Small Parcel Delivery",
    dispatchedTo: "XYZ",
    deliveryAddress: "EC1A 7ES - LONDON",
    estimatedDelivery: "14/12/2024",
  },

  "antibacterial-liquid-hand-soap": {
    name: "Antibacterial Liquid Hand Soap",
    subtitle: "Healthcare · Antibacterial hand wash",
    description:
      "An antibacterial liquid hand soap designed for routine hand cleansing and everyday hygiene.",
    image: handSoapImage,
    price: 80,
    packLabel: "1 bottle",
    rating: 4.5,
    reviewCount: 86,

    overviewDescription:
      "Antibacterial liquid hand soap designed for regular hand cleansing and general hygiene use.",
    genericName: "Antibacterial Hand Soap",
    strength: "Standard",
    form: "Liquid",
    supply: "1 bottle",
    deliveryType: "Small Parcel Delivery",
    dispatchedTo: "XYZ",
    deliveryAddress: "EC1A 7ES - LONDON",
    estimatedDelivery: "14/12/2024",
  },

  "atorvastatin-20-mg": {
    name: "Atorvastatin 20 mg",
    subtitle: "Generic for Lipitor® · Oral tablets",
    description:
      "A commonly prescribed statin used as part of a clinician-guided plan for cholesterol management. Available in flexible monthly supply options.",
    image: tyrosineImage,
    price: 24.95,
    oldPrice: 34.95,
    discount: "45% Off",
    packLabel: "14 pcs",
    rating: 4.8,
    reviewCount: 126,

    overviewDescription:
      "Atorvastatin is a prescription medicine commonly used alongside diet and lifestyle changes to help manage cholesterol. Your prescriber determines whether it is appropriate for you, including the dose and treatment duration.",
    genericName: "Atorvastatin calcium",
    strength: "20 mg",
    form: "Oral tablet",
    supply: "30, 90, or 180 tablets",
    deliveryType: "Small Parcel Delivery",
    dispatchedTo: "XYZ",
    deliveryAddress: "EC1A 7ES - LONDON",
    estimatedDelivery: "14/12/2024",
  },
};

export default function MedicationDetailsPage() {
  const { slug = "" } = useParams();

  const medication =
    medications[slug as keyof typeof medications] ??
    medications["n-acetyl-l-tyrosine"];

  return (
    <div className="min-h-screen bg-[#F4F7F9]">
      <MedicationDetailsBreadcrumb medicationName={medication.name} />

      <div className="flex flex-col gap-[80px] pb-[120px]">
        <MedicationDetailsHero medication={medication} />

        <MedicationProductDescription medication={medication} />

        <RelatedMedications currentSlug={slug} />
      </div>
    </div>
  );
}
