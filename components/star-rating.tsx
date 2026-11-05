const MAX_STARS = 5;

type StarRatingProps = {
  rating: number;
};

export function StarRating({ rating }: StarRatingProps) {
  const filled = Math.min(Math.max(Math.round(rating), 0), MAX_STARS);

  return (
    <p aria-label={`${filled} de ${MAX_STARS} estrelas`} className="text-brand">
      <span aria-hidden>
        {"★".repeat(filled)}
        <span className="text-foreground/20">
          {"★".repeat(MAX_STARS - filled)}
        </span>
      </span>
    </p>
  );
}
