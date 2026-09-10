import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { amenities } from "@/lib/site";

const icons: Record<string, ReactNode> = {
  "Free Wi‑Fi": (
    <path d="M2 8.5C7 4 17 4 22 8.5M5.5 12C9 9 15 9 18.5 12M9 15.5C10.5 14 13.5 14 15 15.5M12 19h.01" />
  ),
  "Air Conditioning": (
    <path d="M12 2v20M4.5 6l15 12M19.5 6l-15 12M2 12h20" />
  ),
  "24/7 Front Desk": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  "Free Parking": (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9.5 16V8h3.2a2.6 2.6 0 0 1 0 5.2H9.5" />
    </>
  ),
  "Daily Housekeeping": (
    <path d="M12 3c2 3 5 6 5 10a5 5 0 0 1-10 0c0-4 3-7 5-10Z" />
  ),
  "On‑site Security": (
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
  ),
};

export default function Amenities() {
  return (
    <section className="bg-espresso py-24 text-paper md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <p className="mb-4 text-xs tracking-[0.3em] text-gold uppercase">Amenities</p>
            <h2 className="font-display text-4xl leading-[1.1] text-paper md:text-5xl">
              Everything you need, nothing you don&apos;t.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          {amenities.map((a, i) => (
            <Reveal key={a.label} delay={i * 60}>
              <div className="flex flex-col items-center gap-4 text-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-9 w-9 text-gold"
                  aria-hidden
                >
                  {icons[a.label]}
                </svg>
                <span className="text-sm tracking-wide text-paper/85">{a.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-16 text-center text-xs tracking-wide text-paper/50">
          Facilities shown are indicative for this concept demo and will be confirmed
          against the property before launch.
        </p>
      </div>
    </section>
  );
}
