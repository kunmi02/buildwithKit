import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#080b0b] px-5 py-10 text-sm text-[#8a9494]">
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
