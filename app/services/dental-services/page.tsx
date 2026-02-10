/** @format */

import { DentalContainer } from "@/components/services/dentalContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";

export async function generateMetadata() {
  const data = await getPageData("dentalPage");
  return getMetadata(data);
}

const DentalPage = async () => {
  return <DentalContainer />;
};

export default DentalPage;
