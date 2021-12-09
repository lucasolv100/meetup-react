import React, { useEffect, useState } from "react";
import Squares from "../interfaces/Squares";
import { calculateWinner } from "../utils/game";
import Board from "./Board";
import Winner from "./Winner";

export default function Game() {

    const DEFAULT_SQUARES = { squares: Array(9).fill(null) }

    const [xIsNext, setXIsNext] = useState(true)
    const [winner, setWinner] = useState<string | null>(null)
    const [current, setCurrent] = useState<Squares>(DEFAULT_SQUARES)

    useEffect(() => {
        const squares = current.squares.slice()
        const winner = calculateWinner(squares)
        setWinner(winner)
    }, [current])

    const handleClick = (i: number) => {

        const squares = current.squares.slice()

        squares[i] = xIsNext ? "X" : "O"

        setCurrent({
            squares: squares
        })

        setXIsNext(!xIsNext)

    }

    const resetGame = () => {
        setCurrent(DEFAULT_SQUARES)
        setXIsNext(true)
        setWinner(null)
    }

    return (
        winner ? <Winner reset={resetGame} winnerName={winner} /> : <div>
            <h1>
                TIC TAC TOE (JOGO DA VELHA)
            </h1>
            <Board squares={current.squares} onClick={i => handleClick(i)}  />
        </div>
    )

}