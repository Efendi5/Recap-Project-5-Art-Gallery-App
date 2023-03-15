import ArtPieceDetails from "./index";
import { render, screen } from "@testing-library/react";

test("render Artpieces and find props [image, title, artist]", () => {
  render(
    <ArtPieceDetails
      title="Orange Red and Green Abstract Painting"
      artist="Steve Johnson"
      image="https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
    />
  );

  const image = screen.getByRole("img");
  const description = screen.getByText(
    "Orange Red and Green Abstract Painting by Steve Johnson"
  );

  expect(image).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});
