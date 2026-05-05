/** @format */
"use server";

import nodemailer from "nodemailer";
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
  // 1. Save to Sanity
  try {
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
  } catch (error) {
    console.error("Sanity creation error:", error);
    // We continue to email sending even if Sanity fails,
    // or you might want to throw here depending on requirements.
  }

  // 2. Send email via Brevo (using Nodemailer)
  // Ensure these variables are set in your .env.local
  // const transporter = nodemailer.createTransport({
  //   host: process.env.SMTP_HOST || "smtp-relay.brevo.com",
  //   port: Number(process.env.SMTP_PORT) || 587,
  //   secure: false, // true for 465, false for other ports
  //   auth: {
  //     user: process.env.SMTP_USER,
  //     pass: process.env.SMTP_PASS,
  //   },
  // });

  // const mailOptions = {
  //   from: `"Walnut Grove Contact" <${process.env.SMTP_USER}>`,
  //   to: process.env.CONTACT_FORM_RECEIVER, // The email address that should receive the notifications
  //   subject: `New Contact Form Submission: ${data.subject}`,
  //   text: `
  //     New contact form submission from ${data.firstName} ${data.lastName}.

  //     Email: ${data.email}
  //     Phone: ${data.phone}
  //     Subject: ${data.subject}

  //     Message:
  //     ${data.message}
  //   `,
  //   html: `
  //     <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6;">
  //       <h2 style="color: #83BF78;">New Contact Submission</h2>
  //       <p>You have received a new message from the Walnut Grove contact form.</p>
  //       <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; border: 1px solid #eee;">
  //         <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
  //         <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
  //         <p><strong>Phone:</strong> ${data.phone}</p>
  //         <p><strong>Subject:</strong> ${data.subject}</p>
  //       </div>
  //       <p><strong>Message:</strong></p>
  //       <div style="background: #fff; padding: 15px; border-radius: 8px; border: 1px solid #eee; font-style: italic;">
  //         ${data.message.replace(/\n/g, '<br />')}
  //       </div>
  //       <p style="font-size: 12px; color: #999; margin-top: 20px;">
  //         Submitted at: ${new Date().toLocaleString()}
  //       </p>
  //     </div>
  //   `,
  // };

  // try {
  //   await transporter.sendMail(mailOptions);
  // } catch (error) {
  //   console.error("Nodemailer error:", error);
  //   throw new Error("Failed to send email notification.");
  // }
}
