"use server";

import { z } from "zod";

import {
  contactFormSchema,
  type ContactFormResult,
  type ContactFormValues,
} from "@/types/contact";

export async function sendContactMessage(
  input: ContactFormValues,
): Promise<ContactFormResult> {
  const validation = contactFormSchema.safeParse(input);

  if (!validation.success) {
    return {
      success: false,
      message: "Verifique os campos informados.",
      errors: z.flattenError(validation.error).fieldErrors,
    };
  }

  return {
    success: true,
    message: "Mensagem enviada! Entraremos em contato em breve.",
  };
}
