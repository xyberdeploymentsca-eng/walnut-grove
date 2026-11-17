/** @format */

// Rebuilt in the background at most every 5 minutes, so pages are served from cache and CMS edits still show quickly.
export const revalidate = 300;

import { MicrochippingContainer } from "@/components/services/microchippingContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getFaqPageSchema, getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("microchippingPage");
  return getMetadata(data, "/services/microchipping");
}

const MicrochippingPage = async () => {
  const data = await getPageData("microchippingPage");
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Pet Microchipping",
    data?.metaData?.metaDescription ||
      "Permanent identification services for your pets to ensure they can always find their way home.",
    "services/microchipping",
  );
  return (
    <>
      <JsonLd data={schema} />
      {data?.faqs?.length ? <JsonLd data={getFaqPageSchema(data.faqs)} /> : null}
      <MicrochippingContainer faqs={data?.faqs} />
    </>
  );
};

export default MicrochippingPage;
