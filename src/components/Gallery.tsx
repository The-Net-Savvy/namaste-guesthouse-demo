import Image from "next/image";
import Reveal from "@/components/Reveal";
import { images } from "@/lib/site";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-4 text-xs tracking-[0.3em] text-terracotta uppercase">Gallery</p>
              <h2 className="font-display text-4xl leading-[1.1] text-espresso md:text-5xl">
                A closer look.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-stone">
              Demo imagery used to illustrate the mood of the property — rooms, exterior,
              common areas, dining and surroundings.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {images.gallery.map((img, i) => (
            <Reveal
              key={img.src + i}
              delay={(i % 4) * 80}
              className={i % 5 === 0 ? "col-span-2 row-span-2" : ""}
            >
              <div
                className={`group relative w-full overflow-hidden rounded-sm ${
                  i % 5 === 0 ? "aspect-square" : "aspect-[3/4]"
                }`}
              >
                <Image
                  src={img.src}
                  alt={`${img.label} at Namaste Guest House — demo imagery`}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 text-xs tracking-wide text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {img.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
