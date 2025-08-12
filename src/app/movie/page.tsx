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
    const [fav, setFav] = useState<string>("unfavourite_icon.png")

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

    const favIcon = () => {
        if (fav === "unfavourite_icon.png") {
            setFav("favourite_icon.png")
        } else {
            setFav("unfavourite_icon.png")
        }
    }

    const assignFav = (movieName: string) => {
        // Check if the movie is already in favourites

        const exists = favArray.some((m) => m.movieName === movieName);

        if (!exists) {
            // Add to favourites
            // setFav("favourite_icon.png");
            const newFavs = [...favArray, ...FavArrayList(movieName)]; // Make sure FavArrayList returns movieDataType
            setFavArray(newFavs);
            console.log(newFavs)
        } else {
            // Remove from favourites
            // setFav("unfavourite_icon.png");
            const newFavs = favArray.filter((m) => m.movieName !== movieName);
            setFavArray(newFavs);
            console.log(newFavs)
        }
    }


        return (
            <>
                <button onClick={handleFilter}>Filter</button>
                <button onClick={handleClear}>Back</button>
                {filterSelected && filteredGenres.map((item, index) => <div key={index} onClick={() => chosenGenre(item)}>{item}</div>)}

                <div className="flex flex-col lg:flex-row flex-wrap bg-gray-800">
                    {genreMovieList && genreMovieList.map((item: movieDataType, index: number) => <MovieDescription key={index} {...item} handleIcon={setFav}  addFav={assignFav} />)}

                    {!genreMovieList &&
                        moviedata.map((item: movieDataType, index: number) => <MovieDescription key={index} {...item} handleIcon={setFav} addFav={assignFav} />)
                    }
                </div>


            </>
        )
    }

export default Movie 