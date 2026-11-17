/** @format */

// Rebuilt in the background at most every 5 minutes, so pages are served from cache and CMS edits still show quickly.
export const revalidate = 300;

import { SmallMammalContainer } from "@/components/services/smallMammalContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getFaqPageSchema, getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("smallMammalPage");
  return getMetadata(data, "/services/small-mammal-medicine");
}

const SmallMammalPage = async () => {
  const data = await getPageData("smallMammalPage");
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Small Mammal Medicine",
    data?.metaData?.metaDescription ||
      "Expert medical care for rabbits, guinea pigs, hamsters, and other small pocket pets.",
    "services/small-mammal-medicine",
  );
  return (
    <>
      <JsonLd data={schema} />
      {data?.faqs?.length ? <JsonLd data={getFaqPageSchema(data.faqs)} /> : null}
      <SmallMammalContainer faqs={data?.faqs} />
    </>
  );
};

export default SmallMammalPage;
