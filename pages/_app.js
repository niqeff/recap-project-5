import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import useSWR from "swr";
import GlobalStyle from "../styles";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function App({ Component, pageProps }) {
  const [arts, setArts] = useState([]);

  const { data: fetchedArts, error, isLoading } = useSWR(URL, fetcher);
  useEffect(() => {
    if (!fetchedArts) return;
    setArts([...fetchedArts]);
  }, [fetchedArts]);
  if (error) {
    return <div>failed to load</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }

  console.log(arts);
  return (
    <>
      <GlobalStyle />
      <Header />

      <Component {...pageProps} />
      {/* {arts.map((art) => (
        <h2>{art.name}</h2>
      ))} */}

      <Navigation />
    </>
  );
}
