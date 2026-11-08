/** @format */

import { client } from "../sanity/lib/client";
import { urlFor } from "../sanity/lib/image";

export const getPageData = async (type) => {
  try {
    const query = `*[_type == "${type}"][0]`;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.warn(`[Sanity] Could not fetch page data for type: ${type}`);
    return null;
  }
};

export const getProductMetaData = async (slug) => {
  try {
    const query = `*[_type == "product" && slug.current == $slug][0]{
      title,
      metaData {
        metaTitle,
        metaDescription,
        metaImage,
        canonical
      }
    }`;
    const data = await client.fetch(query, { slug });
    return data;
  } catch (error) {
    console.warn(`[Sanity] Could not fetch product meta data for slug: ${slug}`);
    return null;
  }
};

/** Each page's own title and description, used when the CMS has none for it (so no two pages share a title). */
const PAGE_SEO = {
  "": {
    "title": "Veterinarian in Langley, BC | Walnut Grove Animal Hospital",
    "description": "Walnut Grove Animal Hospital in Langley, BC: wellness exams, vaccines, dental care, surgery, X-ray, lab work and boarding for dogs, cats and small pets."
  },
  "/about": {
    "title": "About Our Langley Vet Team | Walnut Grove Animal Hospital",
    "description": "Meet the veterinarians and team at Walnut Grove Animal Hospital in Langley, BC, and see how we care for dogs, cats and small pets."
  },
  "/contact": {
    "title": "Contact & Hours | Walnut Grove Animal Hospital, Langley",
    "description": "Call (604) 888-2628 or visit us at 101A-20995 88 Ave, Langley, BC. Open Monday to Friday 8:30am to 7:00pm, Saturday and Sunday 9:00am to 5:00pm."
  },
  "/faq": {
    "title": "Pet Care FAQ | Walnut Grove Animal Hospital, Langley BC",
    "description": "Answers to the questions pet parents ask us most about appointments, vaccines, surgery, boarding and caring for your pet at Walnut Grove Animal Hospital."
  },
  "/services": {
    "title": "Vet Services in Langley | Walnut Grove Animal Hospital",
    "description": "All veterinary services at Walnut Grove Animal Hospital in Langley, BC: preventive care, vaccines, dental, surgery, diagnostics, boarding and more."
  },
  "/blog": {
    "title": "Pet Health & Veterinary Blog | Walnut Grove Animal Hospital",
    "description": "Pet care advice, preventive health tips and veterinary guides from the team at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/privacy-policy": {
    "title": "Privacy Policy | Walnut Grove Animal Hospital",
    "description": "How Walnut Grove Animal Hospital in Langley, BC collects, uses and protects your personal information."
  },
  "/terms-and-conditions": {
    "title": "Terms and Conditions | Walnut Grove Animal Hospital",
    "description": "The terms and conditions for using the Walnut Grove Animal Hospital website and services in Langley, BC."
  },
  "/resources/how-to-videos": {
    "title": "Pet Care How-To Videos | Walnut Grove Animal Hospital",
    "description": "Short how-to videos from Walnut Grove Animal Hospital in Langley, BC to help you care for your dog or cat at home."
  },
  "/resources/poisonous-plants": {
    "title": "Plants Poisonous to Pets | Walnut Grove Animal Hospital",
    "description": "Which common plants are toxic to dogs and cats, and what to do if your pet eats one. A guide from Walnut Grove Animal Hospital, Langley."
  },
  "/resources/pet-food-recalls": {
    "title": "Pet Food Recalls & Safety | Walnut Grove Animal Hospital",
    "description": "Stay up to date on pet food recalls and safety alerts, with guidance from Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/anesthesia": {
    "title": "Pet Anesthesia & Monitoring in Langley | Walnut Grove",
    "description": "Safe anesthesia and monitoring for dogs and cats having surgery or dental care at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/bloodwork": {
    "title": "Pet Bloodwork in Langley | Walnut Grove Animal Hospital",
    "description": "Blood tests for dogs and cats to check organ health and catch problems early, at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/chronic-pain-management": {
    "title": "Pet Pain Management in Langley | Walnut Grove",
    "description": "Care plans for dogs and cats living with chronic pain or arthritis, from the veterinary team at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/dental-services": {
    "title": "Pet Dental Care in Langley | Walnut Grove Animal Hospital",
    "description": "Dental exams, cleaning and treatment for dogs and cats at Walnut Grove Animal Hospital in Langley, BC, for healthier teeth and gums."
  },
  "/services/dog-breeding": {
    "title": "Dog Breeding Services in Langley | Walnut Grove",
    "description": "Veterinary support for dog breeding at Walnut Grove Animal Hospital in Langley, BC, from planning to puppy care."
  },
  "/services/euthanasia": {
    "title": "Pet Euthanasia & End-of-Life Care in Langley | Walnut Grove",
    "description": "Compassionate end-of-life care and euthanasia for dogs and cats, with support for your family, at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/lab-services": {
    "title": "Veterinary Lab Services in Langley | Walnut Grove",
    "description": "In-house and reference lab testing for dogs and cats at Walnut Grove Animal Hospital in Langley, BC, for faster answers about your pet's health."
  },
  "/services/microchipping": {
    "title": "Pet Microchipping in Langley | Walnut Grove Animal Hospital",
    "description": "Microchipping for dogs and cats at Walnut Grove Animal Hospital in Langley, BC, so a lost pet can find its way home."
  },
  "/services/parasite-prevention": {
    "title": "Flea, Tick & Worm Prevention in Langley | Walnut Grove",
    "description": "Parasite prevention for dogs and cats against fleas, ticks and worms, from Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/pet-boarding-services": {
    "title": "Pet Boarding in Langley | Walnut Grove Animal Hospital",
    "description": "Boarding for dogs and cats with veterinary staff on hand, at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/pet-surgery": {
    "title": "Pet Surgery in Langley | Walnut Grove Animal Hospital",
    "description": "Soft tissue and routine surgery for dogs and cats, with anesthesia monitoring and aftercare, at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/pet-x-ray": {
    "title": "Pet X-Ray in Langley | Walnut Grove Animal Hospital",
    "description": "Digital X-rays for dogs and cats to diagnose injuries and illness, at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/preventative-care": {
    "title": "Preventive Care & Wellness Exams in Langley | Walnut Grove",
    "description": "Wellness exams and preventive care that keep dogs and cats healthy at every age, at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/puppy-kitten-care": {
    "title": "Puppy & Kitten Care in Langley | Walnut Grove",
    "description": "First visits, vaccines and care plans for new puppies and kittens at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/skin-ear-infections": {
    "title": "Pet Skin & Ear Infection Care in Langley | Walnut Grove",
    "description": "Diagnosis and treatment of skin problems and ear infections in dogs and cats at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/small-mammal-medicine": {
    "title": "Small Pet Vet in Langley: Rabbits & More | Walnut Grove",
    "description": "Veterinary care for rabbits, guinea pigs and other small mammals at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/soft-tissue-eye-ear": {
    "title": "Soft Tissue, Eye & Ear Surgery for Pets in Langley | Walnut Grove",
    "description": "Soft tissue, eye and ear procedures for dogs and cats at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/spay-neuter": {
    "title": "Spay & Neuter in Langley | Walnut Grove Animal Hospital",
    "description": "Spay and neuter surgery for dogs and cats, with anesthesia monitoring and aftercare, at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/ultrasound-services": {
    "title": "Pet Ultrasound in Langley | Walnut Grove Animal Hospital",
    "description": "Ultrasound imaging for dogs and cats to look at organs and find problems early, at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/vaccines": {
    "title": "Pet Vaccines in Langley | Walnut Grove Animal Hospital",
    "description": "Core and lifestyle vaccines for dogs and cats, set to your pet's age and needs, at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/vet-prices-langley": {
    "title": "Vet Prices in Langley, BC | Walnut Grove Animal Hospital",
    "description": "What a vet visit costs at Walnut Grove Animal Hospital, Langley: exams, vaccines, spay/neuter, dental and nail trims, plus pet insurance and estimates."
  },
  "/same-day-weekend-vet-langley": {
    "title": "Same-Day & Weekend Vet in Langley | Walnut Grove",
    "description": "Need a vet today in Langley? Walnut Grove Animal Hospital is open 7 days, including Saturday and Sunday 9am–5pm. How same-day visits work and when to call."
  },
  "/pet-emergency-langley": {
    "title": "Pet Emergency in Langley: What to Do | Walnut Grove",
    "description": "Is it an emergency? Signs that need a vet now, what to do on the way, what to do if your dog ate chocolate, and where to go in Langley after hours."
  },
  "/services/nail-trims": {
    "title": "Dog & Cat Nail Trims in Langley | Walnut Grove",
    "description": "Gentle nail trims for dogs and cats at Walnut Grove Animal Hospital in Langley, BC: how often to trim, help for nervous pets, and how to book."
  },
  "/services/prescription-diets": {
    "title": "Prescription Pet Food in Langley | Walnut Grove",
    "description": "Prescription diets for urinary, kidney, digestive, skin and weight problems in dogs and cats, approved by our Langley vets. Order online or for pickup."
  },
  "/services/health-certificates": {
    "title": "Pet Travel Health Certificates in BC | Walnut Grove",
    "description": "Travelling with your dog or cat? What a health certificate is, US and overseas travel paperwork, and how to get ready with our Langley vets."
  }
};

/**
 * Titles and descriptions set here win over the CMS (they follow the SEO plan of Nov 2026: the main search phrase
 * first, 60 characters or fewer, one brand suffix). Delete an entry to let the CMS text show again.
 */
const SEO_OVERRIDES = {
  "": {
    "title": "Langley BC Vet, Open 7 Days | Walnut Grove Animal Hospital",
    "description": "Veterinarian in Walnut Grove, Langley BC. Open 7 days: Mon–Fri 8:30am–7pm, Sat–Sun 9am–5pm. Request an appointment online or call (604) 888-2628."
  },
  "/contact": {
    "title": "Hours & Location | Walnut Grove Animal Hospital, Langley",
    "description": PAGE_SEO["/contact"].description
  },
  "/services/spay-neuter": {
    "title": "Spay & Neuter in Langley: Cost & Recovery | Walnut Grove",
    "description": "Spay and neuter surgery for dogs and cats in Langley, BC: the best age, what's included, recovery at home, and a detailed estimate before surgery."
  },
  "/services/vaccines": {
    "title": "Pet Vaccines in Langley: Schedule & Cost | Walnut Grove",
    "description": "Core and lifestyle vaccines for dogs and cats in Langley, BC: the puppy and kitten schedule, adult boosters and typical costs, at Walnut Grove."
  },
  "/services/dental-services": {
    "title": "Pet Dental Cleaning in Langley | Walnut Grove",
    "description": "Dental cleaning for dogs and cats in Langley, BC with digital dental X-rays and monitored anesthesia: what happens, signs it's time, and estimates."
  },
  "/services/skin-ear-infections": {
    "title": "Dog Ear Infections & Itchy Skin in Langley | Walnut Grove",
    "description": "Ear infections and itchy skin in dogs and cats: the signs, common causes, how we find the cause and treat it, and when to call our Langley vets."
  },
  "/services/soft-tissue-eye-ear": {
    "title": "Soft Tissue, Eye & Ear Surgery in Langley | Walnut Grove",
    "description": PAGE_SEO["/services/soft-tissue-eye-ear"].description
  },
  "/services/anesthesia": PAGE_SEO["/services/anesthesia"],
  "/services/chronic-pain-management": PAGE_SEO["/services/chronic-pain-management"],
  "/services/dog-breeding": PAGE_SEO["/services/dog-breeding"],
  "/services/pet-surgery": PAGE_SEO["/services/pet-surgery"],
  "/resources/how-to-videos": PAGE_SEO["/resources/how-to-videos"],
  "/blog/pet-dental-health-signs-gum-disease": { "title": "Signs of Tooth Pain in Pets & Why Cleanings Matter" },
  "/blog/pet-diagnostics-explained-bloodwork-x-rays-and-ultrasound-in-langley": { "title": "Pet Bloodwork, X-Rays & Ultrasound Explained | Langley" },
  "/blog/preventative-pet-care-in-langley-bc-what-every-pet-owner-needs-to-know": { "title": "Preventive Pet Care in Langley: What Owners Need to Know" },
  "/blog/preventative-pet-care-wellness-exams-langley": { "title": "Why Routine Wellness Exams Matter | Langley Vet" },
  "/blog/puppy-kitten-first-year-health-checklist": { "title": "Puppy & Kitten First-Year Checklist: Vaccines & Care" },
  "/blog/seasonal-pet-safety-fleas-ticks-poisonous-plants": { "title": "Fraser Valley Pet Safety: Fleas, Ticks & Toxic Plants" },
  "/blog/stress-free-cat-boarding-guide": { "title": "Stress-Free Cat Boarding in Langley: How We Do It" }
};

/** The title and description a page is published with (overrides first), for its structured data. */
export function getPageSeo(path) {
  return { ...PAGE_SEO[path], ...SEO_OVERRIDES[path] };
}

function applyOverride(metadata, pagePath) {
  const o = SEO_OVERRIDES[pagePath];
  if (!o) return metadata;
  if (o.title) metadata.title = o.title;
  if (o.description) metadata.description = o.description;
  if (metadata.twitter) {
    metadata.twitter.title = metadata.title;
    metadata.twitter.description = metadata.description;
  }
  metadata.openGraph.title = metadata.title;
  metadata.openGraph.description = metadata.description;
  return metadata;
}

/**
 * @param {any} data
 * @param {string} currentUrl
 */
export function getMetadata(data, currentUrl = "") {
  const seo = data?.metaData;
  
  // Resolve standard domain + path
  let canonicalUrl = "";
  if (currentUrl && (currentUrl.startsWith("http://") || currentUrl.startsWith("https://"))) {
    canonicalUrl = currentUrl;
  } else {
    let cleanPath = currentUrl || "";
    if (cleanPath && !cleanPath.startsWith("/")) {
      cleanPath = "/" + cleanPath;
    }
    canonicalUrl = `https://www.walnutgroveanimalclinic.com${cleanPath}`;
  }

  const pagePath = (currentUrl.startsWith("http") ? new URL(currentUrl).pathname : currentUrl || "").replace(/\/$/, "");
  const fallback = PAGE_SEO[pagePath] || {
    title: "Walnut Grove Animal Hospital",
    description: "Your trusted partner for quality veterinary care, surgeries, and pet boarding in Langley, BC.",
  };
  const metadata = {
    title: fallback.title,
    description: fallback.description,
    openGraph: { images: "/assets/logo.png", url: canonicalUrl, siteName: "Walnut Grove Animal Hospital", type: "website" },
    twitter: {
      card: "summary_large_image",
      title: fallback.title,
      description: fallback.description,
      image: "/assets/logo.png",
    },
    alternates: {
      languages: {
        "en-US": canonicalUrl,
      },
      canonical: canonicalUrl,
    },
  };

  metadata.openGraph.title = metadata.title;
  metadata.openGraph.description = metadata.description;
  if (!seo) {
    return applyOverride(metadata, pagePath);
  }

  if (seo.metaTitle) {
    metadata.title = seo.metaTitle;
    metadata.twitter.title = seo.metaTitle;
  }
  if (seo.metaDescription) {
    metadata.description = seo.metaDescription;
    metadata.twitter.description = seo.metaDescription;
  }
  if (seo.metaImage) {
    const imageUrl = urlFor(seo.metaImage).url() ?? "/assets/logo.png";
    metadata.openGraph = { ...metadata.openGraph, images: imageUrl };
    metadata.twitter.image = seo.metaImage?.data?.attributes?.url;
  }

  if (seo.canonical) {
    metadata.alternates.canonical = seo.canonical;
  }

  metadata.title = fitTitle(metadata.title);
  if (metadata.twitter) metadata.twitter.title = metadata.title;
  metadata.openGraph.title = metadata.title;
  metadata.openGraph.description = metadata.description;
  return applyOverride(metadata, pagePath);
}

/** Search results show about 60 characters: shorten a long brand suffix, and name the clinic on very short titles. CMS text is otherwise kept. */
function fitTitle(title) {
  if (typeof title !== "string") return title;
  const long = " | Walnut Grove Animal Hospital";
  if (title.length > 60 && title.endsWith(long)) return title.slice(0, -long.length) + " | Walnut Grove";
  if (title.length < 30 && !title.includes("Walnut Grove")) return title + (title.length + long.length <= 60 ? long : " | Walnut Grove");
  return title;
}
