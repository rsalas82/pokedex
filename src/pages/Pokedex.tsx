import { useContext, useState } from "react"
import { usePokemonList } from "../hooks/usePokemonList"
import PokemonCard from "../components/PokemonCard"
import PokemonSelector from "../components/PokemonSelector"
import { AdaptedPokemon } from "../types/types"
import PokemonSilouette from '../assets/pokemon_siloutte.png'
import PokemonChosen from "../components/PokemonChosen"
import { ChosenContext } from "../contexts/ChosenContext"

const initialPokemon = {
  id: 1,
  name: "noname",
  order: 1,
  image: PokemonSilouette,
  types: [
      {
          name: "grass",
          color: "grass"
      },
      {
          name: "poison",
          color: "poison"
      }
  ],
  baseExperience: 64,
  moves: [
      {
          move: {
              name: "razor-wind",
              url: "https://pokeapi.co/api/v2/move/13/"
          }
      },
      {
          move: {
              name: "swords-dance",
              url: "https://pokeapi.co/api/v2/move/14/"
          }
      }
  ]
}

const Pokedex = () => {
    const {pokemonList} = usePokemonList({limit: 100, offset: 0})
    const [selectedPokemon, setSelectedPokemon] = useState<AdaptedPokemon | null>(null)
    const {chosen} = useContext(ChosenContext)
    
    return (
        <div className='flex gap-4 w-full mt-4 items-center'>
          <section className='flex flex-col justify-start items-center w-[30vw] gap-2 border-2 border-[#2a75bb] py-2 pr-2 rounded-xl ml-2 min-h-[30rem]'>
            <PokemonChosen />
          </section>
          <section className='flex justify-center w-[40vw]'>
            {selectedPokemon ? (
              <PokemonCard pokemon={selectedPokemon} isWinner/>
            ): (<PokemonCard pokemon={initialPokemon} />)}
          </section>
          <section className='flex flex-col justify-start items-center w-[30vw] gap-2 border-2 ml-2 border-[#ffcb05] py-2 pl-2 rounded-xl'>
            <span>You must pick {8 - chosen.length} pokemons</span>
            <div className='flex flex-col h-[28rem] gap-2 w-[30vw] pl-10 snap-y overflow-y-scroll overflow-x-hidden'>
              {pokemonList.map((pokemon) => {
                return (
                  <PokemonSelector key={pokemon.name} pokemonName={pokemon.name} selectPokemon={setSelectedPokemon} />
                )
              })}
            </div>
          </section>
        </div>
    )
}

export default Pokedex