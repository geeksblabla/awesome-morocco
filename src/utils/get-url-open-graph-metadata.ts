import ogs from "open-graph-scraper";

export const getURLOpenGraphMetadata = async (targetUrl: string) => {
  try {
    const data = await ogs({ url: targetUrl });
    return data.result;
  } catch (error) {
    // TODO: sent error to sentry or maybe send to client
    return null;
  }
};
