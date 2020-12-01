import styles from "../../styles/PopularMovieCard.module.scss";
import MovieContext from "../../context/MovieContext";
import { useContext,useState,useEffect } from "react";
export default function ViewMovieCard({ details }) {
    const {  addFavoriteMovie,removeFavoriteMovie } = useContext(MovieContext);
    const [isFavorite, setIsFavorite] = useState(false);
    
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("favoriteMovies"));
        const item = data.filter(movie => movie.imdbID == details.imdbID)
        if(item.length != 0){
            setIsFavorite(true);
        }else{
            setIsFavorite(false);
        }
    },[])
    
    const handleAddOrRemove = () => {
        if(isFavorite){
            removeFavoriteMovie(details.imdbID)
            setIsFavorite(false);
        }else{
            addFavoriteMovie(details)
            setIsFavorite(true);
        }  
    }
    return (
        <>
            <div className={styles.popularMovieCard}>
                <img
                    src={details.Poster || "/image/movieLogo.png"}
                    className={styles.movieBanner}
                    alt="movieBanner"
                ></img>
                <div className={styles.details}>
                    <div className={styles.heading}>
                        <div className={styles.rate}>
                            <img src="imdb.png"></img>
                            <span>{details.imdbRating}</span>
                        </div>
                        <div className={styles.category}>
                            <span>{details.Genre}</span>
                            {/* {details.Genre.split(",").map((item,index) => {
                                if(index < 4){
                                    return <span>{item}</span>
                                }
                            })} */}
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
                                <br></br>
                                Actors : {details.Actors}
                                <br></br>
                                Writer : {details.Writer}
                                <br></br>
                                Runtime : {details.Runtime}
                            </p>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <button className={isFavorite ? styles.btnfavorite : styles.btndefault} onClick={handleAddOrRemove}>
                            <i className="bx bxs-heart"></i>
                            {isFavorite ? "Remove from favorite" : "Add to favorite"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
ViewMovieCard.defaultProps = {
    details:{
        Poster:"/image/movieLogo.png"
    }
}
