/** @format */

import Image from "next/image";
import { CtaButton } from "../ui/ctaButton";

export const SpayNeuterContainer = () => {
  const points = [
    "Reduced risk of reproductive cancers and life-threatening infections",
    "Lower chances of prostate disease and testicular cancer in males",
    "Improved longevity and overall health",
    "Decreased roaming, aggression, and hormone-driven behaviors",
    "Help in preventing pet overpopulation and reducing shelter intake",
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

      <div className="absolute top-[467px] right-120 pointer-events-none">
        <Image
          src="/assets/twoHappyDogs.webp"
          alt="dog-and-cat"
          width={266}
          height={302}
          className="object-contain"
        />
      </div>

      <div className="flex flex-row justify-between items-start max-w-[1296px] mx-auto pt-[297px] px-4 relative z-1">
        <div className="flex flex-col max-w-[1026px] rounded-[16px] p-16 relative shrink-0">
          <div className="flex flex-row items-center justify-start gap-6 mb-6">
            <Image
              src="/icons/card1.svg"
              alt="spay-neuter-icon"
              height={87}
              width={87}
            />
            <h2 className="text-[48px] text-left font-otomanopee-one leading-[120%] text-primary-black uppercase">
              SPAY & NEUTER
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-[20px] text-primary-black font-nunito font-medium leading-[140%]">
              Spaying and neutering are important preventive procedures that
              support your pet’s long-term health and well-being. Beyond
              preventing unplanned litters, these surgeries play a key role in
              reducing the risk of serious health conditions and improving
              quality of life.
            </p>
            <p className="text-[20px] text-primary-black font-nunito font-medium leading-[140%]">
              Our team provides professional, compassionate spay and neuter
              care, guiding you through every step of the process.
            </p>

            <div className="mt-6">
              <h4 className="text-[24px] leading-[28px] border-b border-primary-purple font-bold font-nunito text-primary-black mb-4 w-fit">
                Benefits of Spaying & Neutering
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
              Our experienced veterinary team provides professional,
              compassionate spay and neuter care, guiding you through every step
              of the process. Together, we can help your pet live a healthier,
              happier life while contributing to a safer and more humane
              community.
            </p>

            <p className="text-[18px] text-primary-black font-nunito font-medium leading-[140%] mt-4 italic opacity-80">
              We recommend discussing the ideal timing for your pet’s procedure
              with your veterinarian, as age, breed, and health factors can
              influence the best approach.
            </p>

            <CtaButton
              className="justify-start mt-6"
              icon="/icons/calender.svg"
            >
              Schedule A Surgery
            </CtaButton>
          </div>
        </div>
      </div>
    </div>
  );
};
