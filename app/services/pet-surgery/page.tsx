/** @format */

// Rebuilt in the background at most every 5 minutes, so pages are served from cache and CMS edits still show quickly.
export const revalidate = 300;

import { PetSurgeryContainer } from "@/components/services/petSurgeryContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getFaqPageSchema, getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("petSurgeryPage");
  return getMetadata(data, "/services/pet-surgery");
}

const PetSurgeryPage = async () => {
  const data = await getPageData("petSurgeryPage");
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Pet Surgery",
    data?.metaData?.metaDescription ||
      "Expert surgical care for pets, from routine procedures to complex soft tissue surgeries.",
    "services/pet-surgery",
  );
  return (
    <>
      <JsonLd data={schema} />
      {data?.faqs?.length ? <JsonLd data={getFaqPageSchema(data.faqs)} /> : null}
      <PetSurgeryContainer faqs={data?.faqs} />
    </>
  );
};

export default PetSurgeryPage;
