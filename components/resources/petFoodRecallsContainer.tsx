/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";

export const PetFoodRecallsContainer = () => {
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-white relative pb-20 lg:pb-40">
      {/* Banner */}
      <Image
        src="/assets/commonBanner.svg"
        alt="banner"
        width={1920}
        height={466}
        className="absolute top-0 left-0 w-full h-[300px] lg:h-auto object-cover z-0"
      />

      <div className="relative z-1 max-w-[1296px] mx-auto pt-[150px] lg:pt-[297px] px-6 lg:px-4">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-7 mb-12 text-center lg:text-left">
          <div className="rounded-full shrink-0">
            <Image
              src="/icons/card1.svg"
              alt="recall"
              width={79}
              height={79}
              className="w-[79px] lg:w-[79px]"
            />
          </div>
          <div>
            <h1 className="text-[28px] lg:text-[40px] font-otomanopee-one text-primary-black uppercase leading-[1.1]">
              Pet Food Recalls, <br className="hidden lg:block" /> Stay Informed
              On Your Pet&apos;s Nutrition
            </h1>
            <p className="text-[16px] lg:text-[20px] font-nunito font-medium text-primary-black leading-relaxed mt-4 max-w-[950px]">
              Keeping your pets safe starts with knowing what goes into their
              bowls. Stay updated with the latest pet food and product recalls
              to ensure your furry family members receive only the safest, highest
              quality nutrition.
            </p>
          </div>
        </div>

        {/* Iframe Section */}
        <div className="w-full bg-white rounded-[24px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.08)] border border-gray-100 mt-8">
          <div className="w-full h-[800px] lg:h-[1000px] relative">
            <iframe
              src="https://www.vin.com/recallcenter/default.aspx"
              className="absolute inset-0 w-full h-full border-0"
              title="Pet Food Recall Center"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* How to use the recall list: plain text on the page, not only inside the embedded list */}
        <div className="mt-12 max-w-[950px] space-y-4 text-[16px] lg:text-[18px] font-nunito font-medium text-primary-black leading-relaxed">
          <h2 className="text-[22px] lg:text-[28px] font-otomanopee-one uppercase leading-tight">
            How to Check Your Pet&apos;s Food
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Find the brand, product name, bag or can size, and the lot number and best-before date printed on the package.</li>
            <li>Compare them with the recall list above. A recall usually covers specific lots and dates, not every bag of a brand.</li>
            <li>Keep the package, or a photo of the label, until the bag or can is finished.</li>
            <li>Check the list again whenever you open a new bag, and after a pet food recall is in the news.</li>
          </ul>
          <h2 className="text-[22px] lg:text-[28px] font-otomanopee-one uppercase leading-tight pt-4">
            If Your Pet Ate a Recalled Food
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Stop feeding it, and set the package aside. Don&apos;t throw it away yet; the lot number matters.</li>
            <li>Watch for vomiting, diarrhea, not eating, low energy or anything unusual, and call us at (604) 888-2628 if you see any of it, or if you&apos;re unsure.</li>
            <li>Ask the store or manufacturer about a refund, following the instructions in the recall notice.</li>
            <li>
              If your pet is on a prescription diet, call us before switching foods so we can suggest a safe alternative. See{" "}
              <Link href="/services/prescription-diets" className="text-primary-green font-semibold hover:underline">
                prescription pet food
              </Link>
              .
            </li>
          </ul>
          <p>
            Signs like repeated vomiting, weakness or collapse need a vet right away. See{" "}
            <Link href="/pet-emergency-langley" className="text-primary-green font-semibold hover:underline">
              what to do in a pet emergency
            </Link>
            .
          </p>
        </div>

        {/* Disclaimer/Note */}
        <div className="mt-12 p-6 lg:p-10 bg-primary-blue/10 rounded-[20px] border border-primary-blue/20">
          <p className="text-[14px] lg:text-[16px] font-nunito text-primary-black/80 text-center italic">
            Note: This resource is provided by the Veterinary Information
            Network (VIN) and is updated regularly. For specific concerns about
            your pet&apos;s diet or symptoms after eating a particular food,
            please contact us immediately at (604) 888-2628.
          </p>
        </div>
      </div>

      {/* Decorative Paws */}
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
