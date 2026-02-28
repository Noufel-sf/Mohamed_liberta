"use client";

import { useEffect, useRef } from "react";
import { Camera, Heart, Clock, Globe, Award, Users } from "lucide-react";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: <Camera size={22} strokeWidth={1.5} />,
    title: "Documentary Style",
    description:
      "Every frame tells a real story. I shoot candidly, letting emotions unfold naturally without interrupting your day.",
  },
  {
    icon: <Heart size={22} strokeWidth={1.5} />,
    title: "Personal & Intimate",
    description:
      "I take on a limited number of weddings each year so every couple gets my full attention, care, and creative energy.",
  },
  {
    icon: <Clock size={22} strokeWidth={1.5} />,
    title: "30-Day Delivery",
    description:
      "Your full gallery delivered within 30 days — fully edited, color-graded, and ready to relive forever.",
  },
];

export default function WhyChooseUs() {
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.12 },
    );

    if (headingRef.current) observer.observe(headingRef.current);
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`

        .fade-up {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .fade-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .feature-card {
          transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }
        .feature-card:hover {
          background: #1A1A18 !important;
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(26,26,24,0.12);
        }
        .feature-card:hover .card-icon {
          color: #C8A882;
          border-color: #C8A882;
        }
        .feature-card:hover .card-title {
          color: #FEFEFE;
        }
        .feature-card:hover .card-desc {
          color: rgba(254,254,254,0.55);
        }
        .feature-card:hover .card-line {
          background: #C8A882;
        }
        .feature-card:hover .card-number {
          color: rgba(254,254,254,0.07);
        }
      `}</style>

      <section
        id="why-choose-us"
        className="w-full py-28 px-6 md:px-16 lg:px-24 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-left capitalize text-[2.8rem] lg:text-[3rem] font-light leading-[1.06] text-[#1A1A18] mb-20">
            my <span className="text-[#C8A882]">values</span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E8E4DC]">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="feature-card cursor-pointer fade-up bg-[#F7F4EF] p-10 relative overflow-hidden flex flex-col gap-6"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* Background number */}
                <span
                  className="card-number absolute -bottom-4 -right-2 text-[7rem] font-light leading-none select-none transition-colors duration-300"
                  style={{
                    color: "rgba(26,26,24,0.04)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="card-icon w-12 h-12 flex items-center justify-center border border-[#E8E4DC] text-[#1A1A18] transition-colors duration-300">
                  {feature.icon}
                </div>

                {/* Accent line */}
                <div className="card-line w-8 h-px bg-[#C8A882] transition-colors duration-300" />

                {/* Title */}
                <h3 className="card-title text-[1.15rem] font-light text-[#1A1A18] transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="card-desc text-[0.88rem] leading-[1.85] text-[#7A7A75] font-light transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* ── BOTTOM BANNER ── */}
          <div className="fade-up mt-px bg-[#1A1A18] p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              className="text-[1.6rem] md:text-[2rem] font-light text-[#FEFEFE] leading-snug"
            >
              Ready to tell{" "}
              <em className="italic text-[#C8A882]">your story?</em>
            </p>
            <a
              href="#contact"
              className="shrink-0 inline-block px-10 py-4 border border-[#C8A882] text-[#C8A882] text-[0.72rem] tracking-[0.18em] uppercase hover:bg-[#C8A882] hover:text-[#1A1A18] transition-all duration-300"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
