import ArtPieces from "./index";
import { render, screen } from "@testing-library/react";

test("render Artpieces and find props [image, title, artist]", () => {
  render(
    <ArtPieces
      pieces={[
        {
          name: "Orange Red and Green Abstract Painting",
          imageSource: "/teveJohnson",
          artist: "Steve Johnson",
        },
        {
          name: "Orange Red and Green Abstract",
          imageSource: "/SteveJohnson",
          artist: "Steve",
        },
      ]}
    />
  );

  const listItems = screen.getAllByRole("listitem");

  expect(listItems).toHaveLength(2);
});
