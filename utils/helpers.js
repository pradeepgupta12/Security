// Small, reusable helpers shared across the app.

// Join class names, skipping falsy values.
// e.g. cn("a", cond && "b", null) -> "a b"
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Build a YouTube embed URL from a video id.
export function youtubeEmbedUrl(youtubeId) {
  return `https://www.youtube.com/embed/${youtubeId}`;
}

// Build a wa.me deep link from a number and optional pre-filled message.
export function whatsappLink(number, message = "") {
  const digits = String(number).replace(/[^0-9]/g, "");
  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${query}`;
}

// Truncate a string to a maximum length, adding an ellipsis when cut.
export function truncate(text = "", max = 120) {
  const value = String(text);
  return value.length > max ? `${value.slice(0, max).trimEnd()}…` : value;
}

export { slugify, titleFromSlug } from "@/utils/slugify";
export { formatDate, getYear } from "@/utils/formatDate";
