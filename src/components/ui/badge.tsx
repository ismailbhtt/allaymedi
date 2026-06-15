import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
  {
    variants: {
      tone: {
        neutral: "bg-[var(--color-surface-cool)] text-[var(--color-ink)]",
        navy: "bg-[var(--color-navy-100)] text-[var(--color-navy-700)]",
        copper: "bg-[var(--color-copper-100)] text-[var(--color-copper-800)]",
        sage: "bg-[var(--color-sage-50)] text-[var(--color-sage-700)]",
        success: "bg-emerald-50 text-emerald-700",
      },
    },
    defaultVariants: { tone: "neutral" },
  }
);

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, tone, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ tone, className }))} {...props} />;
}
