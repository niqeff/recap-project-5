import Image from "next/image";
import Link from "next/link";
// npm
import styles from "./Cards.module.css";
import FavouriteButton from "../Button";

export default function Cards({
  artist,
  title,
  imgSrc,
  pathToPage,
  onToggleFavourite,
}) {
  return (
    <>
      <div className={styles["card-container"]}>
        <div className={styles.card}>
          <Link href={`/DetailPage/${pathToPage}`}>
            <Image
              src={imgSrc}
              alt={title}
              width={500}
              height={500}
              layout="responsive"
            />
          </Link>
          {title ? <p>Title: {title}</p> : null}
          {/* title &&  <p>Title: {title}</p> */}
          <p>Artist: {artist}</p>
          <FavouriteButton
            onToggleFavourite={onToggleFavourite}
            slugValue={pathToPage}
          />
        </div>
      </div>
    </>
  );
}
