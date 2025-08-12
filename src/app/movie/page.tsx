import MovieDescription from "../components/Movie/MovieDescription"
import { moviedata } from "../data/movieData"
import Footer from "../components/Footer"
import FilterButton from "../components/Movie/FilterButton"

const Movie = () => {
    
    return (
        <>
        <FilterButton />
        <div className="flex flex-col lg:flex-row flex-wrap bg-gray-800">
           {moviedata.map((item,index) => <MovieDescription key={index} {...item} />)}      
        </div>
        </>
    )
}

export default Movie 