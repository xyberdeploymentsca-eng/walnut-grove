/** @format */

import { PrivacyPolicyContainer } from "@/components/legal/privacyPolicyContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";

export async function generateMetadata() {
  const data = await getPageData("privacyPolicyPage");
  return getMetadata(data);
}

const PrivacyPolicyPage = async () => {
  return <PrivacyPolicyContainer />;
};

export default PrivacyPolicyPage;
