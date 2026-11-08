/** @format */

// Content of the pages added in the Nov 2026 SEO plan. Facts come from the clinic's own site (hours, address,
// published price ranges, the pre-surgery estimate, the in-hours emergency policy); anything the clinic has not
// published (exact fees, insurers, policies) is answered with "call us" instead of a guess.

import type { ContentPageProps } from "@/components/shared/contentPage";

const tel = { text: "(604) 888-2628", href: "tel:+16048882628" };
const emergencyWeb = { text: "animalemerg.com", href: "https://www.animalemerg.com/" };
const nearest24h = "Animal Emergency Clinic of the Fraser Valley, 6325 204 St, Unit 302, Langley";

export const seoPages: Record<string, ContentPageProps> = {
  "/vet-prices-langley": {
    breadcrumbs: [{ name: "Vet Prices", href: "/vet-prices-langley" }],
    icon: "/icons/card4.svg",
    h1: "Vet Prices in Langley",
    intro: [
      "What will your pet's visit cost? It depends on your pet's size, age and health, and on what the visit needs. Here are the typical costs we publish on our service pages, what changes the price, and how to get an exact estimate before any treatment.",
      ["Call ", tel, " and our front desk can tell you today's fee for an exam, a vaccine or a nail trim."],
    ],
    blocks: [
      { h2: "Typical costs for common visits" },
      {
        table: {
          caption: "Typical ranges from our service pages. Your pet's exact price is confirmed before treatment.",
          head: ["Visit", "Typical cost", "Good to know"],
          rows: [
            ["Wellness exam", "About $60 to $120 in Canada", "Bloodwork and screening tests are priced separately."],
            ["Vaccines", "Roughly $30 to $60 per vaccine in BC", "Combined packages are often available for the puppy and kitten series."],
            ["Puppy or kitten first year", "About $400 to $900", "Exams, the vaccine series and deworming."],
            ["Spay or neuter", "Detailed estimate at the pre-surgery visit", "Depends on species, sex, weight and age."],
            ["Dental cleaning", "Ask for an estimate", "Depends on what the exam and dental X-rays show."],
            ["Nail trim", "Call our front desk", "Can often be paired with another visit."],
          ],
        },
      },
      { h2: "Why prices vary from pet to pet" },
      {
        list: [
          "Size and weight: medicines and anesthesia are dosed by weight, so surgery for a large dog uses more than surgery for a cat.",
          "Age and health: senior pets and pets with ongoing conditions may need bloodwork or extra monitoring first.",
          ["What the visit finds: a dental cleaning can become a longer procedure if ", { text: "dental X-rays", href: "/services/dental-services" }, " show a tooth needs treatment."],
          ["Tests: ", { text: "bloodwork", href: "/services/bloodwork" }, ", X-rays and ultrasound are added when they help answer a question about your pet."],
        ],
      },
      { h2: "Estimates before surgery" },
      {
        p: [
          "Before a planned surgery, including ",
          { text: "spays and neuters", href: "/services/spay-neuter" },
          ", we see your pet for a pre-surgery visit. We check your pet's health, review their history, discuss recommended pre-anesthetic bloodwork, answer your questions, and give you a detailed cost estimate.",
        ],
      },
      { h2: "Pet insurance" },
      {
        p: [
          "Insurance can cover a large share of unexpected vet bills, but plans differ in what they cover and how they pay. Read our ",
          { text: "guide to pet insurance in BC", href: "/blog/pet-insurance-bc-langley-vet-guide" },
          ", and ask our front desk how claims work for your plan.",
        ],
      },
      { h2: "Ways to keep vet costs down" },
      {
        list: [
          ["Keep up with ", { text: "vaccines", href: "/services/vaccines" }, " and ", { text: "parasite prevention", href: "/services/parasite-prevention" }, ". Preventing a disease costs less than treating it."],
          ["Book a yearly ", { text: "wellness exam", href: "/services/preventative-care" }, " so problems are found early."],
          ["Don't put off ", { text: "dental care", href: "/services/dental-services" }, ". Early dental problems are simpler to treat than advanced ones."],
          ["Call when something seems off. ", { text: "A same-day visit", href: "/same-day-weekend-vet-langley" }, " is often simpler than an emergency later."],
        ],
      },
    ],
    faqs: [
      { question: "How much is a vet exam in Langley?", answer: "Wellness exams in Canada typically cost about $60 to $120, with bloodwork and screening tests priced separately. Call (604) 888-2628 for our current exam fee." },
      { question: "How much do pet vaccines cost in BC?", answer: "Roughly $30 to $60 per vaccine, and combined packages are often available for the puppy and kitten series. Which vaccines your pet needs depends on age and lifestyle." },
      { question: "How much does it cost to spay or neuter a pet?", answer: "It depends on species, sex, weight and age. We give you a detailed cost estimate at the pre-surgery visit, after checking your pet's health." },
      { question: "Do you give estimates before treatment?", answer: "Yes. Before a planned surgery, including spays and neuters, you get a detailed cost estimate at the pre-surgery visit. For anything else, ask our team for an estimate before treatment." },
      { question: "Does pet insurance pay for vaccines and checkups?", answer: "Most accident and illness plans don't cover routine care such as vaccines and wellness exams. Some insurers sell a separate wellness add-on, so check your policy." },
      { question: "What does an emergency vet visit cost?", answer: "Emergency visits usually cost more than a booked appointment, and any treatment is added to the exam. Don't delay urgent care to compare prices. Ask the hospital for an estimate when you arrive." },
    ],
    related: [
      { name: "Vaccinations", href: "/services/vaccines", icon: "/icons/card2.svg" },
      { name: "Spay & Neuter", href: "/services/spay-neuter", icon: "/icons/card1.svg" },
      { name: "Pet Dental Care", href: "/services/dental-services", icon: "/icons/card3.svg" },
    ],
  },

  "/same-day-weekend-vet-langley": {
    breadcrumbs: [{ name: "Same-Day & Weekend Visits", href: "/same-day-weekend-vet-langley" }],
    icon: "/icons/card2.svg",
    h1: "Same-Day & Weekend Vet Visits in Langley",
    intro: [
      "Walnut Grove Animal Hospital is open 7 days a week: Monday to Friday 8:30am to 7:00pm, and Saturday and Sunday 9:00am to 5:00pm. If your pet needs to be seen today, here is the quickest way to get help.",
    ],
    blocks: [
      { h2: "How to get your pet seen today" },
      {
        list: [
          ["Call ", tel, " as early in the day as you can and tell us what is going on. Our team will tell you the earliest time we can see your pet, or whether to come in right away."],
          "Have the basics ready: your pet's age and weight, what you have noticed and since when, and any medications they take.",
          "If it is an emergency during our opening hours, come straight to the clinic and call us on the way.",
          ["For something that can wait a few days, you can also ", { text: "send us a message", href: "/contact" }, ". A member of our team replies within 24 hours."],
        ],
      },
      {
        note: {
          tone: "urgent",
          title: "Is it an emergency?",
          body: [
            ["Trouble breathing, collapse, a seizure, heavy bleeding, a male cat straining to pee, or eating something toxic can't wait. During our hours, come straight in and call on the way. After hours, go to a 24-hour emergency hospital. ", { text: "What to do in a pet emergency", href: "/pet-emergency-langley" }, "."],
          ],
        },
      },
      { h2: "Today, this week, or a routine visit?" },
      {
        table: {
          caption: "A general guide. When in doubt, call us and ask.",
          head: ["When", "Examples"],
          rows: [
            ["Now (emergency)", "Trouble breathing, collapse, seizure, heavy bleeding, hit by a car, straining to pee with little or nothing coming out, a swollen hard belly, eating something toxic"],
            ["Today", "Vomiting or diarrhea more than once, not eating, limping that doesn't ease, a red or squinting eye, a painful ear, a lump that has grown quickly"],
            ["This week", "A new small lump that isn't bothering your pet, itchy skin, a mild cough with normal energy, drinking or peeing more than usual"],
            ["Routine", "Vaccines, wellness exams, nail trims, prescription refills"],
          ],
        },
      },
      { h2: "Weekend visits" },
      {
        p: "We are open Saturday and Sunday from 9:00am to 5:00pm, so you don't have to wait until Monday when your pet isn't feeling well. Call as early in the day as you can.",
      },
      { h2: "What to bring" },
      {
        list: [
          "Any medications or supplements your pet takes, or photos of the labels.",
          ["Records from your previous clinic if you're new to us. ", { text: "How to transfer your pet's records", href: "/blog/transfer-pet-medical-records-langley" }, "."],
          "For vomiting or diarrhea, a fresh stool sample if you can collect one.",
          "Cats in a carrier and dogs on a leash, for everyone's safety.",
        ],
      },
      { h2: "Where we are" },
      { p: ["101A-20995 88 Ave, Langley, BC V1M 2C9. ", { text: "Hours, map and directions", href: "/contact" }, "."] },
    ],
    faqs: [
      { question: "Are you open on Sunday?", answer: "Yes. We are open Saturday and Sunday from 9:00am to 5:00pm, and Monday to Friday from 8:30am to 7:00pm." },
      { question: "Can I get a same-day vet appointment?", answer: "Call (604) 888-2628 as early in the day as you can. Our team will tell you the earliest time we can see your pet, or whether to come in right away." },
      { question: "Can I walk in without an appointment?", answer: "For an emergency during our opening hours, yes: come straight in and call us on the way. For anything else, please call first so we can plan your visit." },
      { question: "What if my pet needs a vet after you close?", answer: `Go to a 24-hour emergency hospital. The nearest to us is ${nearest24h} (animalemerg.com), open 24 hours.` },
    ],
    related: [
      { name: "Pet Emergency: What to Do", href: "/pet-emergency-langley", icon: "/icons/card1.svg" },
      { name: "Vet Prices", href: "/vet-prices-langley", icon: "/icons/card4.svg" },
      { name: "Preventative Care", href: "/services/preventative-care", icon: "/icons/card2.svg" },
    ],
  },

  "/pet-emergency-langley": {
    breadcrumbs: [{ name: "Pet Emergency", href: "/pet-emergency-langley" }],
    icon: "/icons/card1.svg",
    h1: "Pet Emergency in Langley: What to Do",
    intro: ["If you think your pet is having an emergency, act now. Don't wait to see if it passes."],
    blocks: [
      {
        note: {
          tone: "urgent",
          title: "Where to go right now",
          body: [
            ["During our hours (Monday to Friday 8:30am to 7pm, Saturday and Sunday 9am to 5pm): come straight to Walnut Grove Animal Hospital, 101A-20995 88 Ave, Langley, and call ", tel, " on the way."],
            [`After hours: go to a 24-hour emergency hospital. The nearest to us is ${nearest24h} (`, emergencyWeb, "), open 24 hours. Call them on the way."],
          ],
        },
      },
      { h2: "Signs your pet needs a vet right now" },
      {
        list: [
          "Trouble breathing, or a cat breathing with its mouth open",
          "Collapse, sudden weakness, or not able to stand",
          "A seizure",
          "Heavy bleeding that doesn't stop with pressure",
          "Hit by a car or a bad fall, even if your pet seems fine",
          "Straining to pee with little or nothing coming out, especially in male cats",
          "A swollen, hard belly, or retching without bringing anything up",
          "Vomiting blood, or vomiting many times in a row",
          "Pale, white or blue gums",
          "Overheating: heavy panting, drooling or collapse on a hot day",
          "An eye injury, or an eye that suddenly looks cloudy or bulging",
          "Trouble giving birth",
          "Eating something toxic (see below)",
        ],
      },
      { p: "If you're not sure, call us during our hours, or the emergency hospital after hours, and describe what you see." },
      { h2: "If your pet ate something toxic" },
      { p: "Call right away, even if your pet seems fine. Some poisons take hours or days to show signs, and treatment works best early." },
      {
        list: [
          "Chocolate: the darker the chocolate, the more dangerous it is. Baking chocolate and dark chocolate are the worst.",
          "Xylitol: a sweetener in sugar-free gum, some candies and some peanut butters. Very dangerous for dogs, even in small amounts.",
          "Grapes and raisins: can cause kidney damage in dogs.",
          "Rat and mouse poison: signs can be delayed by several days.",
          "Human pain medicines such as ibuprofen and acetaminophen (Tylenol). Acetaminophen is especially dangerous for cats.",
          ["Plants such as lilies, which are very dangerous for cats. ", { text: "See our list of poisonous plants", href: "/resources/poisonous-plants" }, "."],
        ],
      },
      { h2: "What to do on the way" },
      {
        list: [
          "Stay calm, and keep your pet as still and warm as you can. Use a carrier for cats and small dogs.",
          "If your pet ate something, bring the packaging or a photo of the label, and note how much and when.",
          "Don't try to make your pet vomit unless a veterinarian tells you to. With some poisons it can do more harm.",
          "Don't give human medicines for pain.",
          "For bleeding, press a clean cloth firmly on the wound.",
          "A pet in pain may bite, even a gentle one. Handle them carefully.",
        ],
      },
      { h2: "Not sure if it's an emergency?" },
      {
        p: [
          "Call us during our hours and describe what you see. If it can wait until later today or tomorrow, see ",
          { text: "how to get a same-day visit", href: "/same-day-weekend-vet-langley" },
          ". For symptoms like vomiting, limping or a lump, our guide to ",
          { text: "signs your pet needs a vet today", href: "/blog/signs-pet-needs-vet-today-langley" },
          " can help.",
        ],
      },
    ],
    cta: "Schedule Appointment",
    faqs: [
      { question: "Is there a 24-hour emergency vet in Langley?", answer: `Yes. ${nearest24h} (animalemerg.com) is open 24 hours. During our hours you can also come straight to Walnut Grove Animal Hospital and call on the way.` },
      { question: "What counts as a pet emergency?", answer: "Trouble breathing, collapse, a seizure, heavy bleeding, being hit by a car, straining to pee with nothing coming out, a swollen belly, pale gums, overheating, or eating something toxic. When in doubt, call." },
      { question: "My dog ate chocolate but seems fine. What should I do?", answer: "Call a veterinarian now, even if your dog seems normal, because signs can take hours to appear. Note the type of chocolate, how much, and when." },
      { question: "Should I make my pet vomit at home?", answer: "Not unless a veterinarian tells you to. With some poisons, vomiting can cause more harm." },
      { question: "How much does an emergency vet visit cost?", answer: "Emergency visits usually cost more than a booked appointment, and any treatment is added to the exam. Don't delay urgent care to compare prices. Ask the hospital for an estimate when you arrive." },
    ],
    related: [
      { name: "Same-Day & Weekend Visits", href: "/same-day-weekend-vet-langley", icon: "/icons/card2.svg" },
      { name: "Poisonous Plants", href: "/resources/poisonous-plants", icon: "/icons/card3.svg" },
      { name: "Vet Prices", href: "/vet-prices-langley", icon: "/icons/card4.svg" },
    ],
  },

  "/services/nail-trims": {
    breadcrumbs: [
      { name: "Services", href: "/services" },
      { name: "Nail Trims", href: "/services/nail-trims" },
    ],
    icon: "/icons/card2.svg",
    h1: "Dog & Cat Nail Trims in Langley",
    intro: [
      "Long nails can catch, split and change the way your pet stands and walks. Our team trims nails for dogs and cats, gently and at your pet's pace.",
    ],
    blocks: [
      { h2: "How often do nails need trimming?" },
      {
        p: "Most dogs and cats need a trim every few weeks. Dogs that walk a lot on pavement may need it less often; indoor cats and senior pets often need it more. If you hear nails clicking on a hard floor, they are usually ready.",
      },
      { h2: "Nervous about nail trims?" },
      {
        list: [
          "Tell us when you book if your pet gets anxious, so we can take it slowly.",
          "Short sessions with breaks and treats help many pets.",
          "Practise at home by gently handling your pet's paws between visits.",
          ["Our ", { text: "how-to videos", href: "/resources/how-to-videos" }, " show everyday care you can practise at home."],
        ],
      },
      { h2: "Dewclaws and overgrown nails" },
      {
        p: "Dewclaws sit higher on the leg and don't wear down when your pet walks, so they can curl around. A nail that has grown into the paw pad, is cracked, or is bleeding needs a veterinarian to look at it.",
      },
      { h2: "Booking a nail trim" },
      {
        p: [
          "Call ",
          tel,
          " to book. If your pet already has a visit coming up, ask whether a nail trim can be done at the same time. See ",
          { text: "vet prices in Langley", href: "/vet-prices-langley" },
          " for other common costs.",
        ],
      },
    ],
    faqs: [
      { question: "How much does a nail trim cost?", answer: "Call our front desk at (604) 888-2628 for the current price." },
      { question: "How often should I trim my dog's nails?", answer: "Usually every few weeks. If you hear clicking on hard floors, it's time." },
      { question: "What if I cut the quick?", answer: "The quick is the living part of the nail. If it bleeds, press a clean cloth or styptic powder on the tip for a few minutes. If the bleeding doesn't stop, call us." },
      { question: "Do cats need nail trims?", answer: "Many indoor cats do, especially seniors, whose nails can grow into the paw pad. A scratching post helps but may not be enough." },
    ],
    related: [
      { name: "Preventative Care", href: "/services/preventative-care", icon: "/icons/card2.svg" },
      { name: "Puppy & Kitten Care", href: "/services/puppy-kitten-care", icon: "/icons/card2.svg" },
      { name: "Pet Boarding", href: "/services/pet-boarding-services", icon: "/icons/card4.svg" },
    ],
  },

  "/services/prescription-diets": {
    breadcrumbs: [
      { name: "Services", href: "/services" },
      { name: "Prescription Diets", href: "/services/prescription-diets" },
    ],
    icon: "/icons/card4.svg",
    h1: "Prescription Pet Food in Langley",
    intro: [
      "A prescription diet is food made to help manage a health condition, such as urinary crystals, kidney disease, a sensitive stomach or a food allergy. Your veterinarian recommends the right one and checks how your pet is doing on it.",
    ],
    blocks: [
      { h2: "Conditions prescription diets help manage" },
      {
        list: [
          ["Urinary problems, including some types of bladder crystals and stones. ", { text: "Urinary problems in cats", href: "/blog/cat-peeing-outside-litter-box-urinary-problems" }, "."],
          "Kidney disease",
          "Digestive problems such as ongoing vomiting or diarrhea",
          ["Food allergies and itchy skin. ", { text: "Skin and ear infections", href: "/services/skin-ear-infections" }, "."],
          "Weight loss for overweight pets",
          "Diabetes",
        ],
      },
      { h2: "Why a veterinarian has to approve it" },
      {
        p: "Prescription diets are made for specific conditions, and the wrong one can make another problem worse. That is why they are sold with a veterinarian's approval. Your vet will also tell you how long to feed it and when to recheck.",
      },
      { h2: "Ordering and pickup" },
      {
        list: [
          ["Order online through ", { text: "MyVetStore", href: "https://www.myvetstore.ca/" }, " (Pet Supplies in our menu)."],
          ["Or call ", tel, " to order for pickup at the clinic. ", { text: "How refills and pickups work", href: "/blog/pet-prescription-refills-pickup-langley" }, "."],
          "Order before the bag runs out, so your pet doesn't have to switch foods suddenly.",
        ],
      },
      { h2: "Switching to a new food" },
      {
        p: "Unless your vet says otherwise, mix the new food in gradually over about a week to avoid an upset stomach. Stick to treats your vet approves, because other treats can undo the diet's benefits.",
      },
    ],
    faqs: [
      { question: "Can I buy prescription pet food without a vet?", answer: "Prescription diets are sold with a veterinarian's approval because they are made for specific health conditions. If your pet hasn't been seen recently, we may need to see them first." },
      { question: "How long will my pet need a prescription diet?", answer: "It depends on the condition. Some pets need it for a few weeks, others for life. Your veterinarian will tell you and plan rechecks." },
      { question: "Can I order prescription pet food online?", answer: "Yes, through MyVetStore (Pet Supplies in our menu), or call (604) 888-2628 to order for pickup at the clinic." },
    ],
    related: [
      { name: "Skin & Ear Infections", href: "/services/skin-ear-infections", icon: "/icons/card1.svg" },
      { name: "Lab Services", href: "/services/lab-services", icon: "/icons/card4.svg" },
      { name: "Preventative Care", href: "/services/preventative-care", icon: "/icons/card2.svg" },
    ],
  },

  "/services/health-certificates": {
    breadcrumbs: [
      { name: "Services", href: "/services" },
      { name: "Health Certificates", href: "/services/health-certificates" },
    ],
    icon: "/icons/card3.svg",
    h1: "Pet Travel Health Certificates in BC",
    intro: [
      "Taking your pet across the border or overseas? Many destinations and airlines ask for a health certificate signed by a veterinarian, and some need extra paperwork. Start early, because the requirements vary a lot by destination.",
    ],
    blocks: [
      { h2: "What a health certificate is" },
      {
        p: "It is a document in which a veterinarian confirms, after examining your pet, that your pet is healthy and meets the destination's entry requirements, such as an up-to-date rabies vaccination. Some countries also need the certificate endorsed by the Canadian Food Inspection Agency (CFIA).",
      },
      { h2: "Travelling to the United States" },
      {
        p: "The rules for dogs and cats entering the US change from time to time, and dogs in particular have specific requirements. Check the current rules with the US authorities (CDC and USDA) well before you travel, then book a visit so we can prepare the paperwork with you.",
      },
      { h2: "Travelling overseas" },
      {
        p: [
          "Many countries need a ",
          { text: "microchip", href: "/services/microchipping" },
          ", a rabies vaccination given at the right time, and sometimes a blood test months before travel. Some steps must happen in a set order, so begin planning several months ahead. Your destination's rules are listed on the ",
          { text: "CFIA website", href: "https://inspection.canada.ca/" },
          ".",
        ],
      },
      { h2: "How to get ready" },
      {
        list: [
          "Check your destination's and your airline's requirements first.",
          "Book a visit with us early, and tell us where and when you're travelling.",
          ["Bring your pet's ", { text: "vaccine", href: "/services/vaccines" }, " records and microchip number."],
          "Leave time for any CFIA endorsement after the certificate is signed.",
        ],
      },
      {
        p: "Dr. Garg worked with the Canadian Food Inspection Agency before joining Walnut Grove Animal Hospital, and our team can help you work through the paperwork.",
      },
    ],
    faqs: [
      { question: "How far ahead should I book a travel health certificate?", answer: "As early as possible. Some destinations need tests or vaccines months ahead, and certificates are often only valid for a short time before travel. Call us when you start planning." },
      { question: "Do I need a health certificate to drive to the US with my dog?", answer: "The rules for dogs entering the US have changed in recent years. Check the current CDC and USDA requirements before you go, then call us at (604) 888-2628." },
      { question: "Does my pet need a microchip to travel?", answer: "Many countries require one. Check your destination's rules, and ask us if your pet needs a microchip placed or checked." },
    ],
    related: [
      { name: "Microchipping", href: "/services/microchipping", icon: "/icons/card2.svg" },
      { name: "Vaccinations", href: "/services/vaccines", icon: "/icons/card2.svg" },
      { name: "Preventative Care", href: "/services/preventative-care", icon: "/icons/card2.svg" },
    ],
  },
};
