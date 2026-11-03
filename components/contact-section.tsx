type ContactItem = {
  icon: string;
  label: string;
  value: string;
};

const contacts: ContactItem[] = [
  { icon: "📍", label: "Endereço", value: "Rua das Palmeiras, 123 · Centro" },
  { icon: "🕗", label: "Horários", value: "Seg a Sáb, das 8h às 19h" },
  { icon: "📞", label: "Telefone", value: "(11) 99999-0000" },
];

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
          {contacts.map((item) => (
            <li key={item.label} className="rounded-2xl bg-background p-6 shadow-sm">
              <span aria-hidden className="text-3xl">
                {item.icon}
              </span>
              <p className="mt-3 text-sm text-foreground/60">{item.label}</p>
              <p className="mt-1 font-semibold">{item.value}</p>
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/5511999990000"
          className="mt-10 inline-block rounded-full bg-brand px-8 py-3 font-semibold text-brand-foreground transition-opacity hover:opacity-90"
        >
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  );
}
