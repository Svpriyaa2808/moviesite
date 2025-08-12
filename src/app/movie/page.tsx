'use client'
import { useEffect, useState } from "react"
import MovieDescription from "../components/Movie/MovieDescription"
import { FilterByGenre, filteredGenres, moviedata } from "../data/movieData"
import { movieDataType } from "../utils/types"

const Movie = () => {
    const[filterSelected,setFilterSelected] = useState<null|string[]>(null)
    const [genreMovieList,setGenreMovieList] = useState<null| movieDataType[]>(null)
   
    const handleFilter = ():void => {
        filterSelected === null ? setFilterSelected(filteredGenres) : setFilterSelected(null)    
    }

    const chosenGenre = (item:string) => {
        setGenreMovieList(FilterByGenre(item))
        setFilterSelected(null) 
    }

    const handleClear = () => {
        setFilterSelected(null)
        setGenreMovieList(null)
    }
   
    return (
        <>
        <div className="flex bg-blue-50 justify-evenly p-8">
            <div className="relative inline-block">
                <button className="bg-gray-800 text-white cursor-pointer p-6 min-w-[150px] text-[20px] font-bold rounded-2xl " onClick={handleFilter}>
                    Filter By Genre
                </button>
                {filterSelected && (
                    <div className="absolute left-0 mt-2 w-full bg-white rounded-lg shadow-lg overflow-hidden">
                        {filteredGenres.map((item, index) => (
                            <div className="bg-blue-50 hover:bg-blue-100 cursor-pointer text-[20px] font-bold" key={index} onClick={() => chosenGenre(item)}>
                                <p className="border-b-2 text-center">{item}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <button className="bg-gray-800 text-white cursor-pointer p-6 min-w-[150px] text-[20px] font-bold rounded-2xl" onClick={handleClear}>Back</button>
        </div>
        
        <div className="flex flex-col lg:flex-row flex-wrap bg-gray-800">
            {genreMovieList && genreMovieList.map((item:movieDataType,index:number) => <MovieDescription key={index} {...item} />)}

            {!genreMovieList &&
                moviedata.map((item:movieDataType,index:number) => <MovieDescription key={index} {...item} />)     
            }      
        </div>
        </>
    )
}

export default Movie 