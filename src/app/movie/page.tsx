'use client'
import { useEffect, useState } from "react"
import MovieDescription from "../components/Movie/MovieDescription"
import { FilterByGenre, filteredGenres, moviedata,favMovieArray} from "../data/movieData"
import { movieDataType } from "../utils/types"

const Movie = () => {
    const[filterSelected,setFilterSelected] = useState<null|string[]>(null)
    const [genreMovieList,setGenreMovieList] = useState<null| movieDataType[]>(null)
    const [favMovie, setFavMovie] = useState<movieDataType[]>([])

    const addFav = (movieName:string) => {
        const newArray = favMovieArray(movieName);
        setFavMovie([...favMovie,...newArray])
        console.log(favMovie)
    }

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
        <button onClick={handleFilter}>Filter</button>
        <button onClick={handleClear}>Back</button>
         {filterSelected && filteredGenres.map((item,index) => <div key={index} onClick={() => chosenGenre(item)}>{item}</div>)}

 <div className="flex flex-col lg:flex-row flex-wrap bg-gray-800">
         {genreMovieList && genreMovieList.map((item:movieDataType,index:number) => <MovieDescription key={index} {...item} handleFav={addFav}/>)}

       {!genreMovieList &&
           moviedata.map((item:movieDataType,index:number) => <MovieDescription key={index} {...item} handleFav={addFav}/>)     
         }      
         </div>
         {favMovie && favMovie.map((item,index)=> <div key={index}>
            <p>{item.movieName}</p>
         </div>)}
        </>
    )
}

export default Movie 