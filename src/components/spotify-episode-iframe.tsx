export const SpotifyEpisodeIframe = ({ episodeId }: { episodeId: string }) => {
  return (
    <iframe
      className="mx-auto max-w-2xl "
      src={`https://open.spotify.com/embed/episode/${episodeId}?theme=0`}
      width="100%"
      height="160"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};
