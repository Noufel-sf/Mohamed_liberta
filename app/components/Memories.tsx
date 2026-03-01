"use client";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80&fit=crop",
    alt: "Wedding couple",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80&fit=crop",
    alt: "Wedding ceremony",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80&fit=crop",
    alt: "Wedding reception",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80&fit=crop",
    alt: "Wedding rings",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80&fit=crop",
    alt: "Bride portrait",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80&fit=crop",
    alt: "Wedding dance",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80&fit=crop",
    alt: "Wedding bouquet",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80&fit=crop",
    alt: "Wedding bouquet",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1501901609772-df0848060b33?w=600&q=80&fit=crop",
    alt: "Couple portrait",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1501901609772-df0848060b33?w=600&q=80&fit=crop",
    alt: "Couple portrait",
  },
];

// Split into two rows for visual depth
const rowOne = images.slice(0, 4);
const rowTwo = images.slice(4, 8);

interface MarqueeRowProps {
  items: typeof images;
  reverse?: boolean;
  speed?: string; // e.g. "40s"
}

function MarqueeRow({ items, reverse = false, speed = "35s" }: MarqueeRowProps) {
  // Duplicate items to create seamless loop
  const track = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden w-full">
      <div
        className={[
          "flex gap-4 w-max",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        ].join(" ")}
        style={{ animationDuration: speed }}
      >
        {track.map((img, i) => (
          <div
            key={`${img.id}-${i}`}
            className="relative w-72 h-48 shrink-0 overflow-hidden group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* subtle overlay */}
            <div className="absolute inset-0 bg-[#1A1A18]/10 group-hover:bg-transparent transition-colors duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Memories() {
  return (
    <section
      id="memories"
      className="w-full py-24 overflow-hidden"
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4 mb-16 px-6">
        <p className="text-[0.7rem] tracking-[0.22em] uppercase text-primary">
          Our Work
        </p>
        <h2 className="font-serif font-light text-[2.6rem] lg:text-[3.8rem] leading-[1.06] tracking-tight text-[#1A1A18]">
          Memories we&apos;ve{" "}
          <em className="italic text-primary">captured.</em>
        </h2>
        <p className="text-[0.9rem] font-light leading-[1.85] text-[#7A7A75] max-w-md">
          Every frame tells a story. A glimpse into the moments we&apos;ve been
          trusted to preserve forever.
        </p>
        <div className="w-10 h-px bg-primary mt-1" />
      </div>

      {/* Marquee rows */}
      <div className="flex flex-col gap-4">
        <MarqueeRow items={rowOne} speed="40s" />
        <MarqueeRow items={rowTwo} reverse speed="32s" />
      </div>

    
    </section>
  );
}