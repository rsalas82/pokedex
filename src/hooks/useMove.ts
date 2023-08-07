import { useEffect, useState } from "react"
import { getMove } from "../services/pokemon"
import { Move } from "../types/types"
import { moveAdapter } from "../adapters/moveAdapter"

const initialMove = {
    id: 0,
    name: '',
    type: '',
    power: 0
}

export const useMove = ({name} : {name: string}): {move: Move, isLoading: boolean} => {
    const [move, setMove] = useState<Move>(initialMove)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(false)
        getMove(name).then((moveItem) => {
            const adaptedMove = moveAdapter(moveItem)
            setMove(adaptedMove)
        }).catch((error) => {
            console.error(error)
            setMove(initialMove)
        }).finally(() => {
            setIsLoading(false)
        })
    }, [name])

    return {move: move, isLoading}
}

