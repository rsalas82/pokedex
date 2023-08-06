import { useContext, useEffect, useState } from "react"
import { ChosenContext } from "../contexts/ChosenContext"
import { AdaptedPokemon, Battle } from "../types/types"
import Round from "../components/Round"

const Tournament = () => {
    const { chosen } = useContext(ChosenContext)
    const [quarterfinals, setQuarterfinals] = useState<Battle[] | null>(null)
    const [semifinals, setSemifinals] = useState<Battle[] | null>(null)
    const [final, setFinal] = useState<Battle[] | null>(null)
    const [winner, setWinner] = useState<AdaptedPokemon | null>(null)

    const updateQuarterfinalsResults = (battles: Battle[]) => {
        setQuarterfinals(battles)
        const semifinalBattles = [
            {
                order: 0,
                left: battles[0].leftWon >= 3 ? battles[0].left : battles[0].right,
                right: battles[1].leftWon >= 3 ? battles[1].left : battles[1].right,
                leftWon: 0,
                rightWon: 0
            },
            {
                order: 1,
                left: battles[2].leftWon >= 3 ? battles[2].left : battles[2].right,
                right: battles[3].leftWon >= 3 ? battles[3].left : battles[3].right,
                leftWon: 0,
                rightWon: 0
            }
        ]
        setSemifinals(semifinalBattles)
        setFinal(null)
    }

    const updateSemifinalsResults = (battles: Battle[]) => {
        setSemifinals(battles)
        const finalBattle = [
            {
                order: 0,
                left: battles[0].leftWon >= 3 ? battles[0].left : battles[0].right,
                right: battles[1].leftWon >= 3 ? battles[1].left : battles[1].right,
                leftWon: 0,
                rightWon: 0
            },
        ]
        setFinal(finalBattle)
    }

    const updateFinalsResults = (battles: Battle[]) => {
        setFinal(battles)
        const tournamentWinner = battles[0].leftWon >= 3 ? battles[0].left : battles[0].right
        setWinner(tournamentWinner)
    }

    useEffect(() => {
        const quarterFinalBattles = [
            { order: 0, left: chosen[0], right: chosen[1], leftWon: 0, rightWon: 0 },
            { order: 1, left: chosen[2], right: chosen[3], leftWon: 0, rightWon: 0 },
            { order: 2, left: chosen[4], right: chosen[5], leftWon: 0, rightWon: 0 },
            { order: 3, left: chosen[6], right: chosen[7], leftWon: 0, rightWon: 0 },
        ]
        setQuarterfinals(quarterFinalBattles)
    }, [chosen])

    return (
        <article className="">
            <header className="flex flex-col items-center">
                <h2>Welcome to a new Pokemon Tournament!</h2>
                <p>In this tournament, 8 pokemon will fight until only one is left standing!</p>
            </header>
            <main>
                <div className="flex flex-col gap-4">
                    {quarterfinals && quarterfinals.length === 4 && <Round battles={quarterfinals} updateBattleResults={updateQuarterfinalsResults} />}
                    {semifinals && semifinals.length === 2 && <Round battles={semifinals} updateBattleResults={updateSemifinalsResults} />}
                    {final && final.length === 1 && <Round battles={final} updateBattleResults={updateFinalsResults} />}
                </div>
            </main>
            <footer></footer>
        </article>
    )
}

export default Tournament