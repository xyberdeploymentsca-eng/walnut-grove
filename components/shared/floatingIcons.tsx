/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";

import { LucideIcon } from "lucide-react";
import { useModalStore } from "@/utils/store";

type FloatingIconItem = {
  label: string;
  icon: string | LucideIcon;
  href?: string;
  onClick?: () => void;
  isLucide?: boolean;
};

export const FloatingIcons = () => {
  const { openModal } = useModalStore();

  const icons: FloatingIconItem[] = [
    {
      label: "Schedule",
      icon: "/icons/calender.svg",
      onClick: openModal,
    },
    {
      label: "Pet Supplies",
      icon: "/icons/petFood.svg",
      href: "https://www.myvetstore.ca/",
    },
    {
      label: "Pet Care Tips",
      icon: "/icons/petCare.svg",
      href: "/resources/how-to-videos",
    },
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-4 pr-4">
      {icons.map((item, index) => {
        const Icon = item.icon;
        const buttonContent = (
          <div className="flex flex-col lg:flex-row items-center bg-[#A6D377] hover:bg-[#8CBF67] transition-all duration-500 ease-in-out h-auto lg:h-[66px] w-[64px] lg:w-auto rounded-[12px] lg:rounded-[22px] overflow-hidden shadow-lg border-none outline-none py-2 lg:py-0">
            {/* Icon Container - fixed width on desktop, centric on mobile */}
            <div className="w-[40px] lg:w-[66px] h-[40px] lg:h-[66px] flex items-center justify-center flex-shrink-0 lg:bg-transparent order-1 lg:order-2">
              {item.isLucide && typeof Icon !== "string" ? (
                (() => {
                  const LucideIcon = Icon as any;
                  return (
                    <LucideIcon className="text-white w-6 lg:w-10 h-auto" />
                  );
                })()
              ) : (
                <Image
                  src={Icon as string}
                  alt={item.label}
                  width={40}
                  height={40}
                  className="w-6 lg:w-10 h-auto"
                />
              )}
            </div>

            {/* Label Container - visible on mobile, expandable on desktop */}
            <div className="lg:max-w-0 lg:group-hover:max-w-[240px] transition-all duration-500 ease-in-out overflow-hidden order-2 lg:order-1 mt-1 lg:mt-0">
              <span className="text-white font-nunito font-bold text-[10px] lg:text-[18px] text-center lg:text-left whitespace-nowrap lg:whitespace-nowrap px-1 lg:pl-6 lg:pr-2 block leading-tight">
                {item.label}
              </span>
            </div>
          </div>
        );

        if (item.onClick) {
          return (
            <button
              key={index}
              onClick={item.onClick}
              className="group flex items-center justify-end bg-transparent p-0 border-none outline-none cursor-pointer"
              aria-label={item.label}
            >
              {buttonContent}
            </button>
          );
        }

        return (
          <Link
            key={index}
            href={item.href || "#"}
            target={item.isLucide ? "_blank" : "_self"}
            className="group flex items-center justify-end"
          >
            {buttonContent}
          </Link>
        );
      })}
    </div>
  );
};
