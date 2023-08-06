import { AdaptedPokemon } from "../types/types"
import { camelize } from "../utilities/camelize"
import { getColorByType } from "../utilities/getColorByType"
import PokemonMove from "./PokemonMove"
import PokemonType from "./PokemonType"


const PokemonCard = ({ pokemon }: { pokemon: AdaptedPokemon }) => {
    const { name, order, image, types, baseExperience, moves } = pokemon
    let [fromColor, toColor] = ['', '', '']
    const primaryType = getColorByType(types[0].color)
    const secondaryType = types.length > 1 ? getColorByType(types[1].color) : null

    fromColor = primaryType ? primaryType.fromColor : ''
    toColor = secondaryType ? secondaryType.toColor : primaryType ? primaryType.toColor : ''

    return (
        <article className={`flex flex-col h-fit border-2 rounded-md items-center p-2 bg-gradient-to-r ${fromColor} ${toColor}`}>
            <header className="flex justify-between w-full">
                <span className="pb-2">#{order} <strong>{camelize(name)}</strong></span>
                <span><strong>{baseExperience}</strong> EXP</span>
            </header>
            <main className="p-2 bg-white">
                <img src={image} height={256} width={256} />
                <div className="flex items-center justify-center">
                    {types.map(({ name, color }) => <PokemonType name={name} color={color} />)}
                </div>
            </main>
            <footer className="w-full">
                <ul className="flex flex-col w-full text-xs py-4 gap-2">
                    {moves.map(({ move }) => <PokemonMove key={move.name} name={move.name} />)}
                </ul>
            </footer>
        </article>
    )
}

export default PokemonCard