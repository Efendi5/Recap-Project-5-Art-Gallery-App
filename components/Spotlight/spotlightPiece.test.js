import { render, screen } from "@testing-library/react";
import SpotlightPiece from ".";

test("render Spotlightpiece and find props [image, artist]", () => {
  render(<SpotlightPiece image="/AlteWalkuere" artist="Ron Jablonski" />);

  const image = screen.getByRole("img");
  const artist = screen.getByText("Ron Jablonski");

  expect(image).toBeInTheDocument();
  expect(artist).toBeInTheDocument();
});
