import { Search, ShoppingBag, Truck, UserRound } from "lucide-react";

const navItems = ["Home", "Medications", "About Us", "Blog", "Contact Us"];

function BrandLogo() {
  return (
    <a
      href="/"
      aria-label="GenericDrug Home"
      className="flex shrink-0 items-center gap-[9px]"
    >
      {/* Medical cross mark */}
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="12.5"
          y="1.5"
          width="10"
          height="32"
          rx="5"
          stroke="#09AEE0"
          strokeWidth="3"
        />

        <rect
          x="1.5"
          y="12.5"
          width="32"
          height="10"
          rx="5"
          stroke="#09AEE0"
          strokeWidth="3"
        />

        <rect x="14" y="14" width="7" height="7" rx="2.5" fill="#09AEE0" />
      </svg>

      <span className="flex items-baseline leading-none tracking-[-0.9px]">
        <span className="text-[29px] font-bold text-[#075A69]">Generic</span>

        <span className="text-[29px] font-normal text-[#075A69]">Drug</span>
      </span>
    </a>
  );
}

export default function Header() {
  return (
    <header className="w-full">
      {/* Top shipping strip */}
      <div className="flex h-[46px] w-full items-center justify-center bg-[#075C6C]">
        <div className="flex items-center gap-[11px] text-white">
          <Truck size={21} strokeWidth={1.8} />

          <p className="text-[17px] font-normal leading-none tracking-[-0.15px]">
            FREE SHIPPING FOR MONTHLY PACK VALUED OVER $30
          </p>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-[#F3F6F7]">
        <div className="mx-auto flex h-[103px] w-full max-w-[1588px] items-center px-[44px]">
          <BrandLogo />

          {/* Navigation */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-[36px] lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={item === "Home" ? "/" : "#"}
                className={[
                  "whitespace-nowrap text-[17px] leading-none transition-colors",
                  item === "Home"
                    ? "font-bold text-[#293437]"
                    : "font-normal text-[#5D6669] hover:text-[#075C6C]",
                ].join(" ")}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="ml-auto flex items-center gap-[25px] text-[#444D50]">
            <button
              type="button"
              aria-label="Search"
              className="flex h-[38px] w-[38px] items-center justify-center transition-colors hover:text-[#08A9D9]"
            >
              <Search size={29} strokeWidth={1.65} />
            </button>

            <button
              type="button"
              aria-label="Account"
              className="flex h-[38px] w-[38px] items-center justify-center transition-colors hover:text-[#08A9D9]"
            >
              <UserRound size={29} strokeWidth={1.65} />
            </button>

            <button
              type="button"
              aria-label="Shopping bag"
              className="flex h-[38px] w-[38px] items-center justify-center transition-colors hover:text-[#08A9D9]"
            >
              <ShoppingBag size={28} strokeWidth={1.65} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
