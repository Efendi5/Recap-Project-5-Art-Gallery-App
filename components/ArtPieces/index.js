import React from "react";
import ArtPieceDetails from "../ArtPieceDetails";

export default function ArtPieces({ pieces }) {
  return (
    <div>
      {pieces.map((piece) => {
        return (
          <ArtPieceDetails
            key={piece.imageSource}
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
          />
        );
      })}
    </div>
  );
}
