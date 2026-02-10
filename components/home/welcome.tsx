/** @format */

import Image from "next/image";
import { CtaButton } from "../ui/ctaButton";

const points = [
  "A friendly, experienced veterinary team that treats pets like their own.",
  "Modern equipment for accurate diagnosis and safer treatments.",
  "Honest guidance and transparent communication, no rushed visits.",
  "A warm, welcoming clinic designed to keep pets comfortable.",
];

export const Welcome = () => {
  return (
    <div className="mb-50 max-w-[1185px] mx-auto flex items-center gap-6 mt-[38%] font-nunito">
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
        src="/assets/dog.png"
        alt="welcome"
        height={472}
        width={301}
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
            Welcome to walnut grove <br />
            Animal Hospital!
          </h1>
        </div>
        <div className="mt-4">
          <p className="text-primary-black text-[22px] leading-[28px] font-medium">
            At Walnut Grove Animal Hospital, we believe every pet deserves{" "}
            <br />
            compassionate care, clear communication, and a stress-free
            experience.{" "}
          </p>
        </div>
        <div className="flex flex-col mt-4 gap-2">
          {points.map((point) => (
            <div key={point}>
              <p className="text-primary-black text-[20px] leading-[28px] font-normal">
                {" "}
                &#9679; {point}
              </p>
            </div>
          ))}
          <p className="text-primary-black text-[22px] leading-[28px] font-medium">
            From routine screenings to advanced procedures and comfortable
            boarding, our dedicated team is here to support your pet’s health,
            and give you peace of mind.
          </p>
          <div className="w-fit">
            <CtaButton className="mt-6" icon="/icons/vet.svg">
              know more about us
            </CtaButton>
          </div>
        </div>
      </div>
    </div>
  );
};
