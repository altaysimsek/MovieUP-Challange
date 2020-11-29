import { Container } from "react-bootstrap";
import Searchbox from "./components/Searchbox";
import { useRouter } from "next/router";
import styles from "../styles/SearchResult.module.scss";
import Head from "next/head";
import MovieCard from "./components/MovieCard";

import React, { useState, useEffect } from "react";

export default function Search() {
    const router = useRouter();
    const [searchedMovie, setSearchedMovie] = useState([]);

    useEffect(() => {
        // Update the document title using the browser API
        console.log(router.query.name)
        fetch("http://www.omdbapi.com/?apikey=3e701bcb&s=" + router.query.name)
            .then((data) => data.json())
            .then((results) => {
                console.log(results.Search)
                setSearchedMovie(results)});
    },[router.query.name]);

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
                <div className={styles.movielist}>{searchedMovie.length > 0 && searchedMovie.map(movie => (movie))}</div>
            </Container>
        </>
    );
}
