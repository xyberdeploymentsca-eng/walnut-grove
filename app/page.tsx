/** @format */

import HomeContainer from "@/components/home/homeContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getHospitalSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("homepage");
  return getMetadata(data);
}

export default async function Home() {
  const data = await getPageData("homepage");
  const schema = getHospitalSchema();
  return (
    <>
      <JsonLd data={schema} />
      <HomeContainer testimonials={data?.testimonials} />
    </>
  );
}
