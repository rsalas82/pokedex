import { useContext } from 'react'
import PokemonLogo from '../assets/pokeball.svg'
import { usePokemon } from '../hooks/usePokemon'
import { camelize } from '../utilities/camelize'
import { ChosenContext } from '../contexts/ChosenContext'
import { AdaptedPokemon } from '../types/types'

const PokemonSelector = ({pokemonName, selectPokemon}: {key: string, pokemonName: string, selectPokemon: (pokemon: AdaptedPokemon) => void}) => {
    const {pokemon, isLoading} = usePokemon({name: pokemonName})
    const {chosen, updateChosenPokemons} = useContext(ChosenContext)

    const {id, name, order, image} = pokemon
    const isChosen = chosen.find(({id: pokemonId}) => pokemonId === id)

    const handleClickPokemon = () => {
        if (chosen.length === 8) {
            return null
        }
        updateChosenPokemons(pokemon)
    }

    const handleMouseOverPokemon = () => {
        selectPokemon(pokemon)
    }

    return (
        <article key={id}
                className='grid grid-cols-4 gap-2 bg-[#ffcb05] rounded-l-3xl items-center text-slate-700 w-full text-white hover:scale-x-105 hover:translate-x-0.5 hover:bg-red-400'
                onClick={handleClickPokemon} onMouseOver={handleMouseOverPokemon}>
            {isLoading ? <img src={PokemonLogo} className='animate-spin' /> : (
                <>
                    <span className='place-self-start self-center h-full'>
                        {isChosen ? <img src={PokemonLogo} alt="Pokeball toggle" height={36} width={36} className='animate-spin'/> : ""}
                    </span>
                    <picture>
                        <img src={image} height={36} width={36} alt={`Pokemon: ${camelize(name)}`} />
                    </picture>
                    <span>No. {order}</span>
                    <span>{camelize(name)}</span>
                </>
            )}
        </article>
    )
}

export default PokemonSelector