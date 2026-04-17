/** @format */

import Image from "next/image";
import { CtaButton } from "../ui/ctaButton";
import { Welcome } from "./welcome";
import { Service } from "./service";
import { Team } from "./team";
import { Gallery } from "./gallery";
import { Testimonials } from "./testimonials";
import Link from "next/link";

const HomeContainer = ({ team }: { team?: any[] }) => {
  return (
    <div className="max-w-[1920px] mx-auto font-nunito bg-primary-white overflow-hidden">
      {/* Hero Banner */}
      <section className="relative w-full h-auto lg:h-[755px] max-w-[1880px] mx-auto overflow-visible flex flex-col pt-12 lg:pt-0 px-2.5 md:px-0 -mt-5 md:mt-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover object-center rounded-[24px] hidden lg:block"
        >
          <source src="/assets/walnut.mp4" type="video/mp4" />
        </video>
        <div className="w-full h-[400px] relative lg:hidden rounded-[24px] overflow-hidden mb-6">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
          >
            <source src="/assets/walnut.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Gradient overlay on left so text is legible (Desktop only) */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white/70 via-white/5 to-transparent rounded-[24px]" />

        {/* Content — left-aligned, vertically centered */}
        <div className="relative z-10 lg:h-full flex flex-col justify-center px-6 lg:pl-[6%] lg:max-w-[52%] pb-10 lg:pb-20">
          <h1 className="font-otomanopee-one uppercase text-primary-black text-[30px] lg:text-[48px] leading-[1.2] lg:leading-[56px] font-normal tracking-tight">
            Langley&apos;s Best Medical Care.
            <br className="hidden lg:block" />
            Genuine Compassion.
          </h1>
          <p className="mt-5 text-primary-black text-[16px] lg:text-[18px] leading-[1.5] lg:leading-[28px] font-nunito font-normal max-w-[480px]">
            Serving Langley&apos;s pets with experience, clarity, and
            compassion.
          </p>
          <Link href="/services" className="mt-8 w-fit">
            <CtaButton icon="/icons/paw.svg">View Our Services</CtaButton>
          </Link>
        </div>

        {/* Stat Cards — overlapping bottom of banner on desktop, stacked on mobile */}
        <div className="relative lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-1/2 z-20 flex flex-col lg:flex-row gap-6 px-6 lg:px-0 w-full lg:w-[90%] max-w-[1296px]">
          {[
            { stat: "100k+", label: "Cases", sub: "Expert care for every beloved pet." },
            {
              stat: "40+",
              label: "Years",
              sub: "Years of Veterinary Experience",
            },
            { stat: "7", label: "Days", sub: "Open 7 days of the week!" },
          ].map(({ stat, label, sub }) => (
            <div
              key={label}
              className="flex-1 bg-white rounded-[18px] shadow-[0px_4px_30px_0px_rgba(87,87,87,0.08)] flex flex-col items-center justify-center py-7 gap-2 lg:gap-4 border border-gray-100 lg:border-none"
            >
              <span className="font-otomanopee-one text-primary-blue text-[36px] lg:text-[48px] leading-tight lg:leading-[48px] font-normal text-center">
                {stat} {label}
              </span>
              <span className="text-primary-black font-nunito text-[16px] lg:text-[20px] leading-snug lg:leading-[22px] font-normal text-center px-4">
                {sub}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Rest of page — top padding so content doesn't hide behind cards */}
      <div className="relative z-1 pt-12 lg:pt-24">
        <Welcome />
        <Service />
        <Team team={team} />
        <Gallery />
        {/* <Testimonials testimonials={testimonials} /> */}
      </div>
    </div>
  );
};

export default HomeContainer;
