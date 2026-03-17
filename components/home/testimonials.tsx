/** @format */

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  service: string;
  message: string;
}

export const Testimonials = ({
  testimonials: fetchedTestimonials,
}: {
  testimonials?: Testimonial[];
}) => {
  const defaultTestimonials = [
    {
      name: "John Doe",
      service: "Dental Check-up",
      message:
        "Our cat is usually very anxious, but the gentle handling here made all the difference. We’re so grateful.",
    },
    {
      name: "Jane Smith",
      service: "Dental Check-up",
      message:
        "Our cat is usually very anxious, but the gentle handling here made all the difference. We’re so grateful.",
    },
    {
      name: "John Doe",
      service: "Dental Check-up",
      message:
        "Our cat is usually very anxious, but the gentle handling here made all the difference. We’re so grateful.",
    },
    {
      name: "Alice Brown",
      service: "Vaccination",
      message:
        "Efficient and friendly service. My dog was comfortable throughout the visit.",
    },
    {
      name: "Bob White",
      service: "Emergency Care",
      message: "They saved my pet's life! Very professional and caring team.",
    },
  ];

  const testimonials =
    fetchedTestimonials && fetchedTestimonials.length > 0
      ? fetchedTestimonials
      : defaultTestimonials;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsVisible, setItemsVisible] = useState(3);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 1024) {
        setItemsVisible(1);
      } else {
        setItemsVisible(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1,
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 1000000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const getTranslation = () => {
    if (windowWidth < 1024) {
      // Mobile calculation: card width (200px) + gap (16px)
      return currentIndex * (200 + 16);
    }
    // Desktop calculation: card width (334px) + gap (60px)
    return currentIndex * (334 + 60);
  };

  return (
    <div className="max-w-[1296px] mx-auto py-10 lg:py-20 lg:pb-30 px-4 lg:px-0 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 relative px-4 lg:px-0">
        <div className="flex items-center gap-4 lg:gap-6">
          <Image
            src="/icons/blueSmiley.svg"
            alt="pink-bow"
            height={87}
            width={87}
            className="w-[48px] lg:w-[87px] h-auto"
          />
          <h2 className="text-[22px] lg:text-[32px] text-left lg:text-center font-nunito font-normal z-1 leading-tight lg:leading-[38px] text-primary-black uppercase font-otomanopee-one">
            what are the pet parents <br className="hidden lg:block" />
            saying about us?
          </h2>
        </div>
        <Image
          src="/assets/threeCats.png"
          alt="three-cats"
          height={183}
          width={388}
          className="hidden lg:block -right-20 top-2 absolute"
        />
      </div>
      <p className="text-[16px] lg:text-[22px] mt-4 text-primary-black leading-snug lg:leading-[28px] font-medium text-center px-4 lg:px-0">
        A collection of heartfelt messages from the families we serve, sharing{" "}
        <br className="hidden lg:block" />
        moments of trust, comfort, and reassurance.
      </p>

      <div className="mt-8 lg:mt-20 relative flex items-center justify-center gap-2 lg:gap-5 w-full">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="p-1 lg:p-2 cursor-pointer hover:bg-gray-100 rounded-full transition-colors flex-shrink-0 z-20 bg-white/80 shadow-sm"
        >
          <ChevronLeft
            size={32}
            className="text-primary-green lg:w-12 lg:h-12"
          />
        </button>

        {/* Viewport: Responsive Width */}
        <div className="w-full lg:w-[1122px] overflow-hidden px-2 lg:px-0">
          <div
            className="flex transition-transform duration-700 ease-in-out gap-4 lg:gap-15 items-stretch"
            style={{
              transform: `translateX(-${getTranslation()}px)`,
            }}
          >
            {testimonials.map((testimonial, index) => {
              const bgColors = ["bg-[#E7D2FF]", "bg-[#D9F2E6]", "bg-[#E0EBFF]"];
              const borderColors = [
                "border-[#C9A0DC]",
                "border-[#87D5B1]",
                "border-[#AECBFA]",
              ];
              const accentColor = bgColors[index % bgColors.length];
              const borderColor = borderColors[index % borderColors.length];

              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center min-w-[200px] lg:min-w-[334px] relative transition-all duration-300"
                >
                  <div
                    className={`w-full min-h-[360px] lg:h-[400px] ${accentColor} border-2 ${borderColor} rounded-[24px] lg:rounded-[40px] p-5 lg:p-10 flex flex-col items-center justify-between relative overflow-hidden shadow-[0px_10px_40px_0px_rgba(0,0,0,0.03)]`}
                  >
                    {/* Decorative Background Quote */}
                    <Image
                      src="/icons/comma.svg"
                      alt="quote"
                      height={120}
                      width={120}
                      className="absolute -top-4 -right-4 opacity-[0.05] rotate-180 pointer-events-none"
                    />

                    <div className="flex flex-col items-center gap-1 lg:gap-3 z-10 w-full">
                      <div className="w-10 lg:w-12 h-1 bg-primary-black/10 rounded-full mb-1 lg:mb-2" />
                      <h2 className="text-[18px] lg:text-[26px] text-center font-otomanopee-one text-primary-black leading-tight uppercase tracking-tight">
                        {testimonial.name}
                      </h2>
                      <p className="text-[11px] lg:text-[14px] text-primary-green font-nunito font-extrabold uppercase tracking-[0.1em]">
                        {testimonial.service}
                      </p>
                    </div>

                    <div className="relative z-10 flex flex-col items-center gap-3 lg:gap-6 my-4">
                      <Image
                        src="/icons/comma.svg"
                        alt="quote"
                        height={20}
                        width={20}
                        className="opacity-40 lg:w-[32px] lg:h-[32px]"
                      />
                      <p className="text-[15px] lg:text-[18px] text-center text-primary-black font-nunito font-medium leading-relaxed lg:leading-[28px] line-clamp-6 italic px-1">
                        &quot;{testimonial.message}&quot;
                      </p>
                    </div>

                    <div className="w-full flex justify-center pb-1">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className="text-[#FFB800] text-sm lg:text-lg"
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="p-1 lg:p-2 cursor-pointer hover:bg-gray-100 rounded-full transition-colors flex-shrink-0 z-20 bg-white/80 shadow-sm"
        >
          <ChevronRight
            size={32}
            className="text-primary-green lg:w-12 lg:h-12"
          />
        </button>
      </div>
    </div>
  );
};
