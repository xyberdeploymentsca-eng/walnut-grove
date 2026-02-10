/** @format */

import Image from "next/image";

export const Team = () => {
  return (
    <div className="max-w-[1055px] mx-auto">
      <div className="flex flex-row items-center justify-start gap-6">
        <Image
          src="/assets/pinkPaw.svg"
          alt="pink-paw"
          height={87}
          width={87}
        />
        <h1 className="text-[32px] max-w-[720px] text-left font-nunito font-normal z-1 leading-[38px] text-primary-black uppercase font-otomanopee-one">
          Meet Our Team,
          <br />
          Experienced, Passionate & Dedicated!
        </h1>
      </div>
      <div className="mt-4">
        <p className="text-primary-black max-w-[730px] text-[22px] leading-[28px] font-medium">
          From first hellos to follow-up care, our team is here to make every
          visit calm, comfortable, and filled with compassion.
        </p>
      </div>
    </div>
  );
};
