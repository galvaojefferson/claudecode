type Stat = {
  value: string;
  label: string;
};

const stats: Stat[] = [
  { value: "12+", label: "anos de experiência" },
  { value: "8 mil", label: "pets atendidos" },
  { value: "4,9", label: "avaliação média" },
];

export function AboutSection() {
  return (
    <section id="sobre" className="scroll-mt-16 bg-brand-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Sobre nós</h2>
          <p className="mt-4 leading-7 text-foreground/70">
            O Patas Felizes nasceu da paixão por animais. Nossa equipe trata
            cada pet como parte da família, com atenção, paciência e muito
            carinho em cada atendimento.
          </p>
        </div>
        <dl className="grid grid-cols-3 gap-4 text-center">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-background p-4 shadow-sm"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-bold text-brand">{stat.value}</dd>
              <p aria-hidden className="mt-1 text-xs text-foreground/70">
                {stat.label}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
