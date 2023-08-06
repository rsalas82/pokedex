import PokemonLogo from '../assets/pokeball.svg'

const LoadingModal = ({text}: {text: string}) => {
    return (
        <>
            <picture>
                <img src={PokemonLogo} className='animate-spin' width={24} />
            </picture>
            <p>{text}</p>
        </>
    )
}

export default LoadingModal