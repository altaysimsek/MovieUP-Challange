import styles from "../../styles/MovieCard.module.scss";
import { useRouter } from "next/router";

export default function MovieCard({movieDetail}) {
    const router = useRouter();
    
    const handleClick = () => {
        router.push({
            pathname: "/detail",
            query: {id: movieDetail.imdbID},
        });
    }


    return (
        <>
            <div className={styles.movieCard}>
                <div className={styles.image}>
                    <img
                        src={movieDetail.Poster == "N/A" ? "/image/movieLogo.png" : movieDetail.Poster}
                        alt="Movie Poster"
                        onClick={handleClick}
                    ></img>
                    <div className={styles.details}>
                        <span>{movieDetail.Genre}</span>
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
