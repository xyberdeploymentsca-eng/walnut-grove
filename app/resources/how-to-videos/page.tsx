/** @format */

import { HowToVideosContainer } from "@/components/resources/howToVideosContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getWebPageSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("howToVideosPage");
  return getMetadata(data);
}

const HowToVideosPage = async () => {
  const data = await getPageData("howToVideosPage");
  const schema = getWebPageSchema(
    data?.metaData?.metaTitle || "How-To Videos",
    data?.metaData?.metaDescription ||
      "Helpful video guides for pet owners on common care tasks and procedures.",
    "resources/how-to-videos",
  );
  return (
    <>
      <JsonLd data={schema} />
      <HowToVideosContainer />
    </>
  );
};

export default HowToVideosPage;
