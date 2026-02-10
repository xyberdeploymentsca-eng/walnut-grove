/** @format */

import HomeContainer from "@/components/home/homeContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";

export async function generateMetadata() {
  const data = await getPageData("homepage");
  return getMetadata(data);
}

export default async function Home() {
  const data = await getPageData("homepage");
  return <HomeContainer testimonials={data?.testimonials} />;
}
