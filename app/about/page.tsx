/** @format */

export const revalidate = 3600; // revalidate every hour

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
