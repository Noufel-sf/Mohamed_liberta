"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

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
  coverImage: string;
};

interface PackItemProps {
  pack: Pack;
}

export default  function PackItem({ pack }: PackItemProps) {
  const {
    id,
    badge,
    name,
    tagline,
    price,
    currency = "$",
    duration,
    highlighted = false,
    coverImage,
  } = pack;

  return (
    <Link
      href={`/packdetails/${id}`}
      className="group block focus:outline-none"
    >
      <article
        className={[
          "relative flex flex-col overflow-hidden",
          "group-hover:-translate-y-2 group-hover:shadow-2xl transition-transform duration-300 bg-secondary" ,
        ].join(" ")}
      >
        {/* ── Cover Image ── */}
        <div className="relative w-full h-56 overflow-hidden">
          <Image
            src={coverImage}
            alt={`${name} package cover`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Gradient fade into card body */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(26,26,24,0.85) 100%)",
            }}
          />

          {badge && (
            <span className="absolute top-4 left-4 z-10 px-3.5 py-1 bg-[#C8A882] text-[#1A1A18] text-[0.6rem] font-semibold tracking-[0.18em] uppercase">
              {badge}
            </span>
          )}

          {/* Arrow icon — appears on hover */}
          <span className="absolute bottom-4 right-4 z-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <ArrowRight size={14} className="text-secondary" />
          </span>
        </div>

        {/* ── Card Body ── */}
        <div className="relative flex flex-col flex-1 p-10">
          {/* Decorative corner triangle */}
          <span
            className={[
              "absolute top-0 right-0 w-16 h-16 pointer-events-none bg-secondary/10" ,
            ].join(" ")}
            style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
            aria-hidden="true"
          />

          {/* Ghost watermark */}
          <span
            className={[
              "absolute -bottom-4 right-2 text-[7rem] font-bold leading-none",
              "select-none pointer-events-none tracking-tighter text-white/[0.04]",
            ].join(" ")}
            aria-hidden="true"
          >
            {name.slice(0, 2).toUpperCase()}
          </span>

          {/* Name */}
          <h3
            className={[
              "text-[1.75rem] font-light tracking-tight leading-tight mb-2 text-white",
            ].join(" ")}
          >
            {name}
          </h3>

          {/* Tagline */}
          <p
            className={[
              "text-[0.83rem] font-light leading-relaxed mb-8 text-white/50",
            ].join(" ")}
          >
            {tagline}
          </p>

          {/* Divider */}
          <div
            className={[
              "w-full h-px mb-7 bg-white/10",
            ].join(" ")}
          />

          {/* Price */}
          <div className="flex items-end gap-1.5 mb-1.5">
            <span className="text-[1.05rem] font-normal text-[#C8A882] mb-1.5 leading-none">
              {currency}
            </span>
            <span
              className={[
                "text-[3.4rem] font-light leading-none tracking-tighter text-white",
              ].join(" ")}
            >
              {price.toLocaleString()}
            </span>
          </div>

          {/* Duration */}
          <p
            className={[
              "text-[0.7rem] font-normal tracking-[0.12em] uppercase mb-8",
              highlighted ? "text-white/40" : "text-[#AEAAA4]",
            ].join(" ")}
          >
            {duration}
          </p>

          <button className="w-full cursor-pointer py-3.5 bg-primary text-[#FEFEFE] text-[0.72rem] tracking-[0.15em] uppercase hover:bg-primary transition-colors duration-300">
            Select Package
          </button>

       
        </div>
      </article>
    </Link>
  );
}
