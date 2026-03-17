/** @format */

import React from "react";
import { cn } from "@/utils/helpers";

type FormInputProps = {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  rows?: number;
  className?: string;
  error?: string;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

export const FormInput = ({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
  rows,
  className,
  error,
  onBlur,
}: FormInputProps) => {
  const baseClass = cn(
    "w-full border rounded-[16px] px-4 py-3 text-[14px] font-nunito font-medium text-primary-black placeholder:text-[#AAAAAA] focus:outline-none transition-colors",
    error
      ? "border-red-400 focus:border-red-400 bg-red-50"
      : "border-[#E2D9F3] focus:border-primary-purple",
  );

  return (
    <div className={className}>
      <label className="block text-[14px] font-nunito font-semibold text-primary-black mb-1">
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {rows ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={rows}
          onBlur={onBlur}
          className={cn(baseClass, "resize-none")}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          onBlur={onBlur}
          className={baseClass}
        />
      )}
      {error && (
        <p className="mt-1 text-[12px] font-nunito text-red-500">{error}</p>
      )}
    </div>
  );
};
