import Logo from '../assets/pokemon-logo.png'

const Header = () => {
    return (
        <header className='flex justify-start px-4 h-[20vh] pb-4'>
            <img src={Logo} />
            <h1 className='pl-4'>Tournament Generator</h1>
        </header>
    )
}

export default Header