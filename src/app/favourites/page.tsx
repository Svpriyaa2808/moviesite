import Header from "../components/Header"
import { movieDataType } from "../utils/types"



const Favourites = ({icon, movieName, releaseYear, genre, favourite}:movieDataType) => {
    

    return (
        <>
            <h4>{movieName}</h4>
        </>
    )
}

export default Favourites