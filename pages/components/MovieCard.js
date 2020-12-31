import { useRouter } from 'next/router';

import { useContext, useEffect, useState } from 'react';

import styles from '../../styles/MovieCard.module.scss';

import MovieContext from '../../context/MovieContext';

export default function MovieCard({ movieDetail }) {
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);
  const { addFavoriteMovie, removeFavoriteMovie } = useContext(MovieContext);

  // We are using useEffect for marking favorite movies
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('favoriteMovies'));
    const item = data.filter((movie) => movie.imdbID === movieDetail.imdbID);
    if (item.length !== 0) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, []);
  // Is the favorite state changed uptade the local favorite state
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('favoriteMovies'));
    const item = data.filter((movie) => movie.imdbID === movieDetail.imdbID);
    if (item.length !== 0) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [isFavorite]);

  const handleClick = () => {
    router.push({
      pathname: '/detail',
      query: { id: movieDetail.imdbID },
    });
  };
  const handleAddOrRemove = () => {
    if (isFavorite) {
      removeFavoriteMovie(movieDetail.imdbID);
      setIsFavorite(false);
    } else {
      addFavoriteMovie(movieDetail);
      setIsFavorite(true);
    }
  };
  const handleImage = (ev) => {
    ev.target.src = '/image/placeholder.png';
  };

  return (
    <>
      <div className={styles.movieCard}>
        <div className={styles.image}>
          <img
            src={
                            movieDetail.Poster === 'N/A'
                              ? '/image/placeholder.png'
                              : ''
                                  || movieDetail.Poster
                                  || '/image/movieLogo.png'
                        }
            onError={handleImage}
            alt="MoviePoster"
            onClick={handleClick}
          />
          <div className={styles.details}>
            <span>{movieDetail.Genre}</span>
            <button
              type="button"
              className={
                                isFavorite
                                  ? styles.favoriteButton
                                  : styles.defButton
                            }
              onClick={handleAddOrRemove}
            >
              <i className="bx bx-heart" />
            </button>
          </div>
        </div>
        <div className={styles.heading}>
          <img src="imdb.png" alt="imdb" />
          <span className={styles.rate}>
            {movieDetail.imdbRating}
          </span>
        </div>
        <div className={styles.title}>
          <span className={styles.year}>{movieDetail.year}</span>
          <span className={styles.movieName}>
            {movieDetail.Title}
          </span>
        </div>
        <div className={styles.footer}>
          <span>{movieDetail.Plot}</span>
        </div>
      </div>
    </>
  );
}
MovieCard.defaultProps = {
  movieDetail: {
    Poster: '/image/movieLogo.png',
  },
};
