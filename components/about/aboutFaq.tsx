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
        <h3 className="text-[20px] font-nunito font-medium text-primary-black leading-[28px]">
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
        <p className="text-[18px] font-nunito font-normal text-primary-black/80 leading-[26px]">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const AboutFaq = ({ faqs }: { faqs?: Faq[] }) => {
  const defaultFaqs = [
    {
      question: "What types of care does my pet receive here?",
      answer:
        "Preventive care, diagnostics, surgical treatments, dental care, and pet boarding, all in one place.",
    },
    {
      question: "How often should my pet be screened?",
      answer:
        "We normally recommend annual screenings for most pets, though senior pets or those with chronic conditions may benefit from bi-annual visits.",
    },
    {
      question: "How do you keep pets safe during surgery?",
      answer:
        "Our state-of-the-art surgical suite is equipped with advanced monitoring systems, and every pet is continuously observed by a dedicated technician.",
    },
    {
      question: "How are tests chosen for my pet?",
      answer:
        "Diagnostic tests are tailored to your pet's age, breed, lifestyle, and any clinical symptoms they may be exhibiting.",
    },
    {
      question: "Why is dental care important for pets?",
      answer:
        "Oral health affects overall health; untreated dental issues can lead to systemic infections and organ damage.",
    },
    {
      question: "When can I drop off or pick up my pet?",
      answer:
        "Drop-offs and pick-ups are available during our regular business hours. For boarding, we offer flexible times to suit your schedule.",
    },
    {
      question: "What surgeries do you perform?",
      answer:
        "We perform a wide range of surgeries, from routine spays and neuters to complex soft tissue and dental procedures.",
    },
    {
      question: "Why screen a pet that looks healthy?",
      answer:
        "Early detection is key! Many life-threatening conditions can be managed effectively if caught before symptoms appear.",
    },
    {
      question: "What diagnostic tests are available?",
      answer:
        "We offer in-house laboratory testing, radiology, and ultrasound services for rapid and accurate diagnosis.",
    },
    {
      question: "Are screening tests safe?",
      answer:
        "Yes, our screening tests are non-invasive or minimally invasive, designed to be calm and low-stress for your pet.",
    },
    {
      question: "Do you offer pet boarding?",
      answer:
        "Yes, we offer specialized cat-only boarding in a calm, individualized environment.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment by calling us at (604) 888-2628 or through our online booking portal.",
    },
  ];

  const displayFaqs = faqs && faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <div className="max-w-[1296px] mx-auto px-4 mt-20 mb-20">
      <div className="flex flex-row items-center justify-center gap-6 relative z-1 mb-16">
        <Image src="/icons/pinkBow.svg" alt="pink-bow" height={87} width={87} />
        <h2 className="text-[32px] text-center font-nunito font-normal z-1 leading-[38px] text-primary-black uppercase font-otomanopee-one">
          Answers to the Most Common <br />
          Questions that pet parent’s ask us!
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {displayFaqs.map((faq, index) => (
          <FaqItem key={index} {...faq} />
        ))}
      </div>
    </div>
  );
};
