import { Container } from "react-bootstrap";
import Searchbox from "./components/Searchbox";
import { useRouter } from "next/router";
import styles from "../styles/SearchResult.module.scss";
import Head from "next/head";
import MovieCard from "./components/MovieCard";

import axios from "axios";

import { useState, useEffect } from "react";

export default function Search() {
    const router = useRouter();

    const [searchedMovie, setSearchedMovie] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(async () => {
        // Update the document title using the browser API
        setLoading(true);
        let filmBase = [];
        const { data } = await axios.get(
            `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_ENV_API_KEY}&s=${router.query.name}${router.query.year ? "&y="+router.query.year : ""}` 
             
        );
        // console.log(data.Search);
        // setSearchedMovie(data.Search);
        if (data.Search) {
            filmBase = await mapMovies(data.Search);
            setTimeout(() => {
                setSearchedMovie(filmBase);
                setLoading(false);
            },1000)
            
        }else if(data.Error){
            alert(data.Error)
            setLoading(false);

        }
        
    }, [router.query.name,router.query.year]);

    const mapMovies = async (results) => {
        let filmData = [];
        results.forEach(async (element,index) => {
            const { data } = await axios.get(
                `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_ENV_API_KEY}&i=` + element.imdbID
            );
            const { Title, Plot, Poster, Genre, Year, imdbRating,imdbID } = data;

            filmData.push( { Title, Plot, Poster, Genre, Year, imdbRating,imdbID });
        });
        
        return filmData;
    };

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
