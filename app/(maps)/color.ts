export function colorFromValue(v?: number | null) {
  if (v == null) return "#e5e7eb";
  if (v > 90) return "#1e3a8a";
  if (v > 75) return "#1d4ed8";
  if (v > 50) return "#3b82f6";
  if (v > 25) return "#93c5fd";
  return "#dbeafe";
}
