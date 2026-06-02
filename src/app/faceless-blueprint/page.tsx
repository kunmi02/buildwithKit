import { FileList } from "@/components/FileList";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { SectionHeader } from "@/components/SectionHeader";
import { CHECKOUT_URL } from "@/lib/constants";

const niches = [
  "Personal Finance",
  "History & Mystery",
  "Horror Narration",
  "Motivation",
  "Tech News",
  "Health & Wellness",
  "Cooking",
  "Science Education",
  "Meditation & Sleep",
  "Gaming News",
];

const inside = [
  {
    title: "10 Cloneable Channel Blueprints",
    text: "Each pack gives you a niche position, channel identity, content topics, thumbnails, workflow, growth strategy, and monetization direction.",
  },
  {
    title: "30-Day Publish Calendar",
    text: "Use the included CSV template to map your first month of videos, topics, dates, and publishing cadence.",
  },
  {
    title: "Setup Prompt Pack",
    text: "Copy and paste prompts into ChatGPT, Claude, or Gemini to generate names, bios, branding, scripts, and first-video ideas faster.",
  },
  {
    title: "Clipping Mastery Bonus",
    text: "A bonus document to help you understand clipping, short-form repurposing, and how to turn ideas into more content assets.",
  },
];

const steps = [
  "Pick your niche",
  "Open the matching channel pack",
  "Use the setup prompts",
  "Fill the 30-day calendar",
  "Start publishing",
];

export default function FacelessBlueprintPage() {
  return (
    <main className="min-h-screen bg-[#0f1515] text-[#e8ecec]">
      <Nav />

      <section className="glow-grid px-5 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#cdd4d4]">
              <span className="h-2 w-2 rounded-full bg-[#77b255]" />
              10 complete faceless YouTube channel blueprints
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Pick one. Clone it. Launch tomorrow.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#b7c0c0] md:text-xl">
              A downloadable starter folder for beginners who want to start a faceless YouTube channel without guessing the niche, topics, prompts, calendar, or publishing plan.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href={CHECKOUT_URL} className="rounded-full bg-[#77b255] px-8 py-4 text-center font-black text-[#101515] shadow-glow hover:bg-[#8ed36a]">
                Get Instant Access — $10
              </a>
              <a href="#inside" className="rounded-full border border-white/15 px-8 py-4 text-center font-black text-white hover:bg-white/10">
                See What’s Included
              </a>
            </div>
            <p className="mt-4 text-sm text-[#9aa3a3]">One-time payment. Digital download. No subscription.</p>
          </div>

          <FileList />
        </div>
      </section>

      <section id="inside" className="px-5 py-20">
        <SectionHeader
          eyebrow="Inside the folder"
          title="Built like a clean product folder, not a random ebook."
          subtitle="The landing page follows the same dark file-browser theme as the product: simple, direct, and focused on what the buyer receives."
        />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {inside.map((item) => (
            <article key={item.title} className="rounded-[1.6rem] border border-white/10 bg-[#151d1d] p-7">
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-[#aeb7b7]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="niches" className="bg-[#111818] px-5 py-20">
        <SectionHeader
          eyebrow="Niche options"
          title="Choose from 10 faceless channel directions."
          subtitle="Each niche pack is designed so the buyer can pick one direction and go deep instead of trying to learn everything at once."
        />
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {niches.map((niche, index) => (
            <div key={niche} className="rounded-2xl border border-white/10 bg-[#1b2424] p-5">
              <p className="mb-4 text-sm font-black text-[#77b255]">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="text-xl font-black">{niche}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="px-5 py-20">
        <SectionHeader
          eyebrow="How it works"
          title="A simple path from download to first video plan."
          subtitle="This keeps the promise practical and avoids making the product feel like a vague make-money-online bundle."
        />
        <div className="mx-auto max-w-4xl space-y-4">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center gap-5 rounded-2xl border border-white/10 bg-[#151d1d] p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#77b255] font-black text-[#101515]">{index + 1}</span>
              <p className="text-lg font-bold">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="px-5 py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-[#151d1d] p-8 text-center shadow-2xl md:p-14">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#77b255]">Launch price</p>
          <h2 className="text-5xl font-black md:text-7xl">$10</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#aeb7b7]">
            Get the full Faceless Blueprint folder with channel packs, prompts, calendar template, and clipping bonus.
          </p>
          <a href={CHECKOUT_URL} className="mt-8 inline-flex rounded-full bg-white px-10 py-4 font-black text-[#101515] hover:bg-[#d8dde0]">
            Buy The Zip Folder
          </a>
        </div>
      </section>

      <section id="faq" className="bg-[#111818] px-5 py-20">
        <SectionHeader
          eyebrow="FAQ"
          title="Quick answers before checkout."
          subtitle="Use this to handle buyer objections before they click through to the payment provider."
        />
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          {[
            ["Is this a course?", "No. It is a downloadable starter kit/folder with PDFs, prompts, and a calendar template."],
            ["Do I need to show my face?", "No. The product focuses on faceless channel formats and content planning."],
            ["How do I receive it?", "After payment, the checkout platform sends access to the downloadable file."],
            ["Is it beginner-friendly?", "Yes. It is made for people who need structure before creating their first videos."],
          ].map(([q, a]) => (
            <div key={q} className="rounded-2xl border border-white/10 bg-[#151d1d] p-6">
              <h3 className="text-xl font-black">{q}</h3>
              <p className="mt-3 leading-7 text-[#aeb7b7]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
