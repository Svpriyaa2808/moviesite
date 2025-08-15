import Link from "next/link"

const Navigation = () => {
    return(
        <nav className="flex bg-gray-800 justify-evenly text-center text-amber-50 text-2xl lg:text-4xl md:p-8">
            <Link className="m-2" href="/">Home</Link>
            <Link className="m-2" href="/movie">Film Focus</Link>
            <Link className="m-2" href="/favourites">My Pick</Link>
            <Link className="m-2" href="/popcornfacts">Popcorn Facts 🍿</Link>
        </nav>
    )
}


export default Navigation