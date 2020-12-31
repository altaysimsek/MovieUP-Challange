import Head from 'next/head';

import React, { useContext } from 'react';

import { Container } from 'react-bootstrap';
import MovieCard from './components/MovieCard';
import MovieContext from '../context/MovieContext';

import styles from '../styles/SearchResult.module.scss';

export default function Favorite() {
  // Getting movie data from context
  const { favoriteMovie } = useContext(MovieContext);

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
      <Container>
        <div className={styles.movielist}>
          {favoriteMovie
                        && favoriteMovie.map((movie) => (
                          <MovieCard movieDetail={movie} />
                        ))}
        </div>
      </Container>

    </>
  );
}
