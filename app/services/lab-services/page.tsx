/** @format */

export const dynamic = "force-dynamic";

import { LaboratoryContainer } from "@/components/services/laboratoryContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getFaqPageSchema, getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("laboratoryPage");
  return getMetadata(data, "/services/lab-services");
}

const LaboratoryTests = async () => {
  const data = await getPageData("laboratoryPage");
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Laboratory Services",
    data?.metaData?.metaDescription ||
      "In-house laboratory diagnostic testing for rapid and accurate pet health assessments.",
    "services/lab-services",
  );
  return (
    <>
      <JsonLd data={schema} />
      {data?.faqs?.length ? <JsonLd data={getFaqPageSchema(data.faqs)} /> : null}
      <LaboratoryContainer faqs={data?.faqs} />
    </>
  );
};

export default LaboratoryTests;
