/** @format */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { CtaButton } from "../ui/ctaButton";

type DropdownType = "services" | "about" | null;

export const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  const headerLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/about",
      hasDropdown: true,
    },
    {
      label: "Services",
      href: "/services",
      hasDropdown: true,
    },
    {
      label: "Resources",
      href: "/resources",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
  ];

  const servicesDropdownContent = {
    sections: [
      {
        title: "View All Services",
        description:
          "Comprehensive veterinary services guided by expertise and empathy.",
        href: "/services",
      },
      {
        title: "Health Screenings",
        items: [
          { label: "Laboratory services", href: "/services/laboratory-tests" },
          { label: "Ultrasound", href: "/services/ultrasound-services" },
        ],
      },
      {
        title: "Pet Boarding",
        description:
          "A safe, calm, and caring stay for your pet while you're away.",
        href: "/services/pet-boarding-services",
      },
      {
        title: "Surgeries",
        items: [
          { label: "Dental services", href: "/services/dental-services" },
          { label: "Spay & Neuter", href: "/services/spay-neuter" },
        ],
      },
    ],
  };

  const aboutDropdownContent = {
    sections: [
      {
        title: "Our Story",
        description:
          "Learn how Walnut Grove began and what guides our care every day.",
        href: "/about#story",
      },
      {
        title: "How We Care",
        description:
          "Discover our philosophy and commitment to providing compassionate care.",
        href: "/about#care-philosophy",
      },
      {
        title: "Meet The Team",
        description:
          "Get to know the caring professionals behind your pet's treatment.",
        href: "/about#team",
      },
      {
        title: "View Our Gallery",
        description:
          "Take a look inside our clinic and moments that define our care.",
        href: "/about#gallery",
      },
      {
        title: "F.A.Q's",
        description:
          "Quick answers to common questions about our services, hours, and care.",
        href: "/about#faqs",
      },
    ],
  };

  const handleToggleDropdown = (dropdown: DropdownType) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="max-w-[1880px] font-nunito rounded-[40px] mx-auto h-[92px] bg-primary-white sticky top-5 z-[50] shadow-[0px_0px_20px_0px_#57575614]">
      <div className="flex items-center justify-between h-full w-full mx-auto px-[90px] py-5">
        <Link href="/">
          <Image src="/assets/logo.png" alt="logo" height={52} width={251} />
        </Link>

        <div className="flex items-center gap-15 ml-2" ref={dropdownRef}>
          {headerLinks.map((link) => {
            const dropdownKey =
              link.label === "Services"
                ? "services"
                : link.label === "About Us"
                  ? "about"
                  : null;
            const isActive = activeDropdown === dropdownKey;

            return (
              <div key={link.label} className="relative">
                {link.hasDropdown ? (
                  <button
                    onClick={() => handleToggleDropdown(dropdownKey)}
                    className="text-[18px] h-[52px] text-primary-black flex items-center leading-5 whitespace-nowrap font-medium hover:opacity-80 transition-opacity"
                  >
                    {link.label}
                    <svg
                      className={`ml-1 w-4 h-4 transition-transform ${isActive ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    className="text-[18px] h-[52px] text-primary-black flex items-center leading-5 whitespace-nowrap font-medium hover:opacity-80 transition-opacity"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Services Dropdown */}
                {link.label === "Services" && isActive && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-primary-white rounded-[16px] shadow-[0px_8px_20px_0px_rgba(87,87,86,0.08)] p-8 grid grid-cols-2 gap-x-10 gap-y-[18px]">
                    {/* Pointer Arrow */}
                    <div className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-[124px] h-[6px] bg-primary-green rounded-t-[6px]"></div>
                    {servicesDropdownContent.sections.map((section, idx) => (
                      <div key={idx}>
                        {section.href ? (
                          <Link
                            href={section.href}
                            className="group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <h3 className="text-[16px] leading-[18px] font-light text-primary-black mb-1 border-b-2 border-primary-purple group-hover:text-primary-green transition-all w-fit">
                              {section.title}
                            </h3>
                            {section.description && (
                              <p className="text-[12px] font-light text-primary-black leading-[13px] group-hover:text-primary-green transition-all">
                                {section.description}
                              </p>
                            )}
                          </Link>
                        ) : (
                          <>
                            <h3 className="text-[16px] leading-[18px] font-light text-primary-black mb-2 border-b-2 border-primary-purple w-fit">
                              {section.title}
                            </h3>
                            {section.items && (
                              <ul className="space-y-1">
                                {section.items.map((item, itemIdx) => (
                                  <li key={itemIdx}>
                                    <Link
                                      href={item.href}
                                      onClick={() => setActiveDropdown(null)}
                                      className="text-[12px] font-light text-primary-black hover:text-primary-green transition-all w-fit block"
                                    >
                                      • {item.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* About Us Dropdown */}
                {link.label === "About Us" && isActive && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-primary-white rounded-[16px] shadow-[0px_8px_20px_0px_rgba(87,87,86,0.08)] p-8 grid grid-cols-2 gap-x-10 gap-y-[18px]">
                    {/* Pointer Arrow */}
                    <div className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-[124px] h-[6px] bg-primary-green rounded-t-[6px]"></div>
                    {aboutDropdownContent.sections.map((section, idx) => (
                      <Link
                        key={idx}
                        href={section.href}
                        className="group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <h3 className="text-[16px] leading-[18px] font-light text-primary-black mb-1 border-b-2 border-primary-purple group-hover:text-primary-green transition-all w-fit">
                          {section.title}
                        </h3>
                        <p className="text-[12px] font-light text-primary-black leading-[13px] group-hover:text-primary-green transition-all">
                          {section.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <CtaButton icon="/icons/calender.svg">Schedule Appointment</CtaButton>
      </div>
    </div>
  );
};
