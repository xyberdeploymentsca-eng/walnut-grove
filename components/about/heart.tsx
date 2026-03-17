/** @format */

import Image from "next/image";
import { CtaButton } from "../ui/ctaButton";
import Link from "next/link";

const points = [
  "Thoughtful communication with every pet parent",
  "Modern diagnostics and evidence-based treatment",
  "Compassionate handling at every stage of care",
];

export const Heart = () => {
  return (
    <div
      id="care-philosophy"
      className="scroll-mt-[200px] mb-20 lg:mb-50 max-w-[1185px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-6 font-nunito px-6 lg:px-0"
    >
      <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6">
          <Image
            src="/icons/blueHeart.svg"
            alt="heart-paw"
            height={87}
            width={87}
            className="hidden lg:block w-[56px] lg:w-[87px] h-auto"
          />
          <h2 className="text-[24px] lg:text-[32px] font-nunito font-normal z-1 leading-tight lg:leading-[38px] text-primary-black uppercase font-otomanopee-one">
            More Than Medicine,
            <br className="hidden lg:block" /> A Whole Lot of Heart!
          </h2>
        </div>
        <div className="mt-4 lg:mt-4">
          <p className="text-primary-black text-[16px] lg:text-[22px] leading-relaxed lg:leading-[28px] font-medium">
            At Walnut Grove Animal Hospital, care begins with listening. We take
            the time to understand your concerns, observe your pet thoughtfully,
            and explain every step clearly so you feel confident in the
            decisions we make together.
          </p>
        </div>
        <div className="mt-4">
          <p className="text-primary-black text-[16px] lg:text-[22px] leading-relaxed lg:leading-[28px] font-medium">
            Our approach combines advanced veterinary medicine with gentle
            handling and a low-stress environment. From preventive wellness
            visits to diagnostics and surgery, we prioritize safety, comfort,
            and individualized treatment plans tailored to your pet’s unique
            needs.
          </p>
        </div>
        <h4 className="text-[20px] lg:text-[24px] my-6 lg:my-4 capitalize leading-tight lg:leading-[28px] border-b-2 border-primary-purple font-semibold font-nunito text-primary-black mb-4 w-fit">
          We believe exceptional care is built on three principles
        </h4>

        <div className="flex flex-col gap-3 lg:gap-2 items-center lg:items-start text-center lg:text-left">
          {points.map((point) => (
            <div key={point} className="flex items-center gap-3">
              <span className="text-primary-green hidden lg:inline">
                &#9679;
              </span>
              <p className="text-primary-black text-[15px] lg:text-[20px] leading-relaxed lg:leading-[28px] font-normal">
                {point}
              </p>
            </div>
          ))}
          <p className="text-primary-black text-[16px] lg:text-[22px] mt-6 lg:mt-4 leading-relaxed lg:leading-[28px] font-medium">
            Because caring for animals isn’t just our profession, it’s our
            responsibility and our privilege.
          </p>
          <div className="w-fit mt-8 lg:mt-6">
            <Link href="/services">
              <CtaButton className="capitalize" icon="/icons/paw.svg">
                View Our Services
              </CtaButton>
            </Link>
          </div>
        </div>
      </div>
      <Image
        src="/assets/about-2.webp"
        alt="welcome"
        height={557}
        width={364}
        className="z-1 w-full lg:w-[364px] h-auto rounded-[30px] lg:rounded-none"
      />
    </div>
  );
};
