import styles from "./Cards.module.css"

export default function Cards() {
    return (
        <>
            <div className={styles['card-container']}>
                <div className={styles.card}>
                    <h1>Card</h1>
                </div>
            </div>
        </>
    )
}
