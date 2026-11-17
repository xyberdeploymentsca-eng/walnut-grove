/** @format */

// Rebuilt in the background at most every 5 minutes, so pages are served from cache and CMS edits still show quickly.
export const revalidate = 300;

import HomeContainer from "@/components/home/homeContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getHospitalSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("homepage");
  return getMetadata(data, "");
}

export default async function Home() {
  // const data = await getPageData("homepage");
  const aboutData = await getPageData("aboutPage");
  const schema = getHospitalSchema();
  return (
    <>
      <JsonLd data={schema} />
      <HomeContainer team={aboutData?.team} />
    </>
  );
}
