/** @format */

import { ContactContainer } from "@/components/contact/contactContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getContactPageSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("contactPage");
  return getMetadata(data);
}

const ContactPage = () => {
  const schema = getContactPageSchema();
  return (
    <>
      <JsonLd data={schema} />
      <ContactContainer />
    </>
  );
};

export default ContactPage;
