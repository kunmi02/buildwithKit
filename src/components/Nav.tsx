"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckoutLink } from "@/components/CheckoutLink";

const navLinks = [
  { href: "/#offer", label: "The Offer" },
  { href: "/#niches", label: "Niches" },
  { href: "/#how", label: "How it works" },
  { href: "/#faq", label: "FAQ" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#0a0e0e]/80 backdrop-blur-2xl">
      <div className="mx-auto flex min-w-0 max-w-7xl items-center justify-between gap-3 px-5 py-4">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-sm font-black text-[#0a0e0e] shadow-glow-emerald sm:h-10 sm:w-10">
            F
          </div>
          <div className="min-w-0">
            <p className="truncate font-black leading-none tracking-tight">Faceless Blueprint</p>
            <p className="hidden text-xs text-[#8a9494] sm:block">Faceless YouTube launch kit</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#b0b8b8] md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <CheckoutLink
            showPrice
            className="hidden shrink-0 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#0a0e0e] transition hover:bg-[#e8ecec] sm:inline-flex"
          >
            Get Access
          </CheckoutLink>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-[#c7cccc] transition hover:bg-white/5 md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/[0.08] bg-[#0a0e0e]/95 px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-3 text-sm font-medium text-[#c7cccc] transition hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <CheckoutLink
              showPrice
              className="mt-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-5 py-3 text-center text-sm font-bold text-[#0a0e0e]"
              onClick={() => setOpen(false)}
            >
              Get Access
            </CheckoutLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
