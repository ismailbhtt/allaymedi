import {
  Accessibility,
  Moon,
  ShowerHead,
  Activity,
  Bandage,
  Droplets,
  HandHelping,
  ShieldCheck,
  Package,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

type Style = { Icon: LucideIcon; from: string; to: string; fg: string };

// Branded, category-aware stand-in shown until real product photography is
// uploaded in Sanity. Looks intentional (gradient + category icon) rather than
// an empty box — and is replaced automatically the moment a product gets an
// `images` value, with no code change.
const BY_CATEGORY: Record<string, Style> = {
  "mobility-aids": { Icon: Accessibility, from: "--color-navy-100", to: "--color-navy-200", fg: "--color-navy-600" },
  cpap: { Icon: Moon, from: "--color-navy-50", to: "--color-navy-200", fg: "--color-navy-700" },
  "bath-safety": { Icon: ShowerHead, from: "--color-sage-50", to: "--color-navy-50", fg: "--color-sage-700" },
  compression: { Icon: Activity, from: "--color-copper-50", to: "--color-copper-100", fg: "--color-copper-700" },
  "wound-care": { Icon: Bandage, from: "--color-copper-50", to: "--color-surface-warm", fg: "--color-copper-700" },
  incontinence: { Icon: Droplets, from: "--color-navy-50", to: "--color-surface-cool", fg: "--color-navy-600" },
  "daily-living": { Icon: HandHelping, from: "--color-copper-50", to: "--color-navy-50", fg: "--color-copper-700" },
  ppe: { Icon: ShieldCheck, from: "--color-sage-50", to: "--color-surface-cool", fg: "--color-sage-700" },
};

const FALLBACK: Style = {
  Icon: Package,
  from: "--color-surface-cool",
  to: "--color-surface-warm",
  fg: "--color-navy-600",
};

export function ProductPlaceholder({
  categorySlug,
  className,
}: {
  categorySlug?: string;
  className?: string;
}) {
  const { Icon, from, to, fg } = (categorySlug && BY_CATEGORY[categorySlug]) || FALLBACK;
  return (
    <div
      className={cn("flex items-center justify-center", className)}
      style={{ background: `linear-gradient(135deg, var(${from}), var(${to}))` }}
      aria-hidden
    >
      <Icon
        strokeWidth={1.25}
        style={{ width: "clamp(40px, 30%, 104px)", height: "auto", color: `var(${fg})`, opacity: 0.85 }}
      />
    </div>
  );
}
