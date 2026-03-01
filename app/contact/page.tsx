import Link from "next/link";

const socials = [
  {
    id: "instagram",
    label: "Instagram",
    handle: "@yourhandle",
    href: "https://instagram.com/yourhandle",
    description: "Follow my work & behind the scenes",
    color: "hover:border-[#E1306C] hover:text-[#E1306C]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "facebook",
    label: "Facebook",
    handle: "Your Name Photography",
    href: "https://facebook.com/yourpage",
    description: "Like my page for updates & galleries",
    color: "hover:border-[#1877F2] hover:text-[#1877F2]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    handle: "+1 (000) 000-0000",
    href: "https://wa.me/10000000000",
    description: "Message me directly to book a session",
    color: "hover:border-[#25D366] hover:text-[#25D366]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.862L.057 23.998l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.034-1.388l-.361-.214-3.741.981.998-3.648-.235-.374A9.818 9.818 0 1112 21.818z" />
      </svg>
    ),
  },
  {
    id: "telegram",
    label: "Telegram",
    handle: "@yourhandle",
    href: "https://t.me/yourhandle",
    description: "Chat or send files securely",
    color: "hover:border-[#229ED9] hover:text-[#229ED9]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 14.4l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.888.16z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen  flex flex-col">

      {/* ── Hero ── */}
      <div className="w-full pt-24 pb-16 px-6 text-center">
        <p className="text-[0.7rem] tracking-[0.22em] uppercase text-primary mb-5">
          Get In Touch
        </p>
        <h1 className="font-serif font-light text-[3rem] lg:text-[4.5rem] leading-[1.06] tracking-tight text-[#1A1A18] mb-5">
          Let&apos;s create something{" "}
          <em className="italic text-primary">beautiful.</em>
        </h1>
        <p className="text-[0.92rem] font-light leading-[1.85] text-[#7A7A75] max-w-md mx-auto">
          Ready to book or just have a question? Reach out on any of the platforms below — I usually respond within a few hours.
        </p>
        <div className="w-10 h-px bg-primary mx-auto mt-8" />
      </div>

      {/* ── Social Cards ── */}
      <div className="flex-1 w-full max-w-4xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {socials.map((s) => (
            <Link
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={[
                "group flex items-start gap-6 p-8 bg-primary ",
                "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                s.color,
              ].join(" ")}
            >
              {/* Icon */}
              <div className="shrink-0 mt-0.5 transition-colors duration-300 group-hover:inherit">
                {s.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1 min-w-0">
                <span className="text-[0.65rem] font-medium tracking-[0.18em] uppercase">
                  {s.label}
                </span>
                <span className="text-[1.15rem] font-light tracking-tight text-secondary truncate">
                  {s.handle}
                </span>
                <span className="text-[0.8rem] font-light  leading-snug mt-0.5">
                  {s.description}
                </span>
              </div>

              {/* Arrow */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="w-4 h-4 shrink-0 ml-auto mt-1 text-[#AEAAA4] -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>

        {/* ── Divider + Email ── */}
        <div className="flex items-center gap-5 my-10">
          <div className="flex-1 h-px bg-[#E8E4DC]" />
          <span className="text-[0.7rem] tracking-[0.15em] uppercase text-[#AEAAA4]">or email me</span>
          <div className="flex-1 h-px bg-[#E8E4DC]" />
        </div>

        <a
          href="mailto:hello@yourname.com"
          className="group flex items-center justify-between w-full p-8 bg-secondary text-white border border-[#1A1A18] hover:bg-[#C8A882] hover:border-[#C8A882] hover:text-[#1A1A18] transition-colors duration-300"
        >
          <div className="flex flex-col gap-1">
            <span className="text-[0.65rem] font-medium tracking-[0.18em] uppercase opacity-50">
              Email
            </span>
            <span className="text-[1.15rem] font-light tracking-tight">
              hello@yourname.com
            </span>
          </div>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        {/* ── Response note ── */}
        <p className="text-center text-[0.75rem] text-[#AEAAA4] mt-10 leading-relaxed">
          Based in New York · Available for travel worldwide
          <br />
          Typical response time: within 4 hours
        </p>
      </div>

    </main>
  );
}