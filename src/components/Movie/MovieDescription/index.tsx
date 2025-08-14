'use client'

import { movieDataType } from "@/utils/types"
import { useState } from "react";


// interface MovieDescriptionProps extends movieDataType {
//     handleFav:(movieName:string)=>void
// }
// const MovieDescription = ({icon, movieName, releaseYear, genre}: movieDataType) => {
//     const[fav,setFav] = useState<string>("unfavourite_icon.png")

//     const addFav = () => {
//         if(fav === "unfavourite_icon.png"){
//             setFav("favourite_icon.png")
//         }else {
//             setFav("unfavourite_icon.png")
//         }

//     }

interface MovieDescriptionProps {
    movie: movieDataType,
    favSelected: (movie: movieDataType) => void,
    favMovie: movieDataType | null
}



const MovieDescription = ({ movie, favSelected, favMovie }: MovieDescriptionProps) => {
    const [displayDescription, setDisplayDescription] = useState<boolean>(false);
    const [rotate,setRotate] = useState<boolean>(false);

    const handleDescription = (desc: string) => {
        setDisplayDescription(true)
    }

    const isFavourite = favMovie?.movieName === movie.movieName
   
    return (
        <>
            <div data-testid="movie" className="flex-[45%] m-4 flex flex-col align-center md:flex-row  rounded-4xl items-center bg-blue-50  p-4">
                <div className="flex-[20%]">
                    <img className={`w-[50%] sm:w-[100%] h-[auto] m-auto sm:ml-8 transition-transform duration-500 ${rotate ? "rotate-360" : ""}`} 
                    src={movie.icon} onMouseEnter={() => setRotate(true)} onMouseLeave={() => setRotate(false)}
                     alt={`${movie.movieName} ${rotate ? "rotated" : "not-rotated"}`} width={500} height={100} />
                </div>
                <div className="flex-[60%] mt-4 sm:mt-8 px-0 py-4 sm:py-8 text-center">
                    <h4 className="font-bold text-2xl uppercase" onClick={() => handleDescription("true")}>{movie.movieName}</h4>
                    <p className="text-[22px] mt-4">Year:{movie.releaseYear} </p>
                    <p className="text-[22px] mt-4">Genre:{movie.genre}</p>
                </div>
                <div className="flex-[20%]">
                    <img className={`w-[25%] sm:w-[35%] h-[auto] cursor-pointer m-auto `} onClick={() => favSelected(movie)} src={isFavourite ? "favourite_icon.png" : "unfavourite_icon.png"} alt={isFavourite ? `favourite_icon.png ${movie.movieName}` : `unfavourite_icon.png ${movie.movieName}`}></img>
                </div>
            </div>
            {displayDescription && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-xl max-w-md w-full shadow-lg relative">
                        <button
                            onClick={() => setDisplayDescription(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl">
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold mb-4">{movie.movieName}</h2>
                        <p className="text-lg leading-relaxed">{movie.description}</p>
                    </div>
                </div>
            )}

        </>



    )
}

export default MovieDescription