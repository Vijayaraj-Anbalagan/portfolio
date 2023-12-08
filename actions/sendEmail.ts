"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import { renderAsync } from "@react-email/render";


const resend = new Resend("re_QUfZ1VWD_8CMpPb8GEQXDJtGFa8GLdJQF");

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;

  const html = await renderAsync(
    QuotationFormEmail({
      senderEmail,
      message,
    }) as React.ReactElement,
  );

  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "vijayaraj.anbalagan@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
function QuotationFormEmail(arg0: { senderEmail: string; message: string; }): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
  throw new Error("Function not implemented.");
}

