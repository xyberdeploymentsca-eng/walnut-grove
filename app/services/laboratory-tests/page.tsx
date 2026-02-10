/** @format */

import { LaboratoryContainer } from "@/components/services/laboratoryContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";

export async function generateMetadata() {
  const data = await getPageData("laboratoryPage");
  return getMetadata(data);
}

const LaboratoryTests = async () => {
  return <LaboratoryContainer />;
};

export default LaboratoryTests;
