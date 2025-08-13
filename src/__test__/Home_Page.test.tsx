import {render, screen} from "@testing-library/react"
import Home from "@/app/page"

describe("To check if the Home Page has the Heading as expected",() => {
    test("To check if the Home Page title is getting rendered as expected", () => {
        render(<Home />)

        let home_title = screen.getByRole("heading",{level:2})
        expect(home_title).toBeInTheDocument()
        expect(home_title).toHaveTextContent("Welcome to Popcorn Picks")
    })
})