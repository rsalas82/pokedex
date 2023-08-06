import { useState } from "react"
import { Round } from "../types/types"
import LoadingModal from "./LoadingModal"

const getRoundTitle = (numberOfBattles: number) => {
    if (numberOfBattles === 4) return 'Quarterfinal round'
    if (numberOfBattles === 2) return 'Semifinal round'
    if (numberOfBattles === 1) return 'Final round'
}

const randomRoundWinner = () => {
    const results = []
    for (let index = 0; index < 5; index++) {
        results[index] = Math.random()
    }
    
    return {
        leftWon: results.filter(value => value <= 0.5).length,
        rightWon: results.filter(value => value > 0.5).length
    }
}

const Round = ({ battles, updateBattleResults }: Round) => {
    const [isCalculationResults, setIsCalculationResults] = useState<boolean>(false)
    const title = getRoundTitle(battles.length)

    const handleCliclSimulateBattles = () => {
        setIsCalculationResults(true)
        setTimeout(function () {
            const finishedBattles = battles.map(battle => {
                const results = randomRoundWinner()
                return {
                    ...battle,
                    ...results
                }
            })
            updateBattleResults(finishedBattles)
            setIsCalculationResults(false)
        }, 5000);

    }

    return (
        <>
            <section className="mt-4 p-4">
                <div className="flex gap-4 items-center">
                    <h3 className="border-t-2 border-l-2 border-r-2 px-2">{title}</h3>
                    <button className="border border-white bg-red-500 py-1 px-4 text-white rounded-xl hover:bg-white hover:text-red-500 hover:border-red-500"
                        onClick={handleCliclSimulateBattles}>
                        Simulate battles
                    </button>
                    {isCalculationResults && <LoadingModal text="Calculating battle results..." />}
                </div>
                {battles ? (
                    <ul className="flex justify-around items-center border-2 py-2">
                        {battles.map((battle, index) => {
                            return (
                                <li className="flex flex-col mt-4">
                                    <strong className="self-center">Battle {index + 1}</strong>
                                    <div className="flex">
                                        <div className="grid place-items-center">
                                            <picture>
                                                <img src={battle.left.image} className={`${battle.leftWon >= 3 ? 'animate-bounce' : ''}`} />
                                            </picture>
                                            <span className={`${battle.leftWon >= 3 ? 'font-bold' : ''}`}>{battle.leftWon}</span>
                                        </div>
                                        <div className="grid place-items-center">Vs.</div>
                                        <div className="grid place-items-center">
                                            <picture>
                                                <img src={battle.right.image} className={`${battle.rightWon >= 3 ? 'animate-bounce' : ''}`} />
                                            </picture>
                                            <span className={`${battle.rightWon >= 3 ? 'font-bold' : ''}`}>{battle.rightWon}</span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                ) : (
                    <></>
                )}
            </section>
        </>
    )

}

export default Round