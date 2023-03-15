import ArtPieces from "../../components/ArtPieces";
import useSWR from "swr";
const URL = "https://example-apis.vercel.app/api/art";

export default function ArtPiecesOverview(){
    const { data, isLoading, error } = useSWR(URL);
    return (<ArtPieces pieces={data}/>)
}