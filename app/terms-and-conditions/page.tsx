/** @format */

// Rebuilt in the background at most every 5 minutes, so pages are served from cache and CMS edits still show quickly.
export const revalidate = 300;

import { TermsContainer } from "@/components/legal/termsContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";

export async function generateMetadata() {
  const data = await getPageData("termsPage");
  return getMetadata(data, "/terms-and-conditions");
}

const TermsPage = async () => {
  return <TermsContainer />;
};

export default TermsPage;
