/** @format */

import { UltrasoundContainer } from "@/components/services/ultrasoundContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";

export async function generateMetadata() {
  const data = await getPageData("ultrasoundPage");
  return getMetadata(data);
}

const UltrasoundPage = async () => {
  return <UltrasoundContainer />;
};

export default UltrasoundPage;
