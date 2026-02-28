"use client";

import PackItem, { type Pack } from "./PackItem";

const packs: Pack[] = [
  {
    id: "essential",
    name: "Essential",
    tagline: "Perfect for intimate ceremonies and small celebrations.",
    price: 1800,
    duration: "Up to 6 hours coverage",
    features: [
      "1 professional photographer",
      "6 hours of coverage",
      "300+ edited high-res images",
      "Private online gallery",
      "30-day delivery",
      "Print release included",
    ],
  },
  {
    id: "signature",
    badge: "Most Popular",
    name: "Signature",
    tagline: "Our most loved package — covers your full wedding day.",
    price: 3200,
    duration: "Up to 10 hours coverage",
    highlighted: true,
    features: [
      "1 lead photographer + 1 second shooter",
      "10 hours of coverage",
      "600+ edited high-res images",
      "Engagement session (1 hr)",
      "Private online gallery",
      "30-day delivery",
      "Luxury USB keepsake",
      "Print release included",
    ],
  },
  {
    id: "prestige",
    name: "Prestige",
    tagline: "Full-day cinematic coverage with premium deliverables.",
    price: 5500,
    duration: "Full day + rehearsal dinner",
    cta: "Inquire Now",
    features: [
      "2 photographers, full day",
      "Rehearsal dinner coverage",
      "900+ edited high-res images",
      "Engagement session (2 hrs)",
      "Fine art album (30 pages)",
      "Private online gallery",
      "20-day priority delivery",
      "Luxury USB keepsake",
      "Print release included",
    ],
  },
];

export default function PacksSection() {
  return (
    <section
      id="packages"
      className="w-full py-28 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center gap-5 mb-20">
          <p className="text-[0.7rem] tracking-[0.22em] uppercase text-[#C8A882]">
            Packages & Pricing
          </p>

          <h2 className="text-[2.8rem] lg:text-[4rem] font-light leading-[1.06] tracking-tight text-[#1A1A18]">
            Find your perfect{" "}
            <span className="italic text-[#C8A882]">package.</span>
          </h2>

          <p className="max-w-lg text-[0.92rem] leading-[1.85] text-[#7A7A75] font-light">
            Every wedding is different. These packages are a starting point — I'm
            always happy to tailor something unique to your day.
          </p>

          <div className="w-10 h-px bg-[#C8A882] mt-2" />
        </div>

        {/* ── Packs Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {packs.map((pack) => (
            <PackItem key={pack.id} pack={pack} />
          ))}
        </div>

        {/* ── Footnote ── */}
        <p className="text-center text-[0.78rem] text-[#AEAAA4] mt-12 leading-relaxed">
          All packages include travel within 50 miles. International travel available upon request.{" "}
          <br />
          A 30% deposit secures your date.
        </p>

      </div>
    </section>
  );
}