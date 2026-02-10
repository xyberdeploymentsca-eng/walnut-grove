/** @format */

import { cn } from "@/utils/helpers";
import Image from "next/image";

export const CtaButton = ({
  icon,
  children,
  className,
}: {
  icon: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `flex items-center justify-center cursor-pointer group`,
        className,
      )}
    >
      <button className="cursor-pointer bg-primary-green text-text-white rounded-[18px] px-5 py-2.5 font-medium leading-[26px] capitalize transition-all duration-500 group-hover:shadow-[inset_0px_0px_20px_0px_#FFF153]">
        {children}
      </button>
      <div className="h-2 w-2.5 bg-primary-green" />
      <div className="bg-primary-green rounded-[18px] p-[9px] transition-all duration-500 group-hover:shadow-[inset_0px_0px_20px_0px_#FFF153]">
        <Image src={icon} alt="arrow-right" height={28} width={28} />
      </div>
    </div>
  );
};
