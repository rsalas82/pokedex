import { Species } from "../types/types"
import { getColorByType } from "../utilities/getColorByType"

const PokemonType = ({color, name}: Species) => {
    const backgroundColor = getColorByType(color)
    return (
        <div key={name} className={`flex items-center justify-center px-4 text-white border-2 border-slate rounded-3xl ${backgroundColor?.bgColor}`}>
            {name}
        </div>
    )
}

export default PokemonType