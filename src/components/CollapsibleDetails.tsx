"use client";

import { useState } from "react";

export default function CollapsibleDetails({
  details,
}: {
  details: string[];
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="text-onedark-gutter hover:text-onedark-fg text-sm mt-2 transition-colors"
      >
        {expanded ? "▼ Hide details" : "▶ Show details"}
      </button>
      {expanded && (
        <ul className="mt-2 space-y-1">
          {details.map((detail, i) => (
            <li key={i} className="text-onedark-fg text-sm flex">
              <span className="text-onedark-gutter mr-2 select-none shrink-0">
                {i === details.length - 1 ? "└" : "├"}
              </span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
