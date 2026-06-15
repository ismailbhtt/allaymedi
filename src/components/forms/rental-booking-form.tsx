"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { z } from "zod";

import { Button } from "@/components/ui/button";

const schema = z.object({
  customerName: z.string().min(1, "Your name is required").max(120),
  email: z.string().email("Please enter a valid email").max(200),
  phone: z.string().min(7, "Phone is required").max(40),
  pickupDate: z.string().min(1, "Pickup date is required"),
  duration: z.enum(["daily", "weekly", "monthly"]),
  notes: z.string().max(2000).optional(),
});

type FormValues = z.infer<typeof schema>;

export function RentalBookingForm({
  equipmentId,
  equipmentName,
  equipmentSlug,
}: {
  equipmentId: string;
  equipmentName: string;
  equipmentSlug: string;
}) {
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { duration: "weekly" },
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitState("submitting");
    try {
      const res = await fetch("/api/rental-request", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...data,
          equipmentId,
          equipmentName,
          equipmentSlug,
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitState("success");
      reset();
    } catch {
      setSubmitState("error");
    }
  };

  if (submitState === "success") {
    return (
      <div className="rounded-[var(--radius-xl)] border border-[var(--color-sage-500)] bg-[var(--color-sage-50)] p-6">
        <CheckCircle2 className="size-6 text-[var(--color-sage-700)]" aria-hidden />
        <h3 className="mt-3 text-lg font-semibold">Reservation submitted</h3>
        <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
          We&apos;ll call you within a few hours to confirm availability and
          arrange pickup or delivery.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <Field label="Your name" error={errors.customerName?.message}>
        <input
          type="text"
          autoComplete="name"
          {...register("customerName")}
          className="h-11 w-full rounded-full border border-[var(--color-border)] px-4"
        />
      </Field>
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
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Pickup date" error={errors.pickupDate?.message}>
          <input
            type="date"
            {...register("pickupDate")}
            className="h-11 w-full rounded-full border border-[var(--color-border)] px-4"
          />
        </Field>
        <Field label="Duration" error={errors.duration?.message}>
          <select
            {...register("duration")}
            className="h-11 w-full rounded-full border border-[var(--color-border)] px-4"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </Field>
      </div>
      <Field label="Anything we should know?" error={errors.notes?.message}>
        <textarea
          rows={3}
          {...register("notes")}
          className="w-full rounded-2xl border border-[var(--color-border)] p-3"
          placeholder="e.g. delivery needed, specific weight capacity"
        />
      </Field>
      <p className="text-xs text-[var(--color-muted)]">
        Please don&apos;t include medical history, prescriptions, or insurance
        details here. We&apos;ll cover that by phone.
      </p>
      <Button type="submit" variant="accent" size="lg" disabled={submitState === "submitting"}>
        {submitState === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden /> Sending…
          </>
        ) : (
          "Reserve this equipment"
        )}
      </Button>
      {submitState === "error" ? (
        <p className="text-sm text-[var(--color-danger)]">
          Something went wrong. Please call {" "}
          <a href="tel:+19712338121" className="underline">(971) 233-8121</a> and we&apos;ll get you set up.
        </p>
      ) : null}
    </form>
  );
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
      {error ? <span className="text-xs text-[var(--color-danger)]">{error}</span> : null}
    </label>
  );
}
