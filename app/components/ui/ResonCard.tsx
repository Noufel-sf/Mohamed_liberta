import type { Reason } from "../../utils/Types";

interface ReasonCardProps {
  reason: Reason;
  animationClass: string;
}

export default function ReasonCard({ reason, animationClass }: ReasonCardProps) {
  return (
    <div className={`group ${animationClass}`}>
      {/* Icon box */}
      <div
        className="
          w-11 h-11 mb-4 rounded-[10px]
          border border-gold/25
          flex items-center justify-center
          transition-all duration-300
          group-hover:bg-gold group-hover:border-gold
        "
      >
        <span className="text-gold group-hover:text-white transition-colors duration-300 w-[18px] h-[18px] flex items-center justify-center">
          {reason.icon}
        </span>
      </div>

      <h4 className="font-serif text-lg font-semibold text-ink mb-1.5">
        {reason.title}
      </h4>
      <p className="text-[13px] font-light leading-[1.7] text-muted">
        {reason.description}
      </p>
    </div>
  );
}