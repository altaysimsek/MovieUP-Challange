import styles from "../../styles/MovieCard.module.scss";
export default function MovieCard({movieDetail}) {
    return (
        <>
            <div className={styles.movieCard}>
                <div className={styles.image}>
                    <img
                        src={movieDetail.Poster == "N/A" ? "/image/movieLogo.png" : movieDetail.Poster}
                        alt="Movie Poster"
                    ></img>
                    <div className={styles.details}>
                        <span>Biography</span>
                        <button>
                            <i className="bx bx-heart"></i>
                        </button>
                    </div>
                </div>
                <div className={styles.heading}>
                    <img src="imdb.png"></img>
                    <span className={styles.rate}>{movieDetail.imdbRating}</span>
                </div>
                <div className={styles.title}>
                    <span className={styles.year}>{movieDetail.year}</span>
                    <span className={styles.movieName}>{movieDetail.Title}</span>
                </div>
                <div className={styles.footer}>
                    <span>{movieDetail.Plot}</span>
                </div>
            </div>
        </>
    );
}
