"use client";

import { Check } from "lucide-react";

export type Pack = {
  id: string;
  badge?: string;
  name: string;
  tagline: string;
  price: number;
  currency?: string;
  duration: string;
  features: string[];
  highlighted?: boolean;
  cta?: string;
};

interface PackItemProps {
  pack: Pack;
}

export default function PackItem({ pack }: PackItemProps) {
  const {
    badge,
    name,
    tagline,
    price,
    currency = "$",
    duration,
    features,
    highlighted = false,
    cta = "Book This Package",
  } = pack;

  return (
    <article
      className={[
        "relative flex flex-col overflow-hidden border p-10",
        "hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300",
        highlighted
          ? "bg-[#1A1A18] border-[#1A1A18]"
          : "bg-white border-[#E8E4DC]",
      ].join(" ")}
    >

      {/* ── Decorative corner triangle ── */}
      <span
        className={[
          "absolute top-0 right-0 w-16 h-16 pointer-events-none",
          highlighted ? "bg-[#C8A882]/10" : "bg-[#C8A882]/5",
        ].join(" ")}
        style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
        aria-hidden="true"
      />

      {/* ── Ghost watermark ── */}
      <span
        className={[
          "absolute -bottom-4 right-2 text-[7rem] font-bold leading-none",
          "select-none pointer-events-none tracking-tighter",
          highlighted ? "text-white/[0.04]" : "text-[#1A1A18]/[0.04]",
        ].join(" ")}
        aria-hidden="true"
      >
        {name.slice(0, 2).toUpperCase()}
      </span>

      {/* ── Badge ── */}
      {badge && (
        <span className="self-start mb-7 px-3.5 py-1 bg-[#C8A882] text-[#1A1A18] text-[0.6rem] font-semibold tracking-[0.18em] uppercase">
          {badge}
        </span>
      )}

      {/* ── Name ── */}
      <h3
        className={[
          "text-[1.75rem] font-light tracking-tight leading-tight mb-2",
          highlighted ? "text-white" : "text-[#1A1A18]",
        ].join(" ")}
      >
        {name}
      </h3>

      {/* ── Tagline ── */}
      <p
        className={[
          "text-[0.83rem] font-light leading-relaxed mb-8",
          highlighted ? "text-white/50" : "text-[#7A7A75]",
        ].join(" ")}
      >
        {tagline}
      </p>

      {/* ── Divider ── */}
      <div
        className={[
          "w-full h-px mb-7",
          highlighted ? "bg-white/10" : "bg-[#E8E4DC]",
        ].join(" ")}
      />

      {/* ── Price ── */}
      <div className="flex items-end gap-1.5 mb-1.5">
        <span className="text-[1.05rem] font-normal text-[#C8A882] mb-1.5 leading-none">
          {currency}
        </span>
        <span
          className={[
            "text-[3.4rem] font-light leading-none tracking-tighter",
            highlighted ? "text-white" : "text-[#1A1A18]",
          ].join(" ")}
        >
          {price.toLocaleString()}
        </span>
      </div>

      {/* ── Duration ── */}
      <p
        className={[
          "text-[0.7rem] font-normal tracking-[0.12em] uppercase mb-8",
          highlighted ? "text-white/40" : "text-[#AEAAA4]",
        ].join(" ")}
      >
        {duration}
      </p>

      {/* ── Features list ── */}
      <ul className="flex flex-col gap-3.5 flex-1 mb-9">
        {features.map((feat) => (
          <li
            key={feat}
            className={[
              "flex items-start gap-3 text-[0.86rem] font-light leading-snug",
              highlighted ? "text-white/75" : "text-[#5A5A56]",
            ].join(" ")}
          >
            <Check
              size={14}
              strokeWidth={2}
              className="shrink-0 mt-0.5 text-[#C8A882]"
            />
            {feat}
          </li>
        ))}
      </ul>

      {/* ── CTA Button ── */}
      <a
        href="#contact"
        className={[
          "w-full py-4 text-center text-[0.72rem] font-medium tracking-[0.18em] uppercase",
          "transition-colors duration-300 cursor-pointer",
          highlighted
            ? "bg-[#C8A882] text-[#1A1A18] hover:bg-white hover:text-[#1A1A18]"
            : "bg-[#1A1A18] text-white hover:bg-[#C8A882] hover:text-[#1A1A18]",
        ].join(" ")}
      >
        {cta}
      </a>
    </article>
  );
}