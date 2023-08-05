import { useState } from "react"
import { usePokemonList } from "../hooks/usePokemonList"
import PokemonCard from "../components/PokemonCard"
import PokemonSelector from "../components/PokemonSelector"
import { AdaptedPokemon } from "../types/types"

const Pokedex = () => {
    const {pokemonList} = usePokemonList({limit: 100, offset: 0})
    const [selectedPokemon, setSelectedPokemon] = useState<AdaptedPokemon | null>(null)

    return (
        <div className='flex gap-4'>
          
          <section className='grid place-items-center w-[70vw]'>
            {selectedPokemon && (
              <PokemonCard pokemon={selectedPokemon} />
            )}
          </section>
          <section className='flex flex-col h-[28rem] gap-2 w-[30vw] pl-10 py-4 snap-y overflow-y-scroll overflow-x-hidden'>
            {pokemonList.map((pokemon) => {
              return (
                <PokemonSelector key={pokemon.name} pokemonName={pokemon.name} selectPokemon={setSelectedPokemon} />
              )
            })}
          </section>
        </div>
    )
}

export default Pokedex