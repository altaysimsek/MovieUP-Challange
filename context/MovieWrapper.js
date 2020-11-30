import React, { useState, useEffect } from "react";

import MovieContext from "./MovieContext";

export default function MovieProvider({ children }) {
    const [favoriteMovie, setFavoriteMovie] = useState([]);

    const addFavoriteMovie = async (object) => {
            setFavoriteMovie([...favoriteMovie, object]);
            const data = JSON.parse(localStorage.getItem("favoriteMovies"));
            data.push(object);
            localStorage.setItem("favoriteMovies", JSON.stringify(data));  
    };

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
        <MovieContext.Provider value={{ favoriteMovie, addFavoriteMovie }}>
            {children}
        </MovieContext.Provider>
    );
}
