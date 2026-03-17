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
          className="p-1 lg:p-2 cursor-pointer hover:bg-gray-100 rounded-full transition-colors flex-shrink-0 z-20 bg-white/80 shadow-sm lg:bg-transparent lg:shadow-none"
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
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center min-w-[200px] lg:min-w-[334px] relative"
              >
                <div className="w-full min-h-[360px] lg:h-[352px] bg-[#FFFCF7] rounded-[24px] lg:rounded-[40px] p-5 lg:p-10 flex flex-col items-center justify-center relative shadow-[0px_0px_30px_0px_rgba(87,87,86,0.08)] border border-[#F0EAF8]">
                  <h2 className="text-[18px] lg:text-[26px] text-center font-otomanopee-one text-primary-black leading-tight uppercase mb-1 lg:mb-2">
                    {testimonial.name}
                  </h2>
                  <p className="text-[12px] lg:text-[18px] text-primary-black leading-tight font-normal mb-4 lg:mb-6">
                    Service: {testimonial.service}
                  </p>
                  <Image
                    src="/icons/comma.svg"
                    alt="quote"
                    height={20}
                    width={20}
                    className="mb-4 lg:mb-6 lg:w-[29px] lg:h-[26px]"
                  />
                  <p className="text-[14px] lg:text-[18px] text-center text-primary-black font-nunito font-medium px-2 lg:px-4 line-clamp-6 lg:line-clamp-4 leading-relaxed lg:leading-[28px]">
                    {testimonial.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="p-1 lg:p-2 cursor-pointer hover:bg-gray-100 rounded-full transition-colors flex-shrink-0 z-20 bg-white/80 shadow-sm lg:bg-transparent lg:shadow-none"
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
