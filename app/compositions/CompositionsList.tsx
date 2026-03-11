"use client";

import { useState } from "react";

interface Work {
  key: string;
  title: string;
  subtitle?: string;
  instrumentation: string;
  category: string;
  year: number;
}

const CATEGORY_LABELS: Record<string, string> = {
  orchestra: "Orchestra and Large Ensemble",
  vocal: "Vocal and Vocal Chamber",
  chamber: "Chamber",
  solo: "Solo with or without Piano",
};

const CATEGORY_ORDER = ["orchestra", "chamber", "vocal", "solo"];

type SortMode = "alpha" | "year";

export default function CompositionsList({ works }: { works: Work[] }) {
  const [sort, setSort] = useState<SortMode>("alpha");

  const grouped = CATEGORY_ORDER.reduce<Record<string, Work[]>>((acc, cat) => {
    const items = works
      .filter((w) => w.category === cat)
      .sort((a, b) =>
        sort === "alpha"
          ? a.title.localeCompare(b.title)
          : b.year - a.year // descending
      );
    if (items.length) acc[cat] = items;
    return acc;
  }, {});

  return (
    <>
      <div className="mb-8 flex gap-3 text-sm">
        <span>Order: </span>
        <button
          onClick={() => setSort("alpha")}
          className={sort === "alpha" ? "font-semibold underline underline-offset-3" : "cursor-pointer text-gray-400 hover:text-gray-600"}
        >
          A-Z
        </button>
        <button
          onClick={() => setSort("year")}
          className={sort === "year" ? "font-semibold underline underline-offset-3" : "cursor-pointer text-gray-400 hover:text-gray-600"}
        >
          By year
        </button>
      </div>

      <div className="space-y-10">
        {Object.entries(grouped).map(([cat, items]) => (
          <section key={cat}>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
              {CATEGORY_LABELS[cat] ?? cat}
            </h2>
            <ul>
              {items.map((work) => (
                <li key={work.key} className="flex items-baseline justify-between gap-4 py-3">
                  <div>
                    <span className="font-medium">{work.title}</span>
                    {work.subtitle && (
                      <span>{` (${work.subtitle})`}</span>
                    )}
                    <p className="text-sm text-gray-500 italic">{work.instrumentation}</p>
                  </div>
                  <span className="shrink-0 text-sm text-gray-400">{work.year}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
