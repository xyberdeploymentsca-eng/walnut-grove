/** @format */

import { cn } from "@/utils/helpers";
import Image from "next/image";

const teamMembers = [
  {
    name: "Dr. Rattan Garg, DVM",
    role: "Doctor",
    image: "/assets/team1.webp",
    bio: "Dr. Garg is a passionate and dedicated veterinarian with decades of experience in Veterinary Medicine and Animal Husbandry in 1983, he worked with respected organizations including Nestle Ltd, Metrotown Animal Hospital, and the Canadian Food Inspection Agency before joining Walnut Grove Animal Hospital in 2007.\nA member of the CVMA and BCVMA and licensed by the AVMA, Dr. Garg has a special interest in surgery and canine and feline medicine, and remains committed to continuing education. Outside the clinic, he enjoys music, running, camping, and spending time with his family along with his cats, Cinder and Emma, and his dog, Rocky.",
  },
  {
    name: "Kirsten Jensen",
    role: "Receptionist",
    image: "/assets/team2.webp",
    bio: "With over 10 years of experience in the veterinary field, Kirsten brings warmth and knowledge to every client interaction. She loves caring for pets just like yours and helps ensure every visit feels welcoming and smooth.\n\nAt home, she shares her life with Dakota (an 18-year-old cat), Georgia (a 5-year-old Olde English bulldog), and Dexter (a playful fluffy Frenchie). When she’s not at the clinic, she enjoys spending time with his husband, daughter, and their lively pack.",
  },
  {
    name: "Jasleen gill",
    role: "Vet Assistant",
    image: "/assets/team3.webp",
    bio: "Jasleen is a dedicated veterinary student gaining hands-on experience while continuing her studies. She is passionate about animal health and enjoys building meaningful connections with both pets and their families.\n\nShe shares her home with two birds, Stewie and Louis, and her beloved dog, Nora.",
  },
  {
    name: "Carrie Bartlett",
    role: "Vet Assistant",
    bio: "With 13 years of experience in the veterinary field, Carrie brings extensive knowledge and heartfelt compassion to our clinic. She is committed to providing gentle, attentive care to every patient.\n\nCarrie is also a proud pet parent to six furry (and fluffy) companions: Lucifer, Slinky, Solana, Bean, Chicken Nugget, and Yongie the rabbit.",
  },
];

export const Team = () => {
  return (
    <div
      id="team"
      className="scroll-mt-[200px] max-w-[1055px] mx-auto flex flex-col items-center justify-center relative mb-40"
    >
      <div className="flex flex-row items-center justify-start gap-6 w-full">
        <Image src="/icons/pinkPaw.svg" alt="pink-paw" height={87} width={87} />
        <h1 className="text-[32px] max-w-[720px] text-left font-nunito font-normal z-1 leading-[38px] text-primary-black uppercase font-otomanopee-one">
          Meet Our Team,
          <br />
          Experienced, Passionate & Dedicated!
        </h1>
      </div>
      <div className="mt-4 w-full">
        <p className="text-primary-black max-w-[730px] text-[22px] leading-[28px] font-medium">
          From first hellos to follow-up care, our team is here to make every
          visit calm, comfortable, and filled with compassion.
        </p>
      </div>

      <div className="flex flex-col gap-10 mt-16 w-full">
        {teamMembers.map((member, index) => (
          <div
            key={member.name}
            className={cn(
              "sticky flex flex-col md:flex-row items-center bg-[#FFFCF7] rounded-[40px] p-5 gap-8 shadow-[0px_0px_30px_0px_#57575614] max-w-[1055px] mx-auto",
              index % 2 === 1 ? "md:flex-row-reverse" : "",
            )}
            style={{ top: `${200 + index * 60}px` }}
          >
            <div className="flex-shrink-0">
              <div
                className={`relative w-[243px] flex flex-col justify-end h-[298px] rounded-[30px] overflow-hidden ${
                  !member.image ? "bg-[#E7D2FF]" : ""
                }`}
              >
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                ) : (
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
                )}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <h3 className="text-[28px] mb-1 font-nunito font-semibold text-primary-black border-b-2 border-primary-purple w-fit">
                  {member.name}
                </h3>
                <p className="text-[20px] leading-[20px] font-nunito font-semibold text-primary-green">
                  {member.role}
                </p>
              </div>
              <p className="text-[18px] leading-[22px] font-nunito font-normal text-primary-black whitespace-pre-line">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
