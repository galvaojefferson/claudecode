import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function Button({ className, type = "button", ...props }: ComponentProps<"button">) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-brand px-8 py-3 font-semibold text-brand-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      {...props}
    />
  );
}
