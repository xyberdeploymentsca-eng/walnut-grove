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
    title: "Information We Collect",
    body: "We may collect personal information necessary to provide veterinary services, including:",
    items: [
      { label: "Client Name And Contact Information", bold: true },
      { label: "Pet medical records and history" },
      { label: "Payment information" },
      { label: "Appointment and service details" },
      {
        label: "Supports longer, healthier lives through proactive monitoring.",
      },
    ],
    footer:
      "This information is collected solely for the purpose of delivering high-quality veterinary care and maintaining accurate medical records.",
  },
  {
    title: "How We Use Your Information",
    body: "Your information is used to:",
    items: [
      { label: "Schedule And Manage Appointments", bold: true },
      { label: "Provide medical care and treatment" },
      { label: "Process payments" },
      { label: "Communicate important updates regarding your pet's health" },
      { label: "Improve our services and client experience" },
    ],
    footer:
      "We do not sell, trade, or share your personal information with third parties for marketing or commercial purposes.",
  },
  {
    title: "Data Protection",
    body: "We maintain appropriate safeguards to protect your personal and medical information. No information will be disclosed to outside parties without the consent of the pet owner, except where required by law.",
  },
  {
    title: "Website Privacy",
    body: "Our website does not sell or distribute visitor information to third-party vendors or internet businesses. Any information submitted through our website is used solely for communication and service-related purposes.",
  },
  {
    title: "Questions About Privacy",
    body: "If you have any questions regarding your privacy or how your information is handled, please contact our clinic directly.",
  },
];

export const PrivacyPolicyContainer = () => {
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
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-4 lg:gap-5 mb-8 lg:mb-6 text-center lg:text-left">
          <Image
            src="/icons/pinkPaw.svg"
            alt="paw"
            height={60}
            width={60}
            className="bg-primary-white/60 rounded-full p-2 w-[54px] lg:w-[60px] h-auto"
          />
          <h1 className="text-[24px] lg:text-[40px] font-otomanopee-one leading-tight lg:leading-[120%] text-primary-black uppercase">
            Our Privacy Policy,{" "}
            <span className="lg:block">Your Privacy Matters To Us!</span>
          </h1>
        </div>

        <p className="text-[16px] lg:text-[17px] font-nunito font-medium text-primary-black leading-relaxed lg:leading-[160%] mb-10 text-center lg:text-left">
          Walnut Grove Animal Hospital is committed to protecting the privacy of
          our clients, patients, and website visitors. We respect the trust you
          place in us and handle your information with care and confidentiality.
        </p>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-[18px] lg:text-[20px] font-nunito font-semibold text-primary-black mb-3 lg:mb-2 pb-1 border-b border-[#C9A0DC] w-fit">
                {section.title}
              </h2>
              {section.body && (
                <p className="text-[15px] lg:text-[16px] font-nunito font-medium text-primary-black leading-relaxed lg:leading-[160%] mb-3">
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
