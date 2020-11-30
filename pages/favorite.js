import React, {useState,useContext} from "react"
import Head from "next/head";
import {MovieContext} from "./context/MovieContext"
export default function Favorite() {
    const {favoriteMovie,addFavoriteMovie} = useContext(MovieContext)
    
    return (
            <>
                <Head>
                <title>MovieUP Favorite</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            </>
        
    );
}
