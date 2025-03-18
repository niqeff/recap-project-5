import styles from "./Cards.module.css"

export default function Cards({ artist, title, imgSrc }) {
    return (
        <>
            <div className={styles['card-container']}>
                <div className={styles.card}>
                    <img src={imgSrc} alt="" />
                    <p>Title:{title}</p>
                    <p>Artist:{artist}</p>
                </div>
            </div>
        </>
    )
}
