"use client";

import { useEffect, useMemo, useState } from "react";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  // Seychelles = UTC+4 (évite les surprises de fuseau)
  const target = useMemo(() => new Date("2026-07-21T00:00:00+04:00"), []);

  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setMounted(true);
    setNow(new Date());

    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  // Pendant SSR + juste avant mount => on affiche un état stable (pas de chiffres)
  if (!mounted || !now) {
    return (
      <div className="bg-forest text-cream rounded-xl2 shadow-soft border border-white/10 p-4 md:p-5 w-full max-w-[420px]">
        <p className="uppercase tracking-[0.28em] text-[11px] md:text-xs text-cream/80">
          Compte à rebours
        </p>

        <div className="mt-3 grid grid-cols-4 gap-2">
          {["--", "--", "--", "--"].map((v, i) => (
            <div
              key={i}
              className="rounded-xl2 bg-black/20 border border-white/10 p-3 text-center"
            >
              <div className="text-lg md:text-2xl font-semibold">{v}</div>
              <div className="mt-1 text-[10px] md:text-[11px] tracking-wider text-cream/75 uppercase">
                {["Jours", "Heures", "Min", "Sec"][i]}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-3 text-xs text-cream/80">Chargement…</p>
      </div>
    );
  }

  const diff = target.getTime() - now.getTime();
  const isPast = diff <= 0;

  const total = Math.max(0, Math.floor(diff / 1000));
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  const boxes = [
    { label: "Jours", value: String(days) },
    { label: "Heures", value: pad(hours) },
    { label: "Min", value: pad(minutes) },
    { label: "Sec", value: pad(seconds) },
  ];

  return (
    <div className="bg-forest text-cream rounded-xl2 shadow-soft border border-white/10 p-4 md:p-5 w-full max-w-[420px]">
      <p className="uppercase tracking-[0.28em] text-[11px] md:text-xs text-cream/80">
        Compte à rebours
      </p>

      <div className="mt-3 grid grid-cols-4 gap-2">
        {boxes.map((b) => (
          <div
            key={b.label}
            className="rounded-xl2 bg-black/20 border border-white/10 p-3 text-center"
          >
            <div className="text-lg md:text-2xl font-semibold">{b.value}</div>
            <div className="mt-1 text-[10px] md:text-[11px] tracking-wider text-cream/75 uppercase">
              {b.label}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-3 text-xs text-cream/80">
        {isPast ? "C’est le grand jour 🎉" : " "}
      </p>
    </div>
  );
}