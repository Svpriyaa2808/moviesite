import { FaFacebook,FaInstagram,FaYoutube } from "react-icons/fa"
import { SiX } from "react-icons/si"

const SocialMediaIcons = () => {
    return(
        <div className="flex m-4 mb-0">
            <a data-testid="social-icons"  href="https://instagram.com/" target="_blank" aria-label="Instagram" className="m-2"><FaInstagram  className="w-6 h-6 md:w-8 md:h-8"/></a>
            <a data-testid="social-icons"  href="https://facebook.com/" target="_blank" aria-label="Facebook" className="m-2"><FaFacebook  className="w-6 h-6 md:w-8 md:h-8"/></a>
            <a data-testid="social-icons"  href="https://twitter.com/" target="_blank" aria-label="Twitter"  className="m-2"><SiX  className="w-6 h-6 md:w-8 md:h-8"/></a>
            <a data-testid="social-icons"  href="https://youTube.com/" target="_blank" aria-label="YouTube" className="m-2"><FaYoutube  className="w-6 h-6 md:w-8 md:h-8"/></a>
        </div>
    )
}

export default SocialMediaIcons