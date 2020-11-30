import { Container } from "react-bootstrap";

import { useRouter } from "next/router";
import styles from "../styles/SearchResult.module.scss";
import Head from "next/head";

import ViewMovieCard from "./components/ViewMovieCard"
import axios from "axios";

import { useState, useEffect } from "react";

export default function Detail() {
    const router = useRouter();

    const [searchedMovie, setSearchedMovie] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(async () => {
        setLoading(true);
        const { data } = await axios.get(
            `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_ENV_API_KEY}&i=` + router.query.id
        );
        console.log(data)
        setSearchedMovie(data)
        setLoading(false);
    },[])

    return (
        <>
            <Head>
                <title>MovieUP Detail</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.banner}>
                <span className={styles.directory}>Home / </span>
                <span>{searchedMovie.Title}</span>
            </div>

            <Container className="mt-5">
                {loading ? <h1>Loading</h1> : <ViewMovieCard details={searchedMovie}></ViewMovieCard>}
            </Container>
        </>
    );
}
