/** @format */

"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

interface Faq {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: Faq) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-[#FFFCF7] rounded-[16px] p-[18px] px-8 shadow-[0px_0px_30px_rgba(0,0,0,0.05)] cursor-pointer transition-all duration-300`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center gap-4">
        <h3 className="text-[18px] lg:text-[20px] font-nunito font-medium text-primary-black leading-tight lg:leading-[28px]">
          {question}
        </h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <Minus size={24} className="text-primary-green" />
          ) : (
            <Plus size={24} className="text-primary-black" />
          )}
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-[16px] lg:text-[18px] font-nunito font-normal text-primary-black/80 leading-snug lg:leading-[26px]">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const ServiceFaq = ({ faqs }: { faqs?: Faq[] }) => {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="max-w-[1296px] mx-auto px-4 mt-16 lg:mt-32">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6 relative z-1 mb-10 lg:mb-16">
        <Image
          src="/icons/pinkBow.svg"
          alt="pink-bow"
          height={87}
          width={87}
          className="w-[48px] lg:w-[87px] h-auto"
        />
        <h2 className="text-[22px] lg:text-[32px] text-center lg:text-left font-nunito font-normal z-1 leading-tight lg:leading-[38px] text-primary-black uppercase font-otomanopee-one">
          Answers to the Most Common <br className="hidden lg:block" />
          Questions that pet parent’s ask us!
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {faqs.map((faq: Faq, index: number) => (
          <FaqItem key={index} {...faq} />
        ))}
      </div>
    </div>
  );
};
