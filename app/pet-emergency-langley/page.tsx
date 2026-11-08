/** @format */

export const dynamic = "force-dynamic";

import { ContentPage } from "@/components/shared/contentPage";
import { JsonLd } from "@/components/shared/jsonLd";
import { getMetadata, getPageSeo } from "@/utils/seoBuilder";
import { getFaqPageSchema, getWebPageSchema } from "@/utils/schemaBuilder";
import { seoPages } from "@/utils/seoPages";

const PATH = "/pet-emergency-langley";

export function generateMetadata() {
  return getMetadata(null, PATH);
}

const PetEmergencyPage = () => {
  const page = seoPages[PATH];
  const seo = getPageSeo(PATH);
  return (
    <>
      <JsonLd data={getWebPageSchema(seo.title, seo.description, PATH.slice(1))} />
      <JsonLd data={getFaqPageSchema(page.faqs)} />
      <ContentPage {...page} />
    </>
  );
};

export default PetEmergencyPage;
