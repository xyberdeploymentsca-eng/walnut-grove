/** @format */

import Image from "next/image";
import { CtaButton } from "../ui/ctaButton";

export const UltrasoundContainer = () => {
  const points = [
    "Liver, kidneys, bladder, and gastrointestinal tract",
    "Abdominal masses, fluid buildup, or organ changes",
    "Pregnancy monitoring and reproductive health",
    "Unexplained pain, weight loss, vomiting, or changes in appetite",
    "Follow-up monitoring of ongoing medical conditions",
  ];

  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-primary-white">
      <Image
        src={"/assets/commonBanner.svg"}
        alt="services-banner"
        height={466}
        width={1920}
        className="absolute top-0 left-0 z-0"
      />

      <Image
        src="/assets/rightPaws.svg"
        alt="right"
        className="absolute top-50 h-[1485px] -right-10 z-0"
        width={392}
        height={1484}
      />

      <div className="absolute top-[397px] right-10 pointer-events-none">
        <Image
          src="/assets/catBasket.webp"
          alt="dog-and-cat"
          width={650}
          height={550}
          className="object-contain"
        />
      </div>

      <div className="flex flex-row justify-between items-start max-w-[1296px] mx-auto pt-[197px] px-4 relative z-1">
        <div className="flex flex-col max-w-[1026px] rounded-[16px] p-16 relative shrink-0">
          <div className="flex flex-row items-center justify-start gap-6 mb-6">
            <Image
              src="/icons/card2.svg"
              alt="ultrasound-icon"
              height={87}
              width={87}
            />
            <h2 className="text-[48px] text-left font-otomanopee-one leading-[120%] text-primary-black uppercase">
              ULTRASOUND SERVICES
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-[20px] text-primary-black font-nunito font-medium leading-[140%]">
              Ultrasound imaging allows us to look inside your pet’s body in a
              gentle, non-invasive way. This advanced diagnostic tool helps us
              assess internal organs in real time, providing valuable
              information instantly.
            </p>
            <p className="text-[20px] text-primary-black font-nunito font-medium leading-[140%]">
              Ultrasounds are especially useful for evaluating soft tissues and
              identifying concerns that may not appear on routine exams or blood
              tests.
            </p>

            <div className="mt-6">
              <h4 className="text-[24px] leading-[28px] border-b-2 border-primary-purple font-bold font-nunito text-primary-black mb-4 w-fit">
                What Ultrasound Helps Us Evaluate
              </h4>
              <ul className="space-y-2">
                {points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[20px] font-nunito font-medium text-primary-black"
                  >
                    <span className="mt-2 w-2 h-2 rounded-full bg-primary-black flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[20px] text-primary-black font-nunito font-medium leading-[140%] mt-4">
              Ultrasound imaging gives us a clearer picture of your pet’s
              internal health, helping us diagnose conditions earlier and plan
              treatment with confidence, always prioritizing comfort, safety,
              and clarity for you and your pet.
            </p>

            <CtaButton
              className="justify-start mt-6"
              icon="/icons/calender.svg"
            >
              Schedule An Ultrasound
            </CtaButton>
          </div>
        </div>
      </div>
    </div>
  );
};
