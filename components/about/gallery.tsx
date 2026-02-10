/** @format */

import Image from "next/image";

export const Gallery = () => {
  return (
    <div
      id="gallery"
      className="scroll-mt-[200px] max-w-[1092px] mx-auto flex flex-col items-center justify-center mt-20 mb-40"
    >
      <div className="flex flex-row items-center justify-center gap-6 w-full">
        <Image src="/icons/pinkBow.svg" alt="pink-paw" width={87} height={87} />

        <h1 className="text-[32px] max-w-[562px] text-left font-normal leading-[38px] text-primary-black uppercase font-otomanopee-one">
          A Closer Look at Our Clinic <br />
          and our community
        </h1>
      </div>

      <div className="mt-4 w-full flex items-center justify-center">
        <p className="text-primary-black max-w-[674px] text-[22px] leading-[28px] font-medium">
          We believe a welcoming environment makes all the difference! Our
          clinic is designed to be calm, comfortable, and reassuring, helping
          pets feel safe and families feel confident.
        </p>
      </div>

      {/* GALLERY GRID */}
      <div className="mt-14 w-full grid grid-cols-4 gap-y-6">
        {Array.from({ length: 14 }).map((_, index) => {
          const itemNum = index + 1;
          const isWide = itemNum === 1 || itemNum === 10;

          return (
            <div
              key={itemNum}
              className={`relative overflow-hidden rounded-[20px] ${
                isWide ? "col-span-2 h-[260px]" : "h-[260px]"
              }`}
            >
              <Image
                src={`/assets/gal${itemNum}.png`}
                alt={`gallery-${itemNum}`}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
