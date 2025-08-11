import MovieDescription from "../components/Movie/MovieDescription"
import { moviedata } from "../data/movieData"
const Movie = () => {
    return (
        <div>
           {moviedata.map((item,index) => <MovieDescription key={index} {...item}/>)}
            
        </div>
    )
}

export default Movie 