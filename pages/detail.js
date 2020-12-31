import Head from 'next/head';
import { useRouter } from 'next/router';

import { useState, useEffect } from 'react';

import { Container } from 'react-bootstrap';
import axios from 'axios';
import styles from '../styles/SearchResult.module.scss';

import ViewMovieCard from './components/ViewMovieCard';

export default function Detail() {
  const router = useRouter();

  const [searchedMovie, setSearchedMovie] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    // We are gettin' data by id
    const { data } = await axios.get(
      `/api/getdetail?id=${router.query.id}`,
    );

    setSearchedMovie(data);
    setLoading(false);
  }, []);

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
        {loading ? (
          <div className="d-flex justify-content-center align-items-center w-100"><img src="loading.gif" alt="loading" /></div>
        ) : (
          <ViewMovieCard details={searchedMovie} />
        )}
      </Container>
    </>
  );
}
