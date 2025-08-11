import { FaFacebook,FaInstagram,FaYoutube } from "react-icons/fa"
import { SiX } from "react-icons/si"

const SocialMediaIcons = () => {
    return(
        <div className="flex m-4 mb-0">
            <a href="https://instagram.com/you" target="_blank" className="m-2"><FaInstagram  className="w-6 h-6 md:w-8 md:h-8"/></a>
            <a href="https://facebook.com/you" target="_blank" className="m-2"><FaFacebook  className="w-6 h-6 md:w-8 md:h-8"/></a>
            <a href="https://twitter.com/you" target="_blank" className="m-2"><SiX  className="w-6 h-6 md:w-8 md:h-8"/></a>
            <a href="https://youTube.com/you" target="_blank" className="m-2"><FaYoutube  className="w-6 h-6 md:w-8 md:h-8"/></a>
        </div>
    )
}

export default SocialMediaIcons