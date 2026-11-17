/** @format */

// Rebuilt in the background at most every 5 minutes, so pages are served from cache and CMS edits still show quickly.
export const revalidate = 300;

import { AboutContainer } from "@/components/about/aboutContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getAboutPageSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("aboutPage");
  return getMetadata(data, "/about");
}

const About = async () => {
  const data = await getPageData("aboutPage");
  const schema = getAboutPageSchema();
  return (
    <>
      <JsonLd data={schema} />
      <AboutContainer faqs={data?.faqs} team={data?.team} />
    </>
  );
};

export default About;
