import Header from "../components/Header"
import MovieDescription from "../components/Movie/MovieDescription"
import { moviedata } from "../data/movieData"


const Movie = () => {
    
    return (
        <>
        
          <div className=" bg-gray-800">
        <div className="flex flex-col lg:flex-row flex-wrap bg-gray-800">
           {moviedata.map((item,index) => <MovieDescription key={index} {...item} />)}      
        </div>
        </div>
        </>
      
    )
}

export default Movie 