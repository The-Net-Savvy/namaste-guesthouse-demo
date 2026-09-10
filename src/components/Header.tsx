"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-line)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="#"
          className={`font-display text-lg tracking-wide transition-colors ${
            scrolled || open ? "text-espresso" : "text-paper"
          }`}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors hover:text-terracotta ${
                scrolled ? "text-charcoal" : "text-paper"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#enquiry"
            className="rounded-full border px-5 py-2 text-sm tracking-wide transition-colors"
            style={{
              borderColor: scrolled ? "var(--color-espresso)" : "var(--color-paper)",
              color: scrolled ? "var(--color-espresso)" : "var(--color-paper)",
            }}
          >
            Make an Enquiry
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`block h-px w-6 transition-transform duration-300 ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
            style={{ backgroundColor: open ? "var(--color-espresso)" : scrolled ? "var(--color-espresso)" : "var(--color-paper)" }}
          />
          <span
            className={`block h-px w-6 transition-transform duration-300 ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
            style={{ backgroundColor: open ? "var(--color-espresso)" : scrolled ? "var(--color-espresso)" : "var(--color-paper)" }}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-cream transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="font-display text-2xl text-espresso"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#enquiry"
          onClick={() => setOpen(false)}
          className="mt-4 rounded-full bg-terracotta px-7 py-3 text-sm tracking-wide text-paper"
        >
          Make an Enquiry
        </a>
      </div>
    </header>
  );
}
