import Header from "../components/Header"
import MovieDescription from "../components/Movie/MovieDescription"
import { moviedata } from "../data/movieData"


const Movie = () => {
    
    return (
        <>
        <Header title="Film Focus" />
          <div className=" bg-gray-800">
           {moviedata.map((item,index) => <MovieDescription key={index} {...item} />)}      
        </div>
        </>
      
    )
}

export default Movie 