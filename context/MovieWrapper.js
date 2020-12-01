import React, { useState, useEffect } from "react";

import MovieContext from "./MovieContext";

export default function MovieProvider({ children }) {
    const [favoriteMovie, setFavoriteMovie] = useState([]);

    //Adding movie to global favoriteMovie state and localStorage
    const addFavoriteMovie = async (object) => {
        setFavoriteMovie([...favoriteMovie, object]);
        const data = JSON.parse(localStorage.getItem("favoriteMovies"));
        data.push(object);
        localStorage.setItem("favoriteMovies", JSON.stringify(data));
    };
    //Removing movie to global favoriteMovie state and localStorage
    const removeFavoriteMovie = async (imdbID) => {
        const newMovie = favoriteMovie.filter(movie => movie.imdbID != imdbID)
        setFavoriteMovie(newMovie);
        localStorage.setItem("favoriteMovies", JSON.stringify(newMovie));

    };

    //Getting the movies when the app loads
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("favoriteMovies"));
        if (data) {
            setFavoriteMovie(
                JSON.parse(localStorage.getItem("favoriteMovies"))
            );
        } else {
            localStorage.setItem("favoriteMovies", JSON.stringify([]));
        }
    }, []);
    return (
        <MovieContext.Provider value={{ favoriteMovie, addFavoriteMovie,removeFavoriteMovie }}>
            {children}
        </MovieContext.Provider>
    );
}
