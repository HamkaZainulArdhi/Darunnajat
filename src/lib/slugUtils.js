/**
 * Convert a title to a URL-friendly slug
 * @param {string} title - The title to convert
 * @returns {string} - The URL-friendly slug
 */
export function titleToSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with single hyphen
}

/**
 * Convert a slug back to a readable title (approximation)
 * @param {string} slug - The slug to convert
 * @returns {string} - A readable title format
 */
export function slugToTitle(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
