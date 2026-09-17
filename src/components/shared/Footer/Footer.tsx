import { ArrowUpRight, Mail, Phone } from "lucide-react";

function BrandLogo() {
  return (
    <a
      href="/"
      aria-label="GenericDrug Home"
      className="inline-flex items-center gap-[9px]"
    >
      <svg
        width="33"
        height="33"
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
        <span className="text-[27px] font-bold text-white">Generic</span>
        <span className="text-[27px] font-normal text-white">Drug</span>
      </span>
    </a>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.7" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M14 8H17V4.5C16.3 4.4 15 4.25 13.55 4.25C10.7 4.25 8.75 6 8.75 9.2V12H5.5V16H8.75V23H13V16H16.4L17 12H13V9.6C13 8.45 13.3 8 14 8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 4L19 20M19 4L5 20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 10V17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 17V13.5C12 11.9 12.8 11 14.2 11C15.5 11 16 11.9 16 13.5V17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="7.5" r="1" fill="currentColor" />
    </svg>
  );
}

function FooterWordmark() {
  return (
    <div aria-hidden="true" className="h-[228.23px] w-full overflow-hidden">
      <svg
        viewBox="0 0 1296 228.23"
        className="block h-full w-full"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="footerWordmarkGradient"
            x1="0"
            y1="0"
            x2="0"
            y2="228.23"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="white" stopOpacity="0.10" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        <text
          x="0"
          y="178"
          textLength="1296"
          lengthAdjust="spacingAndGlyphs"
          fill="url(#footerWordmarkGradient)"
          fontSize="178"
          fontWeight="600"
          fontFamily="Arial, Helvetica, sans-serif"
        >
          Generic Drug
        </text>
      </svg>
    </div>
  );
}

const patientLinks = [
  "About Us",
  "Browse medications",
  "Price list",
  "How it works",
  "Patient login",
];

const supportLinks = [
  "Transfer prescription",
  "Upload prescription",
  "FAQ",
  "Contact Us",
];

export default function Footer() {
  return (
    <footer
      className="
        overflow-hidden
        rounded-t-[34px]
        bg-[#075F70]
        px-6
        pb-0
        pt-[90px]
        text-white
        lg:px-[76px]
      "
    >
      <div className="mx-auto w-full max-w-[1296px]">
        {/* Brand + newsletter */}
        <div
          className="
            grid gap-[60px]
            border-b border-white/15
            pb-[68px]
            lg:grid-cols-[1fr_355px]
            lg:items-start
          "
        >
          <div>
            <BrandLogo />

            <p
              className="
                mt-[30px]
                max-w-[455px]
                text-[20px]
                font-normal
                leading-[1.5]
                text-white/90
              "
            >
              Affordable generic medications, transparent
              <br className="hidden lg:block" />
              pricing, secure prescription support, and free
              <br className="hidden lg:block" />
              delivery without complexity.
            </p>
          </div>

          <div>
            <h3 className="text-[25px] font-medium leading-[1.2] tracking-[-0.6px]">
              Subscribe to our
              <br />
              Newsletter
            </h3>

            <form
              onSubmit={(event) => event.preventDefault()}
              className="
                mt-[18px]
                flex h-[60px]
                items-center
                rounded-full
                border border-white/20
                bg-white/[0.06]
                pl-[23px]
                pr-[7px]
              "
            >
              <Mail
                size={20}
                strokeWidth={1.7}
                className="shrink-0 text-white/70"
              />

              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="
                  h-full min-w-0 flex-1
                  bg-transparent
                  px-[12px]
                  text-[16px]
                  text-white
                  outline-none
                  placeholder:text-white/65
                "
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="
                  flex h-[44px] w-[44px]
                  shrink-0 items-center justify-center
                  rounded-full
                  bg-white
                  text-[#182224]
                "
              >
                <ArrowUpRight size={20} strokeWidth={1.8} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer links */}
        <div
          className="
            mt-[62px]
            flex w-full
            flex-col
            items-start
            gap-[32px]
            lg:h-[304.23px]
          "
        >
          <div
            className="
              grid w-full flex-1
              gap-[45px]
              sm:grid-cols-2
              lg:grid-cols-[1fr_1fr_1fr_0.75fr]
            "
          >
            <div>
              <h4 className="text-[20px] font-medium">Patients</h4>

              <div className="mt-[25px] space-y-[19px]">
                {patientLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block w-fit text-[16px] text-white/75 hover:text-white"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[20px] font-medium">Support</h4>

              <div className="mt-[25px] space-y-[19px]">
                {supportLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block w-fit text-[16px] text-white/75 hover:text-white"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[20px] font-medium">Contact Info</h4>

              <div className="mt-[25px] space-y-[20px]">
                <a
                  href="tel:+496923454601"
                  className="flex w-fit items-center gap-[13px] text-[16px] text-white/75 hover:text-white"
                >
                  <Phone size={20} strokeWidth={1.7} />
                  (+49) 69 2345 4601
                </a>

                <a
                  href="mailto:hello@genericdrugs.com"
                  className="flex w-fit items-center gap-[13px] text-[16px] text-white/75 hover:text-white"
                >
                  <Mail size={20} strokeWidth={1.7} />
                  hello@genericdrugs.com
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[20px] font-medium">Social</h4>

              <div className="mt-[25px] space-y-[20px]">
                <a
                  href="#"
                  className="flex w-fit items-center gap-[13px] text-[16px] text-white/75 hover:text-white"
                >
                  <InstagramIcon />
                  Instagram
                </a>

                <a
                  href="#"
                  className="flex w-fit items-center gap-[13px] text-[16px] text-white/75 hover:text-white"
                >
                  <FacebookIcon />
                  Facebook
                </a>

                <a
                  href="#"
                  className="flex w-fit items-center gap-[13px] text-[16px] text-white/75 hover:text-white"
                >
                  <XIcon />
                  Twitter
                </a>

                <a
                  href="#"
                  className="flex w-fit items-center gap-[13px] text-[16px] text-white/75 hover:text-white"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div
            className="
              flex min-h-[52px]
              w-full
              flex-col gap-5
              border-t border-white/15
              pt-[20px]
              text-[16px]
              text-white/90
              sm:flex-row
              sm:items-start
              sm:justify-between
            "
          >
            <p>© Copyright 2026 | Generic Drugs</p>

            <div className="flex items-center gap-[34px]">
              <a href="#" className="hover:text-white">
                Privacy policy
              </a>

              <a href="#" className="hover:text-white">
                Terms of service
              </a>
            </div>
          </div>
        </div>

        {/* Reduced gap to move watermark upward */}
        <div className="h-[48px]" />

        <FooterWordmark />
      </div>
    </footer>
  );
}
