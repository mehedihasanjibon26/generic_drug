import { ArrowUpRight, Cross, MapPin, Paperclip, Phone } from "lucide-react";
import { useRef, useState, type FormEvent } from "react";

export default function ContactSection() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(true);

    window.setTimeout(() => {
      setSubmitted(false);
    }, 3000);

    event.currentTarget.reset();
    setFileName("");
  };

  return (
    <section
      className="
        w-full
        bg-[#F4F7F9]
        px-[40px]
        pb-[120px]
        pt-[68px]
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1360px]
          grid-cols-[1fr_606px]
          gap-[72px]
        "
      >
        {/* Left */}
        <div
          className="
            flex
            min-h-[760px]
            flex-col
          "
        >
          <div>
            <div
              className="
                inline-flex
                h-[34px]
                items-center
                gap-[8px]
                rounded-full
                border
                border-[#08A9DF]
                px-[13px]
                text-[14px]
                text-[#3D474D]
              "
            >
              <Cross size={16} strokeWidth={2} className="text-[#08A9DF]" />
              Get in touch
            </div>

            <h1
              className="
                mt-[18px]
                max-w-[500px]
                text-[54px]
                font-semibold
                leading-[1.08]
                tracking-[-2px]
                text-[#24292C]
              "
            >
              Your Health, Our
              <br />
              Priority
            </h1>
          </div>

          {/* Contact info */}
          <div className="mt-auto pb-[10px]">
            <div>
              <p
                className="
                  text-[16px]
                  font-normal
                  text-[#92999D]
                "
              >
                Contact Information
              </p>

              <div className="mt-[18px] space-y-[18px]">
                <div
                  className="
                    flex
                    items-center
                    gap-[10px]
                  "
                >
                  <MapPin
                    size={22}
                    strokeWidth={1.7}
                    className="shrink-0 text-[#1F272B]"
                  />

                  <span
                    className="
                      text-[16px]
                      text-[#252C30]
                    "
                  >
                    123 Main Street Suite 400 Dallas, TX 75201 United States
                  </span>
                </div>

                <a
                  href="tel:+14155550132"
                  className="
                    flex
                    w-fit
                    items-center
                    gap-[10px]
                    text-[16px]
                    text-[#252C30]
                    transition-colors
                    hover:text-[#08A9DF]
                  "
                >
                  <Phone size={21} strokeWidth={1.7} />
                  +1 (415) 555-0132
                </a>
              </div>
            </div>

            <div className="mt-[32px]">
              <p
                className="
                  text-[16px]
                  font-normal
                  text-[#92999D]
                "
              >
                Retail Locations
              </p>

              <div className="mt-[18px] space-y-[18px]">
                <div
                  className="
                    flex
                    items-center
                    gap-[10px]
                  "
                >
                  <MapPin
                    size={22}
                    strokeWidth={1.7}
                    className="shrink-0 text-[#1F272B]"
                  />

                  <span
                    className="
                      text-[16px]
                      text-[#252C30]
                    "
                  >
                    123 Main Street Suite 400 Dallas, TX 75201 United States
                  </span>
                </div>

                <a
                  href="tel:+14155550132"
                  className="
                    flex
                    w-fit
                    items-center
                    gap-[10px]
                    text-[16px]
                    text-[#252C30]
                    transition-colors
                    hover:text-[#08A9DF]
                  "
                >
                  <Phone size={21} strokeWidth={1.7} />
                  +1 (415) 555-0132
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right form */}
        <div
          className="
            rounded-[18px]
            bg-white
            px-[40px]
            py-[42px]
          "
        >
          <form onSubmit={handleSubmit} className="space-y-[22px]">
            <FormField label="Full Name">
              <input
                required
                name="fullName"
                type="text"
                placeholder="Your Full Name"
                className={inputClass}
              />
            </FormField>

            <FormField label="Email">
              <input
                required
                name="email"
                type="email"
                placeholder="Your Email Name"
                className={inputClass}
              />
            </FormField>

            <FormField label="Subject">
              <select
                required
                name="subject"
                defaultValue=""
                className={`
                  ${inputClass}
                  appearance-none
                `}
              >
                <option value="" disabled>
                  Select your Subject
                </option>

                <option value="medication">Medication enquiry</option>

                <option value="prescription">Prescription support</option>

                <option value="delivery">Delivery enquiry</option>

                <option value="general">General enquiry</option>
              </select>
            </FormField>

            <FormField label="Message">
              <textarea
                required
                name="message"
                placeholder="Tell us about your project"
                className="
                  h-[198px]
                  w-full
                  resize-none
                  rounded-[8px]
                  border
                  border-[#D9E1E6]
                  bg-white
                  px-[18px]
                  py-[16px]
                  text-[15px]
                  text-[#30383D]
                  outline-none
                  transition-colors
                  placeholder:text-[#9AA7B7]
                  focus:border-[#08A9DF]
                "
              />
            </FormField>

            {/* Attachment */}
            <div>
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  setFileName(file?.name ?? "");
                }}
              />

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="
                  flex
                  items-center
                  gap-[9px]
                  text-[15px]
                  font-medium
                  text-[#242C30]
                  transition-colors
                  hover:text-[#08A9DF]
                "
              >
                <Paperclip size={20} strokeWidth={1.8} />

                {fileName || "Add Attachment"}
              </button>
            </div>

            <button
              type="submit"
              className="
                inline-flex
                h-[52px]
                min-w-[164px]
                items-center
                justify-center
                gap-[10px]
                rounded-full
                bg-[#08A9DF]
                px-[24px]
                text-[15px]
                font-medium
                text-white
                transition-colors
                hover:bg-[#0797C9]
              "
            >
              Submit
              <ArrowUpRight size={17} strokeWidth={1.8} />
            </button>

            {submitted && (
              <p
                role="status"
                className="
                  text-[14px]
                  font-medium
                  text-[#08788F]
                "
              >
                Your message has been submitted successfully.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

type FormFieldProps = {
  label: string;
  children: React.ReactNode;
};

function FormField({ label, children }: FormFieldProps) {
  return (
    <label className="block">
      <span
        className="
          mb-[9px]
          block
          text-[15px]
          font-medium
          text-[#3C4650]
        "
      >
        {label}
      </span>

      {children}
    </label>
  );
}

const inputClass = `
  h-[56px]
  w-full
  rounded-[8px]
  border
  border-[#D9E1E6]
  bg-white
  px-[18px]
  text-[15px]
  text-[#30383D]
  outline-none
  transition-colors
  placeholder:text-[#9AA7B7]
  focus:border-[#08A9DF]
`;
