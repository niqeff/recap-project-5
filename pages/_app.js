import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import useSWR from "swr";
import GlobalStyle from "../styles";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error(
      `An error occurred while fetching the data from url ${url}.`
    );
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function App({ Component, pageProps }) {
  const [artsAddInfo, setArtsAddInfo] = useState([]);

  const { data: arts, error, isLoading } = useSWR(URL, fetcher);
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

      <Component {...pageProps} arts={arts} />
      {/* {arts.map((art) => (
        <h2>{art.name}</h2>
      ))} */}

      <Navigation />
    </>
  );
}
