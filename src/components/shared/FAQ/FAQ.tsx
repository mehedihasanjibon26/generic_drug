import { useState } from "react";
import { Mail, MapPin, Minus, Plus } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How does this program work?",
    answer:
      "Our pharmacy workflow helps you review medication options, complete prescription requirements, and continue through the appropriate fulfillment process.",
  },
  {
    id: 2,
    question: "Can I cancel anytime?",
    answer:
      "Cancellation options can depend on the medication, order status, and fulfillment stage.",
  },
  {
    id: 3,
    question: "Do I need a prescription?",
    answer:
      "Mike reached out to me when I didn't complete my order online. He was patient and kind and answered all my questions. Mike made me feel so comfortable about starting the program. I feel confident that I will have good results.",
  },
  {
    id: 4,
    question:
      "What happens if the medical provider decides I am not a good candidate for the medication?",
    answer:
      "If a medical provider determines that a medication is not appropriate, the order will not proceed for that medication and the available next steps can be reviewed.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="bg-white px-6 py-[115px] lg:px-[48px] lg:py-[132px]">
      <div
        className="
          mx-auto grid w-full max-w-[1945px]
          gap-[90px]
          lg:grid-cols-[720px_minmax(0,1fr)]
          xl:gap-[115px]
        "
      >
        {/* Left content */}
        <div className="flex min-h-[590px] flex-col">
          <div>
            <h2
              className="
                max-w-[650px]
                text-[50px]
                font-bold
                leading-[1.08]
                tracking-[-2.4px]
                text-[#050505]
                sm:text-[56px]
                lg:text-[62px]
              "
            >
              Have{" "}
              <span
                className="
                  font-serif
                  text-[55px]
                  font-semibold
                  italic
                  leading-none
                  tracking-[-1.7px]
                  text-[#00A9E0]
                  sm:text-[61px]
                  lg:text-[67px]
                "
              >
                questions?
              </span>{" "}
              We
              <br />
              have answers
            </h2>

            <p
              className="
                mt-[27px]
                max-w-[620px]
                text-[20px]
                font-normal
                leading-[1.55]
                tracking-[-0.2px]
                text-[#6D7175]
                lg:text-[21px]
              "
            >
              Find quick answers to the most common questions about
              <br />
              Generic Drugs
            </p>
          </div>

          {/* Contact */}
          <div className="mt-auto space-y-[23px] pt-[95px]">
            <a
              href="mailto:support@synkaa.com"
              className="
                flex items-center gap-[15px]
                text-[19px]
                font-normal
                text-[#6D7175]
                transition-colors
                hover:text-[#00A9E0]
              "
            >
              <Mail size={27} strokeWidth={1.7} className="shrink-0" />

              <span>support@synkaa.com</span>
            </a>

            <div
              className="
                flex items-start gap-[15px]
                text-[19px]
                font-normal
                leading-[1.4]
                text-[#6D7175]
              "
            >
              <MapPin
                size={29}
                strokeWidth={1.7}
                className="mt-[1px] shrink-0"
              />

              <span>
                60 Paya Lebar Road, #10-31, Paya Lebar Square,
                <br />
                Singapore (409051)
              </span>
            </div>
          </div>
        </div>

        {/* FAQ accordion */}
        <div className="w-full">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div key={faq.id} className="border-b border-[#D8DEE2]">
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="
                    flex w-full
                    items-start justify-between
                    gap-[35px]
                    py-[30px]
                    text-left
                  "
                >
                  <span
                    className="
                      max-w-[1010px]
                      text-[23px]
                      font-semibold
                      leading-[1.3]
                      tracking-[-0.7px]
                      text-[#202224]
                      lg:text-[27px]
                    "
                  >
                    {faq.question}
                  </span>

                  <span
                    className="
                      flex h-[44px] w-[44px]
                      shrink-0
                      items-center justify-center
                      text-[#606365]
                    "
                  >
                    {isOpen ? (
                      <Minus size={36} strokeWidth={1.55} />
                    ) : (
                      <Plus size={36} strokeWidth={1.55} />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-[31px] pr-[70px]">
                    <p
                      className="
                        max-w-[1120px]
                        text-[18px]
                        font-normal
                        leading-[1.55]
                        tracking-[-0.15px]
                        text-[#2E3032]
                        lg:text-[20px]
                      "
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
