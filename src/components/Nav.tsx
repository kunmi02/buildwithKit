import Link from "next/link";
import { CHECKOUT_URL } from "@/lib/constants";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1515]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/faceless-blueprint" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#77b255] font-black text-[#101515]">F</div>
          <div>
            <p className="font-black leading-none">Faceless Blueprint</p>
            <p className="text-xs text-[#9aa3a3]">Cloneable channel kits</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-[#c7cccc] md:flex">
          <a href="#inside" className="hover:text-white">Inside</a>
          <a href="#niches" className="hover:text-white">Niches</a>
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>
        <a href={CHECKOUT_URL} className="rounded-full bg-white px-5 py-2 text-sm font-bold text-[#101515] hover:bg-[#d8dde0]">
          Get the Kit
        </a>
      </div>
    </header>
  );
}
