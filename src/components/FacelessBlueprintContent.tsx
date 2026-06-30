"use client";

import { CheckoutLink } from "@/components/CheckoutLink";
import { FileList } from "@/components/FileList";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { PriceCompare, SalePrice, RegularPrice } from "@/components/PriceCompare";
import { usePricing } from "@/components/PricingProvider";
import { SaleCountdownLine } from "@/components/SaleCountdown";
import { SaleUrgencyBar } from "@/components/SaleUrgencyBar";
import { SectionHeader } from "@/components/SectionHeader";

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

const offerStack = [
  {
    title: "10 Cloneable Channel Blueprints",
    value: "$970",
    text: "Each pack hands you a complete channel identity: niche positioning, content topics, thumbnail direction, publishing workflow, growth strategy, and monetization path. Clone one. Launch tomorrow.",
  },
  {
    title: "30-Day Publish Calendar",
    value: "$97",
    text: "Your first month mapped out inside the same file — video topics, publish dates, and cadence locked in before you hit record. No more staring at a blank screen wondering what to post next.",
  },
  {
    title: "Setup Prompt Pack",
    value: "$47",
    text: "Copy-paste prompts for ChatGPT, Claude, or Gemini. Generate channel names, bios, branding, scripts, and first-video ideas in one sitting instead of one painful weekend.",
  },
  {
    title: "Clipping Mastery Bonus",
    value: "$67",
    text: "Turn one long video into a week of short-form clips. Learn how to repurpose every upload into more reach, more watch time, and more monetizable assets — without filming twice.",
  },
];

const falseBeliefs = [
  {
    myth: "“I need to be on camera to make money on YouTube.”",
    truth: "Every blueprint in this playbook is built for faceless formats — voiceover, stock footage, screen recordings, and text-on-screen. No face. No awkward intro. Just publish.",
  },
  {
    myth: "“I don’t know which niche to pick.”",
    truth: "You get 10 pre-validated directions — each with positioning, topics, thumbnails, and a monetization path. Pick one tonight. Ignore the rest until you’re profitable.",
  },
  {
    myth: "“I’ll waste months figuring out what to post.”",
    truth: "The 30-day calendar template maps your first month of videos before you record a single second. You’ll know exactly what to publish and when.",
  },
  {
    myth: "“I need expensive tools or a big audience first.”",
    truth: "These are starter blueprints for beginners. Copy-paste prompts generate your channel name, bio, scripts, and first-video ideas in minutes — not weeks.",
  },
];

const steps = [
  {
    title: "Pick your niche",
    text: "Open the playbook, scan 10 proven faceless directions, and commit to one channel tonight.",
  },
  {
    title: "Clone the blueprint",
    text: "Channel identity, topics, thumbnails, and monetization path — already decided for you.",
  },
  {
    title: "Run the setup prompts",
    text: "Paste into your AI tool. Walk away with name, bio, branding, scripts, and your first video idea.",
  },
  {
    title: "Fill the 30-day calendar",
    text: "Lock in a full month of publish dates and topics so you never wonder what to post next.",
  },
  {
    title: "Hit publish",
    text: "You’re not “planning a channel” anymore. You’re running one.",
  },
];

function OfferSectionHeader() {
  const { pricing } = usePricing();

  return (
    <SectionHeader
      eyebrow="The godfather offer"
      title={`Everything you get — stacked, priced, and ${pricing.discountPercent}% off at launch.`}
      subtitle="This isn’t a vague ebook. It’s one complete playbook — every blueprint, prompt, calendar, and bonus merged into a single PDF. One payment. One download. Pay in Naira or USD."
    />
  );
}

function FaqSection() {
  const { pricing } = usePricing();

  const faqs: [string, string][] = [
    [
      "Is this a course?",
      "No. It’s one downloadable PDF playbook — blueprints, copy-paste prompts, a 30-day calendar, and a clipping bonus, all merged. No modules. No login. No “watch 40 hours first.” Open it and execute.",
    ],
    [
      "Is it one file or a bunch of downloads?",
      "One file. Everything is merged into a single complete PDF — no zip folder, no scattered documents, no “which file do I open first?” You download once and the whole system is right there.",
    ],
    [
      "Do I need to show my face?",
      "No. Every blueprint is faceless — voiceover, stock footage, screen recordings, text-on-screen. Built for people who want income without building a personal brand on camera.",
    ],
    [
      "I’m a total beginner. Is that okay?",
      "That’s who it’s for. The starter playbook gives you niche, topics, calendar, and copy-paste prompts in one place so you’re not guessing from zero. You still publish — the PDF removes the planning paralysis.",
    ],
    [
      "How do I get it after I pay?",
      "Checkout on Selar. You get an email with your download link right away. One payment, one merged PDF, instant delivery.",
    ],
    [
      "Why is the launch sale so cheap?",
      `It’s a limited launch price — ${pricing.formattedSale} instead of ${pricing.formattedRegular}. Low friction on purpose: one decision, no “let me think about it for two weeks.” When the sale ends, the price goes back up.`,
    ],
    [
      "What if I pick the wrong niche?",
      "You get 10. Scan them, commit to one for 30 days, and follow that pack. Most people fail by never choosing — not by choosing “wrong” once.",
    ],
    [
      "Will this make me money?",
      "It gives you the plan and assets to launch a faceless channel. Results depend on you publishing. This playbook ends the research loop; it doesn’t replace the publish button.",
    ],
    [
      "Can I get a refund?",
      `See the refund policy on this site. At ${pricing.formattedSale}, the bet is tiny — download it tonight and see if it’s the structure you’ve been missing.`,
    ],
  ];

  return (
    <section id="faq" className="px-5 py-20">
      <SectionHeader
        eyebrow="Still hesitating?"
        title="Questions that kill the sale — answered."
        subtitle={`Read these before you talk yourself out of ${pricing.formattedSale} and another month of “almost starting.”`}
      />
      <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
        {faqs.map(([q, a]) => (
          <div key={q} className="rounded-2xl border border-white/10 bg-[#151d1d] p-6">
            <h3 className="text-xl font-black">{q}</h3>
            <p className="mt-3 leading-7 text-[#aeb7b7]">{a}</p>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 max-w-3xl text-center">
        <p className="text-2xl font-black leading-snug md:text-3xl">You’ve read the offer. You know what’s in the file.</p>
        <p className="mt-4 text-lg text-[#aeb7b7]">
          <SalePrice className="font-black text-white" />. One file. One niche. Thirty days mapped. No more “I’ll start when I’m ready.”
        </p>
        <SaleCountdownLine className="mt-4 text-sm text-[#ffb347]" />
        <CheckoutLink
          showPrice
          className="mt-8 inline-flex rounded-full bg-[#77b255] px-10 py-4 font-black text-[#101515] shadow-glow hover:bg-[#8ed36a]"
        >
          Get Instant Access
        </CheckoutLink>
      </div>
    </section>
  );
}

export function FacelessBlueprintContent() {
  const { pricing } = usePricing();

  return (
    <main className="min-h-screen overflow-x-clip bg-[#0f1515] text-[#e8ecec]">
      <SaleUrgencyBar />
      <Nav />

      <section className="glow-grid px-5 py-20 md:py-28">
        <div className="mx-auto grid min-w-0 max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div className="min-w-0">
            <div className="mb-4 inline-flex rounded-full border border-[#ffb347]/40 bg-[#ffb347]/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.15em] text-[#ffb347]">
              Launch sale — {pricing.discountPercent}% off · limited time
            </div>
            <div className="mb-6 flex max-w-full items-start gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-relaxed text-[#cdd4d4]">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#77b255]" aria-hidden="true" />
              <span className="min-w-0">
                For beginners who want a faceless YouTube channel — without guessing niche, topics, or what to post first
              </span>
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-7xl md:leading-[0.95]">
              Stop researching.
              <span className="block text-[#77b255]">Start publishing.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-[#b7c0c0] sm:text-lg sm:leading-8 md:text-xl">
              10 done-for-you faceless channel blueprints in one complete PDF. Pick one niche. Clone the plan. Download a single file and have your first 30 days mapped before tomorrow morning — no face, no guesswork, no zip-folder chaos.
            </p>
            <div className="mt-6">
              <PriceCompare size="sm" align="left" />
            </div>
            <SaleCountdownLine className="mt-3 text-sm text-[#aeb7b7]" />
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <CheckoutLink
                showPrice
                className="w-full rounded-full bg-[#77b255] px-6 py-4 text-center font-black text-[#101515] shadow-glow hover:bg-[#8ed36a] sm:w-auto sm:px-8"
              >
                Get Instant Access
              </CheckoutLink>
              <a
                href="#offer"
                className="w-full rounded-full border border-white/15 px-6 py-4 text-center font-black text-white hover:bg-white/10 sm:w-auto sm:px-8"
              >
                See the Full Offer
              </a>
            </div>
            <p className="mt-4 text-sm text-[#9aa3a3]">
              One-time <SalePrice />. One merged PDF. Instant download. Price returns to <RegularPrice /> after the sale.
            </p>
          </div>

          <FileList />
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#111818] px-5 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#77b255]">Sound familiar?</p>
          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            You don’t need another “how to start YouTube” video.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#aeb7b7]">
            You need a channel you can actually launch — niche chosen, topics listed, calendar filled, first video planned. Most people stall because every decision is still open. This single playbook closes them for you.
          </p>
          <ul className="mx-auto mt-10 max-w-xl space-y-4 text-left text-[#cdd4d4]">
            {[
              "Weeks of niche research — still no channel live",
              "AI open on one tab, YouTube on another — nothing published",
              "Motivation Monday, ghost mode by Thursday",
              "Watching faceless channels win while you’re still “getting ready”",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#151d1d] px-5 py-4">
                <span className="mt-1 text-[#77b255]" aria-hidden="true">
                  ✕
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-xl font-bold text-white">The gap isn’t talent. It’s a finished plan you can execute tonight.</p>
        </div>
      </section>

      <section id="beliefs" className="px-5 py-20">
        <SectionHeader
          eyebrow="Before you talk yourself out of it"
          title="Four lies keeping you stuck — and the truth that kills each one."
          subtitle="If any of these have stopped you from starting, read this section twice. Then look at the offer."
        />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {falseBeliefs.map((item) => (
            <article key={item.myth} className="rounded-[1.6rem] border border-white/10 bg-[#151d1d] p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#9aa3a3]">The lie</p>
              <h3 className="mt-2 text-xl font-black leading-snug text-[#e8ecec]">{item.myth}</h3>
              <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-[#77b255]">The truth</p>
              <p className="mt-2 leading-7 text-[#aeb7b7]">{item.truth}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="offer" className="bg-[#111818] px-5 py-20">
        <OfferSectionHeader />
        <div className="mx-auto max-w-4xl space-y-4">
          {offerStack.map((item, index) => (
            <article
              key={item.title}
              className="flex flex-col gap-4 rounded-[1.6rem] border border-white/10 bg-[#151d1d] p-6 sm:flex-row sm:items-start sm:justify-between sm:p-7"
            >
              <div className="min-w-0 flex-1">
                <p className="text-sm font-black text-[#77b255]">Component {String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-1 text-2xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#aeb7b7]">{item.text}</p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-sm text-[#9aa3a3]">Value (USD)</p>
                <p className="text-3xl font-black text-white">{item.value}</p>
              </div>
            </article>
          ))}

          <div className="rounded-[1.6rem] border-2 border-[#77b255]/40 bg-[#151d1d] p-8 text-center md:p-10">
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <div>
                <p className="text-sm text-[#9aa3a3]">Total stack value (USD)</p>
                <p className="text-3xl font-black text-[#9aa3a3] line-through md:text-4xl">$1,181</p>
              </div>
              <div className="hidden text-4xl font-black text-[#77b255] sm:block" aria-hidden="true">
                →
              </div>
              <PriceCompare size="lg" showBadge align="center" />
            </div>
            <SaleCountdownLine className="mx-auto mt-6 max-w-xl text-sm" />
            <p className="mx-auto mt-4 max-w-xl text-[#aeb7b7]">
              Less than lunch. One decision. Pay <SalePrice /> at checkout — Selar handles Naira or USD.
            </p>
            <CheckoutLink
              showPrice
              className="mt-8 inline-flex rounded-full bg-[#77b255] px-10 py-4 font-black text-[#101515] shadow-glow hover:bg-[#8ed36a]"
            >
              Yes — Send Me the Playbook
            </CheckoutLink>
            <p className="mt-4 text-sm text-[#9aa3a3]">Instant download after checkout. One merged PDF — keep it forever.</p>
          </div>
        </div>
      </section>

      <section id="niches" className="px-5 py-20">
        <SectionHeader
          eyebrow="Pick one. Go deep."
          title="10 faceless niches — each with a full channel blueprint."
          subtitle="Don’t try to learn everything. Choose one direction, open that pack, and build. That’s how beginners actually launch instead of researching forever."
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

      <section id="how" className="bg-[#111818] px-5 py-20">
        <SectionHeader
          eyebrow="Five steps. One evening."
          title="From download to first video plan — without the chaos."
          subtitle="No 40-hour course. No private group. No “watch 200 modules first.” Open one file. Follow the path. Publish."
        />
        <div className="mx-auto max-w-4xl space-y-4">
          {steps.map((step, index) => (
            <div key={step.title} className="flex items-start gap-5 rounded-2xl border border-white/10 bg-[#151d1d] p-5 md:p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#77b255] text-lg font-black text-[#101515]">
                {index + 1}
              </span>
              <div>
                <p className="text-lg font-black">{step.title}</p>
                <p className="mt-1 leading-7 text-[#aeb7b7]">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-[1.6rem] border border-[#77b255]/30 bg-[#151d1d] p-8">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#77b255]">This is for you if</p>
            <ul className="mt-5 space-y-3 text-[#cdd4d4]">
              {[
                "You want faceless income — no camera, no personal brand required",
                "You’re tired of researching and ready to publish something this week",
                "You want structure: niche, topics, calendar, and prompts — not another vague “start YouTube” pep talk",
                "You’ll pick one niche and follow the playbook instead of collecting ten half-started ideas",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[#77b255]" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.6rem] border border-white/10 bg-[#151d1d] p-8">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#9aa3a3]">Skip this if</p>
            <ul className="mt-5 space-y-3 text-[#aeb7b7]">
              {[
                "You want a done-for-you channel that earns while you sleep — you still have to publish",
                "You won’t pick a niche and commit for 30 days",
                "You’re looking for a course with calls, coaching, or a community",
                `${pricing.formattedSale} feels like a big bet — this is a starter kit, not a magic button`,
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[#9aa3a3]" aria-hidden="true">
                    ✕
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-[#111818] px-5 py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#ffb347]/25 bg-[#151d1d] p-8 text-center shadow-2xl md:p-14">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#ffb347]">Launch sale — act before price goes up</p>
          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            <SalePrice />. One payment. If it’s not worth it, you’re out less than lunch.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#aeb7b7]">
            No subscription trap. No hidden upsell waiting after checkout. Download one complete PDF — 10 blueprints, prompts, 30-day calendar, and clipping bonus, all merged — and decide if it’s the push you needed. Worst case: you lost pocket change. Best case: you finally launch.
          </p>
          <div className="mt-8">
            <PriceCompare size="xl" showBadge />
          </div>
          <SaleCountdownLine className="mx-auto mt-6 max-w-xl text-sm text-[#ffb347]" />
          <p className="mt-3 text-sm font-black uppercase tracking-[0.2em] text-[#77b255]">One-time · Instant access</p>
          <CheckoutLink
            showPrice
            className="mt-8 inline-flex rounded-full bg-white px-10 py-4 font-black text-[#101515] hover:bg-[#d8dde0]"
          >
            Download the Playbook
          </CheckoutLink>
          <p className="mt-4 text-sm text-[#9aa3a3]">Secure checkout via Selar · Digital delivery to your email</p>
        </div>
      </section>

      <FaqSection />
      <Footer />
    </main>
  );
}
