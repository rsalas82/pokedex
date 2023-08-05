import { SearchParams } from "../types/types"

const POKEMON_API_BASE = "https://pokeapi.co/api/v2"

export const getPokemons = async ({limit = 60, offset = 20} : SearchParams) => {
    const url = `${POKEMON_API_BASE}/pokemon/?limit=${limit}&offset=${offset}`
    POKEMON_API_BASE.replace('{endpoint}', 'pokemon').replace('{limit{', limit.toString()).replace('{offset}', offset.toString())
    const results = await fetch(url)
    const { results: results_1 } = await results.json()
    return results_1
}

export const getPokemonInfo = async (name: string) => {
    const url = `${POKEMON_API_BASE}/pokemon/${name}`
    const result = await fetch(url)
    const pokemonInfo = await result.json()
    return pokemonInfo
}

export const getMove = async (name: string) => {
    const url = `${POKEMON_API_BASE}/move/${name}`
    const result = await fetch(url)
    const moveInfo = await result.json()
    return moveInfo
}