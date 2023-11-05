export const RemoteImage = ({ ...props }) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img
      {...props}
      onError={(event) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        event.target.src = "/images/placeholder.png";
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        event.onerror = null;
      }}
    />
  );
};
