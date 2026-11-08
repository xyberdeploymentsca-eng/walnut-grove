/** @format */

export const dynamic = "force-dynamic";

import { UltrasoundContainer } from "@/components/services/ultrasoundContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getFaqPageSchema, getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("ultrasoundPage");
  return getMetadata(data, "/services/ultrasound-services");
}

const UltrasoundPage = async () => {
  const data = await getPageData("ultrasoundPage");
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Pet Ultrasound Services",
    data?.metaData?.metaDescription ||
      "Non-invasive ultrasound imaging for detailed internal diagnostics and health monitoring.",
    "services/ultrasound-services",
  );
  return (
    <>
      <JsonLd data={schema} />
      {data?.faqs?.length ? <JsonLd data={getFaqPageSchema(data.faqs)} /> : null}
      <UltrasoundContainer faqs={data?.faqs} />
    </>
  );
};

export default UltrasoundPage;
