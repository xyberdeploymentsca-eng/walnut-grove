/** @format */

import Image from "next/image";
import { CtaButton } from "../ui/ctaButton";

export const DentalContainer = () => {
  const problems = [
    "Periodontal (gum) disease and plaque buildup",
    "Tooth decay and fractured or broken teeth",
    "Oral infections, inflammation, and tumors",
    "Persistent bad breath (halitosis)",
  ];

  const services = [
    "Professional teeth cleaning and polishing",
    "Dental X-rays for accurate diagnosis",
    "Tooth extractions and oral surgical procedures when needed",
  ];

  return (
    <div className="max-w-[1920px] mx-auto relative overflow-hidden pb-40 bg-primary-white">
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

      <div className="absolute top-[597px] right-80 pointer-events-none">
        <Image
          src="/assets/furry.webp"
          alt="dog-and-cat"
          width={257}
          height={318}
          className="object-contain"
        />
      </div>

      <div className="flex flex-row justify-between items-start max-w-[1296px] mx-auto pt-[297px] px-4 relative z-1">
        <div className="flex flex-col max-w-[1026px] rounded-[16px] p-16 relative shrink-0">
          <div className="flex flex-row items-center justify-start gap-6 mb-6">
            <Image
              src="/icons/card1.svg"
              alt="dental-icon"
              height={87}
              width={87}
            />
            <h2 className="text-[48px] text-left font-otomanopee-one leading-[120%] text-primary-black uppercase">
              DENTAL CARE SERVICES
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-[20px] text-primary-black font-nunito font-medium leading-[140%]">
              Dental health plays a vital role in your pet’s overall well-being.
              Dental disease is common in pets and, if left untreated, can lead
              to pain, infection, and secondary health issues affecting the
              heart, liver, and kidneys. Early detection and routine dental care
              help prevent discomfort and support long-term health.
            </p>
            <p className="text-[20px] text-primary-black font-nunito font-medium leading-[140%]">
              Our team provides gentle, thorough dental services designed to
              keep your pet comfortable while maintaining optimal oral hygiene.
            </p>

            <div className="mt-6 flex flex-row gap-16">
              <div className="flex-1">
                <h4 className="text-[24px] leading-[28px] border-b border-primary-purple font-bold font-nunito text-primary-black mb-4 w-fit">
                  Common Dental Problems
                </h4>
                <ul className="space-y-2">
                  {problems.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-[18px] font-nunito font-medium text-primary-black"
                    >
                      <span className="mt-2 w-2 h-2 rounded-full bg-primary-black flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <h4 className="text-[24px] leading-[28px] border-b border-primary-purple font-bold font-nunito text-primary-black mb-4 w-fit">
                  Dental Services Include
                </h4>
                <ul className="space-y-2">
                  {services.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-[18px] font-nunito font-medium text-primary-black"
                    >
                      <span className="mt-2 w-2 h-2 rounded-full bg-primary-black flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6">
              <h4 className="text-[24px] leading-[28px] border-b border-primary-purple font-bold font-nunito text-primary-black mb-4 w-fit">
                Preventative Care
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[18px] font-nunito font-medium text-primary-black">
                  <span className="mt-2 w-2 h-2 rounded-full bg-primary-black flex-shrink-0" />
                  Regularly brushing your pet’s teeth can effectively reduce the
                  accumulation of harmful bacteria and plaque within its oral
                  cavity.
                </li>
                <li className="flex items-start gap-3 text-[18px] font-nunito font-medium text-primary-black">
                  <span className="mt-2 w-2 h-2 rounded-full bg-primary-black flex-shrink-0" />
                  It is generally more advantageous to adopt a proactive
                  approach in contrast to a reactive one.
                </li>
                <li className="flex items-start gap-3 text-[18px] font-nunito font-medium text-primary-black">
                  <span className="mt-2 w-2 h-2 rounded-full bg-primary-black flex-shrink-0" />
                  Human toothpaste should be avoided, as this can contain
                  xylitol (also known as birch sugar), which is toxic to house
                  pets.
                </li>
              </ul>
            </div>

            <p className="text-[20px] text-primary-black font-nunito font-medium leading-[140%] mt-8">
              With regular dental checkups and preventive care, including safe
              at-home brushing—we can help protect your pet from dental pain and
              related health complications, keeping their mouth healthy and
              their quality of life high.
            </p>

            <CtaButton
              className="justify-start mt-6"
              icon="/icons/calender.svg"
            >
              Schedule A Dental Visit
            </CtaButton>
          </div>
        </div>
      </div>
    </div>
  );
};
