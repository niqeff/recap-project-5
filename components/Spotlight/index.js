import Cards from "../Cards";


export default function Spotlight({ art }) {
  return (
    <Cards imgSrc={art.imageSource} artist={art.artist} />
  );
}
