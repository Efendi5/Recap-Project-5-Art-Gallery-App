import React from "react";
import Image from "next/image";

export default function ArtPieceDetails({ image, title, artist }) {
  return (
    <div>
      <Image src={image} alt="Picture of the author" width={500} height={500} />
      <div>
        <span>{title}</span>
        <span>{artist}</span>
      </div>
    </div>
  );
}
