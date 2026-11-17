/** @format */

// Rebuilt in the background at most every 5 minutes, so pages are served from cache and CMS edits still show quickly.
export const revalidate = 300;

import { ContactContainer } from "@/components/contact/contactContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getContactPageSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("contactPage");
  return getMetadata(data, "/contact");
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
