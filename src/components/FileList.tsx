import { productFiles } from "@/lib/constants";

export function FileList() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#151d1d] p-5 shadow-2xl md:p-7">
      <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
        <div>
          <p className="text-sm text-[#9aa3a3]">Product folder preview</p>
          <h3 className="text-2xl font-black">Everything in one zip</h3>
        </div>
        <div className="rounded-xl bg-[#77b255] px-3 py-2 text-sm font-black text-[#101515]">15+ files</div>
      </div>
      <div className="max-h-[620px] space-y-1 overflow-hidden">
        {productFiles.map((file) => (
          <div className="file-row" key={file.name}>
            <span className={`file-icon ${file.type}`} />
            <span className="text-[15px] font-semibold text-[#d8dddd] md:text-lg">{file.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
