import { useEffect, useState } from "react"
import { BaseItemAPI } from "../types/types"
import { getPokemons } from "../services/pokemon"

export const usePokemonList = ({limit = 100, offset = 50} : {limit: number, offset: number}): {pokemonList: BaseItemAPI[] | []} => {
    const [pokemonList, setPokemonList] = useState<BaseItemAPI[] | []>([])

  useEffect(() => {
    getPokemons({
      limit,
      offset
    }).then((results: BaseItemAPI[]) => {
        setPokemonList(results)
    })
  }, [limit, offset])

  return {pokemonList}
}

