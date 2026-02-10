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
    <div className="mt-[176px] max-w-[1092px] mx-auto mb-20 px-4">
      <div className="flex flex-row items-center justify-start gap-6">
        <Image src="/icons/pinkBow.svg" alt="pink-bow" height={87} width={87} />
        <h2 className="text-[32px] text-center font-nunito font-normal z-1 leading-[38px] text-primary-black uppercase font-otomanopee-one">
          A Little Look Into Life at Walnut Grove,
          <br /> Where Your Pets Are Cared for Like Family!
        </h2>
      </div>
      <p className="mt-4 text-primary-black text-[22px] leading-[28px] font-medium text-center">
        From first hellos to follow-up care, our team is here to make every
        visit
        <br /> calm, comfortable, and filled with compassion.
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-4 grid-rows-3 gap-5 mt-8 h-[857px]">
        {/* Top 4 Small Images */}
        <div className="relative overflow-hidden rounded-[18px]">
          <Image
            src={images[0]}
            alt="gallery-1"
            height={260}
            width={250}
            className="object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded-[18px]">
          <Image
            src={images[1]}
            alt="gallery-2"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded-[18px]">
          <Image
            src={images[4]}
            alt="gallery-3"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded-[18px]">
          <Image
            src={images[3]}
            alt="gallery-4"
            fill
            className="object-cover"
          />
        </div>

        {/* Large Vertical Image spanning 2 cols and 2 rows */}
        <div className="relative overflow-hidden rounded-[18px] col-span-2 row-span-2 col-start-3 row-start-1">
          <Image
            src={images[2]}
            alt="gallery-5"
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom Row of 4 Images */}
        <div className="relative overflow-hidden rounded-[18px]">
          <Image
            src={images[5]}
            alt="gallery-6"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded-[18px] col-span-2">
          <Image
            src={images[6]}
            alt="gallery-7"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded-[18px]">
          <Image
            src={images[7]}
            alt="gallery-8"
            fill
            className="object-cover"
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
