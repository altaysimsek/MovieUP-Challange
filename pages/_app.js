import "../styles/globals.scss";
import Navbar from "./components/Navbar";
import MovieProvider from "./context/MovieWrapper";


function MyApp({ Component, pageProps }) {
    return (
        <MovieProvider>
            <Navbar></Navbar>
            <Component {...pageProps} />
        </MovieProvider>
    );
}

export default MyApp;
