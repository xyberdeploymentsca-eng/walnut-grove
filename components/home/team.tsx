/** @format */

import Image from "next/image";
import { CtaButton } from "../ui/ctaButton";

export const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Rattan Garg, Dvm",
      role: "Doctor",
      image: "/assets/team1.webp",
    },
    {
      name: "Kirsten Jensen",
      role: "Receptionist",
      image: "/assets/team2.webp",
    },
    {
      name: "Jasleen Gill",
      role: "Vet Assistant",
      image: "/assets/team3.webp",
    },
    {
      name: "Carrie B",
      role: "Vet Assistant",
    },
  ];

  return (
    <div className="flex flex-col max-w-[1092px] mx-auto mt-50 px-4 mb-20">
      <div className="flex flex-row items-center justify-start gap-6">
        <Image
          src="/icons/blueHeart.svg"
          alt="heart-paw"
          height={87}
          width={87}
          className="z-1"
        />
        <h2 className="text-[32px] text-left font-nunito font-normal z-1 leading-[38px] text-primary-black uppercase font-otomanopee-one">
          A Compassionate Team,
          <br />
          Committed to Your Pet’s Well-Being
        </h2>
      </div>
      <h3 className="text-[22px] mt-4 text-primary-black leading-[28px] font-medium">
        From first hellos to follow-up care, our team is here to make every
        visit <br /> calm, comfortable, and filled with compassion.
      </h3>

      <div className="flex flex-row gap-[40px] mt-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`relative w-[243px] flex flex-col justify-end h-[259px] rounded-[18px] overflow-hidden shadow-[0px_0px_30px_0px_#57575614] ${
              !member.image ? "bg-[#E7D2FF]" : ""
            }`}
          >
            {member.image && (
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            )}
            <div
              className="absolute bottom-0 h-fit w-full flex flex-col justify-end p-3 items-center"
              style={{
                background:
                  "linear-gradient(180deg, rgba(87, 87, 86, 0) 0%, rgba(87, 87, 86, 0.644231) 46.15%, #575756 100%)",
              }}
            >
              <h4 className="text-[18px] font-bold leading-tight text-center text-primary-blue">
                {member.name}
              </h4>
              <p className="text-text-white text-[16px] font-normal mt-0.5 leading-[18px]">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center justify-start mt-10 gap-6">
        <CtaButton icon="/icons/team.svg">meet our team</CtaButton>
      </div>
    </div>
  );
};
