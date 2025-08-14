'use client'
import { useEffect, useState } from "react"
import MovieDescription from "../../components/Movie/MovieDescription"
import { FilterByGenre, filteredGenres, moviedata } from "../../data/movieData"
import { movieDataType } from "../../utils/types"
import { FavArrayList } from "@/data/movieData"
import GenreOptions from "@/components/Movie/GenreOptions"
import BackButton from "@/components/Movie/BackButton"

const Movie = () => {
   
    const [genreMovieList, setGenreMovieList] = useState<null | movieDataType[]>(null)
    // const [favArray, setFavArray] = useState<[] | movieDataType[]>([])
     const[isActive,setIsActive] = useState<movieDataType | null>(null)   
    
    const assignFav = (movie:movieDataType) => {
        setIsActive(movie)
        localStorage.setItem("movie",JSON.stringify(movie))
    }

   const chosenGenre = (item: string) => {
        setGenreMovieList(FilterByGenre(item))
    }

    const handleClear = () => {
        setGenreMovieList(null)
    }

    return (
        <>

        <div className="flex  bg-blue-50 justify-evenly p-8">
            <GenreOptions genresArray={filteredGenres} onGenreSelect={chosenGenre} />
            <BackButton onClear={handleClear} />
        </div>
            <div className="flex md:flex-row flex-wrap bg-gray-800">
                {genreMovieList && genreMovieList.map((item: movieDataType, index: number) => <MovieDescription key={index} movie={item} favMovie={isActive} favSelected={assignFav}/>)}

                {!genreMovieList &&
                    moviedata.map((item: movieDataType, index: number) => <MovieDescription key={index} movie={item} favMovie={isActive} favSelected={assignFav}/>)
                }
            </div>

        </>
    )
}

export default Movie 




  // const assignFav = (movieName: string) => {
    //     const exists = favArray.some((m) => m.movieName === movieName);

    //     if (!exists) {
    //         const newFavs = [...favArray, ...FavArrayList(movieName)]; // Make sure FavArrayList returns movieDataType
    //         setFavArray(newFavs);
            
    //         console.log(newFavs)
            
    //     } else {
    //         const newFavs = favArray.filter((m) => m.movieName !== movieName);
    //         setFavArray(newFavs);
    //         console.log(newFavs)
    //     }
    // }
    // const getIconForMovie = (movie: movieDataType) => {
        
    //     const isFav = favArray.some(m => m.movieName === movie.movieName);
    //    console.log(isFav)
       
    //     return isFav ? "favourite_icon.png" : "unfavourite_icon.png";
        
    // };