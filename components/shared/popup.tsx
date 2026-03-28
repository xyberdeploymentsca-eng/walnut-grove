/** @format */

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const Popup = () => {
  const [data, setData] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "popupNotification"][0]`;
        const result = await client.fetch(query);

        if (result?.isActive) {
          // Check session storage
          if (result.showOncePerSession) {
            const hasSeen = sessionStorage.getItem("hasSeenPopup");
            if (hasSeen) return;
          }

          setData(result);

          // Delay
          const timer = setTimeout(() => {
            setIsVisible(true);
          }, (result.delay || 2) * 1000);

          return () => clearTimeout(timer);
        }
      } catch (error) {
        console.error("Error fetching popup data:", error);
      }
    };

    fetchData();
  }, []);

  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      if (data?.showOncePerSession) {
        sessionStorage.setItem("hasSeenPopup", "true");
      }
    }, 500); // Wait for fade-out animation
  };

  if (!data || (!isVisible && !isClosing)) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/40 backdrop-blur-[4px] transition-all duration-500 ease-in-out ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`relative bg-white/95 backdrop-blur-md rounded-[32px] overflow-hidden max-w-[540px] w-full shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] border border-white/40 transform transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isClosing ? "scale-90 opacity-0 translate-y-10" : "scale-100 opacity-100 translate-y-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-6 right-6 z-10 p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* Content */}
        <div className="flex flex-col">
          {data.image && (
            <div className="relative w-full h-[220px] lg:h-[280px]">
              <Image
                src={urlFor(data.image).url()}
                alt={data.title || "Announcement"}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-transparent" />
            </div>
          )}

          <div className="p-8 lg:p-10 pt-4 lg:pt-6 text-center">
            {data.title && (
              <h3 className="text-[28px] lg:text-[34px] font-otomanopee-one text-primary-black leading-tight mb-4 uppercase">
                {data.title}
              </h3>
            )}
            {data.description && (
              <p className="text-gray-600 font-nunito text-[16px] lg:text-[18px] leading-relaxed mb-8">
                {data.description}
              </p>
            )}

            {data.buttonText && data.buttonLink && (
              <Link
                href={data.buttonLink}
                className="inline-flex items-center justify-center bg-[#8CBF67] hover:bg-[#7CAA5B] text-white font-nunito font-bold text-[18px] px-10 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                {data.buttonText}
              </Link>
            )}
            
            {!data.buttonText && (
              <button
                onClick={closePopup}
                className="inline-flex items-center justify-center bg-[#8CBF67] hover:bg-[#7CAA5B] text-white font-nunito font-bold text-[18px] px-10 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Close
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
