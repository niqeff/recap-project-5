import CardsList from "@/components/CardsList";

export default function ArtPieces({ arts, onToggleFavourite }) {
  return (
    <>
      <h1>Overview Page Art-Pieces</h1>
      <CardsList arts={arts} onToggleFavourite={onToggleFavourite} />
    </>
  );
}
