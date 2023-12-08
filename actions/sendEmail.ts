"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
// import { FormDataSchema } from "@/lib/schema";


const resend = new Resend("re_QUfZ1VWD_8CMpPb8GEQXDJtGFa8GLdJQF");

// export const sendEmail = async (formData:FormData) => {

//   const result = FormDataSchema.safeParse(formData);
//   let data;

//   if (result.success) {
//     const { senderEmail, message } = result.data;



//   try {
//     data = await resend.emails.send({
//       from: "Contact Form <onboarding@resend.dev>",
//       to: "vijayaraj.anbalagan@gmail.com",
//       subject: "Message from contact form",
//       reply_to: senderEmail,
//       react: React.createElement(ContactFormEmail, {
//         message: message,
//         senderEmail: senderEmail,
//       }),
//     });
//   } catch (error: unknown) {
//     return {
//       error: getErrorMessage(error),
//     };
//   }

//   return {
//     data,
//   };
  
// }
// }



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


