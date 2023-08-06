import { AdaptedPokemon } from "../types/types"
import PokemonCard from "./PokemonCard"

const Winner = ({pokemon}: {pokemon: AdaptedPokemon}) => {

    return (
        <PokemonCard pokemon={pokemon} />
    )
}

export default Winner