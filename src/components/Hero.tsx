import Image from "next/image";
import { images, site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden">
      <Image
        src={images.hero}
        alt="Warm, softly lit guest room — demo imagery for Namaste Guest House"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/25 to-espresso/10" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 md:px-10 md:pb-28">
        <p className="animate-fade-in mb-4 text-xs tracking-[0.3em] text-cream/80 uppercase">
          {site.location}
        </p>
        <h1 className="font-display max-w-2xl text-5xl leading-[1.05] text-paper md:text-7xl">
          {site.tagline}
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-paper/85 md:text-lg">
          {site.supportingCopy}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#rooms"
            className="rounded-full bg-terracotta px-7 py-3.5 text-sm tracking-wide text-paper transition-colors hover:bg-terracotta-dark"
          >
            Explore Your Stay
          </a>
          <a
            href="#enquiry"
            className="rounded-full border border-paper/70 px-7 py-3.5 text-sm tracking-wide text-paper transition-colors hover:border-paper hover:bg-paper/10"
          >
            Make an Enquiry
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="h-10 w-px animate-pulse bg-paper/50" />
      </div>
    </section>
  );
}
