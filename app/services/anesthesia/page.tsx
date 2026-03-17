/** @format */

import { AnesthesiaContainer } from "@/components/services/anesthesiaContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("anesthesiaPage");
  return getMetadata(data);
}

const AnesthesiaPage = async () => {
  const data = await getPageData("anesthesiaPage");
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Anesthesia",
    data?.metaData?.metaDescription ||
      "Safe and monitored anesthesia services for your pets at Walnut Grove Animal Hospital.",
    "services/anesthesia",
  );
  return (
    <>
      <JsonLd data={schema} />
      <AnesthesiaContainer />
    </>
  );
};

export default AnesthesiaPage;
