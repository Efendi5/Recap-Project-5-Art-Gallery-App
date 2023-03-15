import React from "react";
import ArtPieceDetails from "../ArtPieceDetails";
import styled from "styled-components";

const UnstyledList = styled.li`
  list-style: none;
`;

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <UnstyledList key={piece.imageSource}>
            <ArtPieceDetails
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
            />
          </UnstyledList>
        );
      })}
    </ul>
  );
}
