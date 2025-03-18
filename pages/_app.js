import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import useSWR from 'swr';
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {



  const URL = "https://example-apis.vercel.app/api/art"

  const fetcher = async url => {
    const res = await fetch(url)

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.')
      // Attach extra info to the error object.
      error.info = await res.json()
      error.status = res.status
      throw error
    }

    return res.json()
  }


  function Arts() {
    const { data: arts, error, isLoading } = useSWR(URL, fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    return arts
  }

  const [arts, setArts] = useState([]);

  console.log(arts);

  return (
    <>
      <GlobalStyle />
      <Header />

      <Component {...pageProps} />
      {arts.map((art) => (
        <h2>{art.name}</h2>
      ))}

      <Navigation />
    </>
  );
}
