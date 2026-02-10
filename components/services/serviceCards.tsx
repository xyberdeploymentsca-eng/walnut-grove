/** @format */

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const ServiceCards = () => {
  const services = [
    {
      title: "Health Screenings",
      icon: "/icons/card2.svg",
      points: [
        "Designed to be calm, gentle, and minimally stressful",
        "Helps detect health concerns at early, recoverable stages.",
        "Provides clear insights to guide the right care decisions.",
        "Supports long-term wellness and preventive care",
      ],
      links: [
        { name: "Laboratory Tests", href: "/services/laboratory-tests" },
        { name: "Ultrasound Services", href: "/services/ultrasound-services" },
      ],
      border: "border-primary-blue",
      dashed: false,
    },
    {
      title: "Surgical Care",
      icon: "/icons/card3.svg",
      points: [
        "State-of-the-art surgical suite facilitates",
        "Carefully monitored before, during, and after procedures",
        "Enhanced safety & care for our elderly or high-risk patients.",
        "Clear guidance and support for recovery at home",
      ],
      links: [
        { name: "Dental Services", href: "/services/dental-services" },
        { name: "Spay & Neuter", href: "/services/spay-neuter" },
      ],
      border: "border-primary-blue",
      dashed: true,
    },
    {
      title: "Pet Boarding",
      icon: "/icons/card3.svg",
      points: [
        "Cat-only boarding with calm, individualized care",
        "Personal attention from our dedicated, trained staff",
        "Flexible drop-off and pick-up during regular business hours",
        "Open Monday through Sunday for your convenience",
      ],
      links: [
        {
          name: "Pet Boarding Services",
          href: "/services/pet-boarding-services",
        },
      ],
      border: "border-primary-blue",
      dashed: false,
    },
  ];

  return (
    <>
      <div className="max-w-[1296px] mx-auto mt-32 relative">
        <Image
          src="/assets/leftPaws.svg"
          alt="left"
          className="absolute -top-40 h-[1485px] -left-[30%] z-0"
          width={392}
          height={1484}
        />
        <Image
          src="/assets/rightPaws.svg"
          alt="right"
          className="absolute top-120 h-[1485px] -right-[30%] z-0"
          width={392}
          height={1484}
        />
        {/* Background Decor */}
        <div className="absolute top-0 left-[-100px] opacity-10 -rotate-12 pointer-events-none">
          <Image
            src="/assets/heartPaw.svg"
            alt="paw"
            width={150}
            height={150}
          />
        </div>
        <div className="absolute top-1/2 right-[-100px] opacity-10 rotate-12 pointer-events-none">
          <Image
            src="/assets/heartPaw.svg"
            alt="paw"
            width={180}
            height={180}
          />
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-24">
          {services.slice(0, 2).map((service, index) => (
            <div
              key={index}
              className={`bg-[#FFFCF7] rounded-[32px] p-10 pt-20 relative ${service.border} shadow-[0px_0px_30px_0px_#57575614] flex flex-col items-center `}
            >
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[124px] h-[124px] bg-[#FFFCF7] rounded-full flex items-center justify-center z-10">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={100}
                  height={100}
                />
              </div>

              <div className="w-full text-center">
                <h3 className="text-[24px] font-otomanopee-one text-primary-black mb-[18px] uppercase">
                  {service.title}
                </h3>

                <ul className="space-y-2 mb-[22px] text-left inline-block">
                  {service.points.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-start gap-3 text-[19px] font-nunito font-medium text-primary-black/90"
                    >
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary-black flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="bg-primary-blue h-[2px] w-[224px] mx-auto mb-[22px]" />
              </div>

              <div className="w-full space-y-5">
                {service.links.map((link, lIdx) => (
                  <Link
                    href={link.href}
                    key={lIdx}
                    className="flex justify-between items-center group cursor-pointer border-b-2 border-primary-purple pb-6 last:border-0 last:pb-0"
                  >
                    <span className="text-[20px] font-nunito font-medium text-primary-black group-hover:text-primary-green transition-colors">
                      {link.name}
                    </span>
                    <div className="p-2 rounded-full transition-all">
                      <ArrowRight
                        className="text-primary-black group-hover:text-primary-green transition-transform group-hover:translate-x-1"
                        size={24}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-24">
          <div className="bg-[#FFFCF7] rounded-[32px] p-10 pt-20 relative shadow-[0px_0px_30px_0px_#57575614] max-w-[981px] w-full flex flex-col items-center">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[140px] h-[140px] bg-white rounded-full flex items-center justify-center z-10">
              <Image
                src={"/icons/card4.svg"}
                alt={services[2].title}
                width={100}
                height={100}
              />
            </div>

            <div className="w-full text-center">
              <h3 className="text-[32px] font-otomanopee-one text-primary-black mb-[22px] uppercase">
                {services[2].title}
              </h3>

              <ul className="space-y-2 mb-8 text-left inline-block">
                {services[2].points.map((point, pIdx) => (
                  <li
                    key={pIdx}
                    className="flex items-start gap-3 text-[19px] font-nunito font-medium text-primary-black/90"
                  >
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary-black flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="bg-primary-blue h-[2px] w-[224px] mx-auto mb-[22px]" />
            </div>

            <div className="w-full">
              {services[2].links.map((link, lIdx) => (
                <Link
                  href={link.href}
                  key={lIdx}
                  className="flex justify-between items-center group cursor-pointer max-w-[550px] mx-auto"
                >
                  <span className="text-[20px] font-nunito font-medium text-primary-black group-hover:text-primary-green transition-colors">
                    {link.name}
                  </span>
                  <div className="p-2 rounded-full  transition-all">
                    <ArrowRight
                      className="text-primary-black group-hover:text-primary-green transition-transform group-hover:translate-x-1"
                      size={24}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
