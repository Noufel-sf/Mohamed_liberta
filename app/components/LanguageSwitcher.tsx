"use client";

import { useState } from "react";

type Lang = "fr" | "ar";

const langs: { code: Lang; label: string; flag: string; dir: "ltr" | "rtl" }[] =
  [
    { code: "fr", label: "Français", flag: "🇫🇷", dir: "ltr" },
    { code: "ar", label: "العربية", flag: "🇩🇿", dir: "rtl" },
  ];

interface LanguageSwitcherProps {
  onChange?: (lang: Lang) => void;
}

export default function LanguageSwitcher({ onChange }: LanguageSwitcherProps) {
  const [current, setCurrent] = useState<Lang>("fr");
  const [open, setOpen] = useState(false);

  const selected = langs.find((l) => l.code === current)!;

  function select(lang: Lang) {
    setCurrent(lang);
    setOpen(false);
    // Apply dir to <html> globally
    document.documentElement.dir = langs.find((l) => l.code === lang)!.dir;
    document.documentElement.lang = lang;
    onChange?.(lang);
  }

  return (
    <div className="relative inline-block text-left">
      {/* Trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="
          flex items-center gap-2.5 px-4 py-2
          bg-secondary border border-gray-200 cursor-pointer 
          text-[0.82rem] font-medium text-white
          shadow-sm hover:shadow-md hover:border-[#1A6EE8]/40
          transition-all duration-200
        "
      >
        <span className="text-base leading-none">{selected.flag}</span>
        <span>{selected.label}</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Dropdown */}
      <div
        className={[
          "absolute top-full mt-2 left-0 z-50 min-w-[140px]",
          "bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden",
          "transition-all duration-200 origin-top",
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none",
        ].join(" ")}
      >
        {langs.map((lang) => (
          <button
            key={lang.code}
            onClick={() => select(lang.code)}
            className={[
              "w-full flex items-center cursor-pointer gap-3 px-4 py-3",
              "text-[0.82rem] font-medium transition-colors duration-150",
              current === lang.code
                ? "bg-[#F0F4FF] text-secondary"
                : "text-gray-600 hover:bg-gray-50",
            ].join(" ")}
          >
            <span className="text-base leading-none">{lang.flag}</span>
            <span>{lang.label}</span>
            {current === lang.code && (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                className="w-3.5 h-3.5 ml-auto text-white"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            )}
          </button>
        ))}
      </div>

      {/* Click outside to close */}
      {open && (
        <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
      )}
    </div>
  );
}
