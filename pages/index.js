import ArtPieces from "../components/ArtPieces";
import Spotlight from "../components/Spotlight";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";
export default function SpotlightPage() {
  const { data, isLoading, error } = useSWR(URL);
 

  // if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Spotlight/ >
    
    )
  }

