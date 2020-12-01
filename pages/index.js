import Head from "next/head";
//Bootstrap
import { Container, Carousel } from "react-bootstrap";
//External components
import Searchbox from "./components/Searchbox";
import CarouselMovie from "./components/CarouselMovie";
//Css
import styles from "../styles/Home.module.scss";
import React, { useState } from "react";

export default function Home() {
    const [popMovies, setPopMovies] = useState([
        {
            id: 1,
            imdbRate: "8.8",
            imgUrl:
                "https://i.pinimg.com/originals/b7/f1/ef/b7f1efa3851a3ffb08cb4ff923226a92.jpg",
            category: ["Action", "Biograph"],
            year:"2020",
            movieName: "The Godfather",
            description:
                "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son",
        },
        {
            id: 2,
            imdbRate: "7.8",
            imgUrl:
                "https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg",
            category: ["Action", "Sci-fi"],
            year:"2020",
            movieName: "Tenet",
            description:
                "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time."
        },
        
        {
            id: 3,
            imdbRate: "7.1",
            imgUrl:
                "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg",
            category: ["Action", "Adventure"],
            year:"2013",
            movieName: "Fast & Furious 6",
            description:
                "Hobbs has Dominic and Brian reassemble their crew to take down a team of mercenaries: Dominic unexpectedly gets sidetracked with facing his presumed deceased girlfriend, Letty."
        },
    ]);

    return (
        <>
            <Head>
                <title>MovieUP Anasayfa</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container fluid className={styles.branding}>
                <h1>
                    Welcome to <br></br> <b>MovieUP.</b>
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris{" "}
                </p>
            </Container>
            <Container>
                <div style={{ marginTop: "-3rem" }}>
                    <Searchbox></Searchbox>
                </div>
                <div className={styles.popularMovies}>
                    <h2>Popular Movies</h2>
                    <span>
                        View more <i className="bx bx-right-arrow-alt"></i>
                    </span>
                </div>
            </Container>
            <Container fluid>
                <CarouselMovie movies={popMovies}></CarouselMovie>
            </Container>
        </>
    );
}
