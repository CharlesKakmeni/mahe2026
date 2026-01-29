"use client";

import { useState } from "react";

type Item = { q: string; a: React.ReactNode };

export default function FAQAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="w-full">
      <div className="divide-y divide-black/10">
        {items.map((it, idx) => {
          const isOpen = open === idx;

          return (
            <div key={it.q} className="py-6">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : idx)}
                className="w-full flex items-center justify-between gap-6 text-left"
              >
                <span className="text-ink text-[15px] md:text-base">{it.q}</span>

                <span className="shrink-0 text-gold text-lg leading-none">
                  {isOpen ? "×" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="mt-3 max-w-3xl text-muted text-sm leading-relaxed">
                  {it.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}