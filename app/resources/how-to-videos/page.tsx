/** @format */

// Rebuilt in the background at most every 5 minutes, so pages are served from cache and CMS edits still show quickly.
export const revalidate = 300;

import { HowToVideosContainer } from "@/components/resources/howToVideosContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getWebPageSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("howToVideosPage");
  return getMetadata(data, "/resources/how-to-videos");
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
      <HowToVideosContainer videos={data?.videos} resources={data?.helpfulResources} />
    </>
  );
};

export default HowToVideosPage;
