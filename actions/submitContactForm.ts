/** @format */
"use server";

import { client } from "@/sanity/lib/client";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData) {
  await client.create({
    _type: "contactSubmission",
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone || "",
    subject: data.subject,
    message: data.message,
    submittedAt: new Date().toISOString(),
  });
}
