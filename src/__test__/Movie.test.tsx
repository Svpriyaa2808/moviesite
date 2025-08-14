import {render,screen, within} from '@testing-library/react'
import Movie from '@/app/movie/page'
import { moviedata } from '@/data/movieData'

describe("Test the element to be present on page load ",()=> {
    test("Test the number of movies to be present on page load",()=>{
        render(<Movie />)

        const allMovies = screen.getAllByTestId("movie")
        expect(allMovies.length).toBe(moviedata.length)

        
    }),
    
    test("That filter button is present",()=>{
        render(<Movie />)

        const filterButton = screen.getByRole("button",{name:"Filter By Genre"})
        expect(filterButton).toBeInTheDocument()
    }),

    test("That back button is present",()=>{
        render(<Movie />)

        const backButton = screen.getByRole("button",{name:"Back"})
        expect(backButton).toBeInTheDocument()
    })
})

describe("To check if the data matches exactly with the the dataset", () => {
    test("If the data is rendered is in coherence with the dataset",() => {
        render(<Movie />)

        let allMovieData= screen.getAllByTestId("movie")
        expect(allMovieData.length).toBe(moviedata.length)

        allMovieData.forEach((movie,index) => {
            let movieDetail =moviedata[index];

            expect(within(movie).getByText(movieDetail.movieName)).toBeInTheDocument()
        
        })
    })
})