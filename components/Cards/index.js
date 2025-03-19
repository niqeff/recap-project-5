import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
import styles from "./Cards.module.css";

export default function Cards({ artist, title, imgSrc, pathToPage }) {
    return (
        <>
            <div className={styles['card-container']}>
                <div className={styles.card}>
                    <Link href={`/DetailPage/${pathToPage}`}>
                        <Image src={imgSrc} alt={title} width={500} height={500} layout="responsive" />
                    </Link>
                    {title ? <p>Title: {title}</p> : null}
                    {/* title &&  <p>Title: {title}</p> */}
                    <p>Artist: {artist}</p>
                </div>
            </div>
        </>
    )
}
