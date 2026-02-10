/** @format */

import { BoardingContainer } from "@/components/services/boardingContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";

export async function generateMetadata() {
  const data = await getPageData("petBoardingPage");
  return getMetadata(data);
}

const BoardingPage = async () => {
  return <BoardingContainer />;
};

export default BoardingPage;
