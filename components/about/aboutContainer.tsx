/** @format */

import Image from "next/image";
import { Care } from "./care";
import { Team } from "./team";
import { Heart } from "./heart";
import { AboutFaq } from "./aboutFaq";

export const AboutContainer = ({ faqs }: { faqs?: any[] }) => {
  return (
    <div className="max-w-[1920px] mx-auto relative bg-primary-white mb-[100vh]">
      <Image
        src={"/assets/aboutBanner.svg"}
        alt="services-banner"
        height={986}
        width={1920}
        className="absolute top-0 left-0 z-0"
      />
      <div className="flex flex-col items-start justify-start z-1 pt-[20.5%] pl-[20%]">
        <h1 className="text-[32px] font-otomanopee-one text-left font-nunito font-normal z-1 leading-[38px] text-primary-black max-w-[619px]">
          Caring for your Pets for Over
          <br /> 15 Years!
        </h1>
        <h2 className="text-[20px] text-left mt-4 font-nunito font-normal z-1 leading-[24px] text-primary-black max-w-[619px]">
          Welcome to Walnut Grove Animal Hospital!
          <br />  As you explore more about our clinic, you’ll discover a team
          deeply <br /> compassionate & committed to exceptional service,
          advanced care, and the well-being of every animal entrusted to us.
        </h2>
      </div>
      <Care />
      <Team />
      <Heart />
      <AboutFaq faqs={faqs as any} />
    </div>
  );
};
