import Image from "next/image";
import Reveal from "@/components/Reveal";
import { rooms } from "@/lib/site";

export default function Rooms() {
  return (
    <section id="rooms" className="bg-cream-alt py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <p className="mb-4 text-xs tracking-[0.3em] text-terracotta uppercase">Stay</p>
            <h2 className="font-display text-4xl leading-[1.1] text-espresso md:text-5xl">
              Rooms designed for rest.
            </h2>
            <p className="mt-5 leading-relaxed text-stone">
              Three concept categories, shown here to illustrate how each room type could
              be presented — simple, warm, and true to the Namaste feel.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {rooms.map((room, i) => (
            <Reveal key={room.slug} delay={i * 100}>
              <article className="group">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                  <Image
                    src={room.image}
                    alt={`${room.name} — demo room concept`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-paper/90 px-3 py-1 text-[11px] tracking-wide text-espresso uppercase">
                    Demo Concept
                  </span>
                </div>

                <h3 className="font-display mt-6 text-2xl text-espresso">{room.name}</h3>
                <p className="mt-3 leading-relaxed text-stone">{room.description}</p>

                <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                  {room.amenities.map((a) => (
                    <li key={a} className="text-xs tracking-wide text-stone-light uppercase">
                      {a}
                    </li>
                  ))}
                </ul>

                <a
                  href="#enquiry"
                  className="mt-6 inline-flex items-center gap-2 border-b border-espresso pb-1 text-sm tracking-wide text-espresso transition-colors hover:border-terracotta hover:text-terracotta"
                >
                  View Details
                  <span aria-hidden>→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
