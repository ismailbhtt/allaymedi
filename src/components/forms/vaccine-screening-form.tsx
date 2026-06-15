"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Lock, Phone } from "lucide-react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

// Submissions go ONLY to a BAA-covered intake endpoint configured via env.
// This is intentionally NOT a Next.js /api route — PHI must never transit our
// own server, Resend, or Sanity. Until the endpoint is set, the form collects
// input but submission is disabled (patients are directed to call / come in).
const INTAKE_ENDPOINT = process.env.NEXT_PUBLIC_HIPAA_INTAKE_ENDPOINT;

const triState = z.enum(["yes", "no", "dont-know"]).optional();

const schema = z.object({
  // Patient information
  firstName: z.string().min(1, "First name is required").max(80),
  middleInitial: z.string().max(2).optional(),
  lastName: z.string().min(1, "Last name is required").max(80),
  dob: z.string().min(1, "Date of birth is required"),
  phone: z.string().min(7, "Phone is required").max(40),
  email: z.string().email("Valid email required").max(200),
  address: z.string().max(200).optional(),
  city: z.string().max(80).optional(),
  state: z.string().max(40).optional(),
  zip: z.string().max(12).optional(),
  // Insurance
  insuranceId: z.string().max(60).optional(),
  bin: z.string().max(40).optional(),
  pcn: z.string().max(40).optional(),
  groupNo: z.string().max(40).optional(),
  gender: z.enum(["female", "male"]).optional(),
  vaccinesRequested: z.string().min(1, "Please tell us which vaccine(s)").max(300),
  ethnicity: z.enum(["hispanic", "not-hispanic", "unknown"]).optional(),
  race: z
    .enum([
      "american-indian-alaska-native",
      "asian",
      "native-hawaiian-pacific-islander",
      "black-african-american",
      "white",
      "unknown",
    ])
    .optional(),
  medicalConditions: z.string().max(500).optional(),
  weightUnder110: z.string().max(20).optional(),
  // Primary care
  pcpName: z.string().max(120).optional(),
  pcpPhone: z.string().max(40).optional(),
  pcpAddress: z.string().max(200).optional(),
  authorizeSendToPcp: z.enum(["yes", "no"]).optional(),
  // Screening
  sickToday: triState,
  chronicHealthProblem: triState,
  lungDiseaseOrSmoke: triState,
  allergies: triState,
  vaccinatedPast4Weeks: triState,
  seriousReaction: triState,
  neurologicalDisorder: triState,
  immuneProblem: triState,
  immunosuppressiveMeds: triState,
  bloodTransfusionPastYear: triState,
  caregiverToNewborn: triState,
  pregnantOrPlanning: triState,
  receivedPneumococcal: triState,
  receivedShingles: triState,
  receivedTdap: triState,
  // Consent
  authorizeRelease: z.literal(true, { message: "Authorization is required to proceed" }),
  acknowledgeTerms: z.literal(true, { message: "Please acknowledge these terms" }),
  consentToVaccinate: z.literal(true, { message: "Consent is required to proceed" }),
  signatureName: z.string().min(1, "Please type your full legal name to sign").max(120),
  guardianName: z.string().max(120).optional(),
});

type FormValues = z.infer<typeof schema>;

const screeningQuestions: { name: keyof FormValues; label: string }[] = [
  { name: "sickToday", label: "Are you sick today?" },
  {
    name: "chronicHealthProblem",
    label:
      "Do you have a chronic health problem (e.g. heart disease, kidney disease, diabetes, anemia or other blood disorders)?",
  },
  {
    name: "lungDiseaseOrSmoke",
    label: "Do you have a long-term lung disease (e.g. asthma or COPD)? Do you smoke?",
  },
  {
    name: "allergies",
    label:
      "Do you have allergies to medications, food (e.g. eggs), latex, or any vaccine component (e.g. neomycin, formaldehyde, gentamicin, thimerosal, bovine protein, phenol, polymyxin, gelatin, yeast)?",
  },
  { name: "vaccinatedPast4Weeks", label: "Have you received any vaccinations in the past 4 weeks?" },
  { name: "seriousReaction", label: "Have you ever had a serious reaction after receiving a vaccination?" },
  {
    name: "neurologicalDisorder",
    label:
      "Do you have a neurological disorder such as seizures or other disorders that affect the brain, or a disorder that resulted from a vaccine (e.g. Guillain-Barré Syndrome)?",
  },
  { name: "immuneProblem", label: "Do you have cancer, leukemia, AIDS, or any other immune system problem?" },
  {
    name: "immunosuppressiveMeds",
    label:
      "Do you take prednisone, other steroids, or anticancer drugs, or have you had radiation treatment?",
  },
  {
    name: "bloodTransfusionPastYear",
    label:
      "During the past year, have you received a transfusion of blood or blood products including antibodies?",
  },
  { name: "caregiverToNewborn", label: "Are you a parent, family member, or caregiver to a newborn infant?" },
  {
    name: "pregnantOrPlanning",
    label: "For women: Are you pregnant, or planning to get pregnant in the next 3 months?",
  },
  { name: "receivedPneumococcal", label: "Have you received the Pneumococcal vaccine?" },
  { name: "receivedShingles", label: "Have you received the Shingles vaccine?" },
  { name: "receivedTdap", label: "Have you received the Whooping Cough (Tdap) vaccine?" },
];

export function VaccineScreeningForm() {
  const [submitState, setSubmitState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const configured = Boolean(INTAKE_ENDPOINT);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    if (!configured) return;
    setSubmitState("submitting");
    try {
      const res = await fetch(INTAKE_ENDPOINT as string, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...data,
          source: "allay-web-vaccine-screening",
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  };

  if (submitState === "success") {
    return (
      <div className="rounded-[var(--radius-xl)] border border-[var(--color-sage-500)] bg-[var(--color-sage-50)] p-8">
        <CheckCircle2 className="size-7 text-[var(--color-sage-700)]" aria-hidden />
        <h2 className="mt-3 text-xl font-semibold">Screening form received</h2>
        <p className="mt-2 text-[var(--color-ink-soft)]">
          Thank you. Our pharmacist will review your screening before your visit. If
          anything needs follow-up, we&rsquo;ll call you. Please plan to remain in the store
          for 20 minutes after your vaccination so we can monitor for any reaction.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10" noValidate>
      {/* Secure-submission status banner */}
      {configured ? (
        <p className="flex items-center gap-2 rounded-full bg-[var(--color-sage-50)] px-4 py-2 text-sm text-[var(--color-sage-700)]">
          <Lock className="size-4" aria-hidden />
          Submitted securely to our HIPAA-compliant intake system.
        </p>
      ) : (
        <div className="rounded-[var(--radius-xl)] border border-[var(--color-warning)] bg-[var(--color-surface-warm)] p-5 text-sm">
          <p className="font-semibold text-[var(--color-ink)]">
            Online submission isn&rsquo;t enabled yet.
          </p>
          <p className="mt-1 text-[var(--color-ink-soft)]">
            To protect your health information, this form won&rsquo;t send until our secure
            intake system is connected. For now, please call{" "}
            <a href={`tel:${SITE.phoneHref}`} className="underline">
              {SITE.phoneDisplay}
            </a>{" "}
            or complete this screening when you arrive in store.
          </p>
        </div>
      )}

      {/* Patient information */}
      <fieldset className="grid gap-4">
        <legend className="text-lg font-semibold text-[var(--color-ink)]">
          1. Patient information
        </legend>
        <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr]">
          <Field label="First name" error={errors.firstName?.message}>
            <input type="text" autoComplete="given-name" {...register("firstName")} className={inputCls} />
          </Field>
          <Field label="M.I." error={errors.middleInitial?.message}>
            <input type="text" maxLength={2} {...register("middleInitial")} className={`${inputCls} w-16`} />
          </Field>
          <Field label="Last name" error={errors.lastName?.message}>
            <input type="text" autoComplete="family-name" {...register("lastName")} className={inputCls} />
          </Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <Field label="Date of birth" error={errors.dob?.message}>
            <input type="date" autoComplete="bday" {...register("dob")} className={inputCls} />
          </Field>
          <Field label="Phone" error={errors.phone?.message}>
            <input type="tel" autoComplete="tel" {...register("phone")} className={inputCls} />
          </Field>
          <Field label="Email" error={errors.email?.message}>
            <input type="email" autoComplete="email" {...register("email")} className={inputCls} />
          </Field>
        </div>
        <Field label="Street address" error={errors.address?.message}>
          <input type="text" autoComplete="street-address" {...register("address")} className={inputCls} />
        </Field>
        <div className="grid gap-4 sm:grid-cols-3">
          <Field label="City" error={errors.city?.message}>
            <input type="text" autoComplete="address-level2" {...register("city")} className={inputCls} />
          </Field>
          <Field label="State" error={errors.state?.message}>
            <input type="text" autoComplete="address-level1" {...register("state")} className={inputCls} />
          </Field>
          <Field label="ZIP" error={errors.zip?.message}>
            <input type="text" autoComplete="postal-code" {...register("zip")} className={inputCls} />
          </Field>
        </div>
        <fieldset>
          <legend className="text-sm font-medium text-[var(--color-ink)]">Gender</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            <RadioPill name="gender" value="female" label="Female" register={register} />
            <RadioPill name="gender" value="male" label="Male" register={register} />
          </div>
        </fieldset>
      </fieldset>

      {/* Insurance */}
      <fieldset className="grid gap-4">
        <legend className="text-lg font-semibold text-[var(--color-ink)]">2. Insurance</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Insurance ID" error={errors.insuranceId?.message}>
            <input type="text" {...register("insuranceId")} className={inputCls} />
          </Field>
          <Field label="BIN" error={errors.bin?.message}>
            <input type="text" {...register("bin")} className={inputCls} />
          </Field>
          <Field label="PCN" error={errors.pcn?.message}>
            <input type="text" {...register("pcn")} className={inputCls} />
          </Field>
          <Field label="Group No." error={errors.groupNo?.message}>
            <input type="text" {...register("groupNo")} className={inputCls} />
          </Field>
        </div>
      </fieldset>

      {/* Vaccine + demographics */}
      <fieldset className="grid gap-4">
        <legend className="text-lg font-semibold text-[var(--color-ink)]">
          3. Vaccine &amp; demographics
        </legend>
        <Field
          label="Which vaccine(s) would you like to receive today?"
          error={errors.vaccinesRequested?.message}
        >
          <textarea rows={2} {...register("vaccinesRequested")} className={textareaCls} />
        </Field>
        <fieldset>
          <legend className="text-sm font-medium text-[var(--color-ink)]">Ethnicity</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            <RadioPill name="ethnicity" value="hispanic" label="Hispanic or Latino" register={register} />
            <RadioPill name="ethnicity" value="not-hispanic" label="Not Hispanic or Latino" register={register} />
            <RadioPill name="ethnicity" value="unknown" label="Unknown" register={register} />
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-sm font-medium text-[var(--color-ink)]">Race</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            <RadioPill name="race" value="american-indian-alaska-native" label="American Indian / Alaska Native" register={register} />
            <RadioPill name="race" value="asian" label="Asian" register={register} />
            <RadioPill name="race" value="native-hawaiian-pacific-islander" label="Native Hawaiian / Pacific Islander" register={register} />
            <RadioPill name="race" value="black-african-american" label="Black or African American" register={register} />
            <RadioPill name="race" value="white" label="White" register={register} />
            <RadioPill name="race" value="unknown" label="Unknown" register={register} />
          </div>
        </fieldset>
        <div className="grid gap-4 sm:grid-cols-[2fr_1fr]">
          <Field label="Medical conditions" error={errors.medicalConditions?.message}>
            <input type="text" {...register("medicalConditions")} className={inputCls} />
          </Field>
          <Field label="Weight (if less than 110 lbs)" error={errors.weightUnder110?.message}>
            <input type="text" {...register("weightUnder110")} className={inputCls} />
          </Field>
        </div>
      </fieldset>

      {/* Primary care */}
      <fieldset className="grid gap-4">
        <legend className="text-lg font-semibold text-[var(--color-ink)]">
          4. Primary care physician
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Primary care physician (PCP)" error={errors.pcpName?.message}>
            <input type="text" {...register("pcpName")} className={inputCls} />
          </Field>
          <Field label="Doctor phone number" error={errors.pcpPhone?.message}>
            <input type="tel" {...register("pcpPhone")} className={inputCls} />
          </Field>
        </div>
        <Field label="PCP address" error={errors.pcpAddress?.message}>
          <input type="text" {...register("pcpAddress")} className={inputCls} />
        </Field>
        <fieldset>
          <legend className="text-sm font-medium text-[var(--color-ink)]">
            I authorize the pharmacist to send copies of my vaccine documents to my primary
            care provider.
          </legend>
          <div className="mt-2 flex flex-wrap gap-2">
            <RadioPill name="authorizeSendToPcp" value="yes" label="Yes" register={register} />
            <RadioPill name="authorizeSendToPcp" value="no" label="No" register={register} />
          </div>
          <p className="mt-2 text-xs text-[var(--color-muted)]">
            If neither box is selected, vaccine documents will be sent to your provider, if
            known, as state laws and regulations require.
          </p>
        </fieldset>
      </fieldset>

      {/* Screening questionnaire */}
      <fieldset>
        <legend className="text-lg font-semibold text-[var(--color-ink)]">
          5. Screening questionnaire
        </legend>
        <p className="mt-1 text-sm text-[var(--color-muted)]">
          These questions help us determine which vaccines may be given today. If a question
          isn&rsquo;t clear, ask your pharmacist to explain.
        </p>
        <div className="mt-5 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
          <div className="hidden bg-[var(--color-surface-warm)] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)] sm:grid sm:grid-cols-[1fr_repeat(3,4.5rem)]">
            <span>Question</span>
            <span className="text-center">Yes</span>
            <span className="text-center">No</span>
            <span className="text-center">Don&rsquo;t know</span>
          </div>
          <ul className="divide-y divide-[var(--color-border)]">
            {screeningQuestions.map((q) => (
              <li
                key={q.name}
                className="grid gap-3 px-5 py-4 sm:grid-cols-[1fr_repeat(3,4.5rem)] sm:items-center sm:gap-0"
              >
                <span className="text-sm text-[var(--color-ink-soft)]">{q.label}</span>
                {(["yes", "no", "dont-know"] as const).map((value) => (
                  <label
                    key={value}
                    className="inline-flex items-center gap-2 text-sm sm:justify-center"
                  >
                    <input
                      type="radio"
                      value={value}
                      {...register(q.name)}
                      className="size-4"
                    />
                    <span className="sm:hidden">
                      {value === "dont-know" ? "Don't know" : value === "yes" ? "Yes" : "No"}
                    </span>
                  </label>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </fieldset>

      {/* Consent */}
      <fieldset className="grid gap-4">
        <legend className="text-lg font-semibold text-[var(--color-ink)]">
          6. Authorization &amp; consent
        </legend>
        <ConsentCheckbox
          register={register}
          name="authorizeRelease"
          error={errors.authorizeRelease?.message as string | undefined}
        >
          I authorize the release of any medical or other information with respect to this
          vaccine to my healthcare providers, Medicare, Medicaid, or other third-party payors
          as needed, and request payment of authorized benefits be made on my behalf to{" "}
          {SITE.legalName}.
        </ConsentCheckbox>
        <ConsentCheckbox
          register={register}
          name="acknowledgeTerms"
          error={errors.acknowledgeTerms?.message as string | undefined}
        >
          I acknowledge that: if my insurance does not cover the cost of administering the
          vaccine, payment is due at the time of administration; my vaccination record may be
          shared with federal, state, or city agencies for registry reporting; the pharmacist
          recommends I remain in the waiting area for 20 minutes after administration for
          monitoring; I have received {SITE.legalName}&rsquo;s Notice of Privacy Practices;
          and that a vaccination does not substitute for an annual check-up with my primary
          care physician.
        </ConsentCheckbox>
        <ConsentCheckbox
          register={register}
          name="consentToVaccinate"
          error={errors.consentToVaccinate?.message as string | undefined}
        >
          I have read, or had read to me, the Vaccine Information Statement(s) (VIS), had my
          questions answered, and understand the benefits and risks. I consent to the
          administration of the vaccine(s) and release and discharge {SITE.legalName} and its
          employees from liability for any illness, injury, loss, or damage that may result.
        </ConsentCheckbox>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Type your full legal name to sign"
            error={errors.signatureName?.message}
          >
            <input type="text" {...register("signatureName")} className={inputCls} />
          </Field>
          <Field label="If signing as legal guardian, print name" error={errors.guardianName?.message}>
            <input type="text" {...register("guardianName")} className={inputCls} />
          </Field>
        </div>
      </fieldset>

      <div className="flex flex-col gap-3">
        <Button
          type="submit"
          variant="accent"
          size="lg"
          disabled={!configured || submitState === "submitting"}
        >
          {submitState === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden /> Submitting securely…
            </>
          ) : (
            "Submit screening form"
          )}
        </Button>
        {!configured ? (
          <Button asChild variant="outline" size="lg">
            <a href={`tel:${SITE.phoneHref}`}>
              <Phone className="size-4" aria-hidden /> Call {SITE.phoneDisplay}
            </a>
          </Button>
        ) : null}
        {submitState === "error" ? (
          <p className="text-sm text-[var(--color-danger)]">
            Something went wrong submitting your form. Please call{" "}
            <a href={`tel:${SITE.phoneHref}`} className="underline">
              {SITE.phoneDisplay}
            </a>
            .
          </p>
        ) : null}
      </div>
    </form>
  );
}

const inputCls = "h-11 w-full rounded-full border border-[var(--color-border)] px-4";
const textareaCls = "w-full rounded-2xl border border-[var(--color-border)] p-3";

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

/* eslint-disable @typescript-eslint/no-explicit-any */
function RadioPill({
  name,
  value,
  label,
  register,
}: {
  name: string;
  value: string;
  label: string;
  register: any;
}) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm has-[input:checked]:border-[var(--color-navy-700)] has-[input:checked]:bg-[var(--color-navy-50)]">
      <input type="radio" value={value} {...register(name)} className="sr-only" />
      {label}
    </label>
  );
}

function ConsentCheckbox({
  name,
  register,
  error,
  children,
}: {
  name: string;
  register: any;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="flex items-start gap-3 rounded-xl bg-[var(--color-surface-warm)] p-4 text-sm">
        <input type="checkbox" {...register(name)} className="mt-0.5 size-5 shrink-0" />
        <span className="text-[var(--color-ink-soft)]">{children}</span>
      </label>
      {error ? <p className="mt-1 text-xs text-[var(--color-danger)]">{error}</p> : null}
    </div>
  );
}
