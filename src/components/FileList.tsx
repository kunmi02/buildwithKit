import { PRODUCT_FILENAME, productSections } from "@/lib/constants";

export function FileList() {
  return (
    <div className="min-w-0 rounded-[2rem] border border-white/[0.08] bg-[#121818] p-5 shadow-2xl card-premium md:p-7">
      <div className="mb-6 flex min-w-0 items-center justify-between gap-3 border-b border-white/[0.06] pb-5">
        <div className="min-w-0">
          <p className="text-sm text-[#8a9494]">What lands in your inbox</p>
          <h3 className="text-xl font-black sm:text-2xl">One file. Everything inside.</h3>
        </div>
        <div className="shrink-0 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-3 py-2 text-sm font-black text-[#0a0e0e]">
          1 download
        </div>
      </div>

      <div className="file-row mb-4 border border-emerald-500/25 bg-emerald-500/10">
        <span className="file-icon pdf" />
        <div className="min-w-0">
          <span className="block break-all text-[15px] font-black text-white md:text-lg">{PRODUCT_FILENAME}</span>
          <span className="mt-1 block text-sm text-[#aeb7b7]">Complete playbook — all blueprints, prompts, calendar, and bonus merged</span>
        </div>
      </div>

      <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#9aa3a3]">Inside the file</p>
      <div className="max-h-[480px] space-y-1 overflow-hidden">
        {productSections.map((section) => (
          <div className="file-row" key={section.name}>
            <span className="file-icon pdf" />
            <div className="min-w-0">
              <span className="block text-[15px] font-semibold text-[#d8dddd] md:text-base">{section.name}</span>
              <span className="block text-sm text-[#9aa3a3]">{section.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
