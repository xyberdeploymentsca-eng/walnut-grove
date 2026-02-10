/** @format */

import { SpayNeuterContainer } from "@/components/services/spayNeuterContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";

export async function generateMetadata() {
  const data = await getPageData("spayNeuterPage");
  return getMetadata(data);
}

const SpayNeuterPage = async () => {
  return <SpayNeuterContainer />;
};

export default SpayNeuterPage;
