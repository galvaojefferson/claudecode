type Service = {
  icon: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: "🛁",
    title: "Banho e tosa",
    description: "Higiene completa com produtos suaves e profissionais atenciosos.",
  },
  {
    icon: "🩺",
    title: "Veterinário",
    description: "Consultas, vacinas e exames para manter seu pet saudável.",
  },
  {
    icon: "🏨",
    title: "Hotelzinho",
    description: "Hospedagem segura e divertida enquanto você viaja.",
  },
  {
    icon: "🦴",
    title: "Loja de produtos",
    description: "Rações, petiscos, brinquedos e acessórios das melhores marcas.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight">Nossos serviços</h2>
        <p className="mt-2 max-w-xl text-foreground/70">
          Tudo o que seu pet precisa, com quem entende e ama animais.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <li
              key={service.title}
              className="rounded-2xl border border-foreground/10 p-6 transition-shadow hover:shadow-lg"
            >
              <span aria-hidden className="text-4xl">
                {service.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-foreground/70">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
