/** @format */

import Image from "next/image";
import { CtaButton } from "../ui/ctaButton";

const plantCategories = [
  {
    heading: "Ornamental Flowers & Garden Plants",
    icon: "/assets/leaf.svg",
    groups: [
      {
        title: "Garden Blooms",
        plants: [
          "Autumn Crocus",
          "Azalea",
          "Bleeding Heart",
          "Bluebonnet",
          "Cardinal Flower",
          "Four O'Clock",
          "Foxglove",
          "Hydrangea",
          "Lantana",
          "Larkspur",
          "Periwinkle",
          "Ranunculus (Buttercup)",
          "Snowdrop",
        ],
      },
      {
        title: "Vines & Climbers",
        plants: [
          "Clematis",
          "English Ivy",
          "Honeysuckle",
          "Morning Glory",
          "Sweet Pea",
          "Wisteria",
        ],
      },
      {
        title: "Exotics",
        plants: [
          "Bird Of Paradise",
          "Caladium",
          "Dieffenbachia",
          "Elephant Ear (Taro)",
          "Philodendron",
          "Poinsettia",
        ],
      },
      {
        title: "Lilies",
        plants: [
          "Arum Lily",
          "Calla Lily",
          "Easter Lily",
          "Lily Of The Valley",
        ],
      },
    ],
  },
  {
    heading: "Wildflowers, Herbs & Weeds",
    icon: "/assets/leaf.svg",
    groups: [
      {
        title: "Wild/Field Plants",
        plants: [
          "Bishop's Weed",
          "Bloodroot",
          "Burdock",
          "Cocklebur",
          "Heliotrope",
          "Milkweed",
          "Pigweed",
          "Pokeweed",
          "Spurges",
          "Tansy",
          "Vetch",
        ],
      },
      {
        title: "Highly Toxic/Wild",
        plants: [
          "Baneberry",
          "False Hellebore",
          "Hemlock",
          "Henbane",
          "Jimsonweed",
          "Mandrake",
          "Nightshades",
          "Monkshood",
        ],
      },
      {
        title: "Herbs & Crops",
        plants: ["Cacao", "Coffee", "Coriander", "Rape", "Tobacco"],
      },
    ],
  },
  {
    heading: "Trees & Large Woody Shrubs",
    icon: "/assets/leaf.svg",
    groups: [
      {
        title: "Hardwoods & Evergreens",
        plants: [
          "Avocado",
          "Black Laurel",
          "Eucalyptus",
          "Horse Chestnut",
          "Mountain Laurel",
          "Red Maple",
          "Yews",
        ],
      },
      {
        title: "Highly Toxic/Wild",
        plants: [
          "Baneberry",
          "False Hellebore",
          "Hemlock",
          "Henbane",
          "Jimsonweed",
          "Mandrake",
          "Nightshades",
          "Monkshood",
        ],
      },
      {
        title: "Flowering Trees",
        plants: [
          "Australian Flame Tree",
          "Black Locust",
          "Cherry Tree",
          "Chinaberry Tree",
          "Golden Chain",
          "Poinciana",
          "Rain Tree",
        ],
      },
    ],
  },
  {
    heading: "Irritants & Specialized Growth",
    icon: "/assets/leaf.svg",
    groups: [
      {
        title: "Agricultural/Misc",
        plants: [
          "Gladiolum",
          "Goatweed",
          "Chervil",
          "Gentry",
          "Marijuana",
          "Mezereum",
          "Mexican Poppy",
          "Pukio Shrubs",
        ],
      },
      {
        title: "Succulent & Parasitic",
        plants: ["Mistletoe", "Fall Plant", "Sarah Plant"],
      },
      {
        title: "Contact Irritants",
        plants: ["Poison Ivy", "Poison Oak"],
      },
    ],
  },
];

const toxicSigns = [
  "Vomiting or diarrhea",
  "Drooling or pawing at the mouth",
  "Loss of appetite",
  "Difficulty breathing",
  "Tremors or seizures (in severe cases)",
];

export const PoisonousPlantsContainer = () => {
  return (
    <div className="max-w-[1920px] mx-auto overflow-x-hidden bg-primary-white relative">
      <Image
        src={"/assets/commonBanner.svg"}
        alt="services-banner"
        height={466}
        width={1920}
        className="absolute top-0 left-0 z-0 w-full h-[300px] lg:h-auto object-cover"
      />

      <Image
        src="/assets/rightPaws.svg"
        alt="right"
        className="absolute top-50 h-[1485px] -right-10 z-0 hidden lg:block"
        width={392}
        height={1484}
      />

      <div className="flex flex-col max-w-[1296px] mx-auto pt-[150px] lg:pt-[297px] px-6 lg:px-4 relative z-1 gap-12 lg:gap-16">
        {/* Hero Section */}
        <div className="rounded-[20px] lg:p-10 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6 mb-6 lg:mb-4">
            <Image
              src="/icons/pinkPaw.svg"
              alt="paw"
              height={60}
              width={60}
              className="w-[48px] lg:w-[60px] h-auto"
            />
            <h1 className="text-[24px] lg:text-[40px] font-otomanopee-one leading-tight lg:leading-[120%] text-primary-black uppercase max-w-[800px]">
              Plants That Are Poisonous For Your Pets &amp; Safety Against Them
            </h1>
          </div>
          <p className="text-[16px] lg:text-[18px] font-nunito font-medium text-primary-black leading-relaxed lg:leading-[160%] mb-8 mx-auto lg:mx-0 max-w-[900px]">
            Plants add beauty to our homes and gardens, but some common
            varieties can be harmful to pets if chewed or ingested. Because cats
            and dogs explore the world with their noses and mouths, it's
            important to know which plants may pose a risk. Below is a list of
            common plants poisonous for pets.
          </p>

          {/* Banner Image */}
          <div className="w-full rounded-[16px] overflow-hidden">
            <Image
              src="/assets/plants.png"
              alt="Poisonous plants banner"
              width={1173}
              height={150}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Plant Categories */}
        {plantCategories.map((category, catIdx) => (
          <div key={catIdx}>
            {/* Category Heading */}
            <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4 mb-8 text-center">
              <Image
                src={category.icon}
                alt="leaf icon"
                width={32}
                height={32}
                className="w-[24px] lg:w-[32px] h-auto"
              />
              <h2 className="text-[22px] lg:text-[28px] font-otomanopee-one text-primary-black uppercase tracking-wide">
                {category.heading}
              </h2>
            </div>

            {/* Groups Grid */}
            <div className="flex flex-wrap justify-center gap-6">
              {category.groups.map((group, groupIdx) => (
                <div
                  key={groupIdx}
                  className="bg-[#FFFCF7] rounded-[16px] p-6 border border-[#F0EAF8] w-full lg:w-[280px]"
                >
                  <h3 className="text-[18px] lg:text-[18px] font-bold font-nunito text-primary-black mb-3 pb-2 border-b border-[#C9A0DC]">
                    {group.title}
                  </h3>
                  <ul className="space-y-1">
                    {group.plants.map((plant, plantIdx) => (
                      <li
                        key={plantIdx}
                        className="flex items-start gap-2 text-[15px] font-nunito font-medium text-primary-black"
                      >
                        {/* <Image
                          src="/assets/leaf.svg"
                          alt="leaf"
                          width={14}
                          height={14}
                          className="mt-1 flex-shrink-0"
                        /> */}
                        {plant}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Signs of Toxicity Section */}
        <div className="flex flex-col lg:flex-row items-stretch gap-0 lg:gap-8 mb-16 rounded-[30px] lg:rounded-[20px] overflow-hidden border border-[#F0EAF8] lg:border-none shadow-[0px_0px_30px_0px_rgba(87,87,86,0.08)] lg:shadow-none">
          <div className="relative w-full lg:w-[380px] h-[250px] lg:h-auto flex-shrink-0">
            <Image
              src="/assets/plantsPet.webp"
              alt="Signs of plant toxicity"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 p-8 lg:p-10 text-center lg:text-left bg-[#FFFCF7] lg:bg-transparent">
            <h2 className="text-[22px] lg:text-[28px] font-otomanopee-one text-primary-black uppercase leading-tight lg:leading-[120%] mb-4 lg:mb-2">
              Signs of Plant Toxicity to Notice If Your Pets Are In an
              Emergency!
            </h2>
            <p className="text-[16px] font-nunito font-medium text-primary-black mb-4 mx-auto lg:mx-0 max-w-[600px]">
              If your pet has ingested a toxic plant, you may notice ;
            </p>
            <ul className="space-y-2 mb-6 inline-block lg:block text-left">
              {toxicSigns.map((sign, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[15px] lg:text-[16px] font-nunito font-medium text-primary-black"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-black flex-shrink-0" />
                  {sign}
                </li>
              ))}
            </ul>
            <p className="text-[15px] lg:text-[16px] font-bold font-nunito text-primary-black mb-4 lg:mb-6">
              Need Immediate Help?
            </p>
            <p className="text-[14px] lg:text-[15px] font-nunito font-medium text-primary-black mb-8 lg:mb-6">
              If you believe your pet has ingested a toxic plant, contact Walnut
              Grove Animal Hospital right away. Early intervention makes a
              significant difference.
            </p>
            <div className="flex justify-center lg:justify-start">
              <CtaButton className="capitalize" icon="/icons/calender.svg">
                Call in an Emergency
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
