import AccordionItem, { type FAQItem } from "../components/ui/AccordionItem";

const faqs: FAQItem[] = [
  {
    id: "booking",
    question: "How do I book a session?",
    answer:
      "Simply reach out via the contact page or message me on WhatsApp or Instagram. Once we discuss your vision and confirm the date, a 30% deposit secures your booking.",
  },
  {
    id: "delivery",
    question: "How long until I receive my photos?",
    answer:
      "Standard delivery is 30 days after your session. The Prestige package includes priority 20-day delivery. You'll receive a private online gallery link to download your full collection.",
  },
  {
    id: "travel",
    question: "Do you travel for shoots?",
    answer:
      "Yes! All packages include travel within 50 miles at no extra charge. For destinations beyond that — including international — travel costs are discussed and agreed upon before booking.",
  },
  {
    id: "editing",
    question: "What does 'edited' mean for the delivered images?",
    answer:
      "Every image is professionally color-graded, exposure-corrected, and retouched. I aim for a timeless, natural look. Heavy filters or dramatic presets are not my style unless specifically requested.",
  },
  {
    id: "raw",
    question: "Can I get the RAW files?",
    answer:
      "RAW files are not included in any package. The edited gallery is the final deliverable. This ensures every image you receive meets my quality standard.",
  },
  {
    id: "weather",
    question: "What if it rains on the day?",
    answer:
      "Weather happens! We can reschedule at no extra cost for outdoor sessions if conditions are truly unfavorable. Many couples embrace overcast or light-rain days — they often produce beautiful, moody results.",
  },
  {
    id: "payment",
    question: "What payment methods do you accept?",
    answer:
      "I accept bank transfer, PayPal, and most major cards. A 30% deposit is due at booking, with the remaining balance due 14 days before your event.",
  },
];

export default function AskedQuestions() {
  return (
    <section id="faq" className="w-full py-28 px-6 md:px-16 lg:px-24">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <p className="text-[0.7rem] tracking-[0.22em] uppercase text-primary">
            FAQ
          </p>
          <h2 className="font-serif font-light text-[2.6rem] lg:text-[3.5rem] leading-[1.06] tracking-tight text-[#1A1A18]">
            Most asked{" "}
            <em className="italic text-primary">questions.</em>
          </h2>
          <div className="w-10 h-px bg-primary mt-1" />
        </div>

        {/* Accordion list */}
        <div className="border-t border-[#E8E4DC]">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} item={faq} />
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-[0.78rem] text-[#AEAAA4] mt-12 leading-relaxed">
          Still have a question?{" "}
          <a
            href="/contact"
            className="text-primary underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            Reach out directly
          </a>
          .
        </p>

      </div>
    </section>
  );
}