import "../styles/globals.scss";
import Navbar from "./components/Navbar";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar></Navbar>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
