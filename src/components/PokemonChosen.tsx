import { useContext } from "react"
import { ChosenContext } from "../contexts/ChosenContext"
import { camelize } from "../utilities/camelize"
import TrashIcon from '../assets/trash.svg'
import { AdaptedPokemon } from "../types/types"
import { Link } from "wouter"

const PokemonChosen = () => {
    const {chosen, updateChosenPokemons} = useContext(ChosenContext)

    const handleClickRemovePokemon = (pokemon: AdaptedPokemon) => {
        updateChosenPokemons(pokemon)
    }

    return (
        <>
            <h3>Please, select {8 - chosen.length} more</h3>
            {chosen.length > 0 ? 
                (chosen.map(({id, order, name, image, types, moves, baseExperience}) => 
                    {
                        return (
                            <article key={id} 
                                    onClick={() => handleClickRemovePokemon({id, order, name, image, types, moves, baseExperience})}
                                    className='grid grid-cols-4 bg-[#2a75bb] pl-2 pr-4 rounded-r-3xl items-center text-slate-700 w-full text-white hover:scale-x-105 hover:transition-transform hover:bg-red-400'>
                                <>
                                    <span className="text-left">{camelize(name)}</span>
                                    <span>No. {order}</span>
                                    <picture>
                                        <img src={image} height={48} width={48} alt={`Pokemon: ${camelize(name)}`} />
                                    </picture>
                                    <span className='justify-self-end'>
                                        <img src={TrashIcon} alt="Pokeball toggle" height={24} width={24}/>
                                    </span>
                                </>
                            </article>
                        )
                    }))
            : (<span>Waiting for contenders</span>)}
            {chosen.length < 8 ? (
                <button className="border border-white bg-red-500 py-2 px-4 text-white rounded-xl mt-4 hover:bg-white hover:text-red-500 hover:border-red-500 opacity-50 cursor-not-allowed">Let's fight!</button>
            ) : (
                <Link href="/tournament" className={`border border-white bg-red-500 py-2 px-4 text-white rounded-xl mt-4 hover:bg-white hover:text-red-500 hover:border-red-500`}>Let's fight!</Link>
            )}
        </>
        
    ) 
}

export default PokemonChosen