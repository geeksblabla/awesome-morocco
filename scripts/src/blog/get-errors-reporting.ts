/**
 * should return number of rss feed  collected  successfully
 * rss feed with errors
 */
export const getErrorReporting = (
  numberOfRssUrls: number,
  numberOfPosts: number,
  errors: string[]
) => {
  return `
✅ ${numberOfPosts} blog posts has been collected from ${
    numberOfRssUrls - errors.length
  } RSS feeds
${errors.join("\n")}
      `;
};
