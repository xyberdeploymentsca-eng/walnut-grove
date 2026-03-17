/** @format */

import Image from "next/image";

type SectionItem = { label: string; bold?: boolean };

type Section = {
  title: string;
  body?: string;
  items?: SectionItem[];
  footer?: string;
};

const sections: Section[] = [
  {
    title: "General Policy",
    body: "Walnut Grove Animal Hospital operates primarily by appointment to ensure adequate time for each patient and scheduled procedures. Emergency cases will always receive priority, which may occasionally result in appointment delays.\nBy using our services, you agree to the following terms and policies.",
  },
  {
    title: "Patient Arrival Policy",
    body: "For the safety of all clients and pets:",
    items: [
      { label: "Dogs Must Be On A Leash And Properly Controlled.", bold: true },
      { label: "Cats must be in a secure carrier or on a leash." },
      { label: "Loaner leashes or carriers are available if needed." },
      {
        label:
          "Vaccinations must be up to date for all animals visiting the clinic.",
      },
    ],
  },
  {
    title: "Open Hospital Policy",
    body: "We operate as an open hospital and welcome pet owners to be present during procedures when appropriate and safe to do so.",
  },
  {
    title: "Drop-Off Appointments",
    body: "Drop-off appointments are available for your convenience. Pets may be left with us for several hours, examined between scheduled appointments, and the veterinarian will contact you with findings and discharge instructions.",
  },
  {
    title: "In-House Pharmacy & Prescription Diets",
    body: "We maintain an in-house pharmacy and carry prescription diets to support your pet's ongoing treatment and health needs. Prescriptions may be filled on-site when available.",
  },
  {
    title: "Payments",
    body: "Payment is due at the time services are rendered.\nWe accept:",
    items: [
      { label: "Cash" },
      { label: "Debit" },
      { label: "Visa" },
      { label: "MasterCard" },
    ],
    footer:
      "Estimates are provided for surgeries and hospitalizations upon request.",
  },
  {
    title: "Discounts",
    body: "Discounted services may be available to pre-approved groups or clients. Please contact our clinic for eligibility details.",
  },
  {
    title: "Limitation of Liability",
    body: "While we strive to provide the highest standard of veterinary care, outcomes may vary based on individual medical circumstances. Walnut Grove Animal Hospital is not liable for unforeseen medical complications when reasonable and accepted veterinary standards of care have been followed.",
  },
];

export const TermsContainer = () => {
  return (
    <div className="max-w-[1920px] mx-auto overflow-x-hidden bg-primary-white relative">
      <Image
        src="/assets/commonBanner.svg"
        alt="banner"
        height={466}
        width={1920}
        className="absolute top-0 left-0 z-0 w-full h-[250px] lg:h-auto object-cover"
      />
      <Image
        src="/assets/rightPaws.svg"
        alt="paw decoration"
        className="absolute top-50 h-[1485px] -right-10 z-0 hidden lg:block"
        width={392}
        height={1484}
      />

      <div className="max-w-[900px] mx-auto pt-[160px] lg:pt-[260px] pb-20 px-6 lg:px-4 relative z-1">
        {/* Hero Heading */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-4 lg:gap-5 mb-10 lg:mb-6 text-center lg:text-left">
          <Image
            src="/icons/pinkPaw.svg"
            alt="paw"
            height={60}
            width={60}
            className="bg-primary-white/60 rounded-full p-2 w-[54px] lg:w-[60px] h-auto"
          />
          <h1 className="text-[24px] lg:text-[40px] font-otomanopee-one leading-tight lg:leading-[120%] text-primary-black uppercase">
            Read Our Terms &amp; Conditions{" "}
            <span className="lg:block">Of Service</span>
          </h1>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-[18px] lg:text-[20px] font-nunito font-semibold text-primary-black mb-3 lg:mb-2 pb-1 border-b border-[#C9A0DC] w-fit">
                {section.title}
              </h2>
              {section.body && (
                <p className="text-[15px] lg:text-[16px] font-nunito font-medium text-primary-black leading-relaxed lg:leading-[160%] mb-3 whitespace-pre-line">
                  {section.body}
                </p>
              )}
              {section.items && (
                <ul className="space-y-2 lg:space-y-1 mb-4 lg:mb-3 ml-2">
                  {section.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-start gap-3 text-[15px] lg:text-[16px] font-nunito text-primary-black"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-black flex-shrink-0" />
                      <span className={item.bold ? "font-bold" : "font-medium"}>
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {section.footer && (
                <p className="text-[15px] lg:text-[16px] font-nunito font-medium text-primary-black leading-relaxed lg:leading-[160%]">
                  {section.footer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
