import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function Input({ className, ...props }: ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "w-full rounded-lg border border-foreground/20 bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-foreground/40 focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/30 aria-invalid:border-red-600 disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      {...props}
    />
  );
}
