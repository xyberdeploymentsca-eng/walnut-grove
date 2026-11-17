/** @format */

// Rebuilt in the background at most every 5 minutes, so pages are served from cache and CMS edits still show quickly.
export const revalidate = 300;

import { PrivacyPolicyContainer } from "@/components/legal/privacyPolicyContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";

export async function generateMetadata() {
  const data = await getPageData("privacyPolicyPage");
  return getMetadata(data, "/privacy-policy");
}

const PrivacyPolicyPage = async () => {
  return <PrivacyPolicyContainer />;
};

export default PrivacyPolicyPage;
