// Convert an arbitrary string into a URL-safe slug.
// e.g. "Executive Protection / Body Guard" -> "executive-protection-body-guard"
export function slugify(input = "") {
  return String(input)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Convert a slug back into a Title Cased label.
// e.g. "executive-protection" -> "Executive Protection"
export function titleFromSlug(slug = "") {
  return String(slug)
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default slugify;
