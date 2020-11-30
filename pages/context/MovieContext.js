import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export function MovieProvider({ children }) {
    const [favoriteMovie, setFavoriteMovie] = useState([{ id: 1 }, { id: 2 }]);
    const addFavoriteMovie = (object) => {
        setFavoriteMovie([...favoriteMovie, object]);
        localStorage.setItem('favvoriFilm',"kedi");
    };
    return (
        <MovieContext.Provider value={{favoriteMovie, addFavoriteMovie}}>
            {children}
        </MovieContext.Provider>
    );
}
