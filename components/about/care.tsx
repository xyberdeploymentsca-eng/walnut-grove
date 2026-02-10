/** @format */

import Image from "next/image";
import { CtaButton } from "../ui/ctaButton";

const points = [
  "Ongoing education and professional development",
  "Modern diagnostic and surgical technology",
  "Gentle, compassionate handling techniques",
  "Clear communication and transparent guidance",
  "Supports longer, healthier lives through proactive monitoring.",
];

export const Care = () => {
  return (
    <div className="mb-50 max-w-[1185px] mx-auto flex items-center gap-6 mt-[25%] font-nunito">
      <Image
        src="/assets/leftPaws.svg"
        alt="left"
        className="absolute top-[100%] h-[1485px] left-0 z-0"
        width={392}
        height={1484}
      />
      <Image
        src="/assets/rightPaws.svg"
        alt="right"
        className="absolute top-[185%] h-[1485px] right-0 z-0"
        width={392}
        height={1484}
      />
      <Image
        src="/assets/doberman.webp"
        alt="welcome"
        height={473}
        width={458}
        className="z-1"
      />
      <div className="flex flex-col justify-center items-left">
        <div className="flex flex-row items-center justify-start gap-6">
          <Image
            src="/assets/heartPaw.svg"
            alt="heart-paw"
            height={87}
            width={87}
          />
          <h1 className="text-[32px] text-left font-nunito font-normal z-1 leading-[38px] text-primary-black uppercase font-otomanopee-one">
            Dedicated to Exceptional Care, Every Day!
          </h1>
        </div>
        <div className="mt-4">
          <p className="text-primary-black text-[22px] leading-[28px] font-medium">
            For more than 15 years, Walnut Grove Animal Hospital has proudly
            served the Langley, BC community. As one of the area’s longstanding
            veterinary clinics, we have built our reputation on trust, medical
            excellence, and genuine compassion.
          </p>
        </div>
        <h4 className="text-[24px] my-4 leading-[28px] border-b-2 border-primary-purple font-semibold font-nunito text-primary-black mb-4 w-fit">
          Our Mission
        </h4>
        <p className="text-primary-black text-[22px] leading-[28px] font-medium">
          To assemble a veterinary healthcare team committed to delivering
          outstanding client service and the highest standards of veterinary
          medicine.
        </p>
        <h4 className="text-[24px] my-4 leading-[28px] border-b-2 border-primary-purple font-semibold font-nunito text-primary-black mb-4 w-fit">
          We continuously invest in
        </h4>
        <div className="flex flex-col gap-2">
          {points.map((point) => (
            <div key={point}>
              <p className="text-primary-black text-[20px] leading-[28px] font-normal">
                {" "}
                &#9679; {point}
              </p>
            </div>
          ))}
          <p className="text-primary-black text-[22px] mt-4 leading-[28px] font-medium">
            Whether you’re visiting us for preventive care, diagnostics,
            surgery, or boarding, you can count on our team when quality truly
            matters.
          </p>
          <div className="w-fit">
            <CtaButton className="mt-6 capitalize" icon="/icons/calender.svg">
              schedule appointment
            </CtaButton>
          </div>
        </div>
      </div>
    </div>
  );
};
