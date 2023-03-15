import React from "react";
import Image from "next/image";

export default function ArtPieceDetails({ image, title, artist }) {
  return (
    <div>
      <Image
        priority={true}
        src={image}
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <p>
        {title} {artist}
      </p>
    </div>
  );
}
