import { ArrowUpRight, Pill, Star } from "lucide-react";
import heroBanner from "@/assets/images/home/hero-banner.png";

export default function Hero() {
  return (
    <section className="bg-[#F3F6F7] px-4 pb-8 sm:px-6 lg:px-[44px]">
      <div
        className="
          relative mx-auto h-[620px] w-full max-w-[1500px]
          overflow-hidden rounded-[42px]
          bg-cover bg-center bg-no-repeat
          lg:h-[735px]
        "
        style={{
          backgroundImage: `url(${heroBanner})`,
        }}
      >
        {/* Left readability overlay */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(90deg,rgba(0,39,55,0.92)_0%,rgba(0,47,64,0.80)_28%,rgba(0,53,70,0.38)_50%,rgba(0,53,70,0.06)_68%,rgba(0,0,0,0)_100%)]
          "
        />

        {/* Content */}
        <div
          className="
            relative z-10 flex h-full items-center
            px-8 py-16
            sm:px-12
            lg:px-[78px] lg:py-20
          "
        >
          <div className="w-full max-w-[610px]">
            {/* Reviews */}
            <div className="mb-[22px] flex items-center gap-[10px] text-white">
              <div className="flex items-center gap-[3px]">
                {[0, 1, 2, 3].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    strokeWidth={1.5}
                    className="fill-white text-white"
                  />
                ))}

                <span className="relative h-[18px] w-[18px]">
                  <Star
                    size={18}
                    strokeWidth={1.5}
                    className="absolute inset-0 text-white/55"
                  />

                  <span className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
                    <Star
                      size={18}
                      strokeWidth={1.5}
                      className="fill-white text-white"
                    />
                  </span>
                </span>
              </div>

              <span className="text-[16px] font-normal leading-none">
                5,364+ trusted reviews
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-white">
              <span
                className="
                  block text-[44px] font-medium leading-[1.04]
                  tracking-[-1.5px]
                  sm:text-[52px]
                  lg:text-[58px]
                "
              >
                Your prescriptions,
              </span>

              <span
                className="
                  mt-2 block font-serif text-[46px] font-semibold italic
                  leading-[1.02] tracking-[-1.3px]
                  text-[#32B5E5]
                  sm:text-[54px]
                  lg:text-[60px]
                "
              >
                handled with care
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-[26px] max-w-[590px]
                text-[17px] font-normal leading-[1.55]
                text-white/95
                lg:text-[18px]
              "
            >
              Browse medications, send a prescription, request a transfer, and
              manage refills through one secure pharmacy experience.
            </p>

            {/* Actions */}
            <div className="mt-[42px] flex flex-wrap items-center gap-[20px]">
              <a
                href="#"
                className="
                  inline-flex h-[60px] items-center justify-center gap-[11px]
                  rounded-full bg-[#11ACE0] px-[29px]
                  text-[17px] font-medium text-white
                  transition-transform duration-200
                  hover:-translate-y-0.5
                "
              >
                Browse medications
                <ArrowUpRight size={19} strokeWidth={2} />
              </a>

              <a
                href="#"
                className="
                  inline-flex h-[60px] items-center justify-center gap-[11px]
                  rounded-full border border-[#16AEE0]
                  bg-white px-[29px]
                  text-[17px] font-medium text-[#09A9DE]
                  transition-transform duration-200
                  hover:-translate-y-0.5
                "
              >
                Upload a Prescription
                <Pill size={21} strokeWidth={1.8} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
