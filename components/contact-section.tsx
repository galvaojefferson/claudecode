import { ContactForm } from "@/components/contact-form";
import { ContactInfoCard } from "@/components/contact-info-card";
import { contactInfo, WHATSAPP_URL } from "@/lib/contact-info";

export function ContactSection() {
  return (
    <section id="contato" className="scroll-mt-16 bg-brand-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Agende uma visita
        </h2>
        <p className="mx-auto mt-2 max-w-md text-foreground/70">
          Fale com a gente e marque o melhor horário para o seu pet.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-3">
          {contactInfo.map((info) => (
            <ContactInfoCard key={info.label} info={info} />
          ))}
        </ul>
        <ContactForm />
        <a
          href={WHATSAPP_URL}
          className="mt-10 inline-block rounded-full bg-brand px-8 py-3 font-semibold text-brand-foreground transition-opacity hover:opacity-90"
        >
          Ou chame no WhatsApp
        </a>
      </div>
    </section>
  );
}
