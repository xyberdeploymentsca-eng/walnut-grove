/** @format */

// Rebuilt in the background at most every 5 minutes, so pages are served from cache and CMS edits still show quickly.
export const revalidate = 300;

import { ContentPage } from "@/components/shared/contentPage";
import { JsonLd } from "@/components/shared/jsonLd";
import { getMetadata, getPageSeo } from "@/utils/seoBuilder";
import { getFaqPageSchema, getServiceSchema } from "@/utils/schemaBuilder";
import { seoPages } from "@/utils/seoPages";

const PATH = "/services/nail-trims";

export function generateMetadata() {
  return getMetadata(null, PATH);
}

const NailTrimsPage = () => {
  const page = seoPages[PATH];
  const seo = getPageSeo(PATH);
  return (
    <>
      <JsonLd data={getServiceSchema(seo.title, seo.description, PATH.slice(1))} />
      <JsonLd data={getFaqPageSchema(page.faqs)} />
      <ContentPage {...page} />
    </>
  );
};

export default NailTrimsPage;
