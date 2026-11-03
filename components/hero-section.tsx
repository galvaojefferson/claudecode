export function HeroSection() {
  return (
    <section className="bg-brand-soft">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="flex flex-col items-start gap-6">
          <span className="rounded-full bg-brand/15 px-3 py-1 text-sm font-medium text-brand">
            Cuidado com carinho desde 2012
          </span>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Seu melhor amigo merece o melhor cuidado
          </h1>
          <p className="max-w-md text-lg leading-8 text-foreground/70">
            Banho e tosa, consultas veterinárias, hotelzinho e tudo o que seu
            pet precisa em um só lugar.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contato"
              className="rounded-full bg-brand px-6 py-3 font-semibold text-brand-foreground transition-opacity hover:opacity-90"
            >
              Agendar horário
            </a>
            <a
              href="#servicos"
              className="rounded-full border border-foreground/20 px-6 py-3 font-semibold transition-colors hover:bg-foreground/5"
            >
              Ver serviços
            </a>
          </div>
        </div>
        <div
          aria-hidden
          className="flex aspect-square max-h-96 items-center justify-center justify-self-center rounded-[3rem] bg-brand/15 text-[8rem] md:text-[10rem]"
        >
          🐶🐱
        </div>
      </div>
    </section>
  );
}
