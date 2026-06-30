import Image from "next/image";

const IMAGE_WIDTH = 1024;
const IMAGE_HEIGHT = 1280;

export function HeroImage() {
  return (
    <div className="relative min-w-0">
      <div
        className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-500/20 via-transparent to-cyan-500/15 blur-2xl"
        aria-hidden="true"
      />
      <div className="hero-image-frame relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a0f0f] shadow-[0_32px_80px_rgba(0,0,0,0.55)]">
        <Image
          src="/images/blueImag.jpeg"
          alt="Faceless Blueprint — hooded creator with YouTube analytics, video thumbnails, and channel blueprints"
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="h-auto w-full"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f1515]/70 via-transparent to-transparent"
          aria-hidden="true"
        />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-5 sm:left-5 sm:right-5">
          <div className="rounded-xl border border-white/10 bg-[#0f1515]/80 px-3 py-2 backdrop-blur-md sm:px-4 sm:py-2.5">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400 sm:text-xs">
              Faceless channel mode
            </p>
            <p className="mt-0.5 text-sm font-black text-white sm:text-base">Analytics · Thumbnails · Publish</p>
          </div>
          <div className="hidden rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 backdrop-blur-md sm:block sm:px-4 sm:py-2.5">
            <p className="text-xs font-black text-emerald-300">10 Blueprints</p>
            <p className="text-[10px] text-[#aeb7b7]">One complete PDF</p>
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute -right-3 -top-3 hidden h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl lg:block"
        aria-hidden="true"
      />
    </div>
  );
}
