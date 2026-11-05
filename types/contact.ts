import { z } from "zod";

const PHONE_PATTERN = /^\(?\d{2}\)?\s?9?\d{4}-?\d{4}$/;

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome")
    .max(80, "O nome deve ter no máximo 80 caracteres"),
  email: z.email("Informe um e-mail válido"),
  phone: z
    .string()
    .trim()
    .regex(PHONE_PATTERN, "Informe um telefone válido, ex.: (11) 99999-0000"),
  message: z
    .string()
    .trim()
    .min(10, "A mensagem deve ter ao menos 10 caracteres")
    .max(500, "A mensagem deve ter no máximo 500 caracteres"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export type ContactFormResult = {
  success: boolean;
  message: string;
  errors?: Partial<Record<keyof ContactFormValues, string[]>>;
};
