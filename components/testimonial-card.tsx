import { StarRating } from "@/components/star-rating";
import type { Testimonial } from "@/types/testimonial";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, pet, text, rating } = testimonial;

  return (
    <li className="rounded-2xl border border-foreground/10 p-6">
      <StarRating rating={rating} />
      <blockquote className="mt-3 leading-7 text-foreground/80">
        “{text}”
      </blockquote>
      <p className="mt-4 text-sm font-semibold">
        {name}{" "}
        <span className="font-normal text-foreground/60">· {pet}</span>
      </p>
    </li>
  );
}
