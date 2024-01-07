"use client";

import type { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export const RemoteImage = ({
  src = "/images/placeholder.png",
  ...props
}: DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>) => {
  const imageSrc = src === "" ? "/images/placeholder.png" : src;
  return (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img
      {...props}
      src={imageSrc}
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
