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
            id: 1,
            imgUrl:
                "https://images-na.ssl-images-amazon.com/images/I/81cw8NVT36L._SX342_.jpg",
            imdbRate: "8.8",
            year:"2019",
            category: ["Action", "Race"],
            movieName: "The TokyoDrift",
            description:
                "Arabalar burada yarışır",
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
