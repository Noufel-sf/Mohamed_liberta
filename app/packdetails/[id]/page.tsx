import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowLeft, Clock, Camera, Star } from "lucide-react";
import { packs } from "../../utils/data";
import PackItem from "@/app/components/PackItem";

export default async function PackDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params; // 🔥 IMPORTANT
  const pack = packs.find((p) => p.id === id);
  const otherPacks = packs.filter((p) => p.id !== id).slice(0, 3); // For "Other Packages" section  
  if (!pack) notFound();

  const {
    name,
    tagline,
    price,
    duration,
    features,
    highlighted,
    badge,
    cta = "Book This Package",
    coverImage,
  } = pack;

  return (
    <main className="min-h-screen">
      {/* ── Hero ── */}
      <div className="relative w-full h-[60vh] min-h-[400px] z-10">
        <Image
          src={coverImage}
          alt={`${name} package`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-secondary/55 " />

        {/* Back link */}
        <Link 
          href="/" 
          className="absolute top-8 left-8 z-50 flex items-center gap-2 text-white/70 hover:text-white text-[0.78rem] tracking-[0.1em] uppercase transition-colors duration-200 cursor-pointer"
        >
          <ArrowLeft size={14} />
          All Packages
        </Link>

        {/* Hero text */}
        <div className="absolute z-10 inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          {badge && (
            <span className="mb-5 px-4 py-1.5 bg-primary text-[#1A1A18] text-[0.6rem] font-semibold tracking-[0.18em] uppercase">
              {badge}
            </span>
          )}
          <h1 className="text-white font-light text-[3.5rem] lg:text-[5rem] tracking-tight leading-none mb-4">
            {name}
          </h1>
          <p className="text-white/60 text-[1rem] font-light max-w-md leading-relaxed">
            {tagline}
          </p>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* ── Left: Features ── */}
          <div className="lg:col-span-2 space-y-12">
            {/* Quick stats row */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3 text-[#1A1A18]">
                <Clock size={18} className="text-primary" />
                <span className="text-[0.85rem] font-light">{duration}</span>
              </div>
              <div className="flex items-center gap-3 text-[#1A1A18]">
                <Camera size={18} className="text-primary" />
                <span className="text-[0.85rem] font-light">
                  {features.length} deliverables
                </span>
              </div>
              <div className="flex items-center gap-3 text-[#1A1A18]">
                <Star size={18} className="text-primary" />
                <span className="text-[0.85rem] font-light">
                  Premium experience
                </span>
              </div>
            </div>

            <div className="w-full h-px bg-[#E8E4DC]" />

            {/* What's included */}
            <div>
              <h2 className="text-[1.5rem] font-light tracking-tight text-[#1A1A18] mb-8">
                What&apos;s <em className="italic text-primary">included</em>
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-3 text-[0.88rem] font-light text-[#5A5A56] leading-snug"
                  >
                    <Check
                      size={15}
                      strokeWidth={2}
                      className="shrink-0 mt-0.5 text-primary"
                    />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full h-px bg-[#E8E4DC]" />

            {/* Note */}
            <p className="text-[0.82rem] text-[#AEAAA4] leading-relaxed">
              All packages include travel within 50 miles. International travel
              available upon request. A 30% deposit secures your date. Remaining
              balance due 14 days before the event.
            </p>
          </div>

          {/* ── Right: Sticky Booking Card ── */}
          <div className="lg:col-span-1">
            <div
              className={[
                "sticky top-10 border p-8 bg-[#1A1A18] border-[#1A1A18]"
              ].join(" ")}
            >
              {/* Price */}
              <div className="flex items-end gap-1.5 mb-1">
                <span className="text-[2rem] text-primary mb-2 leading-none">
                  Dz
                </span>
                <span
                  className={[
                    "text-[3.2rem] font-light leading-none tracking-tighter text-white",
                  ].join(" ")}
                >
                  {price.toLocaleString()}
                </span>
              </div>

              <p
                className={[
                  "text-[0.7rem] tracking-[0.12em] uppercase mb-8",
                  highlighted ? "text-white/40" : "text-[#AEAAA4]",
                ].join(" ")}
              >
                {duration}
              </p>

              <div
                className={[
                  "w-full h-px mb-8",
                  highlighted ? "bg-white/10" : "bg-[#E8E4DC]",
                ].join(" ")}
              />

              {/* Mini features */}
              <ul className="flex flex-col gap-3 mb-10">
                {features.slice(0, 5).map((feat) => (
                  <li
                    key={feat}
                    className={[
                      "flex items-start gap-2.5 text-[0.8rem] font-light text-white/70" ,
                    ].join(" ")}
                  >
                    <Check
                      size={13}
                      strokeWidth={2}
                      className="shrink-0 mt-0.5 text-primary"
                    />
                    {feat}
                  </li>
                ))}
                {features.length > 5 && (
                  <li
                    className={[
                      "text-[0.78rem] font-light pl-5",
                      highlighted ? "text-white/40" : "text-[#AEAAA4]",
                    ].join(" ")}
                  >
                    + {features.length - 5} more included
                  </li>
                )}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={[
                  "block w-full py-4 text-center text-[0.72rem] font-medium tracking-[0.18em] uppercase",
                  "transition-colors duration-300 bg-primary text-[#1A1A18] hover:bg-white"
                ].join(" ")}
              >
                {cta}
              </a>

              <p
                className={[
                  "text-center text-[0.68rem] mt-4",
                  highlighted ? "text-white/30" : "text-[#AEAAA4]",
                ].join(" ")}
              >
                30% deposit to secure your date
              </p>
            </div>
          </div>
        </div>
      </div>
        {/* ── Other Packages ── */}
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-10">
            <h2 className="text-[2.5rem] capitalize font-light tracking-tight text-[#1A1A18] mb-8">
                Other <span className=" text-primary">packages </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {otherPacks.map((p) => (
                   <PackItem key={p.id} pack={p} />
                ))}
            </div>
        </div>
    </main>
  );
}
