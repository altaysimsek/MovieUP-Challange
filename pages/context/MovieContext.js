import React, { useState, createContext ,useEffect} from "react";

export const MovieContext = createContext();

export function MovieProvider({ children }) {
    const [favoriteMovie, setFavoriteMovie] = useState([]);
    const addFavoriteMovie = (object) => {
        setFavoriteMovie([...favoriteMovie, object]);
        localStorage.setItem('favoriteMovies',JSON.stringify(favoriteMovie));
    };
    useEffect(() => {
        setFavoriteMovie(JSON.parse(localStorage.getItem("favoriteMovies")));
    },[])
    return (
        <MovieContext.Provider value={{favoriteMovie, addFavoriteMovie}}>
            {children}
        </MovieContext.Provider>
    );
}
