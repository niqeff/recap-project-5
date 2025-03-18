import Cards from "@/components/Cards";
import CardsList from "@/components/CardsList";

export default function ArtPieces({ arts }) {
  return (
    <>
      <h1>Overview Page Art-Pieces</h1>
      <Cards>hallo</Cards>
      <CardsList arts={arts} />

    </>
  );
}
