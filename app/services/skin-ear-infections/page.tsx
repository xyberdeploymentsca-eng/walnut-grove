/** @format */

export const revalidate = 3600; // revalidate every hour

import { SkinEarContainer } from "@/components/services/skinEarContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("skinEarPage");
  return getMetadata(data, "/services/skin-ear-infections");
}

const SkinEarPage = async () => {
  const data = await getPageData("skinEarPage");
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Skin & Ear Infections",
    data?.metaData?.metaDescription ||
      "Specialized treatment for dermatological issues and persistent ear infections in pets.",
    "services/skin-ear-infections",
  );
  return (
    <>
      <JsonLd data={schema} />
      <SkinEarContainer />
    </>
  );
};

export default SkinEarPage;
