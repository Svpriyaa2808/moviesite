'use client'
import { useEffect, useState } from "react"
import MovieDescription from "../components/Movie/MovieDescription"
import { FilterByGenre, filteredGenres, moviedata } from "../data/movieData"
import { movieDataType } from "../utils/types"
import Favourites from "../favourites/page"
import { FavArrayList } from "@/app/data/movieData"

const Movie = () => {
    const [filterSelected, setFilterSelected] = useState<null | string[]>(null)
    const [genreMovieList, setGenreMovieList] = useState<null | movieDataType[]>(null)
    const [favArray, setFavArray] = useState<[] | movieDataType[]>([])

    const handleFilter = (): void => {
        filterSelected === null ? setFilterSelected(filteredGenres) : setFilterSelected(null)
    }

    const chosenGenre = (item: string) => {
        setGenreMovieList(FilterByGenre(item))
        setFilterSelected(null)
    }

    const handleClear = () => {
        setFilterSelected(null)
        setGenreMovieList(null)
    }

    const assignFav = (movieName: string) => {
        const exists = favArray.some((m) => m.movieName === movieName);

        if (!exists) {

            const newFavs = [...favArray, ...FavArrayList(movieName)]; // Make sure FavArrayList returns movieDataType
            setFavArray(newFavs);
            console.log(newFavs)
        } else {
            const newFavs = favArray.filter((m) => m.movieName !== movieName);
            setFavArray(newFavs);
            console.log(newFavs)
        }
    }
    const getIconForMovie = (movieName: string) => {
        const isFav = favArray.some(m => m.movieName === movieName);
        return isFav ? "favourite_icon.png" : "unfavourite_icon.png";
    };


    return (
        <>
            <button onClick={handleFilter}>Filter</button>
            <button onClick={handleClear}>Back</button>
            {filterSelected && filteredGenres.map((item, index) => <div key={index} onClick={() => chosenGenre(item)}>{item}</div>)}

            <div className="flex flex-col lg:flex-row flex-wrap bg-gray-800">
                {genreMovieList && genreMovieList.map((item: movieDataType, index: number) => <MovieDescription key={index} {...item} handleIcon={getIconForMovie(item.movieName)} addFav={assignFav} />)}

                {!genreMovieList &&
                    moviedata.map((item: movieDataType, index: number) => <MovieDescription key={index} {...item} handleIcon={getIconForMovie(item.movieName)} addFav={assignFav} />)
                }
            </div>
        </>
    )
}

export default Movie 