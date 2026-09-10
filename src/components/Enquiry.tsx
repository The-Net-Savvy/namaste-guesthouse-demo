"use client";

import { useState, type FormEvent } from "react";
import Reveal from "@/components/Reveal";

export default function Enquiry() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitted");
  }

  return (
    <section id="enquiry" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Reveal>
          <div className="text-center">
            <p className="mb-4 text-xs tracking-[0.3em] text-terracotta uppercase">Enquiry</p>
            <h2 className="font-display text-4xl leading-[1.1] text-espresso md:text-5xl">
              Enquire about your stay.
            </h2>
            <p className="mx-auto mt-5 max-w-md leading-relaxed text-stone">
              Tell us a little about your trip and we&apos;ll get back to you to confirm
              availability. This demo form does not send a live message.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          {status === "submitted" ? (
            <div className="mt-14 rounded-sm border border-line bg-paper px-8 py-14 text-center">
              <h3 className="font-display text-2xl text-espresso">Thank you.</h3>
              <p className="mt-3 leading-relaxed text-stone">
                This is a demo confirmation — on the live site, your enquiry would be sent
                straight to the Namaste Guest House team.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm tracking-wide text-espresso underline underline-offset-4 hover:text-terracotta"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-14 grid gap-6 sm:grid-cols-2">
              <Field label="Full name" id="name" name="name" required autoComplete="name" />
              <Field label="Phone" id="phone" name="phone" type="tel" required autoComplete="tel" />
              <Field
                label="Email"
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="sm:col-span-2"
              />
              <Field label="Arrival date" id="arrival" name="arrival" type="date" required />
              <Field label="Departure date" id="departure" name="departure" type="date" required />
              <Field label="Guests" id="guests" name="guests" type="number" min={1} defaultValue={1} />

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-xs tracking-wide text-stone uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Anything we should know about your stay?"
                  className="w-full resize-none border-b border-line bg-transparent py-2 text-espresso placeholder:text-stone-light focus:border-terracotta focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-terracotta px-7 py-4 text-sm tracking-wide text-paper transition-colors hover:bg-terracotta-dark sm:w-auto"
                >
                  Enquire About Your Stay
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  id: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  min?: number;
  defaultValue?: string | number;
  className?: string;
};

function Field({
  label,
  id,
  name,
  type = "text",
  required,
  autoComplete,
  min,
  defaultValue,
  className = "",
}: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-xs tracking-wide text-stone uppercase">
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        min={min}
        defaultValue={defaultValue}
        className="w-full border-b border-line bg-transparent py-2 text-espresso placeholder:text-stone-light focus:border-terracotta focus:outline-none"
      />
    </div>
  );
}
