/** @format */

import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "../ui/ctaButton";

export const Service = () => {
  const cards = [
    {
      image: "/icons/card1.svg",
      title: "Dental Surgeries",
      des: "Gentle dental care to keep smiles healthy and pain-free, with comfort and safety at every step.",
      href: "/services/dental-surgeries",
    },
    {
      image: "/icons/card2.svg",
      title: "Surgical Care",
      des: "Thoughtful surgical care focused on safety, comfort, and smooth recovery at every stage of treatment.",
      href: "/services/surgical-care",
    },
    {
      image: "/icons/card3.svg",
      title: "Pet Boarding",
      des: "A calm, clean boarding space where your pet feels safe, cared for, and comfortable while you’re away.",
      href: "/services/pet-boarding",
    },
    {
      image: "/icons/card4.svg",
      title: "Health Screenings",
      des: "Early insights through careful screenings and ultrasound, helping us protect your pet’s health with clarity and care.",
      href: "/services/health-screenings",
    },
  ];

  return (
    <div className="max-w-[1117px] mx-auto flex items-start justify-between font-nunito">
      <div className="grid grid-cols-2 gap-[40px] w-fit">
        {cards.map((service, index) => (
          <Link
            href={service.href}
            key={index}
            className="flex flex-col items-center justify-center group relative w-[243px] h-[259px] bg-[#FFFCF7] rounded-[18px] overflow-hidden transition-all duration-500 shadow-[0px_0px_30px_0px_#57575614]"
          >
            <div className="flex flex-col items-center justify-start pt-[20px] pr-[12px] pb-[20px] pl-[17px] gap-[9px] h-fit group-hover:h-full transition-all duration-500 group-hover:-translate-y-4">
              <Image
                src={service.image}
                alt={service.title}
                width={100}
                height={100}
                className="object-contain"
              />
              <h3 className="text-[18px] font-bold text-primary-black text-center w-full">
                {service.title}
              </h3>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-[#FFFCF7]">
              <p className="text-[16px] text-primary-black leading-[22px] text-center font-regular">
                {service.des}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex-1 ml-20">
        <div className="flex flex-row items-center justify-start gap-6">
          <Image
            src="/icons/pinkPaw.svg"
            alt="heart-paw"
            height={87}
            width={87}
          />
          <h1 className="text-[32px] text-left font-nunito font-normal z-1 leading-[38px] text-primary-black uppercase font-otomanopee-one">
            Services for Happy, Healthy Paws
          </h1>
        </div>
        <p className="text-[22px] mt-4 text-primary-black leading-[28px] font-medium">
          Our services are designed to support your pet’s health, comfort, and
          happiness at every stage. Thoughtful treatment, gentle handling, and
          care you can truly trust!
        </p>
        <div className="flex flex-row items-center justify-start mt-6">
          <Link href="/services">
            <CtaButton icon="/icons/paw.svg">view our services</CtaButton>
          </Link>
        </div>
        <Image
          src="/assets/twoCats.webp"
          className="mt-18"
          alt="cats"
          height={226}
          width={534}
        />
      </div>
    </div>
  );
};
