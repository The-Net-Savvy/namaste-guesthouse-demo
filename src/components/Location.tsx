import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export default function Location() {
  return (
    <section id="location" className="bg-cream-alt py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="mb-4 text-xs tracking-[0.3em] text-terracotta uppercase">Location</p>
            <h2 className="font-display text-4xl leading-[1.1] text-espresso md:text-5xl">
              {site.name}
            </h2>
            <p className="mt-2 text-lg text-stone">{site.fullLocation}</p>
            <p className="mt-6 max-w-md leading-relaxed text-stone">
              Set on the quiet streets of Ilupeju, close to Lagos&apos;s business districts
              and major routes across the mainland — an easy, calm base for exploring the
              city. Full address details are shared with guests upon booking confirmation.
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-espresso px-7 py-3.5 text-sm tracking-wide text-paper transition-colors hover:bg-terracotta-dark"
            >
              Get Directions
              <span aria-hidden>→</span>
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-sm border border-line bg-[repeating-linear-gradient(45deg,var(--color-line)_0,var(--color-line)_1px,transparent_1px,transparent_14px)]">
              <div className="flex flex-col items-center gap-3 text-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  className="h-10 w-10 text-stone"
                  aria-hidden
                >
                  <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <p className="text-sm tracking-wide text-stone">Map Placeholder</p>
                <p className="max-w-[220px] text-xs text-stone-light">
                  An interactive map will sit here on the live site.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
