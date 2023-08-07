import { useEffect, useState } from "react"
import { AdaptedPokemon } from "../types/types"
import { getPokemonInfo } from "../services/pokemon"
import { pokemonAdapter } from "../adapters/pokemonAdapter"

const initialPokemon = {
    id: 0,
    name: '',
    order: 0,
    image: '',
    types: [],
    color: '',
    backgroundColor: '',
    baseExperience: 0,
    moves: []
}

export const usePokemon = ({ name }: { name: string }): { pokemon: AdaptedPokemon, isLoading: boolean } => {
    const [pokemon, setPokemon] = useState<AdaptedPokemon>(initialPokemon)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(false)
        getPokemonInfo(name).then((pokemonItem) => {
            const adaptedPokemon = pokemonAdapter(pokemonItem)
            setPokemon(adaptedPokemon)
        }).catch((error) => {
            console.error(error)
            setPokemon(initialPokemon)
        }).finally(() => {
            setIsLoading(false)
        })
    }, [name])

    return { pokemon, isLoading }
}

