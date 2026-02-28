import type { Stat } from "../../utils/Types";

export default function StatItem({ stat }: { stat: Stat }) {
  return (
    <div className="flex flex-col">
      <strong className="font-serif text-[28px] font-semibold text-ink leading-none">
        {stat.value}
      </strong>
      <span className="text-[11px] tracking-[0.1em] uppercase text-muted mt-1">
        {stat.label}
      </span>
    </div>
  );
}