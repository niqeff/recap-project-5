import Spotlight from "../components/Spotlight";

export default function HomePage({ arts }) {
  const randArtPiece = arts[Math.floor(Math.random() * arts.length)];

  console.log(randArtPiece);
  return <Spotlight art={randArtPiece}></Spotlight>;
}
