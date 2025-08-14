import {render,screen,fireEvent} from '@testing-library/react'
import Movie from '@/app/movie/page'
import { moviedata,filteredGenres, FilterByGenre } from '@/data/movieData'

describe("Test the element to be present on page load ",()=> {
    test("test the number of movie to be present on page load",()=>{
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

describe("Test the filter button and genre selection",() =>{
    test("Test that selected genre of movies is displayed",()=> {
    render(<Movie />)

    let allMovies = screen.getAllByTestId("movie")
    expect(allMovies.length).toBe(moviedata.length)
    
    let filterButton = screen.getByRole("button",{name:"Filter By Genre"})
    fireEvent.click(filterButton)
    
    let genreList = screen.queryAllByTestId("genre-options")    
    expect(genreList.length).toBe(filteredGenres.length)

    //checking for horro genre
    let selectedGenre = genreList[0]
    expect(selectedGenre).toHaveTextContent("Horror")
    fireEvent.click(selectedGenre)
    allMovies = screen.getAllByTestId("movie")
    expect(allMovies.length).toBe(FilterByGenre("Horror").length)
    //checking for same movie name
    let HorrorMovies = FilterByGenre("Horror")
    expect(HorrorMovies[0].movieName).toEqual("The Conjuring")
    //when horror genre movie displayed filter button doesnt display the option
    genreList = screen.queryAllByTestId("genre-options")    
    expect(genreList.length).toBe(0)
    }),

    test("Test that select another genre of movie when particular genre is displayed",()=> {
        
        render(<Movie />)

        let allMovies = screen.getAllByTestId("movie")
        expect(allMovies.length).toBe(moviedata.length)
        
        let filterButton = screen.getByRole("button",{name:"Filter By Genre"})
        fireEvent.click(filterButton)
        
        let genreList = screen.queryAllByTestId("genre-options")    
        expect(genreList.length).toBe(filteredGenres.length)
    

        let selectedGenre = genreList[0]
        expect(selectedGenre).toHaveTextContent("Horror")
        fireEvent.click(selectedGenre)
        allMovies = screen.getAllByTestId("movie")
        expect(allMovies.length).toBe(FilterByGenre("Horror").length)
        
        genreList = screen.queryAllByTestId("genre-options")    
        expect(genreList.length).toBe(0)
        
        filterButton = screen.getByRole("button",{name:"Filter By Genre"})
        fireEvent.click(filterButton)
        genreList = screen.queryAllByTestId("genre-options")    
        expect(genreList.length).toBe(filteredGenres.length)
        selectedGenre = genreList[1]
        expect(selectedGenre).toHaveTextContent("Romantic")
        
        fireEvent.click(selectedGenre)
        allMovies = screen.getAllByTestId("movie")
        expect(allMovies.length).toBe(FilterByGenre("Romantic").length)

        let HorrorMovies = FilterByGenre("Romantic")
        expect(HorrorMovies[0].movieName).toEqual("The Notebook")

        genreList = screen.queryAllByTestId("genre-options")    
        expect(genreList.length).toBe(0)

        filterButton = screen.getByRole("button",{name:"Filter By Genre"})
        fireEvent.click(filterButton)
        genreList = screen.queryAllByTestId("genre-options")    
        expect(genreList.length).toBe(filteredGenres.length)

    })

})

 test("Test the back button functionality when particular genre is selected",()=> {
    render(<Movie />)

        let allMovies = screen.getAllByTestId("movie")
        expect(allMovies.length).toBe(moviedata.length)
        
        let filterButton = screen.getByRole("button",{name:"Filter By Genre"})
        fireEvent.click(filterButton)

        let backButton = screen.getByRole("button",{name:"Back"})
        expect(backButton).toBeInTheDocument()
        
        let genreList = screen.queryAllByTestId("genre-options")    
        expect(genreList.length).toBe(filteredGenres.length)


        let selectedGenre = genreList[0]
        expect(selectedGenre).toHaveTextContent("Horror")
        fireEvent.click(selectedGenre)
        allMovies = screen.getAllByTestId("movie")
        expect(allMovies.length).toBe(FilterByGenre("Horror").length)
        
        genreList = screen.queryAllByTestId("genre-options")    
        expect(genreList.length).toBe(0)
//testong back button function
        backButton = screen.getByRole("button",{name:"Back"})
        fireEvent.click(backButton)
        allMovies = screen.getAllByTestId("movie")
        expect(allMovies.length).toBe(moviedata.length)
        genreList = screen.queryAllByTestId("genre-options")    
        expect(genreList.length).toBe(0)
})



