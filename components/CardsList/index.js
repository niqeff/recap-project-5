import { useRouter } from "next/router";
import Cards from "../Cards";

export default function CardsList({ arts, onToggleFavourite }) {
  return (
    <ul>
      {arts.map((art) => (
        <li key={art.slug}>
          <Cards
            artist={art.artist}
            title={art.name}
            imgSrc={art.imageSource}
            pathToPage={art.slug}
            onToggleFavourite={onToggleFavourite}
          />
        </li>
      ))}
    </ul>
  );
}
