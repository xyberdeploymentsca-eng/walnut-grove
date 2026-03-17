/** @format */

import { BoardingContainer } from "@/components/services/boardingContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("petBoardingPage");
  return getMetadata(data);
}

const BoardingPage = async () => {
  const data = await getPageData("petBoardingPage");
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Pet Boarding Services",
    data?.metaData?.metaDescription ||
      "Safe, comfortable, and medical boarding services for your cats and dogs in Langley.",
    "services/pet-boarding-services",
  );
  return (
    <>
      <JsonLd data={schema} />
      <BoardingContainer />
    </>
  );
};

export default BoardingPage;
