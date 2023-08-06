import { AdaptedPokemon } from "../types/types"
import PokemonCard from "./PokemonCard"

const Winner = ({pokemon}: {pokemon: AdaptedPokemon}) => {

    return (
        <div className="flex items-center justify-center mt-4">
            <PokemonCard pokemon={pokemon} isWinner={true} />
        </div>
    )
}

export default Winner