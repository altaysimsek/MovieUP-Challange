import { useContext, useState, useEffect } from 'react';
import styles from '../../styles/PopularMovieCard.module.scss';

import MovieContext from '../../context/MovieContext';

export default function ViewMovieCard({ details }) {
  const { addFavoriteMovie, removeFavoriteMovie } = useContext(MovieContext);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // We are using useEffect for marking favorite movies
    const data = JSON.parse(localStorage.getItem('favoriteMovies'));
    const item = data.filter((movie) => movie.imdbID === details.imdbID);
    if (item.length !== 0) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, []);

  // Changing the which function works by state of favorite
  const handleAddOrRemove = () => {
    if (isFavorite) {
      removeFavoriteMovie(details.imdbID);
      setIsFavorite(false);
    } else {
      addFavoriteMovie(details);
      setIsFavorite(true);
    }
  };

  const handleImage = (ev) => {
    ev.target.src = '/image/placeholder.png';
  };
  return (
    <>
      <div className={styles.popularMovieCard}>
        <img
          src={
                        details.Poster === 'N/A'
                          ? '/image/placeholder.png'
                          : details.Poster || '/image/movieLogo.png'
                    }
          onError={handleImage}
          className={styles.movieBanner}
          alt="movieBanner"
        />
        <div className={styles.details}>
          <div className={styles.heading}>
            <div className={styles.rate}>
              <img src="imdb.png" alt="imdb" />
              <span>{details.imdbRating}</span>
            </div>
            <div className={styles.category}>
              <span>{details.Genre}</span>
            </div>
          </div>
          <div className={styles.aboutMovie}>
            <div className={styles.title}>
              <span className={styles.year}>
                {details.Released}
              </span>
              <span className={styles.name}>{details.Title}</span>
            </div>
            <div className={styles.description}>
              <p>
                {details.Plot}
                <br />
                Actors :
                {' '}
                {details.Actors}
                <br />
                Writer :
                {' '}
                {details.Writer}
                <br />
                Runtime :
                {' '}
                {details.Runtime}
              </p>
            </div>
          </div>
          <div className={styles.footer}>
            <button
              type="button"
              className={
                                isFavorite
                                  ? styles.btnfavorite
                                  : styles.btndefault
                            }
              onClick={handleAddOrRemove}
            >
              <i className="bx bxs-heart" />
              {isFavorite
                ? 'Remove from favorite'
                : 'Add to favorite'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
ViewMovieCard.defaultProps = {
  details: {
    Poster: '/image/movieLogo.png',
  },
};
