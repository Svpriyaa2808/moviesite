const Header = ({title}:{title:string}) => {
    return(
        <>
        <div className="flex justify-center p-8 items-center bg-gray-800 text-amber-50">
        <img src="logo.png" width="100px" height="auto" alt="logo" />
        <h1 className="text-3xl p-8 uppercase">{title}</h1>   
        </div>
        </>
    )
}

export default Header