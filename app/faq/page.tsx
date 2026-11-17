/** @format */

// Rebuilt in the background at most every 5 minutes, so pages are served from cache and CMS edits still show quickly.
export const revalidate = 300;

import { FaqContainer } from "@/components/faq/faqContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getFaqPageSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("faqPage");
  return getMetadata(data, "/faq");
}

const FAQPage = async () => {
  const data = await getPageData("faqPage");
  const schema = getFaqPageSchema(data?.faqs);
  return (
    <>
      {schema.mainEntity.length > 0 && <JsonLd data={schema} id="faq-json-ld" />}
      <FaqContainer faqs={data?.faqs} />
    </>
  );
};

export default FAQPage;
