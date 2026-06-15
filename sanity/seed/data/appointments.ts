import { p, pt, slug } from "../helpers";

export const appointmentTypes = [
  {
    _id: "appt-type-cpap-fitting",
    _type: "appointmentType",
    name: "CPAP Fitting",
    slug: slug("cpap-fitting"),
    durationMinutes: 30,
    shortDescription:
      "One-on-one mask fitting with a trained fitter. Try multiple mask styles, get dialed in before you take the machine home.",
    longDescription: pt(
      p(
        "90% of CPAP therapy failures are mask-fit failures. We give each fitting 30 minutes and try two to three mask styles until one actually seals for your face, your sleep position, and your breathing pattern."
      ),
      p(
        "Bring your current prescription (or the fax number of your prescriber). We'll set the machine up on our counter before you leave so you can start therapy that night."
      )
    ),
    requiresPrescription: true,
    whatToBring: [
      "Your current CPAP prescription (or your prescriber's fax number)",
      "Your insurance card, if you plan to use benefits",
      "Your current mask or machine, if you have one",
      "A rough sense of how you sleep — side / back / mouth-breather / beard",
    ],
    hipaaIntakeUrl: "",
    isActive: true,
    seo: {
      title: "CPAP fitting appointment in Lake Oswego",
      description:
        "30-minute in-person CPAP mask fitting. Bring your prescription, leave with therapy dialed in.",
    },
  },
];

/**
 * Generate 14 days of weekday slots (Mon–Sat) at 10a, 11a, 1p, 2p, 3p, 4p, 5p Pacific.
 * Skip Sunday. Build script runs at build-time so the dates are real.
 * The store is closed Sunday; Sat ends at 4p so we only emit 10a-4p on Saturdays.
 */
const HOURS_WEEKDAY = [10, 11, 13, 14, 15, 16, 17];
const HOURS_SATURDAY = [10, 11, 13, 14, 15];

function pacificDate(year: number, month: number, day: number, hour: number) {
  // Construct as if the wall-clock time is Pacific. US Pacific is UTC-8 / UTC-7 (DST).
  // For seeding, approximate: add 8 hours to get UTC. Close enough — Sanity stores datetime.
  // Staff can fine-tune slot times in Studio if DST edge cases matter.
  return new Date(Date.UTC(year, month - 1, day, hour + 8, 0, 0)).toISOString();
}

function generateSlots() {
  const slots: {
    _id: string;
    _type: string;
    appointmentType: { _ref: string; _type: "reference" };
    startAt: string;
    booked: boolean;
    isActive: boolean;
  }[] = [];
  const today = new Date();
  // Start tomorrow
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
  for (let i = 0; i < 14; i++) {
    const d = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
    const dow = d.getDay(); // 0 = Sun, 6 = Sat
    if (dow === 0) continue; // closed Sunday
    const hours = dow === 6 ? HOURS_SATURDAY : HOURS_WEEKDAY;
    for (const h of hours) {
      const iso = pacificDate(d.getFullYear(), d.getMonth() + 1, d.getDate(), h);
      const id = `slot-cpap-${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(h)}`;
      slots.push({
        _id: id,
        _type: "appointmentSlot",
        appointmentType: { _ref: "appt-type-cpap-fitting", _type: "reference" },
        startAt: iso,
        booked: false,
        isActive: true,
      });
    }
  }
  return slots;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export const appointmentSlots = generateSlots();
