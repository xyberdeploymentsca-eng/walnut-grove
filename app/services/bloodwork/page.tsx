/** @format */

import { BloodworkContainer } from "@/components/services/bloodworkContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("bloodworkPage");
  return getMetadata(data);
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
      <BloodworkContainer />
    </>
  );
};

export default BloodworkPage;
