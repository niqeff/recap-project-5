import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function DetailPage({ arts }) {
    const router = useRouter();
    const { slug } = router.query;

    const currentArt = arts.find((art) => art.slug === slug)

    // console.log("currentArt: ", currentArt);
    // console.log("currentArt.artist :", currentArt?.artist);

    if (!currentArt) {
        return (
            <h1>Dummer Server - SSR :-P</h1>
        )
    }

    return (
        <>
            <div>
                <Image src={currentArt.imageSource} alt={currentArt.title} width={500} height={500} layout="responsive" />
                <ul>
                    <li>{currentArt.artist}</li>
                    <li>{currentArt.year}</li>
                    <li>{currentArt.genre}</li>
                </ul>
                <Link href="/art-pieces" style={{ paddingBottom: "10rem" }}>
                    <button> Back to gallery</button>
                </Link>
            </div>
            <Navigation />
        </>
    );
}