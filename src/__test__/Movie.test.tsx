import {render,screen} from '@testing-library/react'
import Movie from '@/app/movie/page'

describe("Test the element to be present on page load ",()=> {
    test("test the number of movie to be present on page load",()=>{
        render(<Movie />)

        const allMovies = screen.getAllByTestId("movie")
        expect(allMovies.length).toBe(18)
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