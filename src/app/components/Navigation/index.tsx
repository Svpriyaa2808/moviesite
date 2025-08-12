import Link from "next/link"

const Navigation = () => {
    return(
        <nav className="flex bg-gray-800 justify-evenly text-amber-50 text-4xl p-8">
            <Link href="/">Home</Link>
            <Link href="/movie">Film Focus</Link>
            <Link href="/popcornfacts">Popcorn Facts 🍿</Link>
        </nav>
    )
}

export default Navigation