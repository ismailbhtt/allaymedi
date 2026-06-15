"use client";

/**
 * Embedded Sanity Studio at /studio
 * Catch-all route handled client-side — Studio is a React SPA.
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-static";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
