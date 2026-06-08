/** @format */

export const revalidate = 3600; // revalidate every hour

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
