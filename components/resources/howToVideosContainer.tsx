/** @format */

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Link2 } from "lucide-react";

const videoLinks = [
  { id: "S-pYM4VVNaI", title: "How to give a pet injection" },
  { id: "nbi2Fsj95Ik", title: "How to give a cat a pill" },
  { id: "99x64TF8ppU", title: "How to brush a dog's teeth" },
  { id: "F10GT08AfYE", title: "How to clean a dog's ears" },
];

const helpfulResources = [
  {
    name: "Choosing a new puppy",
    href: "https://www.avma.org/resources/pet-owners/petcare/selecting-pet-dog",
    description:
      "This is a nice starter guide of things that you should consider when you are thinking about getting a puppy.",
  },
  {
    name: "Heartworm Society",
    href: "https://www.heartwormsociety.org/",
    description:
      "Everything you ever wanted to know about heartworm disease can be found here!",
  },
  {
    name: "Behavior problems",
    href: "https://cattledogpublishing.com/",
    description:
      "We are dedicated to helping others experience the same joy we share with our own pets. Our insight into the animal's point of view and awareness of how all our interactions affect them allows us and our pets to have fun and enjoy life together every day.",
  },
  {
    name: "National Animal Poison Control Center",
    href: "https://www.aspca.org/pet-care/animal-poison-control",
    description:
      "This is the website of the National Animal Poison Control Center. It includes a library, links to other sites, and phone numbers for the poison control center.",
  },
  {
    name: "Rainbow Bridge",
    href: "https://www.rainbowsbridge.com/hello.htm",
    description:
      "Anyone who has ever lost a pet should visit this wonderful site. It is a terrific tribute to our lost family members",
  },
  {
    name: "West Nile Virus",
    href: "https://www.cdc.gov/ncidod/dvbid/westnile/index.htm",
    description:
      "This site is maintained by the Centres for Disease Control in Atlanta, and has the latest information on the spread of West Nile Virus in the US, as well as information on disease transmission, symptoms, etc.",
  },
  {
    name: "USDA Animal and Plant Health Inspection Service",
    href: "https://www.aphis.usda.gov/wps/portal/aphis/home",
    description: "",
  },
];

export const HowToVideosContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videoLinks.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + videoLinks.length) % videoLinks.length,
    );
  };

  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-white relative pb-20 lg:pb-40">
      <Image
        src="/assets/commonBanner.svg"
        alt="banner"
        width={1920}
        height={466}
        className="absolute top-0 left-0 w-full h-[300px] lg:h-auto object-cover z-0"
      />

      <div className="relative z-1 max-w-[1296px] mx-auto pt-[150px] lg:pt-[297px] px-6 lg:px-4">
        {/* Videos Section */}
        <section id="how-to-videos" className="mb-24 lg:mb-40">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-7 mb-12 text-center lg:text-left">
            <div className="rounded-full shrink-0">
              <Image
                src="/icons/pinkPaw.svg"
                alt="paw"
                width={79}
                height={79}
                className="w-[79px] lg:w-[79px]"
              />
            </div>
            <div>
              <h2 className="text-[28px] lg:text-[40px] font-otomanopee-one text-primary-black uppercase leading-[1.1]">
                HOW TO VIDEOS, <br className="hidden lg:block" /> PRACTICAL PET
                CARE STRAIGHT FROM OUR TEAM
              </h2>
              <p className="text-[16px] lg:text-[20px] font-nunito font-medium text-primary-black leading-relaxed mt-4 max-w-[950px]">
                Caring for your pet doesn&apos;t stop at the clinic. Our video
                library offers trusted, easy-to-follow guidance from our
                veterinary team to help you confidently support your pet at
                home.
              </p>
            </div>
          </div>

          <div className="relative group">
            {/* Nav Arrows */}
            <button
              onClick={handlePrev}
              className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg text-primary-purple hover:scale-110 transition-transform"
            >
              <ChevronLeft size={32} />
            </button>

            <div className="w-full overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-6 items-stretch"
                style={{
                  transform: `translateX(-${currentIndex * (windowWidth < 1024 ? 352 : 440)}px)`,
                }}
              >
                {videoLinks.map((video) => (
                  <div
                    key={video.id}
                    className="min-w-[328px] lg:min-w-[328px] bg-white rounded-[16px] overflow-hidden shadow-[0px_0px_30px_rgba(0,0,0,0.1)] transition-all hover:shadow-[0px_0px_45px_rgba(0,0,0,0.15)] flex flex-col"
                  >
                    <div className="relative aspect-video">
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg text-primary-purple hover:scale-110 transition-transform"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </section>

        {/* Resources Section */}
        <section
          id="important-links"
          className="flex flex-col lg:flex-row items-start gap-12 lg:gap-32"
        >
          <div className="w-full lg:w-[452px] shrink-0">
            <div className="relative aspect-[452/603] rounded-[30px] overflow-hidden shadow-[0px_20px_60px_rgba(0,0,0,0.08)]">
              <Image
                src="/assets/links.webp"
                alt="Pet care resources"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-4 lg:gap-7 mb-10 text-center lg:text-left">
              <div className="rounded-full shrink-0">
                <Image
                  src="/icons/pinkBow.svg"
                  alt="resources"
                  width={79}
                  height={79}
                  className="w-[79px] lg:w-[79px]"
                />
              </div>
              <h2 className="text-[28px] lg:text-[40px] font-otomanopee-one text-primary-black uppercase leading-[1.1]">
                IMPORTANT LINKS, <br className="hidden lg:block" /> TRUSTED
                RESOURCES FOR PET PARENTS
              </h2>
            </div>

            <div className="space-y-6 mb-12 text-center lg:text-left">
              <p className="text-[16px] lg:text-[20px] font-nunito font-medium text-primary-black leading-relaxed">
                We believe informed pet parents make confident decisions. Below
                you&apos;ll find carefully selected external resources that
                provide reliable information on pet health, safety, and
                preventive care.
              </p>
              <p className="text-[16px] lg:text-[20px] font-nunito font-medium text-primary-black leading-relaxed">
                These links are provided to support you with additional
                educational tools beyond your visits with us.
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-[22px] lg:text-[24px] font-otomanopee-one text-primary-black uppercase mb-10 border-b-[3px] border-[#E7D2FF] w-fit pb-2 leading-none mx-auto lg:mx-0">
                  Helpful Resources
                </h3>
                <div className="space-y-10">
                  {helpfulResources.map((resource, idx) => (
                    <div
                      key={idx}
                      className="group flex flex-col items-start gap-1"
                    >
                      <a
                        href={resource.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-[18px] lg:text-[22px] font-nunito font-medium text-[#3C3C3B] hover:text-primary-green transition-colors"
                      >
                        <Link2
                          size={24}
                          className="text-primary-green shrink-0"
                        />
                        <span className="underline underline-offset-[6px] decoration-[#3C3C3B]/20 group-hover:decoration-primary-green">
                          {resource.name}
                        </span>
                      </a>
                      {resource.description && (
                        <p className="text-[15px] lg:text-[18px] font-nunito font-medium text-[#3C3C3B]/80 ml-8 lg:ml-9 leading-relaxed">
                          {resource.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Image
        src="/assets/leftPaws.svg"
        alt="paws"
        width={392}
        height={1484}
        className="absolute bottom-0 left-[-10%] opacity-20 pointer-events-none -z-1"
      />
    </div>
  );
};
