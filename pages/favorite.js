import React, { useState, useContext } from "react";
import Head from "next/head";
import  MovieContext  from "./context/MovieContext";
import styles from "../styles/SearchResult.module.scss";

import {Container} from "react-bootstrap"
import MovieCard from "./components/MovieCard"

export default function Favorite() {
    const { favoriteMovie, addFavoriteMovie } = useContext(MovieContext);

    return (
        <>
            <Head>
                <title>MovieUP Favorite</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.banner}>
                <span className={styles.directory}>Home / </span>
                <span>Favorite</span>
            </div>
            <Container >
                <div className="d-flex flex-wrap">
                    {favoriteMovie && favoriteMovie.map(movie => (<MovieCard movieDetail={movie}></MovieCard>))}
                </div>
            </Container>

        </>
    );
}
