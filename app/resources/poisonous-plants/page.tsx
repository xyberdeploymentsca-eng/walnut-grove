/** @format */

// Rebuilt in the background at most every 5 minutes, so pages are served from cache and CMS edits still show quickly.
export const revalidate = 300;

import { PoisonousPlantsContainer } from "@/components/resources/poisonousPlantsContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getWebPageSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("poisonousPlantsPage");
  return getMetadata(data, "/resources/poisonous-plants");
}

const PoisonousPlantsPage = async () => {
  const data = await getPageData("poisonousPlantsPage");
  const schema = getWebPageSchema(
    data?.metaData?.metaTitle || "Poisonous Plants for Pets",
    data?.metaData?.metaDescription ||
      "A comprehensive guide to plants that are toxic to dogs and cats in the Langley area.",
    "resources/poisonous-plants",
  );
  return (
    <>
      <JsonLd data={schema} />
      <PoisonousPlantsContainer />
    </>
  );
};

export default PoisonousPlantsPage;
