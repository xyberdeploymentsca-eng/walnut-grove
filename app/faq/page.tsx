/** @format */

import { FaqContainer } from "@/components/faq/faqContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
// import { getFaqPageSchema } from "@/utils/schemaBuilder"; // I'll check if I need this

export async function generateMetadata() {
  const data = await getPageData("faqPage");
  return getMetadata(data);
}

const FAQPage = async () => {
  const data = await getPageData("faqPage");
  // const schema = getFaqPageSchema(); 
  return (
    <>
      {/* <JsonLd data={schema} /> */}
      <FaqContainer faqs={data?.faqs} />
    </>
  );
};

export default FAQPage;
