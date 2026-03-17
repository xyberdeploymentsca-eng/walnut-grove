/** @format */

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const ServiceCards = () => {
  const services = [
    {
      title: "Preventive & Wellness Care",
      icon: "/icons/card2.svg",
      points: [
        "Comprehensive wellness exams tailored to every life stage",
        "Evidence-based vaccination protocols for safe immunity",
        "Advanced parasite screening and prevention programs",
        "Permanent microchip identification for lifelong security",
      ],
      links: [
        { name: "Preventative Care", href: "/services/preventative-care" },
        { name: "Vaccines", href: "/services/vaccines" },
        { name: "Parasite Prevention", href: "/services/parasite-prevention" },
        { name: "Puppy & Kitten Care", href: "/services/puppy-kitten-care" },
        { name: "Microchipping", href: "/services/microchipping" },
      ],
      border: "border-primary-blue",
      dashed: false,
    },
    {
      title: "Specialized & Chronic Care",
      icon: "/icons/card1.svg",
      points: [
        "Professional dental cleanings with digital imaging",
        "Diagnosis and treatment of chronic pain conditions",
        "Small mammal medicine for rabbits and pocket pets",
        "Dermatology care for persistent skin and ear concerns",
      ],
      links: [
        { name: "Pet Dental Care", href: "/services/dental-services" },
        {
          name: "Small Mammal Medicine",
          href: "/services/small-mammal-medicine",
        },
        {
          name: "Chronic Pain Management",
          href: "/services/chronic-pain-management",
        },
        {
          name: "Skin & Ear Infections",
          href: "/services/skin-ear-infections",
        },
        {
          name: "Soft Tissue, Eye & Ear Procedures",
          href: "/services/soft-tissue-eye-ear",
        },
      ],
      border: "border-primary-blue",
      dashed: true,
    },
    {
      title: "Surgical & Reproductive Medicine",
      icon: "/icons/card3.svg",
      points: [
        "Sterile, fully monitored surgical suites",
        "Spay and neuter procedures focused on long-term health",
        "Individualized anesthetic protocols and pain management",
        "Reproductive support and canine breeding services",
      ],
      links: [
        { name: "Anesthesia", href: "/services/anesthesia" },
        { name: "Pet Surgery", href: "/services/pet-surgery" },
        { name: "Spay & Neuter", href: "/services/spay-neuter" },
        { name: "Dog Breeding", href: "/services/dog-breeding" },
      ],
      border: "border-primary-purple",
      dashed: false,
    },
    {
      title: "Diagnostics & Laboratory",
      icon: "/icons/card4.svg",
      points: [
        "In-house blood analysis with rapid turnaround",
        "Real-time ultrasound imaging for internal organ evaluation",
        "Pre-anesthetic testing for enhanced procedural safety",
        "Advanced screening for early disease identification",
      ],
      links: [
        { name: "Bloodwork", href: "/services/bloodwork" },
        { name: "Lab Services", href: "/services/lab-services" },
        { name: "Pet Ultrasound", href: "/services/ultrasound-services" },
        { name: "Pet X-Ray", href: "/services/pet-x-ray" },
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
      <div className="max-w-[1296px] mx-auto mt-20 lg:mt-32 relative px-4 lg:px-0">
        <Image
          src="/assets/leftPaws.svg"
          alt="left"
          className="hidden lg:block absolute -top-40 h-[1485px] -left-[30%] z-0"
          width={392}
          height={1484}
        />
        <Image
          src="/assets/rightPaws.svg"
          alt="right"
          className="hidden lg:block absolute top-120 h-[1485px] -right-[30%] z-0"
          width={392}
          height={1484}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-24 lg:gap-x-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-[#FFFCF7] rounded-[32px] p-6 pt-16 lg:p-10 lg:pt-20 relative shadow-[0px_0px_30px_0px_#57575614] flex flex-col items-center col-span-1 ${index === 4 ? "lg:col-span-2 max-w-[981px] mx-auto w-full" : ""}`}
            >
              <div className="absolute -top-12 lg:-top-16 left-1/2 -translate-x-1/2 w-[100px] h-[100px] lg:w-[124px] lg:h-[124px] bg-[#FFFCF7] rounded-full flex items-center justify-center z-10">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="lg:w-[100px] lg:h-[100px]"
                />
              </div>

              <div className="w-full text-center">
                <h3 className="text-[20px] lg:text-[24px] font-otomanopee-one text-primary-black mb-4 uppercase">
                  {service.title}
                </h3>

                <ul className="space-y-2 mb-[22px] text-left inline-block">
                  {service.points.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-start gap-3 text-[16px] lg:text-[19px] font-nunito font-medium text-primary-black/90"
                    >
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary-black flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="bg-primary-blue h-[2px] w-[180px] lg:w-[224px] mx-auto mb-[22px]" />
              </div>

              <div className="w-full space-y-5">
                {service.links.map((link, lIdx) => (
                  <Link
                    href={link.href}
                    key={lIdx}
                    className="flex justify-between items-center group cursor-pointer border-b-2 border-primary-purple pb-4 lg:pb-6 last:border-0 last:pb-0"
                  >
                    <span className="text-[18px] lg:text-[20px] font-nunito font-medium text-primary-black group-hover:text-primary-green transition-all">
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
      </div>
    </>
  );
};
