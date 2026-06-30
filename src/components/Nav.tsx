"use client";

import Link from "next/link";
import { CheckoutLink } from "@/components/CheckoutLink";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1515]/85 backdrop-blur-xl">
      <div className="mx-auto flex min-w-0 max-w-7xl items-center justify-between gap-3 px-5 py-4">
        <Link href="/faceless-blueprint" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#77b255] text-sm font-black text-[#101515] sm:h-10 sm:w-10">F</div>
          <div className="min-w-0">
            <p className="truncate font-black leading-none">Faceless Blueprint</p>
            <p className="hidden text-xs text-[#9aa3a3] sm:block">One complete launch playbook</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-[#c7cccc] md:flex">
          <Link href="/faceless-blueprint#offer" className="hover:text-white">The Offer</Link>
          <Link href="/faceless-blueprint#niches" className="hover:text-white">Niches</Link>
          <Link href="/faceless-blueprint#how" className="hover:text-white">How it works</Link>
          <Link href="/faceless-blueprint#faq" className="hover:text-white">FAQ</Link>
        </nav>
        <CheckoutLink
          showPrice
          className="shrink-0 rounded-full bg-white px-3 py-2 text-xs font-bold text-[#101515] hover:bg-[#d8dde0] sm:px-5 sm:text-sm"
        >
          Get Access
        </CheckoutLink>
      </div>
    </header>
  );
}
