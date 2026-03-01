"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Photographer with 10+ years of experience",
  "Timeless, natural editing style",
  "Full-day coverage with no hidden fees",
  "Private online gallery within 30 days",
  "Second shooter available on request",
  "Licensed prints & digital download included",
];

const stats = [
  { value: "150+", label: "Weddings Shot" },
  { value: "98%", label: "Happy Couples" },
  { value: "12+", label: "Years Experience" },
];

export default function WhyChooseMe() {
  return (
    <section className="w-full  py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ── LEFT: Text ── */}
        <div className="flex flex-col gap-7">
          {/* Icon chip */}
          <div className="self-start bg-white rounded-2xl shadow-sm p-3.5 border border-primary/20">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              className="w-7 h-7 text-primary"
            >
              <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </div>

          {/* Headline */}
          <div>
            <h2 className="text-[2.2rem] md:text-[2.8rem] font-bold text-[#0F1B3D] leading-tight mb-4">
              Why choose me as your photographer?
            </h2>
            <p className="text-[0.97rem] text-gray-500 font-light leading-[2] max-w-lg">
              I don't just take photos — I capture the emotions, the glances,
              and the moments that slip by in seconds. Every wedding I
              photograph is treated with the same care and dedication as if it
              were my own.
            </p>
          </div>

          {/* Features checklist */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
            {features.map((feat) => (
              <li key={feat} className="flex items-center gap-2.5">
                <CheckCircle2
                  className="shrink-0 text-primary w-5 h-5"
                  strokeWidth={1.8}
                />
                <span className="text-[0.9rem] text-gray-700 font-light">
                  {feat}
                </span>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="w-full h-px bg-primary/20" />

          {/* Stats row */}
          <div className="flex items-center">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center">
                <div className="flex flex-col px-6 first:pl-0">
                  <span className="text-[1.9rem] font-bold leading-none">
                    {s.value}
                  </span>
                  <span className="text-[0.75rem] text-gray-400 mt-1">
                    {s.label}
                  </span>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-px h-10 bg-primary/20 shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4 mt-1">
            <a
              href="#packages"
              className="
                inline-flex items-center gap-3
                bg-secondary hover:bg-primary text-white
                px-8 py-3.5 
                text-[0.88rem] font-semibold
                shadow-lg shadow-primary/30
                transition-all duration-300 hover:-translate-y-0.5
              "
            >
              View Packages
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="w-4 h-4"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="text-[0.88rem] text-primary font-medium hover:underline underline-offset-4 transition-all"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* ── RIGHT: Image ── */}
        <div className="relative flex justify-center">
          {/* Blob glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[420px] h-[420px] rounded-full bg-primary/20 blur-3xl" />
          </div>

          {/* Floating badge — top left */}
          <div className="absolute top-6 -left-2 z-20 bg-white rounded-2xl shadow-lg px-5 py-3 flex items-center gap-3">
            <span className="text-2xl font-bold text-primary">98%</span>
            <div className="flex flex-col leading-tight">
              <span className="text-[0.7rem] text-gray-400">Client</span>
              <span className="text-[0.78rem] text-gray-700 font-medium">
                Satisfaction
              </span>
            </div>
          </div>

          {/* Main image */}
          <div className="relative z-10 rotate-6 cursor-pointer hover:rotate-0 transition-all duration-500 w-[320] h-[400] md:w-[410] md:h-[460] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image
              src="/p1.png"
              alt="Photographer at work"
              fill
              className="object-cover transform-z-[10] object-center"
              sizes="(max-width: 768px) 320px, 410px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/15 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
