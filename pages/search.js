import { useRouter } from 'next/router';
import Head from 'next/head';

import { useState, useEffect } from 'react';

import { Container } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import styles from '../styles/SearchResult.module.scss';

import Searchbox from './components/Searchbox';
import MovieCard from './components/MovieCard';

export default function Search() {
  const router = useRouter();

  const [searchedMovie, setSearchedMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalMovie, setTotalMovie] = useState(0);
  const [maxPage, setMaxPage] = useState(1);

  const mapMovies = async (results) => {
    const filmData = [];
    for (let i = 0; i < results.length; i++) {
      const { data } = await axios.get(
        `/api/getdetail?id=${results[i].imdbID}`,
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
    // this use effect works only the queries changed
  useEffect(async () => {
    // Update the document title using the browser API
    setLoading(true);
    let filmBase = [];
    // First fetch to getting one page movie data

    const { data } = await axios.get(
      `/api/getmovie/?name=${router.query.name}${
        router.query.year ? `&year=${router.query.year}` : ''
      }${
        router.query.type ? `&type=${router.query.type}` : ''
      }${`&page=${currentPage}`}`,
    );

    if (data.Search) {
      // After this we calling mapMovies for fetch more detail for every movie come from data and changing our state
      setLoading(true);
      filmBase = await mapMovies(data.Search.splice(0, 9));
      setSearchedMovie(filmBase);
      setTotalMovie(parseInt(data.totalResults), 10);
      setMaxPage(Math.ceil(data.totalResults / 10));
      setLoading(false);
    } else if (data.Error) {
      setLoading(false);
    }
  }, [router.query.name, router.query.year, router.query.type, currentPage]);

  // We need to make double fetch to getting more details, it's function for handle this

  // Render function to handle rendering movie
  const renderMovie = searchedMovie.map((movie) => (
    <MovieCard key={movie.imdbID} movieDetail={movie} />
  ));
  const handlePageClick = (data) => {
    const selected = data.selected + 1;

    setCurrentPage(selected);
  };
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
        <Searchbox />
        <div className={styles.title}>
          Search result
          {' '}
          <span>{router.query.name}</span>
        </div>
      </Container>

      <Container className="mt-5">
        <div className={styles.movielist}>
          {!loading ? (
            renderMovie
          ) : (
            <div className="d-flex justify-content-center align-items-center w-100">
              <img src="loading.gif" alt="loading" />
            </div>
          )}
        </div>
      </Container>
      <Container className="mt-5">
        <ReactPaginate
          pageCount={maxPage}
          marginPagesDisplayed={0}
          pageRangeDisplayed={2}
          previousLabel="Previous"
          nextLabel="Next"
          onPageChange={handlePageClick}
          containerClassName={styles.pagination}
          activeLinkClassName={styles.activelink}
          pageLinkClassName={styles.link}
          previousLinkClassName={styles.link}
          nextLinkClassName={styles.link}
          breakClassName={styles.link}
        />
      </Container>
    </>
  );
}
