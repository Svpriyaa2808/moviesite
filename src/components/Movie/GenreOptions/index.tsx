'use client'
import { filteredGenres } from "@/data/movieData";
import { useState } from "react"

type MovieFilterProps = {
    genresArray: string[];
    onGenreSelect: (genre: string) => void;
};

const GenreOptions = ({ genresArray, onGenreSelect}: MovieFilterProps) => {
    const [filterSelected, setFilterSelected] = useState<null | string[]>(null);

    const handleFilterToggle = () => {
        setFilterSelected(filterSelected === null ? filteredGenres : null);
    };

    const handleClick = (item:string) => {
        onGenreSelect(item);
        setFilterSelected(null);
    }

    return (
        
            <div className="relative inline-block">
                <button
                className="bg-gray-800 text-white cursor-pointer p-6 min-w-[150px] text-[20px] font-bold rounded-2xl" onClick={handleFilterToggle}>
                    Filter By Genre
                </button>

                {filterSelected && (
                    <div  className="absolute left-0 mt-2 w-full bg-white rounded-lg shadow-lg overflow-hidden">
                        {genresArray.map((item, index) => (
                            <div data-testid="genre-options"
                                className="bg-blue-50 hover:bg-blue-100 cursor-pointer text-[20px] font-bold"
                                key={index}
                                onClick={() =>handleClick(item)}
                            >
                                <p className="border-b-2 text-center">{item}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
    
    );
};

export default GenreOptions;
