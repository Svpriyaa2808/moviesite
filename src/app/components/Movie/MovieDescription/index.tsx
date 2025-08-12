'use client'

import { movieDataType } from "@/app/utils/types"
import { useState } from "react";

interface MovieDescriptionProps extends movieDataType {
    addFav: (movieName: string) => void
    handleIcon: string
}

const MovieDescription = ({ icon, movieName, releaseYear, genre, favourite, description, addFav, handleIcon }: MovieDescriptionProps) => {
    const [displayDescription, setDisplayDescription] = useState<boolean>(false);

    const handleDescription = (desc: string) => {
        setDisplayDescription(true)
    }

    return (
        <>
            <div className="flex-[45%] m-4 flex flex-col align-center sm:flex-row  rounded-4xl items-center bg-blue-50  p-4 ">
                <div className="flex-[20%]">
                    <img className="w-[50%] sm:w-[100%] h-[auto] m-auto sm:ml-8" src={icon} alt={movieName} width={500} height={100} />
                </div>
                <div className="flex-[60%] mt-4 sm:mt-8 px-0 py-4 sm:py-8 text-center">
                    <h4 className="font-bold text-2xl uppercase" onClick={() => handleDescription("true")}>{movieName}</h4>
                    <p className="text-[22px] mt-4">Year:{releaseYear} </p>
                    <p className="text-[22px] mt-4">Genre:{genre}</p>
                </div>
                <div className="flex-[20%]">
                    <img className="w-[25%] sm:w-[35%] h-[auto] cursor-pointer m-auto " onClick={() => addFav(movieName)} src={handleIcon} alt="heart_icon"></img>
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
                        <h2 className="text-2xl font-bold mb-4">{movieName}</h2>
                        <p className="text-lg leading-relaxed">{description}</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default MovieDescription