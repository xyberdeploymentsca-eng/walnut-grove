/** @format */

// Rebuilt in the background at most every 5 minutes, so pages are served from cache and CMS edits still show quickly.
export const revalidate = 300;

import { SoftTissueContainer } from "@/components/services/softTissueContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getFaqPageSchema, getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("softTissuePage");
  return getMetadata(data, "/services/soft-tissue-eye-ear");
}

const SoftTissuePage = async () => {
  const data = await getPageData("softTissuePage");
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Soft Tissue, Eye & Ear Surgery",
    data?.metaData?.metaDescription ||
      "Specialized soft tissue surgical procedures for eye, ear, and internal health issues.",
    "services/soft-tissue-eye-ear",
  );
  return (
    <>
      <JsonLd data={schema} />
      {data?.faqs?.length ? <JsonLd data={getFaqPageSchema(data.faqs)} /> : null}
      <SoftTissueContainer faqs={data?.faqs} />
    </>
  );
};

export default SoftTissuePage;
