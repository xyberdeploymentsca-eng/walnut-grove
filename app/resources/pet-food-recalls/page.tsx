/** @format */

import { JsonLd } from "@/components/shared/jsonLd";
import { PetFoodRecallsContainer } from "@/components/resources/petFoodRecallsContainer";
import { getPetFoodRecallsSchema } from "@/utils/schemaBuilder";
import { getMetadata, getPageData } from "@/utils/seoBuilder";

export async function generateMetadata() {
  const data = await getPageData("petFoodRecallsPage");
  return getMetadata(data);
}

export default async function PetFoodRecallsPage() {
  const data = await getPageData("petFoodRecallsPage");
  const schema = getPetFoodRecallsSchema();

  return (
    <>
      <JsonLd data={schema} />
      <PetFoodRecallsContainer />
    </>
  );
}
