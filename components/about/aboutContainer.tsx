/** @format */

import Image from "next/image";

export const AboutContainer = () => {
  return (
    <div className="max-w-[1920px] mx-auto relative bg-primary-white mb-[100vh]">
      <Image
        src={"/assets/aboutBanner.svg"}
        alt="services-banner"
        height={986}
        width={1920}
        className="absolute top-0 left-0 z-0"
      />
      <div className="flex flex-col items-center justify-center z-1 pt-[10.5%]">
        <h1 className="text-[32px] font-otomanopee-one text-center font-nunito font-normal z-1 leading-[38px] text-primary-black">
          Caring for your Pets for Over 15 Years!
        </h1>
        <h2 className="text-[20px] text-center mt-4 font-nunito font-normal z-1 leading-[24px] text-primary-black">
          Expert veterinary care, delivered with warmth and compassion,
          <br />
          focused on comfort, trust, and your pet’s well-being.
        </h2>
      </div>
    </div>
  );
};
