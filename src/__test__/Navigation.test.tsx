import {render,screen} from '@testing-library/react'
import Navigation from '@/components/Navigation'

test("Test for Navigation links",()=>{
    render(<Navigation />)

    const NavLinkArray = [{
        name:"Home",
        link:"/"
    },{
       name:"Film Focus",
        link:"/movie" 
    },{
        name:"My Pick",
        link:"/favourites"
    },{
        name:"Popcorn Facts 🍿",
        link:"/popcornfacts"
    }]

    expect(NavLinkArray.length).toBe(4);

    NavLinkArray.map((item)=> {
        const NavLink = screen.getByRole("link",{name:`${item.name}`})
        expect(NavLink).toHaveAttribute('href',`${item.link}`)
    })
    
})