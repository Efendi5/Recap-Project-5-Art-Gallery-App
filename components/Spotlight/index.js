import React from "react";
import useSWR from "swr";
import Image from "next/image";

export default function SpotlightPiece({ image, artist }) {
  return (
    <div>
      <Image src={image} alt="Random Image" width={500} height={500} />
      <p>{artist}</p>
    </div>
  );
}
