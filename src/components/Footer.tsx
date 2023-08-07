import GithubIcon from '../assets/github.svg'
import LinkedInIcon from '../assets/linkedIn.svg'
import CopyrightIcon from '../assets/copyright.svg'


const Footer = () => {
    return (
    <footer className="flex items-center justify-end py-4 bg-[#2a75bb] text-white mt-4">
        <div className="social-network">
                <ul className='flex'>
                    <li>
                        <a href="https://github.com/rsalas82" aria-label="Github" className='text-white'>
                            <img src={GithubIcon} className='fill-white'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/rsalasr/" aria-label="LinkedIn">
                            <img src={LinkedInIcon} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-2">
            <img src={CopyrightIcon} />
                {" "}
                Developed by Rafael Salas Robledo
            </div>
    </footer>)
}

export default Footer