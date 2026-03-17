/** @format */
"use client";

import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "../ui/ctaButton";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Service = () => {
  const cards = [
    {
      image: "/assets/preventionCare.png",
      title: "Preventative Care",
      href: "/services/preventative-care",
    },
    {
      image: "/assets/dental.webp",
      title: "Pet Dental Care",
      href: "/services/dental-services",
    },
    {
      image: "/assets/vaccinations.png",
      title: "Vaccines",
      href: "/services/vaccines",
    },
    {
      image: "/assets/mamalCare.png",
      title: "Small Mammal Medicine",
      href: "/services/small-mammal-medicine",
    },
    {
      image: "/assets/parasitePrevention.png",
      title: "Parasite Prevention",
      href: "/services/parasite-prevention",
    },
    {
      image: "/assets/pain.png",
      title: "Chronic Pain Management",
      href: "/services/chronic-pain-management",
    },
    {
      image: "/assets/kittenCare.png",
      title: "Puppy & Kitten Care",
      href: "/services/puppy-kitten-care",
    },
    {
      image: "/assets/skinCare.png",
      title: "Skin & Ear Infections",
      href: "/services/skin-ear-infections",
    },
    {
      image: "/assets/microChipping.png",
      title: "Microchipping",
      href: "/services/microchipping",
    },
    {
      image: "/assets/softTissue.png",
      title: "Soft Tissue Procedures",
      href: "/services/soft-tissue-eye-ear",
    },
    {
      image: "/assets/anesthesia.png",
      title: "Anesthesia",
      href: "/services/anesthesia",
    },
    {
      image: "/assets/bloodWork.png",
      title: "Bloodwork",
      href: "/services/bloodwork",
    },
    {
      image: "/assets/surgery.png",
      title: "Pet Surgery",
      href: "/services/pet-surgery",
    },
    {
      image: "/assets/laboratory.webp",
      title: "Lab Services",
      href: "/services/lab-services",
    },
    {
      image: "/assets/spray.png",
      title: "Spay & Neuter",
      href: "/services/spay-neuter",
    },
    {
      image: "/assets/ultrasound.webp",
      title: "Pet Ultrasound",
      href: "/services/ultrasound-services",
    },
    {
      image: "/assets/breading.png",
      title: "Dog Breeding",
      href: "/services/dog-breeding",
    },
    {
      image: "/assets/xray.png",
      title: "Pet X-Ray",
      href: "/services/pet-x-ray",
    },
    {
      image: "/assets/petBoarding.png",
      title: "Pet Boarding Services",
      href: "/services/pet-boarding-services",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsVisible, setItemsVisible] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsVisible(1);
      } else if (window.innerWidth < 1024) {
        setItemsVisible(2);
      } else {
        setItemsVisible(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < cards.length - itemsVisible) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="max-w-[1296px] mx-auto mt-20 lg:mt-32 mb-20 relative font-nunito px-4 lg:px-0">
      {/* Container with Blue Border */}
      <div className="pb-14 pt-12 relative flex flex-col items-center">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center max-w-[550px] mx-auto mb-10">
          <div className="flex flex-row items-center justify-center gap-4 mb-4 w-full px-4 lg:px-0">
            <div className="bg-primary-purple p-2 lg:p-3 rounded-full flex items-center justify-center flex-shrink-0">
              <Image
                src="/icons/paw.svg"
                alt="paw"
                height="24"
                width="24"
                className="brightness-0 invert lg:w-[32px] lg:h-[32px]"
              />
            </div>
            <h2 className="text-[22px] lg:text-[32px] font-otomanopee-one leading-tight lg:leading-[38px] text-primary-black uppercase text-left lg:text-center">
              SERVICES FOR HAPPY, <br className="hidden lg:block" /> HEALTHY
              PAWS
            </h2>
          </div>
          <p className="text-[18px] lg:text-[22px] text-primary-black leading-snug lg:leading-[26px] font-medium">
            Our services are designed to support your pet's health, comfort, and
            happiness at every stage.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative w-full px-1 lg:px-12">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute -left-2 lg:left-0 top-1/2 -translate-y-1/2 z-10 transition-all p-2 rounded-full bg-white shadow-md ${
              currentIndex === 0
                ? "opacity-30 cursor-not-allowed border-gray-300 text-gray-300"
                : "opacity-100 hover:scale-110 border-primary-green text-primary-green hover:bg-primary-green hover:text-white border"
            }`}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Cards Wrapper */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(calc(-${currentIndex * (100 / itemsVisible)}% - ${currentIndex * (24 / itemsVisible)}px))`,
              }}
            >
              {cards.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="flex-shrink-0 bg-[#FFFCF7] rounded-[18px] overflow-hidden shadow-[0px_0px_30px_0px_#57575614] p-3 flex flex-col group transition-transform duration-300 hover:scale-[1.02]"
                  style={{
                    width: `calc((100% - ${(itemsVisible - 1) * 24}px) / ${itemsVisible})`,
                  }}
                >
                  <div className="w-full h-[166px] relative rounded-[12px] overflow-hidden mb-4">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-[20px] font-otomanopee-one leading-[22px] text-[#3C3C3B] mb-2 px-1 group-hover:text-primary-green transition-colors">
                    {service.title}
                  </h3>
                  <div className="flex items-center text-[16px] text-[#3C3C3B] font-nunito font-medium px-1 group-hover:text-primary-green transition-colors pb-2 mt-auto">
                    Read More <span className="ml-1 text-[20px]">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            disabled={currentIndex >= cards.length - itemsVisible}
            className={`absolute -right-2 lg:right-0 top-1/2 -translate-y-1/2 z-10 transition-all p-2 rounded-full bg-white shadow-md ${
              currentIndex >= cards.length - itemsVisible
                ? "opacity-30 cursor-not-allowed border-gray-300 text-gray-300"
                : "opacity-100 hover:scale-110 border-primary-green text-primary-green hover:bg-primary-green hover:text-white border"
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Bottom CTA Button - Overlapping border */}
        <div className="absolute -bottom-6 lg:-bottom-6 left-1/2 -translate-x-1/2 w-full lg:w-auto px-4 lg:px-0">
          <Link href="/services" className="w-full">
            <CtaButton
              icon="/icons/paw.svg"
              className="capitalize w-full justify-center lg:w-fit"
            >
              View All Services
            </CtaButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
