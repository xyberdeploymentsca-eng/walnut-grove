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

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3,
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? Math.max(0, testimonials.length - 3) : prevIndex - 3,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Auto-play every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]); // Reset interval if currentIndex changes manually

  return (
    <div className="max-w-[1296px] mx-auto py-20 pb-30">
      <div className="flex flex-row items-center justify-center gap-6 relative">
        <Image
          src="/icons/blueSmiley.svg"
          alt="pink-bow"
          height={87}
          width={87}
        />
        <h2 className="text-[32px] text-center font-nunito font-normal z-1 leading-[38px] text-primary-black uppercase font-otomanopee-one">
          what are the pet parents
          <br />
          saying about us?
        </h2>
        <Image
          src="/assets/threeCats.png"
          alt="three-cats"
          height={183}
          width={388}
          className="-right-20 top-2 absolute"
        />
      </div>
      <p className="text-[22px] mt-4 text-primary-black leading-[28px] font-medium text-center">
        A collection of heartfelt messages from the families we serve, sharing{" "}
        <br />
        moments of trust, comfort, and reassurance.
      </p>

      <div className="mt-20 relative flex items-center justify-center gap-5">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="p-2 cursor-pointer hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
        >
          <ChevronLeft size={48} className="text-primary-green" />
        </button>

        {/* Viewport: Exactly 3 cards (334*3) + 2 gaps (60*2) = 1122px */}
        <div className="w-[1122px] overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out gap-15"
            style={{
              transform: `translateX(-${currentIndex * (334 + 60)}px)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-start h-[368px] min-w-[334px] relative"
              >
                <Image
                  src={"/icons/testimonial.svg"}
                  alt="testimonial"
                  height={368}
                  width={334}
                  className="object-cover absolute top-0 left-0 z-0"
                />
                <div className="w-[279px] mt-7 h-[236px] flex flex-col items-center justify-center gap-2 z-1">
                  <h2 className="text-[24px] mb1.5 max-w-[192px] text-center font-otomanopee-one text-primary-black leading-[28px] font-medium">
                    {testimonial.name}
                  </h2>
                  <p className="text-[18px] text-primary-black leading-[28px] font-normal">
                    Service: {testimonial.service}
                  </p>
                  <Image
                    src="/icons/comma.svg"
                    alt="quote"
                    height={29}
                    width={29}
                    className="my-2.5"
                  />
                  <p className="text-[18px] text-center text-primary-black font-medium px-4 line-clamp-4">
                    {testimonial.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="p-2 cursor-pointer hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
        >
          <ChevronRight size={48} className="text-primary-green" />
        </button>
      </div>
    </div>
  );
};
