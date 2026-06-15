/** @format */

export const dynamic = "force-dynamic";

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
