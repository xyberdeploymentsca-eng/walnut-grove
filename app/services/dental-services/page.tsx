/** @format */

// Rebuilt in the background at most every 5 minutes, so pages are served from cache and CMS edits still show quickly.
export const revalidate = 300;

import { DentalContainer } from "@/components/services/dentalContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getFaqPageSchema, getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("dentalPage");
  return getMetadata(data, "/services/dental-services");
}

const DentalPage = async () => {
  const data = await getPageData("dentalPage");
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Pet Dental Services",
    data?.metaData?.metaDescription ||
      "Professional dental cleaning, extractions, and oral health care for dogs and cats.",
    "services/dental-services",
  );
  return (
    <>
      <JsonLd data={schema} />
      {data?.faqs?.length ? <JsonLd data={getFaqPageSchema(data.faqs)} /> : null}
      <DentalContainer faqs={data?.faqs} />
    </>
  );
};

export default DentalPage;
