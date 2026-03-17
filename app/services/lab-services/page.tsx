/** @format */

import { LaboratoryContainer } from "@/components/services/laboratoryContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("laboratoryPage");
  return getMetadata(data);
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
      <LaboratoryContainer />
    </>
  );
};

export default LaboratoryTests;
