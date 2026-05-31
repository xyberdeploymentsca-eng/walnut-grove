/** @format */

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RelatedService {
  name: string;
  href: string;
  icon: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
}

export const RelatedServices = ({ services }: RelatedServicesProps) => {
  return (
    <div className="max-w-[1296px] mx-auto my-12 lg:my-20 px-6 lg:px-0">
      <div className="flex flex-col lg:flex-row items-center lg:items-center gap-4 lg:gap-6 mb-8 text-center lg:text-left">
        <div className="bg-[#EBE2F9] rounded-full p-3 lg:p-4">
          <Image
            src="/icons/pinkPaw.svg"
            alt="paw-icon"
            height={45}
            width={45}
            className="w-[30px] lg:w-[45px] h-auto"
          />
        </div>
        <h3 className="text-[22px] lg:text-[28px] font-otomanopee-one text-primary-black uppercase leading-tight">
          RELATED SERVICES
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.href}
            className="group bg-[#FFFCF7] rounded-[18px] p-5 lg:p-6 shadow-[0px_4px_30px_0px_rgba(87,87,87,0.06)] border border-[#EBE2F9] hover:border-primary-green transition-all duration-300 hover:shadow-[0px_4px_30px_0px_rgba(131,191,120,0.15)] flex items-center gap-4"
          >
            <div className="bg-[#EBE2F9] group-hover:bg-primary-green/15 rounded-full p-3 flex-shrink-0 transition-colors duration-300">
              <Image
                src={service.icon}
                alt={`${service.name} icon`}
                height={40}
                width={40}
                className="w-[32px] lg:w-[40px] h-auto"
              />
            </div>
            <div className="flex-1 flex items-center justify-between">
              <span className="text-[16px] lg:text-[18px] font-nunito font-semibold text-primary-black group-hover:text-primary-green transition-colors">
                {service.name}
              </span>
              <ArrowRight
                size={20}
                className="text-primary-black/50 group-hover:text-primary-green transition-all group-hover:translate-x-1 flex-shrink-0 ml-2"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
