import { useRouter } from "next/router";
import Head from "next/head";

import { useState, useEffect } from "react";

import styles from "../styles/SearchResult.module.scss";

import { Container } from "react-bootstrap";
import Searchbox from "./components/Searchbox";
import MovieCard from "./components/MovieCard";

import axios from "axios";

export default function Search() {
    const router = useRouter();

    const [searchedMovie, setSearchedMovie] = useState([]);
    const [loading, setLoading] = useState(false);
    
    //this use effect works only the queries changed
    useEffect(async () => {
        // Update the document title using the browser API
        setLoading(true);
        let filmBase = [];
        //First fetch to getting one page movie data
        const { data } = await axios.get(
            `https://www.omdbapi.com/?apikey=${
                process.env.NEXT_PUBLIC_ENV_API_KEY
            }&s=${router.query.name}${
                router.query.year ? "&y=" + router.query.year : ""
            }${router.query.type ? "&type=" + router.query.type : ""}`
        );
        if (data.Search) {
            //After this we calling mapMovies for fetch more detail for every movie come from data and changing our state
            filmBase = await mapMovies(data.Search);
            setSearchedMovie(filmBase);
            setLoading(false);
        } else if (data.Error) {
            alert(data.Error);
            setLoading(false);
        }
    }, [router.query.name, router.query.year,router.query.type]);

    //We need to make double fetch to getting more details, it's function for handle this

    const mapMovies = async (results) => {
        let filmData = [];
        for (let i = 0; i < results.length; i++) {
            const { data } = await axios.get(
                `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_ENV_API_KEY}&i=` +
                    results[i].imdbID
            );
            const {
                Title,
                Plot,
                Poster,
                Genre,
                Year,
                imdbRating,
                imdbID,
            } = data;

            filmData.push({
                Title,
                Plot,
                Poster,
                Genre,
                Year,
                imdbRating,
                imdbID,
            });
        }
        return filmData;
    };

    //Render function to handle rendering movie
    const renderMovie = searchedMovie.map((movie) => (
        <MovieCard key={movie.imdbID} movieDetail={movie}></MovieCard>
    ));

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
                    {!loading ? renderMovie : <h1>Loading</h1>}
                </div>
            </Container>
        </>
    );
}
