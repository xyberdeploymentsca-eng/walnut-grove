/** @format */

import Image from "next/image";
import { CtaButton } from "../ui/ctaButton";

export const BoardingContainer = () => {
  const points = [
    "Private, spacious accommodations with cozy bedding",
    "Daily feeding routines tailored to individual needs",
    "Gentle playtime, enrichment, and loving interaction",
    "Veterinary supervision for added peace of mind",
    "Drop-off and pick-up available during regular business hours, Monday through Sunday",
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
        className="absolute top-50 h-[1485px] right-10 z-0"
        width={392}
        height={1484}
      />

      <div className="absolute top-[497px] right-90 pointer-events-none">
        <Image
          src="/assets/twoBoardingCats.webp"
          alt="dog-and-cat"
          width={264}
          height={324}
          className="object-contain"
        />
      </div>

      <div className="flex flex-row justify-between items-start max-w-[1296px] mx-auto pt-[297px] px-4 relative z-1">
        <div className="flex flex-col max-w-[1026px] rounded-[16px] p-16 relative shrink-0">
          <div className="flex flex-row items-center justify-start gap-6 mb-6">
            <Image
              src="/icons/card1.svg"
              alt="boarding-icon"
              height={87}
              width={87}
            />
            <h2 className="text-[48px] text-left font-otomanopee-one leading-[120%] text-primary-black uppercase">
              PET BOARDING SERVICES
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-[20px] text-primary-black font-nunito font-medium leading-[140%]">
              Our cat boarding service provides a safe, comfortable place for
              your pet while you’re away. Every guest receives individualized
              attention from our caring team, ensuring they feel secure,
              relaxed, and well looked after throughout their stay.
            </p>
            <p className="text-[20px] text-primary-black font-nunito font-medium leading-[140%]">
              As part of a full-service veterinary hospital, we offer the added
              reassurance of medical oversight should any concerns arise.
            </p>

            <div className="mt-6">
              <h4 className="text-[24px] leading-[28px] border-b border-primary-purple font-bold font-nunito text-primary-black mb-4 w-fit">
                What Your Cat Can Expect
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
              When you can’t be there, you can trust that your cat is in
              compassionate, capable hands, receiving attentive care in a clean,
              secure, and professionally supervised setting. We strive to
              maintain a calm, low-stress environment so your cat can rest
              comfortably and adjust with ease.
            </p>

            <CtaButton
              className="justify-start mt-6"
              icon="/icons/calender.svg"
            >
              Schedule Boarding
            </CtaButton>
          </div>
        </div>
      </div>
    </div>
  );
};
