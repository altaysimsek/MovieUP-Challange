import { Container } from "react-bootstrap";
import Searchbox from "./components/Searchbox";
import { useRouter } from "next/router";
import styles from "../styles/SearchResult.module.scss";
import Head from "next/head";
import MovieCard from "./components/MovieCard";

export default function Search() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>MovieUP Search Results</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.banner}>
                <span className={styles.directory}>Home / </span>
                <span>Search Results</span>
            </div>

            <Container className="mt-5">
                <Searchbox></Searchbox>
                <div className={styles.title}>
                    Search result <span>{router.query.name}</span>
                </div>
                <div className={styles.movielist}>
                    <MovieCard></MovieCard>
                    <MovieCard></MovieCard>
                    <MovieCard></MovieCard>
                    <MovieCard></MovieCard>
                </div>
            </Container>
        </>
    );
}
