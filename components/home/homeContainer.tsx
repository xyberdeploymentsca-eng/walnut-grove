/** @format */

import Image from "next/image";
import { CtaButton } from "../ui/ctaButton";
import { Welcome } from "./welcome";
import { Service } from "./service";
import { Team } from "./team";
import { Gallery } from "./gallery";
import { Testimonials } from "./testimonials";
import Link from "next/link";
import { Care } from "../about/care";

const HomeContainer = ({ team }: { team?: any[] }) => {
  return (
    <div className="max-w-[1920px] mx-auto font-nunito bg-primary-white overflow-hidden">
      {/* Hero Banner */}
      <section data-link-location="hero" className="relative w-full h-[850px] lg:h-[900px] max-w-[1880px] mx-auto overflow-hidden flex flex-col items-center justify-center">
        {/* Background Image */}
        <Image
          src="/assets/bannerHer.webp"
          alt="Veterinary Care"
          fill
          priority
          quality={85}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1880px"
          className="object-cover object-center"
        />

        {/* Overlay to ensure text readability if needed, though glass box should handle it */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Centered Glass Box Content */}
        <div className="flex flex-col justify-center items-center mb-48 lg:mb-40 pt-20 lg:pt-0">
          <div className="relative z-10 bg-white/20 backdrop-blur-md rounded-[18px] border border-white/30 p-6 lg:p-2.5 max-w-[90%] lg:max-w-[850px] flex flex-col items-center text-center shadow-2xl">
            <h1 className="font-otomanopee-one uppercase text-primary-black text-[24px] lg:text-[41px] leading-[1.1] font-normal tracking-tight">
              Trusted Vet Care in Langley,
              <br />
              Open 7 Days
            </h1>
            <p className="mt-4 text-primary-black text-[14px] lg:text-[20px] leading-[1.2] font-nunito font-semibold max-w-[700px]">
              Your veterinarian in Walnut Grove, Langley BC, caring for dogs and
              cats with clear communication and genuine compassion. Open Monday
              to Friday 8:30am to 7pm, and Saturday and Sunday 9am to 5pm.
            </p>
          </div>
          <Link href="/services" className="mt-8 z-10">
            <CtaButton icon="/icons/paw.svg">View Our Services</CtaButton>
          </Link>
        </div>
        {/* Stat Cards — horizontal row at bottom */}
        <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col lg:flex-row gap-4 lg:gap-8 px-6 w-full lg:w-[90%] max-w-[1296px] justify-center">
          {[
            {
              stat: "400k+",
              label: "Cases",
              sub: "Providing compassionate medical care",
            },
            {
              stat: "40+",
              label: "Years",
              sub: "Years of Veterinary Experience",
            },
            {
              stat: "7",
              label: "Days",
              sub: "Open 7 days of the week!",
            },
          ].map(({ stat, label, sub }) => (
            <div
              key={label}
              className="flex-1 bg-white rounded-[24px] shadow-[0px_10px_40px_0px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center py-6 lg:py-10 gap-1 border border-white/50 hover:shadow-2xl transition-all duration-300"
            >
              <span className="font-otomanopee-one text-primary-blue-dark text-[32px] lg:text-[48px] leading-tight font-normal text-center">
                {stat} {label}
              </span>
              <span className="text-primary-black font-nunito text-[14px] lg:text-[18px] leading-snug font-medium text-center px-4 opacity-90">
                {sub}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Rest of page — top padding so content doesn't hide behind cards */}
      <div className="relative z-1">
        {/* The questions Langley pet owners ask most, one tap away */}
        <section className="max-w-[1296px] mx-auto px-6 lg:px-4 pt-16 lg:pt-24">
          <h2 className="text-[24px] lg:text-[36px] font-otomanopee-one text-primary-black uppercase leading-tight text-center lg:text-left">
            How Can We Help Your Pet Today?
          </h2>
          <p className="mt-3 text-[16px] lg:text-[20px] font-nunito font-medium text-primary-black max-w-[900px] text-center lg:text-left">
            Langley vet care for dogs and cats, 7 days a week. Start here for
            the questions we hear most.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { title: "Need a vet today?", text: "Same-day and weekend visits, and how to get seen quickly.", href: "/same-day-weekend-vet-langley" },
              { title: "Pet emergency", text: "Signs that can't wait, and where to go after hours.", href: "/pet-emergency-langley" },
              { title: "Vet prices", text: "Typical costs and how to get an estimate before treatment.", href: "/vet-prices-langley" },
              { title: "Vaccines", text: "Puppy, kitten and adult vaccine schedules in Langley.", href: "/services/vaccines" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-white rounded-[16px] p-6 shadow-[0px_4px_30px_0px_rgba(87,87,87,0.08)] border border-[#F0EAF8] hover:shadow-[0px_4px_40px_0px_rgba(87,87,87,0.16)] transition-all"
              >
                <span className="block text-[18px] lg:text-[22px] font-bold font-nunito text-primary-black">
                  {item.title}
                </span>
                <span className="block mt-2 text-[15px] lg:text-[17px] font-nunito text-primary-black/80">
                  {item.text}
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-[15px] lg:text-[17px] font-nunito font-medium text-primary-black/80 text-center lg:text-left">
            Planning ahead? Read about{" "}
            <Link href="/services/spay-neuter" className="text-primary-green-dark font-semibold hover:underline">spay and neuter surgery</Link>{" "}
            and{" "}
            <Link href="/vet-prices-langley" className="text-primary-green-dark font-semibold hover:underline">typical vet prices</Link>.
            Need help now? See{" "}
            <Link href="/same-day-weekend-vet-langley" className="text-primary-green-dark font-semibold hover:underline">same-day and weekend visits</Link>{" "}
            or{" "}
            <Link href="/pet-emergency-langley" className="text-primary-green-dark font-semibold hover:underline">what to do in a pet emergency</Link>.
          </p>
        </section>
        <Welcome />
        <Service />
        <Care />
        <Team team={team} />
        <Gallery />
        {/* <Testimonials testimonials={testimonials} /> */}
      </div>
    </div>
  );
};

export default HomeContainer;
