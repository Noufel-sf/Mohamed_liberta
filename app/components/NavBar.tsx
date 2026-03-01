"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, X, Menu } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinks = [
  { label: "Home",    to: "/" },
  { label: "About",   to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={[
          "sticky top-0 z-40 transition-all duration-300",
          scrolled
            ? "backdrop-blur-lg bg-white/80 border-b border-gray-100 shadow-sm"
            : "bg-white/80 border-b border-transparent",
        ].join(" ")}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-4">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-sans tracking-tight text-gray-800 hover:text-gray-900 transition-colors"
          >
            Mohamed Liberta
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                className="relative hover:text-gray-900 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-primary after:to-secondary after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex flex-col md:flex-row items-center gap-2 md:block">
            <button className="group capitalize cursor-pointer inline-flex items-center gap-3 bg-primary hover:bg-secondary text-white px-8 py-2.5 text-sm font-bold shadow-lg transition-all">
              book now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          {/* <div className="hidden md:block w-8">
            <LanguageSwitcher />
          </div> */}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-800 rounded-md"
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* ── Mobile Sidebar ── */}

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={[
          "fixed inset-0 z-50 bg-black/30 backdrop-blur-sm md:hidden transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      />

      {/* Sidebar panel */}
      <aside
        className={[
          "fixed top-0 left-0 z-50 h-full w-72 bg-white shadow-2xl md:hidden",
          "flex flex-col transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-xl font-sans tracking-tight text-gray-800"
          >
            Mohamed Liberta
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="p-1.5 rounded-md text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="px-6 pb-8">
          <button
            onClick={() => setIsOpen(false)}
            className="w-full capitalize inline-flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white py-3.5 text-sm font-bold shadow-lg transition-all"
          >
            book now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </aside>
    </>
  );
}