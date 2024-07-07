export function estimateReadingTime(content) {
  const wordsPerMinute = 200; // Average reading speed
  const words = content.split(/\s+/).length;
  const time = Math.ceil(words / wordsPerMinute);
  return time;
}
