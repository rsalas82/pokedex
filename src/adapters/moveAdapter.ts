import { MoveAPI } from "../types/types"

const EN_LANGUAGE = 'en'

export const moveAdapter = (move: MoveAPI) => {
    const {id, names, power, type,} = move

    const translatedName = names.find(({language}) => {
        const {name} = language
        return name === EN_LANGUAGE
    })

    const {name: typeName} = type
    
    return {
        id,
        name: translatedName ? translatedName.name : '', 
        power,
        type: typeName
    }
}