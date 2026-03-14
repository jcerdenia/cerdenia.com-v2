"use client";

import Link from "next/link";
import { useState } from "react";
import { Work } from "./types";

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
      .filter((w) => w.category === cat && !w.hidden)
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
          className={sort === "alpha" ? "font-semibold underline underline-offset-3" : "cursor-pointer text-gray-500 hover:text-gray-900"}
        >
          A-Z
        </button>
        <button
          onClick={() => setSort("year")}
          className={sort === "year" ? "font-semibold underline underline-offset-3" : "cursor-pointer text-gray-500 hover:text-gray-900"}
        >
          Year
        </button>
      </div>

      <div className="space-y-10">
        {Object.entries(grouped).map(([cat, items]) => (
          <section key={cat}>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-600">
              {CATEGORY_LABELS[cat] ?? cat}
            </h2>
            <ul>
              {items.map((work) => (
                <li key={work.key} className="flex items-baseline justify-between gap-4 py-3">
                  <div>
                    {work.detail !== false ? (
                      <Link href={`/compositions/${work.key}`} className="font-medium hover:underline">
                        {work.title}
                      </Link>
                    ) : (
                      <span className="font-medium">{work.title}</span>
                    )}
                    {work.subtitle && (
                      <span>{` (${work.subtitle})`}</span>
                    )}
                    <p className="italic">{work.instrumentation}</p>
                  </div>
                  <span className="shrink-0">{work.year}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
