import { movieDataType } from "@/app/utils/types"

const MovieDescription = ({icon,movieName,releaseYear,genre,favourite}:movieDataType) => {
    return(
        <div>
            <h4>Movie Name:{movieName}</h4>
            <p>Year:{releaseYear} </p>
            <p>Genre:{genre}</p>
            <img src={favourite} alt={movieName}></img>
        </div>
    )
}

export default MovieDescription