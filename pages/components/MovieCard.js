import styles from "../../styles/MovieCard.module.scss";
export default function MovieCard(props) {
    return (
        <>
            <div className={styles.movieCard}>
                <div className={styles.image}>
                    <img
                        src="thegodfather.png"
                    ></img>
                    <div className={styles.details}>
                        <span>Biography</span>
                        <button>
                            <i class="bx bx-heart"></i>
                        </button>
                    </div>
                </div>
                <div className={styles.heading}>
                    <img src="imdb.png"></img>
                    <span className={styles.rate}>8.8</span>
                </div>
                <div className={styles.title}>
                    <span className={styles.year}>2019</span>
                    <span className={styles.movieName}>The Godfatherssssssssssssssssssssssssss</span>
                </div>
                <div className={styles.footer}>
                    <span>The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.</span>
                </div>
            </div>
        </>
    );
}
