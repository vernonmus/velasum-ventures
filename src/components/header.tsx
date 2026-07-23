"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#holdings", label: "Holdings" },
  { href: "/#leadership", label: "Leadership" },
  { href: "/#register", label: "Company" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight sm:text-xl">
          {site.shortName}
          <span className="hidden font-sans text-sm font-normal text-ink-200 sm:inline"> Limited</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-ink-200 transition hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="rounded-md bg-gold-500 px-4 py-2 font-semibold text-ink-950 transition hover:bg-gold-400"
          >
            Get in Touch
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-4 py-4 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-sm text-ink-200"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="mt-2 block rounded-md bg-gold-500 px-4 py-2 text-center text-sm font-semibold text-ink-950"
            onClick={() => setOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}
