'use client'
import { movieDataType } from "@/app/utils/types"
import { useState } from "react"

// interface MovieDescriptionProps extends movieDataType {
//     handleFav:(movieName:string)=>void
// }
const MovieDescription = ({icon, movieName, releaseYear, genre, favourite}: movieDataType) => {
    const[fav,setFav] = useState<string>("unfavourite_icon.png")
    
    const addFav = () => {
        if(fav === "unfavourite_icon.png"){
            setFav("favourite_icon.png")
        }else {
            setFav("unfavourite_icon.png")
        }
        
    }


    return(
        
        <div className="flex  m-auto mb-4 rounded-4xl items-center bg-amber-50 max-w-[60%] p-4">
            <div className="flex-[25%] m-auto">
                <img className="w-[50%] h-[auto] m-auto" src={icon} alt={movieName} width={500} height={100}/>
            </div>
            <div className="flex-[50%] mt-8 p-8 text-center">
                <h4 className="font-bold text-2xl uppercase">{movieName}</h4>
                <p className="text-[22px] mt-4">Year:{releaseYear} </p>
                <p className="text-[22px] mt-4">Genre:{genre}</p>
                </div>
                <div className="flex-[25%] m-auto">
                <img className="w-[30%] h-[auto] m-auto" onClick={addFav}  src={fav} alt="heart_icon"></img>
                </div>
            
        </div>
    )
}

export default MovieDescription