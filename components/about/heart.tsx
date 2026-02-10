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
    <div className="mb-50 max-w-[1185px] mx-auto flex items-center gap-6 font-nunito">
      <div className="flex flex-col justify-center items-left">
        <div className="flex flex-row items-center justify-start gap-6">
          <Image
            src="/icons/blueHeart.svg"
            alt="heart-paw"
            height={87}
            width={87}
          />
          <h2 className="text-[32px] text-left font-nunito font-normal z-1 leading-[38px] text-primary-black uppercase font-otomanopee-one">
            More Than Medicine,
            <br /> A Whole Lot of Heart!
          </h2>
        </div>
        <div className="mt-4">
          <p className="text-primary-black text-[22px] leading-[28px] font-medium">
            At Walnut Grove Animal Hospital, care begins with listening. We take
            the time to understand your concerns, observe your pet thoughtfully,
            and explain every step clearly so you feel confident in the
            decisions we make together.
          </p>
        </div>
        <div className="mt-4">
          <p className="text-primary-black text-[22px] leading-[28px] font-medium">
            Our approach combines advanced veterinary medicine with gentle
            handling and a low-stress environment. From preventive wellness
            visits to diagnostics and surgery, we prioritize safety, comfort,
            and individualized treatment plans tailored to your pet’s unique
            needs.
          </p>
        </div>
        <h4 className="text-[24px] my-4 capitalize leading-[28px] border-b-2 border-primary-purple font-semibold font-nunito text-primary-black mb-4 w-fit">
          We believe exceptional care is built on three principles
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
            Because caring for animals isn’t just our profession, it’s our
            responsibility and our privilege.
          </p>
          <div className="w-fit">
            <Link href="/services">
              <CtaButton className="mt-6 capitalize" icon="/icons/paw.svg">
                View Our Services
              </CtaButton>
            </Link>
          </div>
        </div>
      </div>
      <Image
        src="/assets/goldenRose.webp"
        alt="welcome"
        height={557}
        width={364}
        className="z-1"
      />
    </div>
  );
};
