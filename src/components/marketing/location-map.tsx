import { MapPin, Phone } from "lucide-react";

import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function LocationMap() {
  return (
    <section className="container-page py-20">
      <div className="grid gap-10 rounded-[var(--radius-2xl)] bg-[var(--color-surface-warm)] p-8 md:grid-cols-2 md:p-12">
        <div>
          <h2 className="text-[var(--color-navy-900)]">Visit us in Lake Oswego</h2>
          <p className="mt-4 text-[var(--color-ink-soft)]">
            We&apos;re tucked on Boones Ferry Road with free parking and wheelchair
            accessible entry. Stop in — our team can help you size equipment,
            process an FSA/HSA purchase, or arrange a rental on the spot.
          </p>
          <address className="mt-6 not-italic text-[var(--color-ink)]">
            <div className="font-semibold">{SITE.address.street}</div>
            <div>
              {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
            </div>
          </address>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="primary">
              <a href={SITE.socials.google} target="_blank" rel="noopener">
                <MapPin className="size-4" aria-hidden /> Get directions
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={`tel:${SITE.phoneHref}`}>
                <Phone className="size-4" aria-hidden /> {SITE.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
          <iframe
            title={`Map to ${SITE.name}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}`
            )}&output=embed`}
            className="aspect-[4/3] h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
