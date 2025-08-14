import { fireEvent, getByRole, render, screen, within } from '@testing-library/react'
import MovieDescription from '@/components/Movie/MovieDescription'
import { moviedata } from '@/data/movieData'

describe("To check if the description box appear", () => {
    test("To check if the description box appear when Movie Title is clicked", () => {

        let testMovieData = moviedata[0];
        let testfavMovie = null;

        const testfavSelected = () => {
            testMovieData = moviedata[1];
        }

        render(<MovieDescription movie={testMovieData} favMovie={testfavMovie} favSelected={() => testfavSelected} />)
        let checkMovieData = screen.getByTestId("movie")
        let title = screen.getByRole("heading", { level: 4 })
        expect(within(checkMovieData).getByRole("heading", { level: 4 })).toHaveTextContent("The Conjuring")
        fireEvent.click(title);

        expect(screen.getByTestId("description_box")).toBeInTheDocument()
        expect(screen.getByTestId("description_box")).toHaveTextContent("The Conjuring")

        const closeButton = screen.getByTestId("close_button")
        fireEvent.click(closeButton)
        expect(screen.queryByTestId("description_box")).not.toBeInTheDocument()
    })
})

describe("To check if the movie is rotating on  mouse enter ",() => {
    test("Validating the alt on image if the icon is rotating on mouse enter",() => {
        let testMovieData = moviedata[0];
        let testfavMovie = null;

        const testfavSelected = () => {
            testMovieData = moviedata[1];
        }
        render(<MovieDescription movie={testMovieData} favMovie={testfavMovie} favSelected={() => testfavSelected} />)
        let checkMovieData = screen.getByTestId("movie")
        const movie_icon = within(checkMovieData).getByTestId("movie_icon")

        expect(movie_icon).toBeInTheDocument()
        expect(movie_icon).toHaveAttribute("alt",`${testMovieData.movieName} not-rotated`)

        fireEvent.mouseEnter(movie_icon)
        expect(movie_icon).toHaveAttribute("alt",`${testMovieData.movieName} rotated`)

        fireEvent.mouseLeave(movie_icon)
        expect(movie_icon).toHaveAttribute("alt",`${testMovieData.movieName} not-rotated`)
    })
})

