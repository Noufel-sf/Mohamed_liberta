"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

interface AccordionItemProps {
  item: FAQItem;
}

export default function AccordionItem({ item }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={[
        "border-b border-[#E8E4DC] px-12 cursor-pointer transition-colors duration-300",
        open ? "bg-primary" : "bg-transparent",
      ].join(" ")}
    >
      <button
        onClick={() => setOpen(!open)}
        className="group w-full cursor-pointer  flex items-center justify-between gap-6 py-6 px-0 text-left"
        aria-expanded={open}
      >
        <span
          className={[
            "text-[1rem] font-light leading-snug transition-colors duration-300 text-secondary ",
          ].join(" ")}
        >
          {item.question}
        </span>

        <span className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-secondary text-white transition-all duration-300y">
          {open ? <Minus size={13} strokeWidth={2} /> : <Plus size={13} strokeWidth={2} />}
        </span>
      </button>

      {/* Answer */}
      <div
        className={[
          "overflow-hidden transition-all duration-300 ease-in-out",
          open ? "max-h-96 pb-6" : "max-h-0",
        ].join(" ")}
      >
        <p className="text-[0.88rem] font-light leading-[1.85] pr-12">
          {item.answer}
        </p>
      </div>
    </div>
  );
}