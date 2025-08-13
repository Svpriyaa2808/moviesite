import SocialMediaIcons from "../FooterSocialIcons"

const Footer = () => {
    return (
        <footer className="bg-blue-50">
            <div className="flex justify-between ">
                <div className="m-4">
                    <h5 className="font-bold uppercase">company</h5>
                    <p>About</p>
                    <p>careers</p>
                    <p>Partners</p>
                    <p>News</p>
                </div>
                <div className="m-4">
                    <h5 className="font-bold uppercase">support</h5>
                    <p>Finding Help</p>
                    <p>Support library</p>
                    <p>Community Forums</p>
                    <p>Community Guidelines</p>
                    <p>Get In Touch</p>
                </div>
                <div className="m-4 md:flex flex-col justify-center items-end hidden ">
                    <h5 className="font-bold uppercase text-2xl text-end">Popcorn picks</h5>
                </div>
            </div>
            <div className="flex justify-between">
                <p className="m-8 text-left grow md:mb-0 text-xl">&copy; 2025</p>
                <SocialMediaIcons />
            </div>
        </footer>
    )
}

export default Footer