import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b1010] px-5 py-10 text-sm text-[#9aa3a3]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-bold text-white">© 2026 Faceless Blueprint.</p>
          <p>Support: {CONTACT_EMAIL}</p>
        </div>
        <div className="flex gap-5">
          <Link href="/privacy" className="hover:text-white">Privacy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <Link href="/refund" className="hover:text-white">Refund</Link>
        </div>
      </div>
    </footer>
  );
}
