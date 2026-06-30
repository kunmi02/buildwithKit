"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckoutLink } from "@/components/CheckoutLink";
import { usePricing } from "@/components/PricingProvider";
import { SalesCountdownBar } from "@/components/sales/SalesCountdownBar";
import { SalesFaq } from "@/components/sales/SalesFaq";
import { CONTACT_EMAIL } from "@/lib/constants";

const painPoints = [
  "You open YouTube to 'research' — and 2 hours later you've watched 6 videos and published zero",
  "You've picked a niche 4 times. Changed your mind 4 times. Your channel still doesn't exist",
  "You know faceless channels make money… but nobody handed you the exact plan to copy",
  "Every guru sells 'mindset' and 'strategy' — nobody gives you the scripts, topics, and calendar",
  "You're waiting to 'feel ready' — but ready never comes when every decision is still open",
];

const insideItems = [
  {
    tag: "Core Asset #1",
    title: "10 Cloneable Channel Blueprints",
    text: "Not 'niche ideas.' Full channel packs — positioning, 20+ video topics, thumbnail angle, upload workflow, growth levers, and monetization path. Pick one. Clone it tonight. Ignore the other 9 until you're profitable.",
    value: "₦15,000",
    bonus: false,
  },
  {
    tag: "Core Asset #2",
    title: "AI Setup Prompt Pack",
    text: "The 'I don't know what to write' killer. Copy-paste prompts that generate your channel name, bio, branding, scripts, and first 10 video ideas in one sitting. Works on free ChatGPT, Claude, or Gemini.",
    value: "₦8,000",
    bonus: false,
  },
  {
    tag: "Core Asset #3",
    title: "30-Day Publishing Calendar",
    text: "Your first month mapped before you record a single second. Topics, titles, publish dates, format — locked in. You will never sit down and wonder 'what do I post today?' again.",
    value: "₦5,000",
    bonus: false,
  },
  {
    tag: "Core Asset #4",
    title: "START HERE + Niche Selector",
    text: "The 'open this first' guide that kills overwhelm. Tells you exactly what to do, in what order, and which of the 10 blueprints fits your personality and income goals. 15 minutes. Then you're moving.",
    value: "₦3,500",
    bonus: false,
  },
  {
    tag: "Free Bonus #1",
    title: "YouTube Clipping Mastery",
    text: "Turn 1 long video into 5–10 Shorts, Reels, and TikToks — without filming twice. More reach, more watch time, more shots at the algorithm. From the same upload.",
    value: "₦6,000 — FREE at launch",
    bonus: true,
  },
  {
    tag: "Free Bonus #2",
    title: "Monetization Cheatsheet",
    text: "The 4 ways to earn before AdSense — affiliate links, digital products, sponsorships, and offers that work even with a small channel. Stop waiting for 1,000 subscribers to make your first naira.",
    value: "₦4,500 — FREE at launch",
    bonus: true,
  },
];

const offerStack = [
  {
    name: "10 Cloneable Channel Blueprints",
    desc: "Full packs: niche, topics, thumbnails, workflow, growth & monetization — per niche",
    price: "₦15,000",
    bonus: false,
  },
  {
    name: "AI Setup Prompt Pack",
    desc: "Names, bios, scripts, video ideas — generated in minutes, not weekends",
    price: "₦8,000",
    bonus: false,
  },
  {
    name: "30-Day Publishing Calendar",
    desc: "First month of content planned — topics, dates, format, done",
    price: "₦5,000",
    bonus: false,
  },
  {
    name: "START HERE Guide + Niche Selector",
    desc: "Zero-confusion onboarding — pick your niche tonight",
    price: "₦3,500",
    bonus: false,
  },
  {
    name: "🎁 BONUS: YouTube Clipping Mastery",
    desc: "1 video → 10 clips. Shorts, Reels, TikTok — multiplied output",
    price: "₦6,000",
    strike: true,
    bonus: true,
  },
  {
    name: "🎁 BONUS: Monetization Cheatsheet",
    desc: "Earn before 1k subs — affiliate, products, brand deals",
    price: "₦4,500",
    strike: true,
    bonus: true,
  },
];

const forYouItems = [
  "You want online income but refuse to build a personal brand on camera",
  "You've been 'about to start' for months — and you're sick of your own excuses",
  "You'd rather execute a proven plan than gamble on another random tutorial",
  "You have a phone, data, and free AI — that's literally all this requires",
  "You're willing to pick ONE niche and commit for 30 days (not collect half-started ideas)",
  "You understand that publishing beats perfect — and you just need the push",
];

const notForYouItems = [
  "You want a done-for-you channel that earns while you sleep without uploading anything",
  "You won't pick a niche and stick with it for at least 30 days",
  "You need hand-holding, weekly calls, or a private Discord to take action",
  "You think ₦5,000 is a 'big investment' but you'll spend that on data and jollof this month anyway",
];

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

const testimonials = [
  {
    quote:
      "I'd been in 'research mode' for 8 months. Downloaded Sunday night. Picked Personal Finance. Used the prompts. Had 3 videos fully planned by Monday. I didn't need more information — I needed someone to close the decisions for me.",
    initials: "TK",
    name: "Tunde K.",
    handle: "Lagos — Banker",
  },
  {
    quote:
      "I thought I needed a course. I needed a checklist. This is a checklist on steroids. 4 videos uploaded in 2 weeks. Zero face. Zero guesswork. The clipping bonus alone paid for itself in saved time.",
    initials: "AF",
    name: "Amaka F.",
    handle: "Abuja — Side Hustler",
  },
  {
    quote:
      "As a student I can't drop ₦50k on coaching. This was ₦5k and it gave me more structure than 200 hours of free YouTube. Paste prompt, get script, upload. That's the whole game.",
    initials: "OD",
    name: "Obinna D.",
    handle: "Enugu — Student",
  },
];

const beliefs = [
  {
    myth: "I need to show my face to make real money on YouTube",
    truth:
      "Faceless channels in finance, horror, motivation, and education pull millions of views with voiceover, stock footage, and screen recordings. Your face is not the product. The content is. Every blueprint in this playbook is built for people who want income without becoming an influencer.",
  },
  {
    myth: "YouTube is too saturated — I'm too late",
    truth:
      "Saturation is what lazy people say to justify not starting. YouTube adds billions of views every day. New channels hit monetization every single week. The algorithm doesn't care when you started — it cares if you publish consistently. This playbook gives you 30 days of that consistency pre-built.",
  },
  {
    myth: "I don't know how to write scripts or what to say",
    truth:
      "Good. You weren't supposed to. That's what the AI Prompt Pack is for. You paste. It writes. You edit lightly. You record. The creative burden is outsourced to a framework that already works. You're the publisher, not the poet.",
  },
  {
    myth: "I don't have time — I work a 9-to-5",
    truth:
      "The top faceless creators batch content on weekends. This kit is designed for 5–8 hours a week. One Saturday to plan the month. Weeknights to record. If you have time to scroll TikTok for 45 minutes a day, you have time to build an asset that pays you back.",
  },
  {
    myth: "What if I pick the wrong niche?",
    truth:
      "You get 10. The Niche Selector helps you commit to one in 15 minutes. Wrong niche isn't what kills beginners — never choosing one does. Pick, publish 30 days, then adjust. Motion beats meditation.",
  },
  {
    myth: "₦5,000 is too cheap to be real — what's the catch?",
    truth:
      "No catch. It's a launch price. Low friction on purpose: one decision, one download, one file. We'd rather 1,000 people start and win than 10 people pay premium and never open it. When the launch ends, the price goes back up. You win by moving now.",
  },
];

const steps = [
  {
    title: "Pay once. Download instantly.",
    text: "Checkout takes 60 seconds. Selar emails your link immediately. One merged PDF — no zip folder, no 'which file do I open first?'",
  },
  {
    title: "Open START HERE (15 minutes)",
    text: "The guide tells you exactly what to do and which niche to pick based on your goals. By the end, every open decision is closed.",
  },
  {
    title: "Clone your blueprint",
    text: "Channel identity, topics, thumbnails, workflow, monetization — already decided. You're not inventing. You're installing.",
  },
  {
    title: "Run the AI prompts",
    text: "Paste into ChatGPT or Claude. Walk away with your channel name, bio, branding, and first scripts. One sitting.",
  },
  {
    title: "Fill the calendar. Hit publish.",
    text: "30 days mapped. Upload days set. You're not 'planning a channel' anymore. You're operating one. This week.",
  },
];

function SalesAnnouncementBar() {
  const { pricing, ready } = usePricing();
  if (!ready) return null;

  return (
    <div className="sales-bar">
      ⚠️ Launch pricing active — full playbook + bonuses for <span>{pricing.checkoutSale}</span> (was{" "}
      {pricing.formattedRegular}) · Price increases when timer hits zero
    </div>
  );
}

export function SalesPageContent() {
  const { pricing } = usePricing();

  const faqs = [
    {
      question: "Is this a course with videos I have to sit through?",
      answer:
        "No. Zero video modules. Zero login portal. One downloadable PDF playbook — blueprints, prompts, calendar, and bonuses merged into a single file. Open it. Follow it. Publish. If you can read a PDF on your phone, you can use this.",
    },
    {
      question: "How is this different from the free YouTube tutorials I've already watched?",
      answer:
        "Free tutorials give you information. This gives you decisions already made — niche, topics, calendar, scripts, monetization path. The difference between knowing how to start and actually starting is a finished plan. That's what you're buying.",
    },
    {
      question: "Do I need paid software or expensive equipment?",
      answer:
        "No. Free ChatGPT/Claude for scripts. Free CapCut or DaVinci for editing. Stock footage and AI voiceover for faceless format. Your phone and laptop are enough. The playbook tells you exactly which free tools to use.",
    },
    {
      question: "How fast do I get access after paying?",
      answer:
        "Instant. Selar sends your download link to your email the moment payment clears. One file. One download. Everything inside.",
    },
    {
      question: "Can I really make money from this?",
      answer:
        "The playbook gives you the system to launch and monetize a faceless channel — multiple income paths included before AdSense. Results depend on you publishing. This removes the planning paralysis. It does not replace the publish button. But it makes publishing the easy part.",
    },
    {
      question: "What if it's not for me?",
      answer: `Read our refund policy at /refund. At ${pricing.formattedSale}, you're risking less than lunch — and the cost of another 6 months 'researching' is far higher than ${pricing.checkoutSale}.`,
    },
  ];

  return (
    <>
      <SalesAnnouncementBar />

      <nav className="sales-nav">
        <Link href="/" className="sales-logo">
          Faceless Blueprint
        </Link>
        <CheckoutLink showPrice className="sales-nav-cta">
          Get Access
        </CheckoutLink>
      </nav>

      <div className="sales-hero">
        <div className="sales-eyebrow">For people who are done researching & ready to get paid</div>
        <h1>
          While You&apos;re Still &quot;Planning,&quot;
          <br />
          Someone With Your Same Phone Is
          <br />
          <span className="font-accent text-[var(--sales-gold)]">Uploading & Getting Paid</span>
          <br />
          — Without Ever Showing Their Face
        </h1>
        <p className="sales-hero-sub">
          <strong>Faceless Blueprint</strong> hands you 10 done-for-you YouTube channel systems in one PDF — niche
          chosen, topics listed, 30-day calendar built, AI prompts ready to paste — so you launch your first video{" "}
          <strong>this week</strong>, not after another 6 months of tutorials.
        </p>
        <CheckoutLink className="sales-cta-primary">
          Yes — I Want the Complete Playbook
        </CheckoutLink>
        <p className="sales-cta-note">
          One payment · Instant download · No subscription · <span>✓ Full playbook included</span>
        </p>
        <div className="sales-hero-image">
          <Image
            src="/images/blueImag.jpeg"
            alt="Faceless Blueprint — complete faceless YouTube channel playbook"
            width={1024}
            height={1280}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>

      <div className="sales-pain">
        <div className="sales-pain-inner">
          <h2>Let me guess where you are right now.</h2>
          <p>
            You&apos;ve seen the faceless channel screenshots. The AdSense deposits. The &quot;$4,200 this month&quot;
            analytics. Channels run by people who never show their face — just voiceover, stock clips, and consistent
            uploads.
          </p>
          <p>
            And you want that. Badly.
          </p>
          <p>
            <strong>But here&apos;s what actually happens when you sit down to start:</strong>
          </p>
          <ul className="sales-pain-list">
            {painPoints.map((item) => (
              <li key={item}>
                <span className="x">✗</span> {item}
              </li>
            ))}
          </ul>
          <div className="sales-pain-callout">
            &quot;I don&apos;t have a motivation problem. I have a too-many-open-decisions problem. Every time I try to
            start, I need to pick a niche, name the channel, plan videos, figure out thumbnails, wonder about
            monetization… and I freeze. So I watch another tutorial instead.&quot;
            <br />
            <br />
            — Sound familiar? That&apos;s not laziness. That&apos;s what happens when nobody gives you the finished
            plan. <strong>Faceless Blueprint is the finished plan.</strong>
          </div>
        </div>
      </div>

      <section className="sales-section">
        <div className="sales-section-inner">
          <div className="sales-section-label">The Epiphany</div>
          <h2 className="sales-section-title">
            You don&apos;t need more information.
            <br />
            You need fewer decisions.
          </h2>
          <p className="sales-section-sub">
            Every failed attempt wasn&apos;t because you&apos;re not smart enough. It&apos;s because you were trying to
            invent a business from scratch — while working a job, with no map, guessing at every step.
          </p>
          <p className="sales-body-text">
            <strong>Winners don&apos;t start from zero. They clone what works.</strong> They pick a proven niche. They
            follow a proven upload cadence. They use proven hooks and formats. They publish before they feel ready —
            because the plan tells them exactly what &quot;ready&quot; looks like.
          </p>
          <br />
          <p className="sales-body-text">
            Faceless Blueprint is that clone-ready system. We took 10 profitable faceless niches and built each one into
            a complete channel pack — identity, topics, thumbnails, workflow, monetization. Plus AI prompts that write
            your scripts. Plus a 30-day calendar so you never wonder what to post.
          </p>
          <br />
          <p className="sales-body-text">
            <strong>One PDF. One payment. One niche. Thirty days mapped.</strong> You&apos;re not buying education.
            You&apos;re buying the removal of every excuse between you and your first upload.
          </p>
        </div>
      </section>

      <section
        className="sales-section"
        style={{ background: "var(--sales-surface)", borderTop: "1px solid var(--sales-border)", borderBottom: "1px solid var(--sales-border)" }}
      >
        <div className="sales-section-inner">
          <div className="sales-section-label">The Stack</div>
          <h2 className="sales-section-title">Here&apos;s everything that ships inside your download</h2>
          <p className="sales-section-sub">
            Not features. <strong>Assets.</strong> Each one removes a specific bottleneck that stops beginners from
            publishing.
          </p>
          <div className="sales-inside-grid">
            {insideItems.map((item) => (
              <div
                key={item.title}
                className="sales-inside-card"
                style={item.bonus ? { borderColor: "rgba(230,58,46,0.4)" } : undefined}
              >
                {item.bonus ? <div className="sales-badge-bonus">FREE BONUS</div> : null}
                <div
                  className="ic-tag"
                  style={
                    item.bonus
                      ? { background: "rgba(230,58,46,0.12)", color: "#ff6b5b" }
                      : undefined
                  }
                >
                  {item.tag}
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="value" style={item.bonus ? { color: "#ff6b5b" } : undefined}>
                  Standalone value: {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="offer" className="sales-section">
        <div className="sales-section-inner">
          <div className="sales-section-label">The Godfather Offer</div>
          <h2 className="sales-section-title">
            If you bought all of this separately, here&apos;s what you&apos;d pay
          </h2>
          <p className="sales-section-sub">
            We&apos;re not asking you to figure out what this is worth. We&apos;re showing you — line by line — so the
            only question left is: <strong>are you in or are you out?</strong>
          </p>

          <div className="sales-offer-stack">
            <div className="sales-offer-stack-header">
              🗂 Faceless Blueprint — Complete Launch Playbook (Everything Listed Below)
            </div>

            {offerStack.map((item) => (
              <div
                key={item.name}
                className="sales-offer-item"
                style={item.bonus ? { background: "rgba(230,58,46,0.04)" } : undefined}
              >
                <div>
                  <div className="sales-offer-item-name" style={item.bonus ? { color: "#ff6b5b" } : undefined}>
                    {item.name}
                  </div>
                  <div className="sales-offer-item-desc">{item.desc}</div>
                </div>
                <div className="sales-offer-item-price">
                  {item.strike ? (
                    <>
                      <span className="strike">{item.price}</span>
                      FREE
                    </>
                  ) : (
                    item.price
                  )}
                </div>
              </div>
            ))}

            <div className="sales-offer-total">
              <div className="total-label">Total standalone value</div>
              <div className="total-real">₦42,000</div>
              <div className="total-price">{pricing.formattedSale}</div>
              <div className="total-sub">
                One-time · Instant download · Pay in Naira or USD at checkout
              </div>
              <div className="sales-savings-pill">
                ✓ You save ₦37,000 ({pricing.discountPercent}% off) — launch pricing only
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 36 }}>
            <p className="sales-body-text" style={{ marginBottom: 20, textAlign: "center" }}>
              <strong>The math is stupid simple:</strong> {pricing.formattedSale} for a system that would take you 6+
              months and hundreds of hours to reverse-engineer on your own — if you ever finished at all.
            </p>
            <SalesCountdownBar />
            <CheckoutLink showPrice pricePrefix=" — " className="sales-cta-primary" style={{ fontSize: 20, padding: "20px 48px" }}>
              Lock In Launch Price — Get Instant Access
            </CheckoutLink>
            <p className="sales-cta-note" style={{ marginTop: 14 }}>
              Price returns to <span style={{ textDecoration: "line-through" }}>{pricing.formattedRegular}</span> when
              the sale ends. No monthly fees. No upsell waiting after checkout.
            </p>
          </div>
        </div>
      </section>

      <section className="sales-section" style={{ background: "var(--sales-surface)" }}>
        <div className="sales-section-inner">
          <div className="sales-section-label">Qualify Yourself</div>
          <h2 className="sales-section-title">This was built for you if…</h2>
          <p className="sales-section-sub">
            Read this honestly. If you see yourself, keep scrolling. If not, this isn&apos;t for you — and that&apos;s
            fine.
          </p>
          <div className="sales-for-grid">
            {forYouItems.map((item) => (
              <div key={item} className="sales-for-card">
                <span className="check">✓</span> {item}
              </div>
            ))}
          </div>
          <br />
          <h3 className="sales-section-title" style={{ fontSize: "1.35rem", marginBottom: 16 }}>
            Skip this if…
          </h3>
          <div className="sales-for-grid">
            {notForYouItems.map((item) => (
              <div key={item} className="sales-for-card" style={{ borderColor: "rgba(230,58,46,0.25)" }}>
                <span style={{ color: "var(--sales-red)", fontSize: 18, flexShrink: 0 }}>✗</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="niches" className="sales-section">
        <div className="sales-section-inner">
          <div className="sales-section-label">Pick Your Weapon</div>
          <h2 className="sales-section-title">10 proven faceless niches. One decision tonight.</h2>
          <p className="sales-section-sub">
            Don&apos;t try to master all 10. That&apos;s how you end up researching again. Pick one. Go deep for 30
            days. Each blueprint is a full channel pack — not a bullet point.
          </p>
          <div className="sales-niche-grid">
            {niches.map((niche, index) => (
              <div key={niche} className="sales-niche-card">
                <div className="niche-num">{String(index + 1).padStart(2, "0")}</div>
                <h4>{niche}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sales-section" style={{ background: "var(--sales-surface)" }}>
        <div className="sales-section-inner">
          <div className="sales-section-label">Proof</div>
          <h2 className="sales-section-title">They were stuck in the same loop you&apos;re in</h2>
          <p className="sales-section-sub">
            Then they stopped researching and started executing a plan that was already built.
          </p>
          <div className="sales-testi-grid">
            {testimonials.map((item) => (
              <div key={item.name} className="sales-testi-card">
                <div className="sales-stars">★★★★★</div>
                <p>&quot;{item.quote}&quot;</p>
                <div className="sales-testi-author">
                  <div className="sales-testi-avatar">{item.initials}</div>
                  <div>
                    <div className="sales-testi-name">{item.name}</div>
                    <div className="sales-testi-handle">{item.handle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sales-section">
        <div className="sales-section-inner">
          <div className="sales-section-label">False Belief Destruction</div>
          <h2 className="sales-section-title">Every excuse between you and your first upload — destroyed</h2>
          <p className="sales-section-sub">
            These are the lies that keep smart people broke and watching. Read them before your brain talks you out of{" "}
            {pricing.checkoutSale}.
          </p>
          {beliefs.map((item) => (
            <div key={item.myth} className="sales-belief-item">
              <div className="sales-belief-q">
                <span className="x">✗</span> &quot;{item.myth}&quot;
              </div>
              <div className="sales-belief-a">
                <span className="check">✓</span> {item.truth}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="sales-section" style={{ borderTop: "1px solid var(--sales-border)" }}>
        <div className="sales-section-inner">
          <div className="sales-section-label">The 5-Step Path</div>
          <h2 className="sales-section-title">From payment to first video plan — tonight</h2>
          <p className="sales-section-sub">
            No 40-hour course. No community to join. No &quot;watch module 7 before you&apos;re allowed to start.&quot;
            Download. Open. Execute.
          </p>
          <div className="sales-steps">
            {steps.map((step, index) => (
              <div key={step.title} className="sales-step">
                <div className="sales-step-num">{index + 1}</div>
                <div className="sales-step-content">
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sales-section" style={{ background: "var(--sales-surface)" }}>
        <div className="sales-section-inner" style={{ textAlign: "center" }}>
          <div className="sales-section-label">Risk Reversal</div>
          <h2 className="sales-section-title" style={{ marginBottom: 32 }}>
            We take the risk. You take the playbook.
          </h2>
          <div className="sales-guarantee-box">
            <div className="sales-guarantee-icon">🛡️</div>
            <h3>The &quot;Open It Tonight&quot; Guarantee</h3>
            <p>
              Download the playbook. Go through the materials. If it&apos;s not the clearest path to launching a
              faceless channel you&apos;ve ever seen — email{" "}
              <strong style={{ color: "var(--sales-gold)" }}>{CONTACT_EMAIL}</strong> and request a refund per our{" "}
              <Link href="/refund" style={{ color: "var(--sales-gold)" }}>
                refund policy
              </Link>
              .
              <br />
              <br />
              At {pricing.formattedSale}, you&apos;re not risking your savings. You&apos;re risking nothing — except
              another month of watching other people win while you &quot;get ready.&quot;
              <br />
              <br />
              <strong>The only real risk is doing nothing.</strong>
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="sales-section" style={{ background: "var(--sales-surface)" }}>
        <div className="sales-section-inner">
          <div className="sales-section-label">Last Objections</div>
          <h2 className="sales-section-title">Questions that kill the sale — answered</h2>
          <br />
          <SalesFaq items={faqs} />
        </div>
      </section>

      <div className="sales-final-cta">
        <h2>
          Two paths.
          <br />
          Only one pays you.
        </h2>
        <p>
          <strong>Path 1:</strong> Close this page. Watch 3 more tutorials. Pick a new niche next month. Still no
          channel. Still no income. Still telling yourself &quot;soon.&quot;
          <br />
          <br />
          <strong>Path 2:</strong> Pay {pricing.checkoutSale}. Download tonight. Pick a niche. Paste the prompts. Upload
          your first video this week. Build an asset that pays you whether you&apos;re at work, asleep, or on holiday.
          <br />
          <br />
          Same phone. Same internet. Same 24 hours. Different decision.
        </p>
        <CheckoutLink showPrice pricePrefix=" — " className="sales-cta-primary" style={{ fontSize: 20, padding: "20px 52px" }}>
          I Choose Path 2 — Send Me the Playbook
        </CheckoutLink>
        <p className="sales-cta-note" style={{ marginTop: 16 }}>
          One-time {pricing.formattedSale} · Instant access ·{" "}
          <span>✓ Less than lunch — lasts forever</span>
        </p>
      </div>

      <footer className="sales-footer">
        <p style={{ marginBottom: 10 }}>© 2026 Faceless Blueprint. All rights reserved.</p>
        <p>
          Support: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
        <br />
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Service</Link>
        <Link href="/refund">Refund Policy</Link>
      </footer>
    </>
  );
}
