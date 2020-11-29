import styles from "../../styles/PopularMovieCard.module.scss";
export default function PopularMovieCard(props) {
    return (
        <>
            <div className={styles.popularMovieCard}>
                <img
                    src={props.details.imgUrl}
                    className={styles.movieBanner}
                    
                    alt="movieBanner"
                ></img>
                <div className={styles.details}>
                    <div className={styles.heading}>
                        <div className={styles.rate}>
                            <img src="imdb.png"></img>
                            <span>{props.details.imdbRate}</span>
                        </div>
                        <div className={styles.category}>
                            {props.details.category.map((item) => (
                                <span>{item}</span>
                            ))}
                        </div>
                    </div>
                    <div className={styles.aboutMovie}>
                        <div className={styles.title}>
                            <span className={styles.year}>
                                {props.details.year}
                            </span>
                            <span className={styles.name}>
                                {props.details.movieName}
                            </span>
                        </div>
                        <div className={styles.description}>
                            <p>
                                {props.details.description}
                            </p>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <button className={styles.btndefault}>
                            <i class="bx bxs-heart"></i>
                            Add to favorite
                        </button>
                        <a href="#">View Details</a>
                    </div>
                </div>
            </div>
        </>
    );
}
