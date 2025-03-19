import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { useState } from "react";
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

//Wie soll der AddInfo aufgebaut sein?
// const artsAddInfoTest=[
//   {id : slug1, isFav : true},
//   {id : slug2, isFav : false},
//   ...
// ]

export default function App({ Component, pageProps }) {
  const [artsAddInfo, setArtsAddInfo] = useState([]);

  const { data: arts, error, isLoading } = useSWR(URL, fetcher);

  function handleToggleFavourite(slugValue) {
    console.log(slugValue);
    let updatedArtsAddInfo;
    if (artsAddInfo.includes(slugValue)) {
      console.log("Drin -> Anpassen");
      updatedArtsAddInfo = artsAddInfo.map((item) => {
        if (item.id === slugValue) {
          return [...item, (isFav = !item.isFav)];
        } else {
          return item;
        }
      });
    } else {
      console.log("Nicht Drin -> Dranpappen");
      const newArtsAddInfoItem = {
        id: slugValue,
        isFav: true,
      };
      console.log(newArtsAddInfoItem);
      updatedArtsAddInfo = [newArtsAddInfoItem, ...artsAddInfo];
      console.log(updatedArtsAddInfo);
    }
    // console.log(updatedArtsAddInfo);
    setArtsAddInfo([...updatedArtsAddInfo]);
  }

  if (error) {
    return <div>failed to load</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Component
        {...pageProps}
        arts={arts}
        onToggleFavourite={handleToggleFavourite}
      />
      <Navigation />
    </>
  );
}
