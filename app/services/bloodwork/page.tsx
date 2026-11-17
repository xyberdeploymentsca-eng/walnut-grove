/** @format */

// Rebuilt in the background at most every 5 minutes, so pages are served from cache and CMS edits still show quickly.
export const revalidate = 300;

import { BloodworkContainer } from "@/components/services/bloodworkContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getFaqPageSchema, getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("bloodworkPage");
  return getMetadata(data, "/services/bloodwork");
}

const BloodworkPage = async () => {
  const data = await getPageData("bloodworkPage");
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Bloodwork",
    data?.metaData?.metaDescription ||
      "Comprehensive bloodwork and diagnostic testing for pets in Langley.",
    "services/bloodwork",
  );
  return (
    <>
      <JsonLd data={schema} />
      {data?.faqs?.length ? <JsonLd data={getFaqPageSchema(data.faqs)} /> : null}
      <BloodworkContainer faqs={data?.faqs} />
    </>
  );
};

export default BloodworkPage;
