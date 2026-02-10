/** @format */
"use client";

import { ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { CtaButton } from "../ui/ctaButton";

export const Screening = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const points = [
    "Detects internal health concerns early, often before symptoms appear.",
    "Ensures the right tests are done at the right stage of your pet's life.",
    "Helps guide timely treatment and preventive care decisions.",
    "Provides reassurance and clarity about your pet's overall health.",
    "Supports longer, healthier lives through proactive monitoring.",
  ];

  const healthScreeningData = [
    {
      color: "#E7D2FF",
      label: "Purple",
      schedules: [
        {
          frequency: "Every 6 Months",
          description:
            "Urine Specific Gravity ( a urine test to check how well the kidneys concentrate urine - there is no charge for this test)",
        },
        {
          frequency: "Every 12 Months",
          description:
            "Baseline Blood Profile (a small blood test checking internal organ health)",
        },
      ],
    },
    {
      color: "#83BF78",
      label: "Green",
      schedules: [
        {
          frequency: "Every 6 Months",
          description: "Urine Specific Gravity",
        },
        {
          frequency: "Every 12 Months",
          description:
            "Annual Health Profile (a blood test checking red and white blood cell counts and a more comprehensive internal organ screen)",
        },
      ],
    },
    {
      color: "#F5C842",
      label: "Yellow",
      schedules: [
        {
          frequency: "Every 6 Months",
          description: "Urine Specific Gravity +/- Urine Dipstick",
        },
        {
          frequency: "Every 12 Months",
          description:
            "Senior Health Profile (comprehensive internal organ screen including thyroid testing, electrolytes and red and white blood cell counts and urine specific gravity)",
        },
      ],
    },
    {
      color: "#E74C3C",
      label: "Red",
      schedules: [
        {
          frequency: "Every 6 Months",
          description:
            "Golden Years Health Profile (comprehensive internal organ screen including thyroid testing, electrolytes and red and white blood cell counts)",
        },
      ],
    },
  ];

  return (
    <>
      <div className="max-w-[1268px] mx-auto my-[176px]">
        <div className="flex flex-row justify-between items-center max-w-[1296px] mx-auto px-4 relative z-1 gap-16">
          <div className="flex flex-col -mt-10">
            <Image
              src="/assets/twoFrenchie.webp"
              alt="golden-dog"
              height={326}
              width={344}
              className="object-contain"
            />
            <div className="w-[424px] h-[334px] bg-[#FFFCF7] rounded-[18px] pt-15 px-10 pb-10 mt-[22px] flex flex-col items-center justify-center">
              <h3 className="text-[24px] leading-[22px] font-otomanopee-one text-primary-black mb-[18px] uppercase">
                True Age Chart
              </h3>
              <p className="text-[18px] text-primary-black leading-[22px] text-center font-medium relative z-1 max-w-[800px]">
                Use the age chart below to find your pets age in "people" years
                and the screening testing recommended for each stage of his or
                her life.
              </p>
              <div className="w-[246px] mx-auto h-[2px] bg-primary-blue my-[30px]" />
              <div
                className="flex justify-between items-center group cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <span className="text-[22px] capitalize font-nunito font-bold text-primary-black group-hover:text-primary-green transition-colors">
                  view true age chart
                </span>
                <div className="p-2 rounded-full group-hover:bg-primary-green/10 transition-all">
                  <ArrowRight
                    className="text-primary-black group-hover:text-primary-green transition-transform group-hover:translate-x-1"
                    size={24}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-[781px]">
            <div className="flex flex-row items-center justify-left gap-6 relative z-1">
              <Image
                src="/icons/blueBow.svg"
                alt="pink-bow"
                height={87}
                width={87}
              />
              <h2 className="text-[32px] text-left font-nunito font-normal z-1 leading-[38px] text-primary-black uppercase font-otomanopee-one">
                Compassionate veterinary
                <br /> Services for Lifelong Pet Care
              </h2>
            </div>
            <p className="text-[22px] mt-6 text-primary-black leading-[28px] font-medium text-left relative z-1 max-w-[800px]">
              Pets can't tell us when something feels wrong, and instinctively,
              they often hide signs of illness until problems become advanced.
              Regular health screenings allow us to look beneath the surface,
              identifying changes early and supporting your pet's wellbeing
              through every life stage.
            </p>
            <h4 className="text-[24px] mt-6 text-primary-black leading-[28px] font-semibold text-left relative z-1 w-full border-b border-primary-green broder-2 pb-2">
              Benefits of Regular Health Screenings
            </h4>
            <ul className="space-y-2 mt-6 mb-8 text-left inline-block">
              {points.map((point, pIdx) => (
                <li
                  key={pIdx}
                  className="flex items-start gap-3 text-[19px] font-nunito font-medium text-primary-black/90"
                >
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary-black flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <CtaButton icon="/icons/calender.svg">
                Schedule Appointment
              </CtaButton>
            </div>
          </div>
        </div>
      </div>

      {/* Age Chart Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-primary-white rounded-[18px] max-w-[1043px] max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary-green/10 hover:bg-primary-green/20 flex items-center justify-center transition-colors z-10"
            >
              <X className="text-primary-green" size={24} />
            </button>

            {/* Modal Content */}
            <div className="p-10">
              <h2 className="text-[32px] font-otomanopee-one text-primary-black mb-6 uppercase text-center">
                Pet's True Age Chart
              </h2>

              {/* Age Chart Image */}
              <div className="mb-8">
                <Image
                  src="/assets/ageChart.webp"
                  alt="Pet Age Chart"
                  width={680}
                  height={422}
                  className="mx-auto rounded-lg"
                />
              </div>

              {/* Health Screening Information */}
              <div className="space-y-0">
                {healthScreeningData.map((section, idx) => (
                  <div
                    key={section.label}
                    className={`flex gap-4 ${"py-4 border-t-2 border-primary-purple"}`}
                  >
                    <div className="flex flex-col items-center justify-center min-w-[120px]">
                      <div
                        className="w-full h-12 rounded-md mb-2"
                        style={{ backgroundColor: section.color }}
                      ></div>
                      <span className="text-[18px] font-semibold text-primary-black">
                        {section.label}
                      </span>
                    </div>
                    <div className="flex-1">
                      {section.schedules.map((schedule, scheduleIdx) => (
                        <div key={scheduleIdx}>
                          <h3 className="text-[18px] font-semibold text-primary-black mb-1 leading-5">
                            {schedule.frequency}
                          </h3>
                          <p
                            className={`text-[16px] text-primary-black/80 leading-5 ${
                              scheduleIdx < section.schedules.length - 1
                                ? "mb-3"
                                : ""
                            }`}
                          >
                            {schedule.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
