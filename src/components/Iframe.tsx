// MapEmbed.tsx
import React from "react";

interface MapEmbedProps {
  src: string;
  width?: string;
  height?: string;
}

const MapEmbed: React.FC<MapEmbedProps> = ({ src, height = "450" }) => {
  return (
    <iframe
      src={src}
      height={height}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      style={{ border: 0, width: "100%" }}
    />
  );
};

export default MapEmbed;
