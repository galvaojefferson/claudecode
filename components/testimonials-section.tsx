import { TestimonialCard } from "@/components/testimonial-card";
import { testimonials } from "@/lib/testimonials";

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight">
          Quem confia, recomenda
        </h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </ul>
      </div>
    </section>
  );
}
