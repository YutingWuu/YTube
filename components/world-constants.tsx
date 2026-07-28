"use client";

import { useState } from "react";

type ConstantItem = {
  label: string;
  note: string;
};

export default function WorldConstants({
  items,
}: {
  items: ConstantItem[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid gap-6 border-t border-white/45 pt-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
      <div>
        <p className="text-[10px] uppercase tracking-[0.28em] text-[#566168]">
          A few constants
        </p>
        <h2 className="mt-4 max-w-lg [font-family:var(--font-display)] text-3xl leading-[1.04] tracking-tight text-[#232724] sm:text-4xl">
          The mood stays wide, but the day has rules.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-8 text-[#525b5a]">
          Not every day looks the same, but a few things return: movement, a
          clean surface, room to think, and some kind of evening reset.
        </p>
        <div className="mt-8 rounded-[1.5rem] border border-white/50 bg-white/32 p-5 backdrop-blur-[2px]">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#445154]">
            Now holding
          </p>
          <p className="mt-3 [font-family:var(--font-display)] text-2xl text-[#232724]">
            {items[activeIndex]?.label}
          </p>
          <p className="mt-3 max-w-md text-sm leading-7 text-[#566168]">
            {items[activeIndex]?.note}
          </p>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={item.label}
              type="button"
              className={`group rounded-[1.35rem] border p-4 text-left backdrop-blur-[2px] transition ${
                isActive
                  ? "border-[#8a9699] bg-white/55"
                  : "border-white/50 bg-white/24 hover:bg-white/38"
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#445154]">
                {item.label}
              </p>
              <p
                className={`mt-3 text-sm leading-6 transition ${
                  isActive ? "text-[#2c3332]" : "text-[#5e6666]"
                }`}
              >
                {item.note}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
