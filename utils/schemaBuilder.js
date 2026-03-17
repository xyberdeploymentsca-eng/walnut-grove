/** @format */

const hospitalName = "Walnut Grove Animal Hospital";
const hospitalUrl = "https://walnutgroveanimalclinic.com/";
const hospitalPhone = "(604) 888-2628";
const hospitalLogo = `${hospitalUrl}assets/logo.png`;
const hospitalAddress = {
  "@type": "PostalAddress",
  streetAddress: "101A-20995 88 Ave",
  addressLocality: "Langley",
  addressRegion: "BC",
  postalCode: "V1M2C9",
  addressCountry: "CA",
};

export const getHospitalSchema = () => ({
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: hospitalName,
  image: hospitalLogo,
  "@id": hospitalUrl,
  url: hospitalUrl,
  telephone: hospitalPhone,
  address: hospitalAddress,
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.1628596,
    longitude: -122.655538,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  sameAs: ["https://facebook.com", "https://instagram.com"],
});

export const getWebPageSchema = (name, description, url) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: name,
  description: description,
  url: `${hospitalUrl}${url}`,
});

export const getAboutPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "VeterinaryCare",
    name: hospitalName,
    address: hospitalAddress,
    telephone: hospitalPhone,
  },
});

export const getContactPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "VeterinaryCare",
    name: hospitalName,
    address: hospitalAddress,
    telephone: hospitalPhone,
  },
});

export const getServiceSchema = (serviceName, description, url) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceName,
  provider: {
    "@type": "VeterinaryCare",
    name: hospitalName,
    address: hospitalAddress,
    telephone: hospitalPhone,
  },
  description: description,
  url: `${hospitalUrl}${url}`,
});

export const getBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${hospitalUrl}${item.url}`,
  })),
});
