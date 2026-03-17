/** @format */

import Image from "next/image";
import { CtaButton } from "../ui/ctaButton";
import Link from "next/link";

export const Gallery = () => {
  const images = [
    "/assets/gallery1.png",
    "/assets/gallery2.png",
    "/assets/gallery3.png",
    "/assets/gallery4.png",
    "/assets/gallery5.png",
    "/assets/gallery6.png",
    "/assets/gallery7.png",
    "/assets/gallery8.png",
  ];

  return (
    <div className="mt-20 lg:mt-[176px] max-w-[1092px] mx-auto mb-20 px-4">
      <div className="flex flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6 text-left">
        <Image
          src="/icons/pinkBow.svg"
          alt="pink-bow"
          height={87}
          width={87}
          className="w-[48px] lg:w-[87px] h-auto"
        />
        <h2 className="text-[22px] lg:text-[32px] font-nunito font-normal z-1 leading-tight lg:leading-[38px] text-primary-black uppercase font-otomanopee-one">
          A Little Look Into Life at Walnut Grove,
          <br className="hidden lg:block" /> Where Your Pets Are Cared for Like
          Family!
        </h2>
      </div>
      <p className="mt-4 text-primary-black text-[18px] lg:text-[22px] leading-snug lg:leading-[28px] font-medium text-left">
        From first hellos to follow-up care, our team is here to make every
        visit
        <br className="hidden lg:block" /> calm, comfortable, and filled with
        compassion.
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-none lg:grid-rows-3 gap-4 lg:gap-10 mt-8 auto-rows-[150px] lg:auto-rows-auto lg:h-[857px]">
        {/* Top 4 Small Images */}
        <div className="relative overflow-hidden rounded-[12px] lg:rounded-[18px]">
          <Image
            src={images[0]}
            alt="gallery-1"
            fill
            className="object-cover lg:object-none"
          />
        </div>
        <div className="relative overflow-hidden rounded-[12px] lg:rounded-[18px]">
          <Image
            src={images[1]}
            alt="gallery-2"
            fill
            className="object-cover lg:object-none"
          />
        </div>
        <div className="relative overflow-hidden rounded-[12px] lg:rounded-[18px]">
          <Image
            src={images[4]}
            alt="gallery-3"
            fill
            className="object-cover lg:object-none"
          />
        </div>
        <div className="relative overflow-hidden rounded-[12px] lg:rounded-[18px]">
          <Image
            src={images[3]}
            alt="gallery-4"
            fill
            className="object-cover lg:object-none"
          />
        </div>

        {/* Large Vertical Image spanning 2 cols and 2 rows */}
        <div className="relative overflow-hidden rounded-[12px] lg:rounded-[18px] col-span-2 row-span-2 lg:col-start-3 lg:row-start-1">
          <Image
            src={images[2]}
            alt="gallery-5"
            fill
            className="object-cover lg:object-none"
          />
        </div>

        {/* Bottom Row of Images */}
        <div className="relative overflow-hidden rounded-[12px] lg:rounded-[18px]">
          <Image
            src={images[5]}
            alt="gallery-6"
            fill
            className="object-cover lg:object-none"
          />
        </div>
        <div className="relative overflow-hidden rounded-[12px] lg:rounded-[18px] col-span-1 lg:col-span-2">
          <Image
            src={images[6]}
            alt="gallery-7"
            fill
            className="object-cover lg:object-none"
          />
        </div>
        <div className="relative overflow-hidden rounded-[12px] lg:rounded-[18px]">
          <Image
            src={images[7]}
            alt="gallery-8"
            fill
            className="object-cover lg:object-none"
          />
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <Link href="/about#gallery">
          <CtaButton icon="/icons/gallery.svg">View Our Gallery</CtaButton>
        </Link>
      </div>
    </div>
  );
};
