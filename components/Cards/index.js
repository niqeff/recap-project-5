import Image from "next/image"
import styles from "./Cards.module.css"

export default function Cards({ artist, title, imgSrc }) {
    return (
        <>
            <div className={styles['card-container']}>
                <div className={styles.card}>
                    <Image src={imgSrc} alt={title} width={500} height={500} layout="responsive" />
                    {title ? <p>Title: {title}</p> : null}
                    {/* title &&  <p>Title: {title}</p> */}
                    <p>Artist: {artist}</p>
                </div>
            </div>
        </>
    )
}
