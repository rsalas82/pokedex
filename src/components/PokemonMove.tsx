import { useMove } from "../hooks/useMove"

const PokemonMove = ({ name }: { name: string }) => {

    const { move, isLoading } = useMove({ name })
    const { id, name: moveName, type, power } = move

    return (
        !isLoading && (
            <li key={id} className='grid grid-cols-3 font-bold'>
                <span className="bg-amber-100 rounded-2xl px-1 justify-self-start">{type}</span>
                <span>{moveName}</span>
                {power && (
                    <span className="bg-amber-100 rounded-2xl px-1 justify-self-end">{power}</span>
                )}
            </li>
        )

    )
}

export default PokemonMove