import PokemonLogo from '../assets/pokemon-logo.png'

const Header = () => {
    return (
        <header className='flex justify-start px-4 h-[20vh] pb-4'>
            <img src={PokemonLogo} />
            <h1 className='flex pl-4 items-center'>Tournament Generator</h1>
        </header>
    )
}

export default Header