import Link from "next/link";
import styles from "./Navigation.module.css";


export default function Navigation() {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigation__list}>
                <li className={styles.navigation__list}><Link href="./" className={styles.navigation__link}>Spotlight</Link></li>
                <li className={styles.navigation__list}><Link href="/art-pieces" className={styles.navigation__link}>Art Pieces</Link></li>
                <li className={styles.navigation__list}><Link href="/favourites" className={styles.navigation__link}>Favourites</Link></li>
            </ul>
        </nav>
    );
}

