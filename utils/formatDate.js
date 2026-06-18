// Format a date value into a human-readable string.
// Defaults to a long, locale-aware format e.g. "16 June 2026".
export function formatDate(date, locale = "en-IN", options) {
  const value = date instanceof Date ? date : new Date(date);
  if (Number.isNaN(value.getTime())) return "";

  return value.toLocaleDateString(
    locale,
    options || { day: "numeric", month: "long", year: "numeric" }
  );
}

// Return just the year for a given date value, e.g. 2026.
export function getYear(date = new Date()) {
  const value = date instanceof Date ? date : new Date(date);
  return Number.isNaN(value.getTime()) ? null : value.getFullYear();
}

export default formatDate;
