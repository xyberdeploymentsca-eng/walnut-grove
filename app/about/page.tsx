/** @format */

import { AboutContainer } from "@/components/about/aboutContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getAboutPageSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("aboutPage");
  return getMetadata(data);
}

const About = async () => {
  const data = await getPageData("aboutPage");
  const schema = getAboutPageSchema();
  return (
    <>
      <JsonLd data={schema} />
      <AboutContainer faqs={data?.faqs} />
    </>
  );
};

export default About;
