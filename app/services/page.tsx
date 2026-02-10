/** @format */

import { ServicesContainer } from "@/components/services/servicesContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";

export async function generateMetadata() {
  const data = await getPageData("servicesPage");
  return getMetadata(data);
}

const Services = async () => {
  const data = await getPageData("servicesPage");
  return <ServicesContainer servicesPageData={data} />;
};

export default Services;
