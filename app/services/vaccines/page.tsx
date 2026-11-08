/** @format */

export const dynamic = "force-dynamic";

import { VaccinesContainer } from "@/components/services/vaccinesContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getFaqPageSchema, getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("vaccinesPage");
  return getMetadata(data, "/services/vaccines");
}

const VaccinesPage = async () => {
  const data = await getPageData("vaccinesPage");
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Pet Vaccines & Immunization",
    data?.metaData?.metaDescription ||
      "Essential core and lifestyle vaccinations to protect your pets from preventable diseases.",
    "services/vaccines",
  );
  return (
    <>
      <JsonLd data={schema} />
      {data?.faqs?.length ? <JsonLd data={getFaqPageSchema(data.faqs)} /> : null}
      <VaccinesContainer faqs={data?.faqs} />
    </>
  );
};

export default VaccinesPage;
