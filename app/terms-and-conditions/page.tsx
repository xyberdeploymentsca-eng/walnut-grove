/** @format */

import { TermsContainer } from "@/components/legal/termsContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";

export async function generateMetadata() {
  const data = await getPageData("termsPage");
  return getMetadata(data);
}

const TermsPage = async () => {
  return <TermsContainer />;
};

export default TermsPage;
