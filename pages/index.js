import Head from "next/head";
import { Container } from "react-bootstrap";
import Searchbox from "./components/Searchbox";
import styles from "../styles/Home.module.scss";

export default function Home() {
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
                  <span>View more <i class='bx bx-right-arrow-alt' ></i></span>
                </div>
            </Container>
        </>
    );
}
