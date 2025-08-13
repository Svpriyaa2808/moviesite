'use client'
import { useState, useEffect } from "react";
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
      <div className="bg-gray-800 grow ">
      {fav ? (
        
        <div className="flex-[45%] mb-5 flex flex-col align-center  max-w-[50%] m-auto md:flex-row  rounded-4xl items-center bg-blue-50  ">
          <div className="flex-[20%]">
            <img className="w-[50%] sm:w-[100%] h-[auto] m-auto sm:ml-8" src={fav.icon} alt={fav.movieName} width={500} height={100} />
          </div>
          <div className="flex-[60%] mt-4 sm:mt-8 px-0 py-4 sm:py-8 text-center">
            <h4 className="font-bold text-2xl uppercase">{fav.movieName}</h4>
            <p className="text-[22px] mt-4">Year:{fav.releaseYear} </p>
            <p className="text-[22px] mt-4">Genre:{fav.genre}</p>
          </div>

        </div>
      ) : <p>No favourites</p>}
      </div>
    </>
  )
}

export default Favourites