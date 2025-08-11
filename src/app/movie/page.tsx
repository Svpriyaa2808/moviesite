import MovieDescription from "../components/Movie/MovieDescription"
import { moviedata } from "../data/movieData"
import Footer from "../components/Footer"

const Movie = () => {
    
    return (
        <>
        <div className="grow bg-gray-800">
           {moviedata.map((item,index) => <MovieDescription key={index} {...item} />)}      
        </div>
        </>
    )
}

export default Movie 