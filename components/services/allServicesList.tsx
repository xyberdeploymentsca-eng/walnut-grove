/** @format */

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const AllServicesList = () => {
  const allServices = [
    { name: "Preventative Care", href: "/services/preventative-care" },
    { name: "Pet Dental Care", href: "/services/dental-services" },
    { name: "Vaccines", href: "/services/vaccines" },
    { name: "Small Mammal Medicine", href: "/services/small-mammal-medicine" },
    { name: "Parasite Prevention", href: "/services/parasite-prevention" },
    {
      name: "Chronic Pain Management",
      href: "/services/chronic-pain-management",
    },
    { name: "Puppy & Kitten Care", href: "/services/puppy-kitten-care" },
    { name: "Skin & Ear Infections", href: "/services/skin-ear-infections" },
    { name: "Microchipping", href: "/services/microchipping" },
    {
      name: "Soft Tissue, Eye & Ear Procedures",
      href: "/services/soft-tissue-eye-ear",
    },
    { name: "Anesthesia", href: "/services/anesthesia" },
    { name: "Bloodwork", href: "/services/bloodwork" },
    { name: "Pet Surgery", href: "/services/pet-surgery" },
    { name: "Lab Services", href: "/services/lab-services" },
    { name: "Spay & Neuter", href: "/services/spay-neuter" },
    { name: "Pet Ultrasound", href: "/services/ultrasound-services" },
    { name: "Dog Breeding", href: "/services/dog-breeding" },
    { name: "Pet X-Ray", href: "/services/pet-x-ray" },
    { name: "Pet Boarding Services", href: "/services/pet-boarding-services" },
  ];

  return (
    <div className="max-w-[1296px] mx-auto my-12 lg:my-32 px-6 lg:px-0">
      <div className="flex flex-col lg:flex-row items-center lg:items-center gap-4 lg:gap-6 mb-10 text-center lg:text-left">
        <div className="bg-[#EBE2F9] rounded-full p-3 lg:p-4">
          <Image
            src="/icons/pinkPaw.svg"
            alt="paw-icon"
            height={55}
            width={55}
            className="w-[36px] lg:w-[55px] h-auto"
          />
        </div>
        <h2 className="text-[24px] lg:text-[32px] font-otomanopee-one text-primary-black uppercase leading-tight">
          HERE&apos;S A LIST OF ALL THE SERVICES{" "}
          <br className="hidden lg:block" /> THAT WE OFFER !
        </h2>
      </div>

      <div className="bg-[#FFFCF7] rounded-[18px] p-6 lg:p-12 shadow-[0px_4px_30px_0px_rgba(87,87,87,0.06)] border border-[#EBE2F9]">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16">
          {allServices.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="flex justify-between items-center py-4 lg:py-6 border-b border-[#EBE2F9] group transition-all last:border-0 lg:last:border-b [&:nth-last-child(-n+2)]:lg:border-0"
            >
              <span className="text-[18px] lg:text-[20px] font-nunito font-medium text-[#3C3C3B] group-hover:text-primary-green">
                {service.name}
              </span>
              <ArrowRight
                size={24}
                className="text-primary-black group-hover:text-primary-green transition-transform group-hover:translate-x-1"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
