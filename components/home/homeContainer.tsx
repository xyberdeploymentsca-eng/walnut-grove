/** @format */

import Image from "next/image";
import { CtaButton } from "../ui/ctaButton";
import { Welcome } from "./welcome";
import { Service } from "./service";
import { Team } from "./team";
import { Gallery } from "./gallery";
import { Testimonials } from "./testimonials";
import Link from "next/link";

const HomeContainer = ({ testimonials }: { testimonials: any }) => {
  return (
    <div className="max-w-[1920px] mx-auto font-nunito bg-primary-white">
      <Image
        className="absolute top-0 left-1/2 -translate-x-1/2 z-0"
        src="/assets/homeBanner.svg"
        alt="home-banner"
        height={1135}
        width={1920}
      />
      <div className="flex flex-col items-center justify-center z-1 pt-[10.5%]">
        <h1 className="text-[32px] uppercase font-otomanopee-one text-center font-nunito font-normal z-1 leading-[38px] text-primary-black">
          Compassionate care,
          <br /> for the paws you love the most!
        </h1>
        <h2 className="text-[20px] text-center mt-4 font-nunito font-normal z-1 leading-[24px] text-primary-black">
          Expert veterinary care, delivered with warmth and compassion,
          <br />
          focused on comfort, trust, and your pet’s well-being.
        </h2>
        <Link href="/services">
          <CtaButton className="mt-6 capitalize" icon="/icons/paw.svg">
            View Our Services
          </CtaButton>
        </Link>
      </div>
      <div className="relative z-1">
        <Welcome />
        <Service />
        <Team />
        <Gallery />
        <Testimonials testimonials={testimonials} />
      </div>
    </div>
  );
};

export default HomeContainer;
