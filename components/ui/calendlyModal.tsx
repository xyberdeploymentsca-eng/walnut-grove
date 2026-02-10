/** @format */

"use client";

import { useModalStore } from "@/utils/store";
import { X, Loader2 } from "lucide-react";
import Script from "next/script";
import { useEffect, useState } from "react";

export const CalendlyModal = () => {
  const { isOpen, closeModal } = useModalStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsLoading(true);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-4xl bg-[#FFFCF7] rounded-[30px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <button
          onClick={closeModal}
          className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-primary-black"
        >
          <X size={24} />
        </button>

        <div className="p-8 pb-0">
          <h2 className="text-[28px] font-otomanopee-one text-primary-black uppercase text-center mb-2">
            Book an Appointment
          </h2>
          <p className="text-center font-nunito text-primary-black/70 mb-4">
            Choose a time that works best for you and your pet.
          </p>
        </div>

        <div className="h-[700px] w-full bg-[#FFFCF7] relative">
          {isLoading && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#FFFCF7]">
              <Loader2 className="w-12 h-12 text-primary-green animate-spin mb-4" />
              <p className="font-nunito text-[18px] text-primary-black/60 animate-pulse">
                Loading schedule...
              </p>
            </div>
          )}
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/d/cxrd-664-p3f?background_color=fffcf7&text_color=3c3c3b&primary_color=83bf78"
            style={{ minWidth: "320px", height: "100%" }}
          ></div>
          <Script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
            onLoad={() => {
              // Give it a small delay to ensure the iframe starts rendering
              setTimeout(() => setIsLoading(false), 1000);
            }}
          />
        </div>
      </div>
      <div className="absolute inset-0 -z-10" onClick={closeModal} />
    </div>
  );
};
