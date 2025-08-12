'use client'
import { FavArrayList } from "@/app/data/movieData"
import { movieDataType } from "@/app/utils/types"
import { useEffect, useState } from "react"

interface MovieDescriptionProps extends movieDataType {
    addFav:(movieName:string)=>void
    handleIcon:string
}


const MovieDescription = ({icon, movieName, releaseYear, genre, favourite,addFav,handleIcon}: MovieDescriptionProps) => {
    
   
    let favouriteMovieList:movieDataType[] =[];

    // const addFav = (movieName:string) => {
    //     if(fav === "unfavourite_icon.png"){
    //         setFav("favourite_icon.png")
    //         // setFavArray(FavArrayList(movieName))
    //          const newFavs = [...favArray, ...FavArrayList(movieName)]; // Make sure FavArrayList returns movieDataType
    //          setFavArray(newFavs);
    //          console.log(newFavs)
            
    //     }else {
    //         setFav("unfavourite_icon.png")
    //     }
    // }


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
            {/* {favArray.map((item,index)=> < div key={index}>
            <h4 className="font-bold text-2xl uppercase">{item.movieName}</h4>
                <p className="text-[22px] mt-4">Year:{item.releaseYear} </p>
                <p className="text-[22px] mt-4">Genre:{item.genre}</p>
            </div>)} */}

                
        </div>
    )
}

export default MovieDescription