import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="text-[#BCBEC0] w-full h-20 text-md font-light flex justify-center
        p-5 sm:p-6 lg:p-10">
            <p className="px-5">© 2022 Ivana Braz</p>
            <a href="https://inkedin.com/in/ivanabraz/" className="px-5 block text-xl" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://inkedin.com/in/ivanabraz/" className="px-5 block text-xl" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </footer>
    )
}

export default Footer;