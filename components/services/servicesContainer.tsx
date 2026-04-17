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
      {/* New Hero Banner */}
      <section className="relative max-w-[1880px] mx-auto lg:mt-10 rounded-[30px] lg:rounded-[40px] overflow-hidden min-h-[500px] lg:h-[643px]">
        <Image
          src="/assets/serviceBanner.webp"
          alt="services-banner"
          fill
          priority
          className="object-cover"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center lg:items-start lg:pl-[15%] px-6 pointer-events-none bg-black/20 lg:bg-transparent">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 mb-4 lg:mb-2">
            <div className="bg-[#EBE2F9]/20 lg:bg-transparent rounded-full p-3 lg:p-4 flex items-center justify-center">
              <Image
                src="/icons/pinkPaw.svg"
                alt="paw-icon"
                height={87}
                width={87}
                className="hidden lg:block w-[48px] lg:w-[87px] h-auto"
              />
            </div>
            <h1 className="text-[24px] lg:text-[40px] font-otomanopee-one leading-tight lg:leading-[38px] text-text-white uppercase tracking-[0.02em] max-w-[700px] text-center lg:text-left">
              Top Rated Veterinary Services for Your Beloved Pets
            </h1>
          </div>
          <div className="max-w-[550px] lg:ml-4">
            <p className="text-[16px] lg:text-[20px] text-text-white font-nunito font-medium leading-relaxed lg:leading-[22px] opacity-90 text-center lg:text-left">
              From preventive screenings to surgical care and boarding,
              we&apos;re here to help your pet feel safe, comfortable, and well
              cared for. Contact us for a free consultation on how we can become
              your pet&apos;s best choice of vet!
            </p>
          </div>
        </div>
      </section>

      <ServiceCards />
      <Screening />
      <ServiceFaq faqs={servicesPageData?.faqs} />
    </div>
  );
};
