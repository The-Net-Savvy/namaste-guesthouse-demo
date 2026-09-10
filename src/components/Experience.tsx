import Image from "next/image";
import Reveal from "@/components/Reveal";
import { images } from "@/lib/site";

const pillars = [
  {
    key: "comfort",
    title: "Comfort",
    copy: "Thoughtfully furnished rooms, designed for genuine rest.",
    image: images.experience.comfort,
  },
  {
    key: "hospitality",
    title: "Hospitality",
    copy: "Warm, attentive service that feels personal, not corporate.",
    image: images.experience.hospitality,
  },
  {
    key: "location",
    title: "Location",
    copy: "Ilupeju's quiet streets, close to the pulse of Lagos.",
    image: images.experience.location,
  },
  {
    key: "relaxation",
    title: "Relaxation",
    copy: "Calm spaces to slow down after a long day out.",
    image: images.experience.relaxation,
  },
];

export default function Experience() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <p className="mb-4 text-xs tracking-[0.3em] text-terracotta uppercase">The Experience</p>
            <h2 className="font-display text-4xl leading-[1.1] text-espresso md:text-5xl">
              What it feels like to stay.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.key} delay={i * 90}>
              <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                <Image
                  src={p.image}
                  alt={`${p.title} at Namaste Guest House — demo imagery`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-xl text-paper">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/85">{p.copy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
