"use client";

import PackItem  from "./PackItem";
import { packs } from "../utils/data";


export default function PacksSection() {
  return (
    <section
      id="packages"
      className="w-full py-28 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center gap-5 mb-20">
          <p className="text-[0.7rem] tracking-[0.22em] uppercase text-primary">
            Packages & Pricing
          </p>

          <h2 className="text-[2.8rem] capitalize lg:text-[4rem] font-light leading-[1.06] tracking-tight text-[#1A1A18]">
            Find your perfect{" "}
            <span className="text-primary">package.</span>
          </h2>

          <p className="max-w-lg text-[0.92rem] leading-[1.85] text-[#7A7A75] font-light">
            Every wedding is different. These packages are a starting point — I'm
            always happy to tailor something unique to your day.
          </p>

          <div className="w-10 h-px bg-primary mt-2" />
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