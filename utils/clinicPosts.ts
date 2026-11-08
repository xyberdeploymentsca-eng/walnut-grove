/** @format */

// Blog posts kept in the site code (written for the clinic's most common questions from callers).
// They appear on /blog next to the posts written in the CMS; a CMS post with the same slug wins.
import type { BlogPost } from "@/utils/blogData";

type Part = string | { h2: string } | { list: string[] };

let key = 0;
const span = (text: string) => ({ _type: "span", _key: `s${++key}`, text, marks: [] });
function body(parts: Part[]) {
  const out: any[] = [];
  for (const p of parts) {
    if (typeof p === "string") out.push({ _type: "block", _key: `b${++key}`, style: "normal", markDefs: [], children: [span(p)] });
    else if ("h2" in p) out.push({ _type: "block", _key: `b${++key}`, style: "h2", markDefs: [], children: [span(p.h2)] });
    else for (const item of p.list) out.push({ _type: "block", _key: `b${++key}`, style: "normal", listItem: "bullet", level: 1, markDefs: [], children: [span(item)] });
  }
  return out;
}

const author = {
  name: "Walnut Grove Animal Hospital",
  role: "Veterinary team, Langley BC",
  bio: "The veterinarians and front desk team at Walnut Grove Animal Hospital, 101A-20995 88 Ave, Langley.",
};

export const clinicPosts: BlogPost[] = [
  {
    _id: "clinic-post-records",
    title: "Moving Vets in Langley? How to Transfer Your Pet's Records",
    slug: "transfer-pet-medical-records-langley",
    excerpt:
      "New to the area or switching clinics? Here is what your pet's medical record includes, why it matters at the first visit, and the easiest way to get it moved.",
    mainImage: "/assets/catAndDog.webp",
    publishedAt: "2026-11-02T10:00:00Z",
    author,
    category: "Clinic Tips",
    readTime: "4 min read",
    tags: ["New Clients", "Medical Records", "Langley Vet"],
    relatedServices: [
      { title: "Preventative Care", href: "/services/preventative-care", description: "Wellness exams for dogs, cats and small pets." },
      { title: "Vaccines", href: "/services/vaccines", description: "Core and lifestyle vaccines, planned around your pet's history." },
    ],
    metaData: {
      metaTitle: "How to Transfer Your Pet's Records | Walnut Grove",
      metaDescription:
        "Switching vets in Langley? What your pet's medical record includes, why it matters at the first visit, and how to have it sent to Walnut Grove Animal Hospital.",
    },
    content: body([
      "Moving house, moving closer to work, or simply looking for a clinic that fits your family better: whatever the reason, changing vets is common. One of the questions we hear most on the phone is how to get a pet's history from one clinic to another. The good news is that it is usually a short, simple step, and it makes your pet's first visit with a new team much more useful.",
      { h2: "What is in your pet's medical record?" },
      "A pet's record is the story of their health so far. It usually includes:",
      { list: [
        "Vaccine history, with dates and the vaccines given, including rabies.",
        "Notes from past exams and any ongoing conditions.",
        "Lab work such as bloodwork, urine tests and results from imaging like X-rays.",
        "Surgeries and anesthesia, including spay or neuter and dental work.",
        "Current medications, diets and any known allergies or reactions.",
        "Microchip number, if your pet has one.",
      ] },
      { h2: "Why it matters at the first visit" },
      "With the history in hand, the veterinarian can see what has already been done and what is due. It helps avoid repeating vaccines or tests your pet does not need, and it gives the team useful context for anything that has changed since the last visit. It is especially helpful for senior pets, pets on long-term medication, and pets with a chronic condition.",
      { h2: "How to get the records moved" },
      { list: [
        "Call your previous clinic and ask them to send your pet's full medical record to your new clinic. Most clinics will ask you to confirm that you agree to the transfer.",
        "Or call us at (604) 888-2628 before your first appointment. Our front desk can tell you what we need and help request the records.",
        "Give a few days if you can. Records arrive faster when the request is made before the appointment, not on the day.",
        "Bring anything you have at home: vaccine certificates, adoption or breeder paperwork, and the names of any medications or foods your pet takes.",
      ] },
      { h2: "Did a clinic contact you about your records?" },
      "Records also travel the other way. If another clinic is seeing your pet, for example a specialist or an emergency hospital, they may ask us for your pet's history so they have the full picture. That is normal, and it helps them care for your pet.",
      { h2: "New to Walnut Grove Animal Hospital?" },
      "We are at 101A-20995 88 Ave in Langley, open Monday to Friday 8:30 am to 7 pm, and Saturday and Sunday 9 am to 5 pm. Call (604) 888-2628 and we will help you get set up, records included.",
    ]),
  },
  {
    _id: "clinic-post-refills",
    title: "Prescription Refills and Pickups: Getting Your Pet's Medication Quickly",
    slug: "pet-prescription-refills-pickup-langley",
    excerpt:
      "A few small habits make refills easy: asking early, having the details ready, and knowing why some medicines need a vet to check first.",
    mainImage: "/assets/laboratory.webp",
    publishedAt: "2026-11-02T09:00:00Z",
    author,
    category: "Clinic Tips",
    readTime: "4 min read",
    tags: ["Medication", "Refills", "Clinic Tips", "Langley Vet"],
    relatedServices: [
      { title: "Chronic Pain Management", href: "/services/chronic-pain-management", description: "Long-term comfort plans for pets with arthritis and chronic pain." },
      { title: "Preventative Care", href: "/services/preventative-care", description: "Regular exams that keep long-term medication plans on track." },
    ],
    metaData: {
      metaTitle: "Pet Prescription Refills and Pickups | Walnut Grove",
      metaDescription:
        "How to get your pet's medication refilled quickly at Walnut Grove Animal Hospital in Langley: ask early, have the details ready, and know when a vet needs to check first.",
    },
    content: body([
      "Many pets take medication for months or years: for joints, skin, thyroid, heart or allergies, to name a few. Running out on a Friday evening is stressful for you and can be uncomfortable for your pet. Refill and pickup calls are some of the most common calls we get, so here is how to make them quick.",
      { h2: "Ask before the last few doses" },
      "The easiest refill is the one requested early. When you notice the bottle is about a week from empty, call us. That leaves time for the veterinarian to review the request and for us to have it ready, without a rush.",
      { h2: "Have these details ready when you call" },
      { list: [
        "Your name and your pet's name.",
        "The name of the medication and the strength printed on the label.",
        "How your pet has been doing on it, including anything new or different.",
        "When you would like to pick it up.",
      ] },
      { h2: "Why some refills need a vet to check first" },
      "A prescription is a veterinarian's decision about one specific pet, so every refill is approved by a vet. For some medicines, and for pets who have not been seen for a while, the vet may want a recheck exam or bloodwork before continuing. That is not red tape: doses can need adjusting as pets age, gain or lose weight, or as a condition changes, and some medicines need regular monitoring to stay safe.",
      { h2: "Picking up" },
      { list: [
        "Wait for the call or text that it is ready before you come in.",
        "Bring your pet's name and the medication name, so the front desk can find it quickly.",
        "If something changed since the refill was requested, tell us at pickup.",
      ] },
      { h2: "When not to wait for a refill" },
      "If your pet seems unwell, is not eating, is vomiting or has a reaction after a dose, do not wait for the next refill. Call us at (604) 888-2628, and outside our hours contact an emergency veterinary hospital.",
      "Our hours are Monday to Friday 8:30 am to 7 pm, and Saturday and Sunday 9 am to 5 pm, at 101A-20995 88 Ave in Langley.",
    ]),
  },
  {
    _id: "clinic-post-small-pets",
    title: "Rabbits, Guinea Pigs and Other Small Pets: What to Expect at the Vet",
    slug: "small-pet-vet-visit-rabbits-guinea-pigs-langley",
    excerpt:
      "Small pets hide illness well. Here is why regular checkups matter for rabbits, guinea pigs and other small mammals, how to bring them in calmly, and which signs mean you should call.",
    mainImage: "/assets/mamalCare.png",
    publishedAt: "2026-11-02T08:00:00Z",
    author,
    category: "Small Mammals",
    readTime: "5 min read",
    tags: ["Rabbits", "Guinea Pigs", "Small Mammals", "Langley Vet"],
    relatedServices: [
      { title: "Small Mammal Medicine", href: "/services/small-mammal-medicine", description: "Veterinary care for rabbits, guinea pigs and other small pets." },
      { title: "Dental Services", href: "/services/dental-services", description: "Teeth that never stop growing need regular checks." },
    ],
    metaData: {
      metaTitle: "Rabbit and Guinea Pig Vet Visits in Langley | Walnut Grove",
      metaDescription:
        "What to expect when you bring a rabbit, guinea pig or other small pet to Walnut Grove Animal Hospital in Langley, and the signs that mean you should call.",
    },
    content: body([
      "Rabbits, guinea pigs and other small mammals are wonderful companions, and they need veterinary care just as much as dogs and cats. Because they are prey animals, they are very good at hiding pain and illness. By the time a small pet looks sick, the problem has often been building for a while. Regular checkups help catch changes early.",
      { h2: "What happens at a checkup" },
      "A small pet exam is calm and hands-on. The veterinarian will usually:",
      { list: [
        "Weigh your pet. Small changes in weight are an early warning sign, so we track it at every visit.",
        "Check the teeth. Rabbit and guinea pig teeth grow all their lives, and uneven wear can cause pain and stop them eating.",
        "Look at the eyes, ears, nose, skin and coat, and feel the belly.",
        "Talk with you about diet, housing, exercise and behaviour at home.",
      ] },
      { h2: "How to bring them in calmly" },
      { list: [
        "Use a secure carrier with a towel and some of their usual hay inside.",
        "Cover the carrier with a light cloth to keep things quiet and dark.",
        "Keep the car calm and not too warm.",
        "Bring a list of what your pet eats, or a photo of the food bags.",
        "If your pet has a bonded friend, ask us whether to bring them along. Many small pets are calmer together.",
      ] },
      { h2: "Signs that mean you should call us" },
      "Small pets can go downhill quickly. Call us at (604) 888-2628 the same day if you notice:",
      { list: [
        "Eating less or not eating, or fewer or smaller droppings.",
        "Drooling, a wet chin, or dropping food while chewing.",
        "Sitting hunched or not moving around as usual.",
        "Breathing that looks fast or noisy, or discharge from the eyes or nose.",
        "Diarrhea, or a dirty bottom.",
      ] },
      "For a rabbit, not eating or no droppings for several hours is urgent. Call us right away, and outside our hours contact an emergency veterinary hospital.",
      { h2: "Book a small pet checkup" },
      "Walnut Grove Animal Hospital is at 101A-20995 88 Ave in Langley. We are open Monday to Friday 8:30 am to 7 pm, and Saturday and Sunday 9 am to 5 pm. Call (604) 888-2628 to book.",
    ]),
  },
  {
    _id: "clinic-post-pet-insurance",
    title: "Pet Insurance in BC: What a Langley Vet Wants You to Know",
    slug: "pet-insurance-bc-langley-vet-guide",
    excerpt:
      "How pet insurance works in BC: what accident and illness plans usually cover, what they don't, what changes the monthly cost, and the questions to ask before you buy.",
    mainImage: "/assets/goldenDog.webp",
    publishedAt: "2026-11-08T12:00:00Z",
    author,
    category: "Clinic Tips",
    readTime: "5 min read",
    tags: ["Pet Insurance", "Vet Costs", "Langley Vet"],
    relatedServices: [
      { title: "Vet Prices in Langley", href: "/vet-prices-langley", description: "Typical costs for common visits, and how estimates work." },
      { title: "Preventative Care", href: "/services/preventative-care", description: "Wellness exams that catch problems early." },
    ],
    metaData: {
      metaTitle: "Pet Insurance in BC: A Langley Vet's Guide | Walnut Grove",
      metaDescription:
        "How pet insurance works in BC: what accident and illness plans cover, what they don't, what changes the monthly cost, and questions to ask before you buy.",
    },
    content: body([
      "A sudden illness or injury can mean a vet bill you didn't plan for. Pet insurance spreads that risk out over monthly payments. It isn't right for every family, but it helps to understand how it works before you need it.",
      { h2: "What pet insurance usually covers" },
      { list: [
        "Accidents, such as a swallowed toy, a broken bone or a cut that needs stitches.",
        "Illnesses, such as infections, digestive problems or cancer.",
        "Tests and treatment for those accidents and illnesses, often including imaging, surgery, hospital stays and medication.",
      ] },
      { h2: "What it usually doesn't cover" },
      { list: [
        "Conditions your pet had before the policy started (pre-existing conditions).",
        "Routine care such as vaccines, wellness exams and dental cleanings, unless you add a wellness plan.",
        "Anything that happens during the waiting period at the start of the policy.",
      ] },
      { h2: "What affects the monthly cost in BC" },
      "Prices vary between insurers and change over time, so compare quotes. The main things that change your premium are:",
      { list: [
        "Your pet's species, breed and age when you enrol.",
        "The deductible you choose, and the share of each bill the insurer pays.",
        "The yearly or lifetime limit on what the policy pays out.",
        "Where you live.",
      ] },
      { h2: "How claims work" },
      "With most plans, you pay the clinic and then send a claim to your insurer, who pays you back. Some insurers can also be billed directly by the clinic. Ask our front desk how claims work for your plan, and keep your pet's records and invoices together.",
      { h2: "Questions to ask before you buy" },
      { list: [
        "Does it cover hereditary and chronic conditions, and for how long?",
        "Is there a limit per condition, per year or for life?",
        "How long are the waiting periods?",
        "Does the premium go up as my pet gets older?",
        "How quickly are claims paid?",
      ] },
      { h2: "When is the best time to get insurance?" },
      "Usually while your pet is young and healthy, before anything can be called a pre-existing condition. If your pet is older, it can still be worth comparing plans.",
      { h2: "Questions about your pet's care?" },
      "Our team is happy to talk through your pet's health history and the care they may need, which can help you choose a plan. Call (604) 888-2628. We are open Monday to Friday 8:30 am to 7 pm, and Saturday and Sunday 9 am to 5 pm.",
    ]),
  },
  {
    _id: "clinic-post-urinary",
    title: "Cat Peeing Outside the Litter Box? Urinary Problems and When to See a Vet",
    slug: "cat-peeing-outside-litter-box-urinary-problems",
    excerpt:
      "Why cats pee outside the litter box, the urinary signs that are an emergency, what the vet visit involves, and urinary problems in dogs.",
    mainImage: "/assets/twoCats.webp",
    publishedAt: "2026-11-08T11:00:00Z",
    author,
    category: "Pet Health",
    readTime: "5 min read",
    tags: ["Cats", "Urinary Health", "Langley Vet"],
    relatedServices: [
      { title: "Prescription Diets", href: "/services/prescription-diets", description: "Urinary and other diets, approved by your veterinarian." },
      { title: "Lab Services", href: "/services/lab-services", description: "Urine and blood tests to find the cause." },
    ],
    metaData: {
      metaTitle: "Cat Peeing Outside the Litter Box? When to See a Vet",
      metaDescription:
        "Why cats pee outside the litter box, which urinary signs are an emergency, what the vet visit involves, and urinary problems in dogs. From our Langley vets.",
    },
    content: body([
      "A cat that suddenly pees outside the litter box is often telling you something is wrong. It can be a behaviour problem, but very often it starts with a medical one, so a vet check comes first.",
      { h2: "When it's an emergency" },
      "A cat, especially a male cat, who strains in the litter box and produces little or no urine may have a blocked urethra. This is life-threatening and needs a vet right away. Other urgent signs are crying in the litter box, repeated trips with nothing coming out, vomiting, or hiding and seeming very unwell.",
      "During our hours, come straight in and call (604) 888-2628 on the way. After hours, go to a 24-hour emergency hospital.",
      { h2: "Common medical causes" },
      { list: [
        "Bladder inflammation, often linked to stress (feline idiopathic cystitis).",
        "Bladder crystals or stones.",
        "Urinary tract infections, which are more common in older cats.",
        "Kidney disease, diabetes or an overactive thyroid, which make cats drink and pee more.",
        "Arthritis, which makes it hard to climb into a high-sided box.",
      ] },
      { h2: "Behaviour and the litter box" },
      { list: [
        "A dirty box, a new type of litter, or a box in a busy or noisy spot.",
        "Too few boxes. A common guide is one per cat, plus one extra.",
        "Stress from a new pet, a move or a change in routine.",
        "Marking: spraying small amounts on walls or furniture, more common in cats that aren't spayed or neutered.",
      ] },
      { h2: "Older cats" },
      "Senior cats who start peeing outside the box often have a medical reason, such as kidney disease, diabetes or arthritis. A check-up with bloodwork and a urine test can find it early.",
      { h2: "What happens at the vet visit" },
      "We examine your cat and usually test a urine sample (a urinalysis) for crystals, blood, infection and sugar. Bloodwork or X-rays may be recommended if stones or kidney disease are possible. Many urinary problems are managed with medication, more water in the diet, less stress, or a prescription urinary diet.",
      { h2: "Urinary problems in dogs" },
      "Dogs get urinary infections and bladder stones too. Watch for peeing more often, straining, accidents in the house, blood in the urine, or a lot of licking around the genitals. Straining with nothing coming out is an emergency in dogs as well.",
      { h2: "How to help at home" },
      { list: [
        "Keep litter boxes clean, with one per cat plus one.",
        "Encourage drinking: fresh water in several places, or a water fountain.",
        "Keep routines steady, and give your cat quiet places to rest.",
        "Don't punish accidents. It adds stress and can make them worse.",
      ] },
      "If your cat or dog is having urinary trouble, call us at (604) 888-2628. We are open 7 days a week.",
    ]),
  },
  {
    _id: "clinic-post-vomiting-diarrhea",
    title: "Dog or Cat Vomiting or Diarrhea: When to See a Vet",
    slug: "dog-cat-vomiting-diarrhea-when-to-see-vet",
    excerpt:
      "When vomiting or diarrhea in a dog or cat can be watched at home, when to see a vet today, and when it's an emergency.",
    mainImage: "/assets/doberman.webp",
    publishedAt: "2026-11-08T10:00:00Z",
    author,
    category: "Pet Health",
    readTime: "4 min read",
    tags: ["Dogs", "Cats", "Digestive Health"],
    relatedServices: [
      { title: "Same-Day & Weekend Visits", href: "/same-day-weekend-vet-langley", description: "How to get your pet seen today, 7 days a week." },
      { title: "Lab Services", href: "/services/lab-services", description: "Stool and blood tests to find the cause." },
    ],
    metaData: {
      metaTitle: "Dog or Cat Vomiting or Diarrhea: When to See a Vet",
      metaDescription:
        "When vomiting or diarrhea in a dog or cat can wait, when to see a vet today, and when it's an emergency. What to bring and what to avoid, from our Langley vets.",
    },
    content: body([
      "Most dogs and cats vomit or have a loose stool now and then, and many cases settle quickly. The hard part is knowing when it's more than a passing upset. Here is how our team thinks about it.",
      { h2: "See a vet right away if your pet" },
      { list: [
        "Vomits blood, or has black, tarry or very bloody stool.",
        "Has a swollen, hard belly, or retches without bringing anything up.",
        "Can't keep water down.",
        "Is very weak, collapses, or has pale gums.",
        "May have eaten something toxic, a toy, bones or string.",
        "Is a puppy, a kitten or a very small pet with repeated vomiting or diarrhea. They dehydrate quickly.",
      ] },
      "During our hours, come straight in and call (604) 888-2628 on the way. After hours, go to a 24-hour emergency hospital.",
      { h2: "Call us for a visit today if" },
      { list: [
        "Vomiting or diarrhea happens more than two or three times in a day.",
        "It lasts more than a day.",
        "Your pet isn't eating, or seems tired and unwell.",
        "Your pet is a senior, or has a condition such as kidney disease or diabetes.",
        "There is a little blood or mucus in the stool.",
      ] },
      { h2: "When it may be fine to watch at home" },
      "An adult pet who vomits once or has one loose stool, then acts normal, eats and drinks, often just needs watching. If it happens again, or anything on the lists above appears, call us.",
      { h2: "What to bring to the visit" },
      { list: [
        "A fresh stool sample.",
        "A photo of the vomit or stool, if you can take one.",
        "What your pet ate recently, including treats, scraps, or anything they got into.",
        "A list of any medications.",
      ] },
      { h2: "What not to do" },
      { list: [
        "Don't give human medicines, such as anti-diarrhea or upset-stomach drugs, unless a veterinarian tells you to. Some are dangerous for pets.",
        "Don't try to make your pet vomit unless a veterinarian tells you to.",
        "Ask before changing food or holding back water. Your veterinarian will tell you what is right for your pet.",
      ] },
      "We are open 7 days a week: Monday to Friday 8:30 am to 7 pm, and Saturday and Sunday 9 am to 5 pm. Call (604) 888-2628.",
    ]),
  },
  {
    _id: "clinic-post-signs-vet-today",
    title: "Signs Your Pet Needs a Vet Today: Lumps, Limping, Not Eating and More",
    slug: "signs-pet-needs-vet-today-langley",
    excerpt:
      "Lumps, limping, not eating, low energy or eye problems: how to tell whether your dog or cat needs a vet right now, today, or this week.",
    mainImage: "/assets/twoHappyDogs.webp",
    publishedAt: "2026-11-08T09:00:00Z",
    author,
    category: "Pet Health",
    readTime: "4 min read",
    tags: ["Dogs", "Cats", "Pet Health"],
    relatedServices: [
      { title: "Same-Day & Weekend Visits", href: "/same-day-weekend-vet-langley", description: "How to get your pet seen today, 7 days a week." },
      { title: "Chronic Pain Management", href: "/services/chronic-pain-management", description: "Comfort plans for arthritis and long-term pain." },
    ],
    metaData: {
      metaTitle: "Signs Your Pet Needs a Vet Today | Walnut Grove",
      metaDescription:
        "Lumps, limping, not eating, low energy or eye problems: how to tell if your dog or cat needs a vet right now, today, or this week. From our Langley vets.",
    },
    content: body([
      "Pets hide pain and illness well, so small changes matter. For each common worry below, here is what is an emergency, what needs a vet today, and what can wait a few days.",
      { h2: "Lumps and bumps" },
      { list: [
        "Right now: a lump that is bleeding heavily, or a sudden swelling of the face or belly.",
        "Today: a lump that is growing quickly, or is painful, hot or oozing.",
        "This week: a new small lump that isn't bothering your pet. Most lumps are harmless, but only a test can tell, so have every new lump checked.",
      ] },
      { h2: "Limping" },
      { list: [
        "Right now: your pet won't put any weight on a leg after a fall or accident, or a leg looks out of place.",
        "Today: limping that doesn't ease within a day, or a swollen or painful joint.",
        "This week: stiffness after rest, which can be a sign of arthritis in older pets.",
        "Never give human pain medicines. Many are toxic to pets.",
      ] },
      { h2: "Not eating" },
      { list: [
        "Right now: not eating along with vomiting, a swollen belly, weakness or pale gums.",
        "Today: a cat that hasn't eaten for a day, or a dog that has skipped more than a day of meals.",
        "This week: a gradual change in appetite or weight.",
      ] },
      { h2: "Low energy" },
      { list: [
        "Right now: collapse, trouble breathing, or your pet can't get up.",
        "Today: unusually tired and not interested in food, walks or play.",
        "This week: slowing down over several weeks, which can be age, weight or an illness worth checking.",
      ] },
      { h2: "Eye problems" },
      { list: [
        "Right now: an eye injury, or an eye that suddenly looks cloudy, very red or bulging.",
        "Today: squinting, pawing at an eye, or a lot of discharge.",
        "This week: mild tearing in a pet who otherwise seems fine.",
      ] },
      { h2: "When in doubt, call" },
      "Call us at (604) 888-2628 and describe what you see. We are open 7 days a week, and our team will tell you whether to come in today. After hours, go to a 24-hour emergency hospital if your pet has any of the right-now signs above.",
    ]),
  },
];
