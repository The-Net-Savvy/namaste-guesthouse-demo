import { navLinks, site, socialLinks } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-espresso pt-20 pb-10 text-paper">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-12 sm:grid-cols-3">
          <div>
            <p className="font-display text-2xl">{site.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-paper/70">{site.streetAddress}</p>
            <a
              href={`tel:+${site.whatsappNumber}`}
              className="mt-6 block text-sm text-paper/70 transition-colors hover:text-paper"
            >
              {site.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="block text-sm text-paper/70 transition-colors hover:text-paper"
            >
              {site.email}
            </a>
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] text-gold uppercase">Navigate</p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-paper/80 transition-colors hover:text-paper">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] text-gold uppercase">Follow</p>
            <ul className="mt-4 space-y-3">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-sm text-paper/80 transition-colors hover:text-paper">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-paper/15 pt-8 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Concept demo — not a live booking
            site.
          </p>
          <p>Photography shown is illustrative stock imagery, not of the actual property.</p>
        </div>
      </div>
    </footer>
  );
}
