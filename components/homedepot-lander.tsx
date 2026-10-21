"use client"

import { useState } from "react"

const AFFILIATE_LINK = "https://giftclick.org/aff_c?offer_id=2442&aff_id=26188"

const ACCENT = "#F96302"
const ACCENT_BRIGHT = "#FF8A3D"
const ACCENT_DEEP = "#3D1500"
const HOLIDAY_RED = "#C8102E"
const ACCENT_NUMERAL = "#FDD9C0"
const ACCENT_TINT = "#FEE8D8"
const SECTION_TINT = "#FBF6F5"
const INK = "#111213"

const HERO_GRADIENT = `linear-gradient(165deg, ${ACCENT} 0%, #C44D00 50%, ${ACCENT_DEEP} 100%)`

const GIFT_ICON =
  "M4 10h16v10.5H4z M3 6.5h18V10H3z M12 6.5v14 M12 6.5c-1.8 0-4.2-.6-4.2-2.2 0-1.3 1.4-1.8 2.4-1.2 1 .6 1.8 2 1.8 3.4z M12 6.5c1.8 0 4.2-.6 4.2-2.2 0-1.3-1.4-1.8-2.4-1.2-1 .6-1.8 2-1.8 3.4z"
const TREE_ICON = "M12 3l4.5 6H14l4 5.5h-3l4 5.5H5l4-5.5H6l4-5.5H7.5z M12 20v1.5"
const SNOWFLAKE_ICON =
  "M12 3v18 M4.2 7.5l15.6 9 M4.2 16.5l15.6-9 M9.8 4.8L12 7l2.2-2.2 M9.8 19.2L12 17l2.2 2.2"
const BULB_ICON =
  "M3 4.5c3 1.6 6 1.6 9 0 3-1.6 6-1.6 9 0 M10.2 6h3.6v3h-3.6z M12 9c-2.8 2.6-4 5.2-4 7.4a4 4 0 008 0c0-2.2-1.2-4.8-4-7.4z"
const SNOWMAN_ICON =
  "M12 11.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z M12 5.5a3 3 0 110 6 3 3 0 010-6z M9.5 5.5h5 M10.5 5.5V3h3v2.5"
const WRENCH_ICON =
  "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"

const STEPS = [
  {
    t: "Click apply now",
    d: "Start your application — it takes seconds.",
    icon: "M9 9l10.5 3.5-4.5 2-2 4.5L9 9z M4 4l1.5 1.5 M4 9h2 M9 4v2",
  },
  { t: "Enter your email", d: "Quick 30-second signup process.", icon: "M3 7l9 6 9-6 M3.5 5.5h17v13h-17z" },
  {
    t: "Complete the survey",
    d: "Share your holiday shopping preferences.",
    icon: "M5 6a2 2 0 012-2h10a2 2 0 012 2v13a2 2 0 01-2 2H7a2 2 0 01-2-2V6z M9 10h6 M9 14h6",
  },
  {
    t: "Complete 5+ deals",
    d: "Simple tasks like app downloads & trials.",
    icon: GIFT_ICON,
  },
  {
    t: "Receive your discount",
    d: "Delivered straight to your inbox — just in time for Christmas.",
    icon: "M8 21h8 M12 17v4 M7 4h10v5a5 5 0 01-10 0V4z M7 6H4v1a4 4 0 004 4 M17 6h3v1a4 4 0 01-4 4",
  },
]

const CATEGORIES = [
  {
    t: "Christmas Trees & Wreaths",
    d: "Pre-lit artificial trees, fresh-cut firs, wreaths, and garland to deck the halls from the front door in.",
    icon: TREE_ICON,
  },
  {
    t: "Holiday Lights & Outdoor Decor",
    d: "LED string lights, icicle lights, projectors, and pathway markers to make your home the brightest on the block.",
    icon: BULB_ICON,
  },
  {
    t: "Inflatables & Yard Decor",
    d: "Giant inflatable snowmen, Santas, and reindeer, plus light-up yard sculptures for a show-stopping lawn.",
    icon: SNOWMAN_ICON,
  },
  {
    t: "Power Tools & DIY Gifts",
    d: "Drills, tool sets, and workshop gear — the gifts every DIYer on your list is hoping to unwrap.",
    icon: WRENCH_ICON,
  },
]

const FAQS = [
  {
    q: "What are deals?",
    a: "Simple tasks like app downloads, surveys, or trial subscriptions. Each deal is straightforward and designed to be completed quickly.",
  },
  {
    q: "How many do I need?",
    a: "Complete 5+ deals to receive your reward. The more deals you complete, the faster you can receive your discount code toward your Home Depot Christmas order.",
  },
  {
    q: "How long do they take?",
    a: "Typically 10-20 minutes per deal. Most users complete all required deals within a few hours spread across a day or two — plenty of time before Christmas.",
  },
]

const AVATARS = [
  { src: "/avatars/homedepot-shopper-1.webp", alt: "Woman in her thirties with shoulder-length auburn hair in a red flannel shirt" },
  { src: "/avatars/homedepot-shopper-2.webp", alt: "Man in his forties with a short beard in a green knit sweater" },
  { src: "/avatars/homedepot-shopper-3.webp", alt: "Woman in her fifties with dark wavy hair in a cream cable-knit sweater" },
]

function Icon({ d, className = "w-6 h-6", color = ACCENT }: { d: string; className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {d.split(" M").map((p, i) => (
        <path key={i} d={(i === 0 ? "" : "M") + p} />
      ))}
    </svg>
  )
}

function CTAButton({
  children,
  brand = false,
  large = false,
}: {
  children: React.ReactNode
  brand?: boolean
  large?: boolean
}) {
  return (
    <a
      href={AFFILIATE_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-btn group inline-flex items-center gap-2 rounded-full font-semibold ${
        large ? "px-9 py-4 text-lg" : "px-7 py-3.5 text-base"
      }`}
      style={brand ? { backgroundColor: ACCENT, color: "#FFFFFF" } : { backgroundColor: "#FFFFFF", color: INK }}
    >
      {children}
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </a>
  )
}

function TimelineRow({ step, index }: { step: (typeof STEPS)[number]; index: number }) {
  const leftSide = index % 2 === 0
  return (
    <div className="relative grid grid-cols-[3rem_1fr] md:grid-cols-[1fr_3.5rem_1fr] gap-x-4 md:gap-x-8 items-center pb-6 md:pb-8 last:pb-0">
      <div
        className={`hidden md:flex items-center ${leftSide ? "md:order-3 justify-start" : "md:order-1 justify-end"}`}
        aria-hidden="true"
      >
        <span className="font-black text-6xl lg:text-7xl leading-none select-none" style={{ color: ACCENT_NUMERAL }}>
          0{index + 1}
        </span>
      </div>

      <div className="order-1 md:order-2 flex justify-center self-start md:self-center pt-1 md:pt-0">
        <div
          className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm z-10"
          style={{
            backgroundColor: ACCENT,
            borderColor: ACCENT,
            color: "#FFFFFF",
            boxShadow: "0 8px 22px rgba(249,99,2,.35)",
          }}
        >
          {index + 1}
        </div>
      </div>

      <div
        className={`t-card order-2 rounded-2xl p-5 bg-white border border-gray-200 shadow-sm ${
          leftSide ? "md:order-1" : "md:order-3"
        }`}
      >
        <div className={`flex items-start gap-4 ${leftSide ? "md:flex-row-reverse md:text-right" : ""}`}>
          <div
            className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: ACCENT_TINT }}
          >
            <Icon d={step.icon} className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg leading-snug">{step.t}</h3>
            <p className="mt-1 text-gray-500 leading-relaxed text-sm">{step.d}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatusBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-sm font-medium text-white">
      <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
      {"Applications Open"}
    </span>
  )
}

export default function HomeDepotRewardLander() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="min-h-screen bg-white antialiased overflow-x-hidden font-sans" style={{ color: INK }}>
      <style>{`
        .cta-btn { transition: transform .15s ease, box-shadow .2s ease; }
        .cta-btn:hover { transform: scale(1.04); box-shadow: 0 12px 32px rgba(61,21,0,0.35); }
        .cta-btn:active { transform: scale(0.98); }

        .orb { position: absolute; border-radius: 9999px; filter: blur(70px); opacity: .45; animation: orbDrift 12s ease-in-out infinite; }
        @keyframes orbDrift {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.15); }
        }

        .drifter { position: absolute; opacity: .2; animation: drift 9s ease-in-out infinite; }
        @keyframes drift {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-22px) rotate(8deg); }
        }

        .cat-card { transition: transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s ease; }
        .cat-card:hover { transform: translateY(-8px) scale(1.01); box-shadow: 0 24px 48px rgba(17,24,39,0.12); }
        .cat-card:hover .cat-icon { transform: translateY(-4px) rotate(4deg) scale(1.08); }
        .cat-icon { transition: transform .3s cubic-bezier(.34,1.56,.64,1); }
        .card-shine { position: absolute; inset: 0; pointer-events: none; background: linear-gradient(115deg, transparent 35%, rgba(249,99,2,0.05) 47%, rgba(255,255,255,0.55) 52%, transparent 65%); background-size: 260% 100%; animation: cardShine 7s ease-in-out infinite; }
        @keyframes cardShine { 0%, 55% { background-position: 135% 0; } 85%, 100% { background-position: -60% 0; } }
        .icon-bob { animation: iconBob 4.5s ease-in-out infinite; }
        @keyframes iconBob { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-5px) rotate(-5deg); } }
        .cat-spark { position: absolute; top: 16px; right: 18px; color: ${HOLIDAY_RED}; animation: sparkTwinkle 3.4s ease-in-out infinite; }
        @keyframes sparkTwinkle { 0%, 100% { transform: scale(.75) rotate(0deg); opacity: .35; } 50% { transform: scale(1.2) rotate(25deg); opacity: .9; } }

        .faq-body { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .35s cubic-bezier(.16,1,.3,1); }
        .faq-body.open { grid-template-rows: 1fr; }
        .faq-inner { overflow: hidden; }

        .pulse-dot { animation: pulseDot 1.8s ease-in-out infinite; }
        @keyframes pulseDot { 0%,100% { box-shadow: 0 0 0 0 rgba(74,222,128,.6); } 50% { box-shadow: 0 0 0 7px rgba(74,222,128,0); } }

        .t-card { transition: transform .25s cubic-bezier(.16,1,.3,1), border-color .25s ease, box-shadow .25s ease; }
        .t-card:hover { transform: translateY(-6px); border-color: rgba(249,99,2,.35); box-shadow: 0 18px 44px rgba(249,99,2,.12); }
        .t-rail-fill { background: linear-gradient(180deg, ${ACCENT_BRIGHT}, ${ACCENT}); }

        @media (prefers-reduced-motion: reduce) {
          *, .orb, .drifter, .card-shine, .icon-bob, .cat-spark, .pulse-dot { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: HERO_GRADIENT }}>
        <div className="orb w-96 h-96 -top-24 -left-24" style={{ backgroundColor: "#FFC08A", opacity: 0.3 }} />
        <div className="orb w-80 h-80 top-1/3 -right-20" style={{ backgroundColor: HOLIDAY_RED, opacity: 0.45, animationDelay: "-6s" }} />
        <div className="drifter left-[8%] top-[30%]">
          <Icon d={TREE_ICON} color="#FFFFFF" className="w-9 h-9" />
        </div>
        <div className="drifter right-[10%] top-[18%]" style={{ animationDelay: "-3s" }}>
          <Icon d={SNOWFLAKE_ICON} color="#FFFFFF" className="w-9 h-9" />
        </div>
        <div className="drifter left-[16%] bottom-[12%]" style={{ animationDelay: "-5s" }}>
          <Icon d={GIFT_ICON} color="#FFFFFF" className="w-9 h-9" />
        </div>
        <div className="drifter right-[14%] bottom-[18%]" style={{ animationDelay: "-7s" }}>
          <Icon d={SNOWFLAKE_ICON} color="#FFFFFF" className="w-8 h-8" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 pt-12 pb-20 md:pt-20 md:pb-24 text-center text-white">
          <StatusBadge />
          <h1 className="mt-6 font-black tracking-tight leading-[1.05] text-[1.7rem] min-[344px]:text-[1.88rem] min-[376px]:text-[2.07rem] min-[408px]:text-[2.25rem] min-[440px]:text-[2.44rem] min-[472px]:text-[2.62rem] min-[504px]:text-[2.81rem] min-[536px]:text-[2.99rem] min-[568px]:text-[3.17rem] min-[600px]:text-[3.36rem] min-[632px]:text-[3.54rem] min-[664px]:text-[3.73rem] min-[696px]:text-[3.91rem] min-[728px]:text-[4.15rem] text-balance">
            {"The Home Depot Discounts They Don't Advertise"}
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-xl mx-auto leading-relaxed text-pretty text-white/85">
            {
              "Discover how shoppers are unlocking hidden Home Depot discounts this Christmas — on trees and wreaths, holiday lights, yard inflatables, and tool gifts."
            }
          </p>
          <div className="mt-9 flex items-center justify-center gap-x-5 gap-y-9 flex-wrap">
            <CTAButton large>Apply Now</CTAButton>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {AVATARS.map((a) => (
                  <span
                    key={a.src}
                    className="w-11 h-11 rounded-full border-2 border-white overflow-hidden inline-block shadow-md"
                    style={{ backgroundColor: ACCENT_BRIGHT }}
                  >
                    <img
                      src={a.src}
                      alt={a.alt}
                      width={88}
                      height={88}
                      className="w-full h-full object-cover text-transparent"
                      loading="eager"
                      decoding="async"
                    />
                  </span>
                ))}
              </div>
              <span className="text-sm leading-tight max-w-[200px] text-left text-white/80">
                {"Join 12,000+ shoppers who've already claimed their discounts"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FIVE STEPS ──────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white">
        <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="text-center">
            <div className="text-sm font-semibold tracking-widest uppercase" style={{ color: ACCENT }}>
              How it works
            </div>
            <h2 className="mt-3 font-black tracking-tight text-3xl md:text-5xl text-balance">
              Five Simple Steps to Claiming Your Discounts
            </h2>
          </div>

          <div className="relative mt-10">
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[3px] rounded-full bg-gray-200" />
            <div className="t-rail-fill absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[3px] rounded-full" />

            {STEPS.map((step, i) => (
              <TimelineRow key={step.t} step={step} index={i} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <CTAButton brand large>
              Apply Now
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ──────────────────────────────────── */}
      <section style={{ backgroundColor: SECTION_TINT }}>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 text-center">
          <div className="text-sm font-semibold tracking-widest uppercase" style={{ color: HOLIDAY_RED }}>
            Holiday Decor &amp; Gifts
          </div>
          <h2 className="mt-3 font-black tracking-tight text-3xl md:text-5xl text-balance">
            What You Can Do With Your Discount This Christmas
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 gap-5 text-left">
            {CATEGORIES.map((c, i) => (
              <div
                key={c.t}
                className="cat-card relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm p-7 flex items-start gap-5"
              >
                <div className="card-shine" style={{ animationDelay: `${i * 1.8}s` }} aria-hidden="true" />
                <span className="cat-spark" style={{ animationDelay: `${i * 0.8}s` }} aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z" />
                  </svg>
                </span>
                <div
                  className="cat-icon w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: ACCENT_TINT }}
                >
                  <div className="icon-bob" style={{ animationDelay: `${i * 0.6}s` }}>
                    <Icon d={c.icon} className="w-7 h-7" />
                  </div>
                </div>
                <div className="relative">
                  <h3 className="font-bold text-2xl">{c.t}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20 text-center">
          <div className="text-sm font-semibold tracking-widest uppercase" style={{ color: ACCENT }}>
            Questions &amp; answers
          </div>
          <h2 className="mt-3 font-black tracking-tight text-3xl md:text-5xl text-balance">Frequently Asked Questions</h2>

          <div className="mt-10 flex flex-col gap-4 text-left">
            {FAQS.map((f, i) => (
              <div key={f.q} className="rounded-2xl bg-white border border-gray-200 shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-bold text-lg">{f.q}</span>
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200"
                    style={{ backgroundColor: openFaq === i ? ACCENT : "#F2F3F5" }}
                  >
                    <svg
                      viewBox="0 0 20 20"
                      className={`w-4 h-4 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 8l5 5 5-5"
                        stroke={openFaq === i ? "#FFFFFF" : INK}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <div className={`faq-body ${openFaq === i ? "open" : ""}`}>
                  <div className="faq-inner">
                    <p className="px-5 pb-5 text-gray-600 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINALE ──────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: HERO_GRADIENT }}>
        <div className="orb w-96 h-96 -top-24 -left-24" style={{ backgroundColor: HOLIDAY_RED, opacity: 0.45 }} />
        <div className="orb w-80 h-80 -bottom-24 -right-16" style={{ backgroundColor: "#FFD0A8", opacity: 0.25, animationDelay: "-5s" }} />
        <div className="drifter left-[10%] top-[20%]" style={{ animationDelay: "-2s" }}>
          <Icon d={SNOWFLAKE_ICON} color="#FFFFFF" className="w-8 h-8" />
        </div>
        <div className="drifter right-[12%] bottom-[22%]" style={{ animationDelay: "-6s" }}>
          <Icon d={TREE_ICON} color="#FFFFFF" className="w-9 h-9" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 py-20 md:py-28 text-center text-white">
          <StatusBadge />
          <h2 className="mt-6 font-black tracking-tight text-4xl md:text-6xl leading-[1.05] text-balance">
            Ready to Start Saving This Christmas?
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto leading-relaxed text-pretty text-white/85">
            {
              "Join thousands of shoppers who have already claimed their discount code. Your Home Depot Christmas savings are just a few clicks away."
            }
          </p>

          <div className="mt-12">
            <CTAButton large>Apply Now</CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}
