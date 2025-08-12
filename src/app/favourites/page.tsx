'use client'
import { useState,useEffect } from "react";
import { movieDataType } from "../utils/types";
import MovieDescription from "../components/Movie/MovieDescription";

const Favourites = () => {
    const [fav, setFav] = useState<movieDataType | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("movie");
    if (stored) {
      setFav(JSON.parse(stored));
    }
  }, []);
  
    return (
        <>
        {fav ? (
            <h4>{fav[0].movieName}</h4>
        ) : <p>No favourites</p>}
            
        </>
    )
}

export default Favourites