import got from "got";
import createMetascraper from "metascraper";
import metascraperDescription from "metascraper-description";
import metascraperImage from "metascraper-image";
import metascraperTitle from "metascraper-title";

const metascraper = createMetascraper([
  metascraperDescription(),
  metascraperImage(),
  metascraperTitle(),
]);

export const getURLOpenGraphMetadata = async (targetUrl: string) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const { body: html, url } = await got(targetUrl);
    if (typeof html === "string" && typeof url === "string") {
      const metadata = await metascraper({ html, url });
      return metadata;
    }
    return null;
  } catch (error) {
    // TODO: sent error to sentry or maybe send to client
    return null;
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
};
