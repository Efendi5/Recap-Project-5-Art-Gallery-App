import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";
import Layout from "../components/Layout";


const fetcher = (...args) => fetch(...args).then((res) => res.json());


export default function App({ Component, pageProps }) {  

  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps}/>
          </Layout>
      </SWRConfig>
    </>
  );
}
