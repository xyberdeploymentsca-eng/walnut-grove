/** @format */

import { ServicesContainer } from "@/components/services/servicesContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("servicesPage");
  return getMetadata(data);
}

const Services = async () => {
  const data = await getPageData("servicesPage");
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Our Veterinary Services",
    data?.metaData?.metaDescription ||
      "Explore our comprehensive range of veterinary services, from wellness exams to surgery.",
    "services",
  );
  return (
    <>
      <JsonLd data={schema} />
      <ServicesContainer servicesPageData={data} />
    </>
  );
};

export default Services;
