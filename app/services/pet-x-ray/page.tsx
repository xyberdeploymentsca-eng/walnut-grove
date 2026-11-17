/** @format */

// Rebuilt in the background at most every 5 minutes, so pages are served from cache and CMS edits still show quickly.
export const revalidate = 300;

import { PetXRayContainer } from "@/components/services/petXRayContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getFaqPageSchema, getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("petXRayPage");
  return getMetadata(data, "/services/pet-x-ray");
}

const PetXRayPage = async () => {
  const data = await getPageData("petXRayPage");
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Pet X-Ray & Imaging",
    data?.metaData?.metaDescription ||
      "Advanced digital X-ray services for precise diagnostics and pet health monitoring.",
    "services/pet-x-ray",
  );
  return (
    <>
      <JsonLd data={schema} />
      {data?.faqs?.length ? <JsonLd data={getFaqPageSchema(data.faqs)} /> : null}
      <PetXRayContainer faqs={data?.faqs} />
    </>
  );
};

export default PetXRayPage;
