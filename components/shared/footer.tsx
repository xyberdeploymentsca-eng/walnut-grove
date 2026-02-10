/** @format */

"use client";

import Image from "next/image";
import { CtaButton } from "../ui/ctaButton";
import Link from "next/link";
import { Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    {
      title: "About Us",
      links: [
        { name: "Our Team", href: "/team" },
        { name: "Gallery", href: "/gallery" },
        { name: "F.A.Q's", href: "/faqs" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Surgery", href: "/services/surgery" },
        { name: "Screenings", href: "/services/screenings" },
        { name: "Boarding", href: "/services/boarding" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Centre", href: "/support/help-centre" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms & Conditions", href: "/terms-conditions" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Pet Library", href: "/resources/pet-library" },
        { name: "Pet Food Recalls", href: "/resources/pet-food-recalls" },
        { name: "Links", href: "/links" },
      ],
    },
  ];

  return (
    <footer className="w-full max-w-[1920px] mx-auto relative min-h-[649px] mt-20 relative">
      <Image
        src="/assets/footer.svg"
        alt="footer-banner"
        fill
        className="absolute top-0 left-0 z-0 object-cover"
      />

      <div className="relative z-10 max-w-[1296px] mx-auto pt-38 px-4">
        {/* Top Section: Map and Working Hours */}
        <div className="flex flex-row justify-between items-start gap-10">
          {/* Map Area */}
          <div className="flex-1 h-[131px] bg-white rounded-[18px] overflow-hidden shadow-sm relative border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10435.947027458502!2d-122.65553799218746!3d49.16285959999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d22c82a4bc57%3A0x6a99a60503a6347e!2sWalnut%20Grove%20Animal%20Hospital%20Langley!5e0!3m2!1sen!2sus!4v1729006985870!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Working Hours Card */}
          <div className="w-[380px] bg-primary-blue rounded-[18px] p-8 shadow-sm h-[112px] p-[18px]">
            <h3 className="text-[16px] font-otomanopee-one text-primary-black mb-2 uppercase">
              Working Hours
            </h3>
            <div className="text-[14px] font-nunito text-primary-black">
              <p className="flex justify-between">
                <span className="font-medium">Monday to Friday :</span>
                <span>8:30am-7:00pm</span>
              </p>
              <p className="flex justify-between">
                <span className="font-medium">Saturday & Sunday :</span>
                <span>9:00am-5:00pm</span>
              </p>
            </div>
          </div>
        </div>

        {/* Middle Section: Contact Info and Schedule Button */}
        <div className="flex flex-row items-center justify-between mt-3">
          <div className="flex flex-row items-start gap-12">
            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin
                size={24}
                fill="text-primary-black"
                className="text-primary-black"
              />

              <div className="text-[16px] font-nunito text-primary-black">
                <p className="font-bold">101A-20995 88 Ave</p>
                <p>Langley, BC V1M2C9, Canada</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone
                size={24}
                fill="text-primary-black"
                className="text-primary-black"
              />

              <p className="text-[20px] font-bold font-nunito text-primary-black">
                (604) 888-2628
              </p>
            </div>
          </div>

          {/* Schedule Button */}
          <div className="flex items-center gap-4 -mt-5">
            <CtaButton icon="/icons/calender.svg">
              Schedule Appointment
            </CtaButton>
          </div>
        </div>

        {/* Bottom Section: Logo, Links and Socials */}
        <div className="flex flex-row justify-between items-start mt-12 pb-20">
          {/* Logo Brand */}
          <div className="flex items-center gap-4 max-w-[300px]">
            <Image src="/assets/logo.png" alt="logo" width={251} height={52} />
          </div>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-4 gap-12 flex-1 px-10">
            {footerLinks.map((category, catIdx) => (
              <div key={catIdx}>
                <h4 className="font-bold text-[18px] mb-4 text-primary-black">
                  {category.title}
                </h4>
                <ul className="space-y-2 text-[16px] text-primary-black/80">
                  {category.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="cursor-pointer hover:text-primary-green transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Media */}
          <div className="text-right">
            <h4 className="font-bold text-[18px] mb-4 text-primary-black">
              Find Us On Social Media!
            </h4>
            <div className="flex gap-4 justify-end">
              <Link
                href="https://instagram.com"
                target="_blank"
                className="bg-primary-green/20 p-2.5 rounded-xl cursor-pointer hover:bg-primary-green/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={28} className="text-primary-green" />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="bg-primary-green/20 p-2.5 rounded-xl cursor-pointer hover:bg-primary-green/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={28} className="text-primary-green" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute bottom-[11%] text-primary-blue text-[14px] font-medium right-[20%]">
        © Copyright 2026, All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
