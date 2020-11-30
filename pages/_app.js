import "../styles/globals.scss";
import Navbar from "./components/Navbar";
import {MovieProvider} from "./context/MovieContext";


function MyApp({ Component, pageProps }) {
    return (
        <MovieProvider>
            <Navbar></Navbar>
            <Component {...pageProps} />
        </MovieProvider>
    );
}

export default MyApp;
