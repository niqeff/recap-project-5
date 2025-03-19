import { Heart } from "lucide-react";

export default function FavouriteButton({ onToggleFavourite, slugValue }) {
  return (
    <>
      <button onClick={() => onToggleFavourite(slugValue)}>
        <Heart />
      </button>
    </>
  );
}
