import styles from "../../styles/MovieCard.module.scss";
import { useRouter } from "next/router";
import MovieContext  from "../../context/MovieContext";
import { useContext,useEffect,useState } from "react";

export default function MovieCard({ movieDetail }) {
    const router = useRouter();
    const [isFavorite, setIsFavorite] = useState(false);
    const { addFavoriteMovie,removeFavoriteMovie } = useContext(MovieContext);
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("favoriteMovies"));
        const item = data.filter(movie => movie.imdbID == movieDetail.imdbID)
        if(item.length != 0){
            setIsFavorite(true);
        }else{
            setIsFavorite(false);
        }
    },[])
    


    const handleClick = () => {
        router.push({
            pathname: "/detail",
            query: { id: movieDetail.imdbID },
        });
    };
    const handleAddOrRemove = () => {
        if(isFavorite){
            removeFavoriteMovie(movieDetail.imdbID)
            setIsFavorite(false);
        }else{
            addFavoriteMovie(movieDetail)
            setIsFavorite(true);
        }  
    }

    return (
        <>
            <div className={styles.movieCard}>
                <div className={styles.image}>
                    <img
                        src={movieDetail.Poster || "/image/movieLogo.png"}
                        alt="MoviePoster"
                        onClick={handleClick}
                    ></img>
                    <div className={styles.details}>
                        <span>{movieDetail.Genre}</span>
                        <button className={isFavorite ? styles.favoriteButton : styles.defButton} onClick={handleAddOrRemove}>
                            <i className="bx bx-heart"></i>
                        </button>
                    </div>
                </div>
                <div className={styles.heading}>
                    <img src="imdb.png"></img>
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
    movieDetail:{
        Poster:"/image/movieLogo.png"
    }
}