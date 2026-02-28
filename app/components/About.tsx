"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.15 },
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="about"
        className="w-full py-28 px-12 md:px-16 lg:px-24"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ── LEFT — IMAGE ── */}
          <div ref={imageRef} className="fade-left relative">
            {/* Decorative corner border */}

            {/* Image wrapper with overflow hidden for zoom effect */}
            <div className="relative z-10 overflow-hidden img-zoom">
              <Image
                src="/mh.png"
                alt="Ethan Cole — Wedding Photographer"
                width={600}
                height={780}
                className="w-full object-cover"
                priority
              />
            </div>

            {/* Floating years badge */}
            <div className="absolute -bottom-7 -right-3 z-20 w-[104px] h-[104px] bg-[#1A1A18] flex flex-col items-center justify-center gap-0.5">
              <span
                // style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                className="text-[2.2rem] font-light text-[#C8A882] leading-none"
              >
                8+
              </span>
              <span className="text-[0.58rem] tracking-[0.18em] uppercase text-[#FEFEFE] opacity-70">
                Years
              </span>
            </div>
          </div>

          {/* ── RIGHT — TEXT ── */}
          <div ref={textRef} className="fade-right flex flex-col gap-7">
            {/* Eyebrow */}
            <p className="text-[0.7rem] tracking-[0.22em] uppercase text-[#C8A882]">
              About Me
            </p>

            {/* Heading */}
            <h2
              //   style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              className="text-[2.8rem] capitalize lg:text-[3.6rem] font-light leading-[1.08] text-[#1A1A18]"
            >
              I capture love <br />
              <span className=" text-[#C8A882]">as it unfolds.</span>
            </h2>

            {/* Divider */}
            <div className="w-12 h-px bg-[#C8A882]" />

            {/* Bio paragraphs */}
            <p className="text-[0.95rem] leading-[1.85] text-[#7A7A75] font-light">
              Hi, I'm{" "}
              <strong className="text-[#1A1A18] font-medium">Ethan Cole</strong>{" "}
              — a wedding photographer based in New York, specializing in
              documentary-style storytelling. I believe the best wedding photos
              aren't posed; they're the quiet glances, the happy tears, the
              first dance that goes on a little too long.
            </p>

            <p className="text-[0.95rem] leading-[1.85] text-[#7A7A75] font-light">
              With over 8 years and 200+ weddings behind the lens, I bring a
              calm, unobtrusive presence to your day — so you can live every
              moment while I preserve it forever.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-[#E8E4DC]">
              {[
                { value: "200+", label: "Weddings" },
                { value: "15+", label: "Countries" },
                { value: "98%", label: "Returning Clients" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span
                    // style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                    className="text-[2rem] font-light text-[#1A1A18]"
                  >
                    {stat.value}
                  </span>
                  <span className="text-[0.68rem] tracking-[0.16em] uppercase text-[#7A7A75]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-8 pt-2">
              <a
                href="#contact"
                className="inline-block px-9 py-3.5 bg-[#1A1A18] text-[#FEFEFE] text-[0.72rem] tracking-[0.15em] uppercase hover:bg-[#C8A882] transition-colors duration-300"
              >
                Work With Me
              </a>
              <a
                href="#gallery"
                className="text-[0.72rem] tracking-[0.12em] uppercase text-[#7A7A75] border-b border-[#7A7A75] pb-0.5 hover:text-[#1A1A18] hover:border-[#1A1A18] transition-colors duration-200"
              >
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
