/** @format */

import Image from "next/image";
import { CtaButton } from "../ui/ctaButton";

export const LaboratoryContainer = () => {
  const points = [
    "Complete Blood Counts (CBCs) to assess red and white blood cells and platelets",
    "Chemistry profiles evaluating kidney, liver, electrolyte, and blood glucose levels",
    "Pre-anesthetic blood panels to support safe surgical procedures",
    "Urinalysis and fecal testing for kidney health and parasite screening",
    "Heartworm and tick-borne disease testing",
    "Feline leukaemia (FeLV) and FIV testing",
    "Pancreatic, clotting, skin, ear, and parasite diagnostics",
  ];

  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-primary-white">
      <Image
        src={"/assets/commonBanner.svg"}
        alt="services-banner"
        height={466}
        width={1920}
        className="absolute top-0 left-0 z-0"
      />

      <Image
        src="/assets/rightPaws.svg"
        alt="right"
        className="absolute top-50 h-[1485px] -right-10 z-0"
        width={392}
        height={1484}
      />

      <div className="absolute top-[497px] right-30 pointer-events-none">
        <Image
          src="/assets/catAndDog.webp"
          alt="dog-and-cat"
          width={650}
          height={350}
          className="object-contain"
        />
      </div>

      <div className="flex flex-row justify-between items-start max-w-[1296px] mx-auto pt-[197px] px-4 relative z-1">
        <div className="flex flex-col max-w-[1026px] rounded-[16px] p-16 relative shrink-0">
          <div className="flex flex-row items-center justify-start gap-6 mb-6">
            <Image
              src="/icons/card2.svg"
              alt="lab-icon"
              height={87}
              width={87}
            />
            <h2 className="text-[48px] text-left font-otomanopee-one leading-[120%] text-primary-black uppercase">
              LABORATORY SERVICES
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-[20px] text-primary-black font-nunito font-medium leading-[140%]">
              Our in-house laboratory allows us to quickly evaluate your pet’s
              health and make informed medical decisions with minimal delay.
              Many essential tests are performed on-site, providing same-day
              results whenever possible and reducing stress for both pets and
              their families.
            </p>
            <p className="text-[20px] text-primary-black font-nunito font-medium leading-[140%]">
              These diagnostics help us assess internal organ function, detect
              early signs of illness, and ensure safe planning for medical and
              surgical care.
            </p>

            <div className="mt-6">
              <h4 className="text-[24px] leading-[28px] border-b-2 border-primary-purple font-bold font-nunito text-primary-black mb-4 w-fit">
                Key Laboratory Services Include
              </h4>
              <ul className="space-y-2">
                {points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[20px] font-nunito font-medium text-primary-black"
                  >
                    <span className="mt-2 w-2 h-2 rounded-full bg-primary-black flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[20px] text-primary-black font-nunito font-medium leading-[140%] mt-4">
              For advanced or specialized testing, we collaborate with trusted
              external laboratories for services such as hormone testing,
              bacterial culture and sensitivity, cytology, histopathology, and
              extended blood panels.
            </p>

            <CtaButton
              className="justify-start mt-6"
              icon="/icons/calender.svg"
            >
              Schedule A Test
            </CtaButton>
          </div>
        </div>
      </div>
    </div>
  );
};
