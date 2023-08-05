import { useEffect, useState } from "react"
import { getPokemonInfo } from "../services/pokemon"
import { PokemonAPI } from "../types/types"
import { camelize } from "../utilities/camelize"

const FullStatsSummary = ({name}: {name: string}) => {
    const [pokemon, setPokemon] = useState<PokemonAPI | null>(null)

    useEffect(() => {
        getPokemonInfo(name).then((pokemonItem) => setPokemon(pokemonItem))
    }, [name])

    // console.log({pokemon})

    const mainImage = pokemon ? pokemon.sprites?.front_default : ''
    const order = pokemon ? pokemon.order : '###'
    const pokemonName = pokemon ? camelize(pokemon.name) : 'Noname'

    return (
        <article className="grid grid-cols-2 bg-red-400">
            <img src={mainImage} height={256} width={256} />
            <div className="grid grid-rows-3">
                <div className="flex flex-row bg-orange-400 items-center justify-between">
                    <img src={mainImage} height={48} width={48}/>
                    <span>No. {order}</span>
                    <span>{pokemonName}</span>
                </div>
            </div>
        </article>
    )
}

export default FullStatsSummary