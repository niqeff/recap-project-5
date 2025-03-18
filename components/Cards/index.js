import styles from "./Cards.module.css"

export default function Cards({ artist, name, imgSrc }) {
    return (
        <>
            <div className={styles['card-container']}>
                <div className={styles.card}>
                    <h1>{name}</h1>
                    <p>{artist}</p>
                    <img src={imgSrc} alt="" />
                </div>
            </div>
        </>
    )
}
