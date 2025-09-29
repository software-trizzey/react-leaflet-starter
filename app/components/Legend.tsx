"use client";
import React from "react";

export default function Legend() {
  const items = [
    { color: "#1e3a8a", label: "> 90" },
    { color: "#1d4ed8", label: "76–90" },
    { color: "#3b82f6", label: "51–75" },
    { color: "#93c5fd", label: "26–50" },
    { color: "#dbeafe", label: "0–25" },
    { color: "#e5e7eb", label: "N/A" },
  ];
  return (
    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur rounded-xl border shadow p-3">
      <div className="text-sm font-medium mb-2">Legend</div>
      <ul className="space-y-1">
        {items.map((it) => (
          <li key={it.label} className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded" style={{ background: it.color }} />
            <span className="text-xs">{it.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
