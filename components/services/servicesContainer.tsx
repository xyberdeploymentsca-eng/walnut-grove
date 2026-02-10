/** @format */

import Image from "next/image";
import { ServiceCards } from "./serviceCards";
import { Screening } from "./screening";
import { ServiceFaq } from "./serviceFaq";

export const ServicesContainer = ({
  servicesPageData,
}: {
  servicesPageData?: any;
}) => {
  return (
    <div className="max-w-[1920px] mx-auto bg-primary-white">
      <Image
        src={"/assets/commonBanner.svg"}
        alt="services-banner"
        height={466}
        width={1920}
        className="absolute top-0 left-0 z-0"
      />
      <div className="flex flex-row justify-between items-center max-w-[1296px] mx-auto pt-[12%] px-4 relative z-1">
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-left gap-6 relative z-1">
            <Image
              src="/icons/pinkPaw.svg"
              alt="pink-bow"
              height={87}
              width={87}
            />
            <h2 className="text-[32px] text-left font-nunito font-normal z-1 leading-[38px] text-primary-black uppercase font-otomanopee-one">
              Why Health Screenings Matter <br /> at Every Stage of your pet’s
              Life
            </h2>
          </div>
          <p className="text-[22px] mt-6 text-primary-black leading-[32px] font-medium text-left relative z-1 max-w-[800px]">
            Pets can’t tell us when something feels wrong, and instinctively,
            they often hide signs of illness until problems become advanced.
            Regular health screenings allow us to look beneath the surface,
            identifying changes early and supporting your pet’s wellbeing
            through every life stage.
          </p>
        </div>
        <Image
          src="/assets/goldenDog.webp"
          alt="golden-dog"
          height={326}
          width={344}
          className="object-contain"
        />
      </div>

      <ServiceCards />
      <Screening />
      <ServiceFaq faqs={servicesPageData?.faqs} />
    </div>
  );
};
