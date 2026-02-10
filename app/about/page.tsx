/** @format */

import { AboutContainer } from "@/components/about/aboutContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";

export async function generateMetadata() {
  const data = await getPageData("aboutPage");
  return getMetadata(data);
}

const About = async () => {
  const data = await getPageData("aboutPage");
  return <AboutContainer faqs={data?.faqs} />;
};

export default About;
