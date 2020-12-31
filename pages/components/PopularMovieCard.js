import styles from '../../styles/PopularMovieCard.module.scss';

export default function PopularMovieCard({ details }) {
  return (
    <>
      <div className={styles.popularMovieCard}>
        <img
          alt="movieBanner"
          src={details.imgUrl || '/image/movieLogo.png'}
          className={styles.movieBanner}
        />
        <div className={styles.details}>
          <div className={styles.heading}>
            <div className={styles.rate}>
              <img src="imdb.png" alt="imdb-image" />
              <span>{details.imdbRate}</span>
            </div>
            <div className={styles.category}>
              {details.category.map((item) => (
                <span>{item}</span>
              ))}
            </div>
          </div>
          <div className={styles.aboutMovie}>
            <div className={styles.title}>
              <span className={styles.year}>{details.year}</span>
              <span className={styles.name}>
                {details.movieName}
              </span>
            </div>
            <div className={styles.description}>
              <p>{details.description}</p>
            </div>
          </div>
          <div className={styles.footer}>
            <button type="button" className={styles.btndefault}>
              <i className="bx bxs-heart" />
              Add to favorite
            </button>
            <a href="#">View Details</a>
          </div>
        </div>
      </div>
    </>
  );
}
PopularMovieCard.defaultProps = {
  details: {
    imgUrl: '/image/movieLogo.png',
    category: [],
  },
};
