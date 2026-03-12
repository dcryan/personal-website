"use client";

export default function CollapsibleDetails({
  details,
  expanded,
  onToggle,
}: {
  details: string[];
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <>
      <button
        onClick={(e) => { e.stopPropagation(); onToggle(); }}
        className="text-sm mt-2 transition-colors"
      >
        <span className="text-onedark-gutter group-hover:text-onedark-fg transition-colors">[</span>
        <span className="text-onedark-gutter group-hover:text-onedark-fg transition-colors"> {expanded ? "hide details" : "show details"} </span>
        <span className="text-onedark-gutter group-hover:text-onedark-fg transition-colors">]</span>
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
