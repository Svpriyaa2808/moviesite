import { fireEvent, render, screen, within } from '@testing-library/react'
import Movie from '@/app/movie/page'
import { moviedata } from '@/data/movieData'
import Favourites from '@/app/favourites/page'

describe("Test the element to be present on page load ", () => {
    test("Test the number of movies to be present on page load", () => {
        render(<Movie />)

        const allMovies = screen.getAllByTestId("movie")
        expect(allMovies.length).toBe(moviedata.length)


    }),

        test("That filter button is present", () => {
            render(<Movie />)

            const filterButton = screen.getByRole("button", { name: "Filter By Genre" })
            expect(filterButton).toBeInTheDocument()
        }),

        test("That back button is present", () => {
            render(<Movie />)

            const backButton = screen.getByRole("button", { name: "Back" })
            expect(backButton).toBeInTheDocument()
        })
})

describe("To check if the data matches exactly with the the dataset", () => {
    test("If the data is rendered is in coherence with the dataset", () => {
        render(<Movie />)

        let allMovieData = screen.getAllByTestId("movie")
        expect(allMovieData.length).toBe(moviedata.length)

        allMovieData.forEach((movie, index) => {
            let movieDetail = moviedata[index];

            expect(within(movie).getByText(movieDetail.movieName)).toBeInTheDocument()
            expect(within(movie).getByText(`Year:${movieDetail.releaseYear}`)).toBeInTheDocument();
            expect(within(movie).getByText(`Genre:${movieDetail.genre}`)).toBeInTheDocument()
        })
    })
})


describe("To check when the favourite icon is clicked, icon is changed", () => {
    test("On clicking the Fav icon, icon should change", () => {
        render(<Movie />)

        let allMovieData = screen.getAllByTestId("movie")
        expect(allMovieData.length).toBe(moviedata.length)

        allMovieData.forEach((movie, index) => {
            let movieDetail = moviedata[index];

            let favIcon = within(movie).getByAltText(`unfavourite_icon.png ${movieDetail.movieName}`);
            expect(favIcon).toBeInTheDocument()
            expect(favIcon).toHaveAttribute("src", "unfavourite_icon.png");

            fireEvent.click(favIcon)
            expect(favIcon).toHaveAttribute("src", "favourite_icon.png");
            expect(favIcon).toHaveAttribute("alt", `favourite_icon.png ${movieDetail.movieName}`)

        })
    })
})

describe("To check when the favourite icon is clicked, the corresponding fav movie is displayed in Favourite page ", () => {
    test("On clicking the Fav icon, Favourite movie must be captured in Favourties page", () => {
        render(<Movie />)
        let movieDetail = moviedata[0];

        let allMovieData = screen.getAllByTestId("movie")
        expect(allMovieData.length).toBe(moviedata.length)

        let firstData = allMovieData[0];
        expect(within(firstData).getByText(movieDetail.movieName)).toBeInTheDocument()

        let favIcon = within(firstData).getByAltText(`unfavourite_icon.png ${movieDetail.movieName}`);
        expect(favIcon).toBeInTheDocument()
        expect(favIcon).toHaveAttribute("src", "unfavourite_icon.png");

        fireEvent.click(favIcon)
        expect(favIcon).toHaveAttribute("src", "favourite_icon.png");
        expect(favIcon).toHaveAttribute("alt", `favourite_icon.png ${movieDetail.movieName}`)

        render(<Favourites />)
     
        expect(within(firstData).getByText(movieDetail.movieName)).toBeInTheDocument()
        expect(within(firstData).getByRole("heading",{level:4})).toHaveTextContent("The Conjuring")

        let favMovieDetail=screen.getByTestId("fav_movie")
        expect(within(favMovieDetail).getByRole("heading",{level:4})).toHaveTextContent(movieDetail.movieName)
        expect(within(favMovieDetail).getByRole("heading",{level:4})).toHaveTextContent("The Conjuring")

    })
})


// describe("Total Data check", () => {
//     test("On clicking the Fav icon, icon should change Total Data", () => {
//         render(<Movie />)

//         let allMovieData = screen.getAllByTestId("movie")
//         expect(allMovieData.length).toBe(moviedata.length)

//         allMovieData.forEach((movie, index) => {
//             let movieDetail = moviedata[index];

//             let favIcon = within(movie).getByAltText(`unfavourite_icon.png ${movieDetail.movieName}`);
//             expect(favIcon).toBeInTheDocument()
//             expect(favIcon).toHaveAttribute("src", "unfavourite_icon.png");

//             fireEvent.click(favIcon)
//             expect(favIcon).toHaveAttribute("src", "favourite_icon.png");
//             expect(favIcon).toHaveAttribute("alt", `favourite_icon.png ${movieDetail.movieName}`)


//              render(<Favourites />)
//           let favMovieDetail=screen.getByTestId("fav_movie")
//         expect(within(favMovieDetail).getByRole("heading",{level:4})).toHaveTextContent(movieDetail.movieName)
    

//     //      const favMovieElements = screen.getAllByTestId("fav_movie");
//     // //   expect(favMovieElements.length).toBe(1);

//     //   // The displayed favourite movie should match the one clicked
//     //   const favMovieElement = favMovieElements[0];
//     //   expect(
//     //     within(favMovieElement).getByRole("heading", { level: 4 })
//     //   ).toHaveTextContent(movieDetail.movieName);
        
//         })
//     })
// })
