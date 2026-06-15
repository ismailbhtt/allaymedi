"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { AppointmentSlot } from "@/sanity/fetch";

const schema = z.object({
  slotId: z.string().min(1, "Pick a time first"),
  slotRev: z.string().min(1),
  customerName: z.string().min(1, "Your name is required").max(120),
  email: z.string().email("Valid email required").max(200),
  phone: z.string().min(7, "Phone required").max(40),
  role: z.enum(["patient", "caregiver"]),
  hasPrescription: z.enum(["yes", "bringing", "needs-help", "na"]),
  notes: z.string().max(2000).optional(),
  acknowledgeNoPhi: z.literal(true, { message: "Please acknowledge" }),
});

type Values = z.infer<typeof schema>;

export function BookingFlow({
  appointmentTypeId,
  appointmentTypeName,
  appointmentTypeSlug,
  requiresPrescription,
  slots,
}: {
  appointmentTypeId: string;
  appointmentTypeName: string;
  appointmentTypeSlug: string;
  requiresPrescription: boolean;
  slots: AppointmentSlot[];
}) {
  const [selected, setSelected] = useState<AppointmentSlot | null>(null);
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const grouped = useMemo(() => groupByDate(slots), [slots]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      role: "patient",
      hasPrescription: requiresPrescription ? "yes" : "na",
    },
  });

  function pickSlot(slot: AppointmentSlot) {
    setSelected(slot);
    setValue("slotId", slot._id, { shouldValidate: true });
    setValue("slotRev", slot._rev, { shouldValidate: true });
  }

  async function onSubmit(values: Values) {
    setSubmitState("submitting");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/appointment-book", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...values,
          appointmentTypeId,
          appointmentTypeName,
          appointmentTypeSlug,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Booking failed");
      }
      const data = (await res.json()) as { confirmationUrl: string };
      window.location.href = data.confirmationUrl;
    } catch (err) {
      setSubmitState("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (slots.length === 0) {
    return (
      <div className="rounded-[var(--radius-xl)] border border-dashed border-[var(--color-border-strong)] bg-[var(--color-surface-warm)] p-10 text-center">
        <p className="text-[var(--color-muted)]">
          No slots currently available. Please call us to book — we&apos;ll find a time.
        </p>
        <Button asChild variant="accent" className="mt-6">
          <a href="tel:+19712338121">Call (971) 233-8121</a>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
      <fieldset>
        <legend className="text-lg font-semibold text-[var(--color-ink)]">
          1. Pick a time
        </legend>
        <p className="mt-1 text-sm text-[var(--color-muted)]">
          All times are Pacific. Can&apos;t find something that works? Call us.
        </p>
        <div className="mt-6 space-y-6">
          {grouped.map((day) => (
            <div key={day.date}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-ink)]">
                {day.heading}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {day.slots.map((slot) => {
                  const isActive = selected?._id === slot._id;
                  return (
                    <li key={slot._id}>
                      <button
                        type="button"
                        onClick={() => pickSlot(slot)}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-[var(--color-navy-700)] text-white"
                            : "border border-[var(--color-border)] bg-white text-[var(--color-ink)] hover:bg-[var(--color-surface-warm)]"
                        }`}
                      >
                        {formatTime(slot.startAt)}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        {errors.slotId ? (
          <p className="mt-3 text-sm text-[var(--color-danger)]">
            {errors.slotId.message}
          </p>
        ) : null}
        <input type="hidden" {...register("slotId")} />
        <input type="hidden" {...register("slotRev")} />
      </fieldset>

      <fieldset className="grid gap-4">
        <legend className="text-lg font-semibold text-[var(--color-ink)]">
          2. Tell us who you are
        </legend>
        <Field label="Your name" error={errors.customerName?.message}>
          <input
            type="text"
            autoComplete="name"
            {...register("customerName")}
            className="h-11 w-full rounded-full border border-[var(--color-border)] px-4"
          />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Email" error={errors.email?.message}>
            <input
              type="email"
              autoComplete="email"
              {...register("email")}
              className="h-11 w-full rounded-full border border-[var(--color-border)] px-4"
            />
          </Field>
          <Field label="Phone" error={errors.phone?.message}>
            <input
              type="tel"
              autoComplete="tel"
              {...register("phone")}
              className="h-11 w-full rounded-full border border-[var(--color-border)] px-4"
            />
          </Field>
        </div>
        <fieldset>
          <legend className="text-sm font-medium">You are…</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {[
              { value: "patient", label: "The patient" },
              { value: "caregiver", label: "A caregiver booking for someone" },
            ].map((opt) => (
              <label key={opt.value} className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm has-[input:checked]:border-[var(--color-navy-700)] has-[input:checked]:bg-[var(--color-navy-50)]">
                <input
                  type="radio"
                  value={opt.value}
                  {...register("role")}
                  className="sr-only"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </fieldset>
      </fieldset>

      {requiresPrescription ? (
        <fieldset>
          <legend className="text-lg font-semibold text-[var(--color-ink)]">
            3. Prescription
          </legend>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            CPAP equipment requires a current prescription. Let us know where you are.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            {[
              { value: "yes", label: "Yes, I have a current prescription" },
              { value: "bringing", label: "I'll bring it to the appointment" },
              { value: "needs-help", label: "I need help getting one" },
            ].map((opt) => (
              <label key={opt.value} className="inline-flex cursor-pointer items-center gap-3 rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm has-[input:checked]:border-[var(--color-navy-700)] has-[input:checked]:bg-[var(--color-navy-50)]">
                <input
                  type="radio"
                  value={opt.value}
                  {...register("hasPrescription")}
                  className="sr-only"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </fieldset>
      ) : (
        <input type="hidden" value="na" {...register("hasPrescription")} />
      )}

      <Field
        label="Anything we should prep for? (optional)"
        error={errors.notes?.message}
      >
        <textarea
          rows={3}
          {...register("notes")}
          placeholder="e.g. 'I sleep on my side and have a beard' or 'I'll need help getting from parking to the store'"
          className="w-full rounded-2xl border border-[var(--color-border)] p-3"
        />
      </Field>

      <label className="flex items-start gap-3 rounded-xl bg-[var(--color-surface-warm)] p-4 text-sm">
        <input
          type="checkbox"
          {...register("acknowledgeNoPhi")}
          className="mt-0.5 size-5"
        />
        <span>
          I understand not to include medical history, prescription details, insurance
          numbers, or other protected health information in the notes field. If a secure
          intake form is linked from my confirmation email, I&apos;ll use that instead.
        </span>
      </label>
      {errors.acknowledgeNoPhi ? (
        <p className="-mt-6 text-sm text-[var(--color-danger)]">
          {errors.acknowledgeNoPhi.message as string}
        </p>
      ) : null}

      <Button
        type="submit"
        variant="accent"
        size="lg"
        disabled={submitState === "submitting"}
      >
        {submitState === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden /> Booking…
          </>
        ) : (
          <>
            <CheckCircle2 className="size-4" aria-hidden /> Book appointment
          </>
        )}
      </Button>
      {submitState === "error" ? (
        <p className="text-sm text-[var(--color-danger)]">
          {errorMessage ?? "Something went wrong."} Please call (971) 233-8121.
        </p>
      ) : null}
    </form>
  );
}

type Grouped = { date: string; heading: string; slots: AppointmentSlot[] };

function groupByDate(slots: AppointmentSlot[]): Grouped[] {
  const map = new Map<string, Grouped>();
  for (const slot of slots) {
    const date = new Date(slot.startAt);
    const dateKey = date.toLocaleDateString("en-CA", { timeZone: "America/Los_Angeles" });
    const heading = date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      timeZone: "America/Los_Angeles",
    });
    if (!map.has(dateKey)) {
      map.set(dateKey, { date: dateKey, heading, slots: [] });
    }
    map.get(dateKey)!.slots.push(slot);
  }
  return Array.from(map.values());
}

function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/Los_Angeles",
  });
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="font-medium text-[var(--color-ink)]">{label}</span>
      {children}
      {error ? (
        <span className="text-xs text-[var(--color-danger)]">{error}</span>
      ) : null}
    </label>
  );
}
