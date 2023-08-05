import { createContext, useState } from 'react';
import { AdaptedPokemon, Chosen } from '../types/types';

const initialChosenValue = {
  chosen: [], 
  updateChosenPokemons: () => null
}

export const ChosenContext = createContext<Chosen>(initialChosenValue);

export const ChosenProvider = ({ children }: { children: React.ReactNode }) => {
    const [chosen, setChosen] = useState<AdaptedPokemon[]>([])
  const updateChosenPokemons = (pokemon: AdaptedPokemon) => {
    const selectedPokemon = chosen.find(({id}) => {
      const {id: selectedId} = pokemon
      return id === selectedId
    })
    const updatedChosen = !selectedPokemon 
      ? [...chosen, pokemon] 
      : chosen.filter(({id}) => {
          const {id: selectedId} = pokemon
          return id !== selectedId
        })
    setChosen(updatedChosen)
  }

  return (
    <ChosenContext.Provider value={{ chosen, updateChosenPokemons }}>
      {children}
    </ChosenContext.Provider>
  );
}