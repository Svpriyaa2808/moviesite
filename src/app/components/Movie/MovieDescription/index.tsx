'use client'
import { movieDataType } from "@/app/utils/types"
// interface MovieDescriptionProps extends movieDataType {
//     handleFav:(movieName:string)=>void
// }
// const MovieDescription = ({icon, movieName, releaseYear, genre}: movieDataType) => {
//     const[fav,setFav] = useState<string>("unfavourite_icon.png")
    
//     const addFav = () => {
//         if(fav === "unfavourite_icon.png"){
//             setFav("favourite_icon.png")
//         }else {
//             setFav("unfavourite_icon.png")
//         }
        
//     }


interface MovieDescriptionProps extends movieDataType {
    addFav:(movieName:string)=>void
    handleIcon:string
}

// interface MovieDescriptionProps extends movieDataType {
//     handleFav:(movieName:string)=>void
// }


const MovieDescription = ({icon, movieName, releaseYear, genre,addFav,handleIcon}: MovieDescriptionProps) => {
    return(  
        <div className="flex-[45%] m-4 flex flex-col align-center sm:flex-row  rounded-4xl items-center bg-blue-50  p-4">
            <div className="flex-[20%]">
                <img className="w-[50%] sm:w-[100%] h-[auto] m-auto sm:ml-8" src={icon} alt={movieName} width={500} height={100}/>
            </div>
            <div className="flex-[60%] mt-4 sm:mt-8 px-0 py-4 sm:py-8 text-center">
                <h4 className="font-bold text-2xl uppercase">{movieName}</h4>
                <p className="text-[22px] mt-4">Year:{releaseYear} </p>
                <p className="text-[22px] mt-4">Genre:{genre}</p>
                </div>
               <div className="flex-[20%]">
                <img className="w-[25%] sm:w-[35%] h-[auto] cursor-pointer m-auto " onClick={() => addFav(movieName)}  src={handleIcon} alt="heart_icon"></img>
                 </div> 
        </div>
    )
}

export default MovieDescription