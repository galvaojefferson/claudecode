"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { sendContactMessage } from "@/actions/send-contact-message";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  contactFormSchema,
  type ContactFormResult,
  type ContactFormValues,
} from "@/types/contact";

const DEFAULT_VALUES: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<ContactFormResult | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: DEFAULT_VALUES,
  });

  function handleValidSubmit(values: ContactFormValues) {
    startTransition(async () => {
      const response = await sendContactMessage(values);
      setResult(response);

      if (response.success) {
        reset(DEFAULT_VALUES);
        return;
      }

      for (const [field, messages] of Object.entries(response.errors ?? {})) {
        setError(field as keyof ContactFormValues, { message: messages?.[0] });
      }
    });
  }

  return (
    <form
      onSubmit={handleSubmit(handleValidSubmit)}
      noValidate
      className="mx-auto mt-10 grid max-w-xl gap-5 rounded-2xl bg-background p-6 shadow-sm"
    >
      <FormField id="name" label="Nome" error={errors.name?.message}>
        <Input
          id="name"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
        />
      </FormField>
      <FormField id="email" label="E-mail" error={errors.email?.message}>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
        />
      </FormField>
      <FormField id="phone" label="Telefone" error={errors.phone?.message}>
        <Input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(11) 99999-0000"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          {...register("phone")}
        />
      </FormField>
      <FormField id="message" label="Mensagem" error={errors.message?.message}>
        <Textarea
          id="message"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
      </FormField>
      <Button type="submit" disabled={isPending}>
        {isPending ? "Enviando..." : "Enviar mensagem"}
      </Button>
      {result ? (
        <p
          role="status"
          className={result.success ? "text-sm text-green-700" : "text-sm text-red-600"}
        >
          {result.message}
        </p>
      ) : null}
    </form>
  );
}
