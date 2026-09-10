import Image from "next/image";
import Reveal from "@/components/Reveal";
import { images } from "@/lib/site";

export default function Welcome() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src={images.welcome}
              alt="Warm guest room interior — demo imagery"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mb-4 text-xs tracking-[0.3em] text-terracotta uppercase">Welcome</p>
          <h2 className="font-display text-4xl leading-[1.1] text-espresso md:text-5xl">
            A quiet retreat in the heart of Ilupeju.
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-stone">
            Namaste Guest House was imagined as a place that feels less like a hotel and
            more like a home. Simple comforts, warm service, and a calm space to rest
            between your days in Lagos — whether you&apos;re here for business, a family
            visit, or a short getaway.
          </p>
          <p className="mt-4 max-w-lg leading-relaxed text-stone">
            Every detail, from the quiet of the rooms to the warmth of the welcome, is
            built around one idea: you should feel at home.
          </p>
          <a
            href="#rooms"
            className="mt-8 inline-flex items-center gap-2 border-b border-espresso pb-1 text-sm tracking-wide text-espresso transition-colors hover:border-terracotta hover:text-terracotta"
          >
            Discover Namaste
            <span aria-hidden>→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
