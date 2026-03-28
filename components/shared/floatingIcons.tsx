/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";

import { LucideIcon } from "lucide-react";

type FloatingIconItem = {
  label: string;
  icon: string | LucideIcon;
  href: string;
  isLucide?: boolean;
};

const icons: FloatingIconItem[] = [
  {
    label: "Pet Supplies",
    icon: "/icons/petFood.svg",
    href: "#", // Placeholder
  },
  {
    label: "Pet Care Tips",
    icon: "/icons/petCare.svg",
    href: "#", // Placeholder
  },
];

export const FloatingIcons = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-4 pr-4">
      {icons.map((item, index) => {
        const Icon = item.icon;
        return (
          <Link
            key={index}
            href={item.href}
            target={item.isLucide ? "_blank" : "_self"}
            className="group flex items-center justify-end"
          >
            <div className="flex items-center bg-[#A6D377] hover:bg-[#8CBF67] transition-all duration-500 ease-in-out h-[56px] lg:h-[66px] rounded-[18px] lg:rounded-[22px] overflow-hidden shadow-lg">
              {/* Label Container - expands from 0 width */}
              <div className="max-w-0 group-hover:max-w-[240px] transition-all duration-500 ease-in-out overflow-hidden">
                <span className="text-white font-nunito font-bold text-[16px] lg:text-[18px] whitespace-nowrap pl-6 pr-2 block">
                  {item.label}
                </span>
              </div>

              {/* Icon Container - fixed width */}
              <div className="w-[56px] lg:w-[66px] h-[56px] lg:h-[66px] flex items-center justify-center flex-shrink-0">
                {item.isLucide && typeof Icon !== "string" ? (
                  (() => {
                    const LucideIcon = Icon as any;
                    return (
                      <LucideIcon className="text-white w-8 lg:w-10 h-auto" />
                    );
                  })()
                ) : (
                  <Image
                    src={Icon as string}
                    alt={item.label}
                    width={40}
                    height={40}
                    className="w-8 lg:w-10 h-auto"
                  />
                )}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
