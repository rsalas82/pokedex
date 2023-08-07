import { PokemonAPI, Species } from "../types/types"

export const pokemonAdapter = (pokemon: PokemonAPI) => {
    const {id, name, order, sprites, types, base_experience, moves} = pokemon
    const image = sprites ? sprites.front_default : ''
    const flattenTypes:Species[] = types.map(({type}) => {
        return {
            name: type.name,
            color: type.name
        }
    })

    return {
        id,
        name, 
        order,
        image,
        types: flattenTypes,
        baseExperience: base_experience,
        moves: moves.length > 2 ? moves.slice(0, 2) : moves
    }
}