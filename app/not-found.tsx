/** @format */

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { CtaButton } from "@/components/ui/ctaButton";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 py-20 text-center bg-primary-white">
      {/* 404 Image/Illustration */}
      <div className="relative w-64 h-64 lg:w-80 lg:h-80 mb-8 animate-bounce-slow">
        <Image
          src="/assets/dog.png"
          alt="Cute dog wondering where the page went"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Error Message */}
      <h1 className="text-[48px] lg:text-[72px] font-otomanopee-one text-primary-black uppercase leading-tight mb-4">
        404
      </h1>
      <h2 className="text-[24px] lg:text-[32px] font-nunito font-bold text-primary-green mb-6">
        Oops! This page has wandered off.
      </h2>
      <p className="text-[16px] lg:text-[18px] font-nunito text-[#3C3C3B] max-w-md mb-10 leading-relaxed">
        It seems the page you're looking for doesn't exist or has moved to a new home.
        Let's get you back on track!
      </p>

      {/* Home Redirect Button */}
      <CtaButton
        icon="/icons/arrowIcon.svg"
        onClick={() => router.push("/")}
        className="scale-110"
      >
        Back to Home
      </CtaButton>
    </div>
  );
}
