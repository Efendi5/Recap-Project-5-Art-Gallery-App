import ArtPieces from "../components/ArtPieces";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data, isLoading, error } = useSWR(URL);
  console.log(data);

  // if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <ArtPieces pieces={data} />
    </div>
  );
}
