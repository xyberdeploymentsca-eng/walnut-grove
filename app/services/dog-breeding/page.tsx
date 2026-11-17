/** @format */

// Rebuilt in the background at most every 5 minutes, so pages are served from cache and CMS edits still show quickly.
export const revalidate = 300;

import { DogBreedingContainer } from "@/components/services/dogBreedingContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getFaqPageSchema, getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("dogBreedingPage");
  return getMetadata(data, "/services/dog-breeding");
}

const DogBreedingPage = async () => {
  const data = await getPageData("dogBreedingPage");
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Responsible Dog Breeding Services",
    data?.metaData?.metaDescription ||
      "Expert guidance and medical support for responsible dog breeding and neonatal care.",
    "services/dog-breeding",
  );
  return (
    <>
      <JsonLd data={schema} />
      {data?.faqs?.length ? <JsonLd data={getFaqPageSchema(data.faqs)} /> : null}
      <DogBreedingContainer faqs={data?.faqs} />
    </>
  );
};

export default DogBreedingPage;
