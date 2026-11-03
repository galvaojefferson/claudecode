type Testimonial = {
  name: string;
  pet: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Mariana S.",
    pet: "tutora da Luna",
    text: "A Luna volta sempre cheirosa e feliz do banho. Atendimento maravilhoso!",
  },
  {
    name: "Carlos E.",
    pet: "tutor do Thor",
    text: "Deixei o Thor no hotelzinho e recebi fotos o dia todo. Voltarei sempre.",
  },
  {
    name: "Ana P.",
    pet: "tutora do Mel",
    text: "Veterinários atenciosos e preço justo. Recomendo de olhos fechados.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight">
          Quem confia, recomenda
        </h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <li
              key={item.name}
              className="rounded-2xl border border-foreground/10 p-6"
            >
              <p aria-label="5 de 5 estrelas" className="text-brand">
                ★★★★★
              </p>
              <blockquote className="mt-3 leading-7 text-foreground/80">
                “{item.text}”
              </blockquote>
              <p className="mt-4 text-sm font-semibold">
                {item.name}{" "}
                <span className="font-normal text-foreground/60">
                  · {item.pet}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
