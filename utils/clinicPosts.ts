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
];
