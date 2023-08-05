import { useContext } from "react"
import { ChosenContext } from "../contexts/ChosenContext"
import PokemonCard from "./PokemonCard"

const PokemonTeam = () => {
    const {chosen} = useContext(ChosenContext)

    return (
       chosen.map(pokemon => <PokemonCard pokemon={pokemon} />)
    )
}

export default PokemonTeam