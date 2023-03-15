import ArtPieces from "../components/ArtPieces";
import useSWR from "swr";
import SpotlightPiece from "../components/Spotlight";

const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data, isLoading, error } = useSWR(URL);

  function generateRandomIndex(datalength) {
    return Math.floor(Math.random() * datalength);
  }
  console.log(data);
  if (isLoading) return <div>loading...</div>;
  if (error) return <div>Page Load fails</div>;

  return (
    <div>
      <h1>Art Gallery</h1>
      <SpotlightPiece
        image={data[generateRandomIndex(data.length)].imageSource}
        artist={data[generateRandomIndex(data.length)].artist}
      />
      <ArtPieces pieces={data} />
    </div>
  );
}
