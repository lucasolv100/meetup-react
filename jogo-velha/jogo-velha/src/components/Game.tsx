import React, { useState, useEffect } from "react";
import Board from '../components/Board'
import Square from '../interfaces/Square';
import { calculateWinner } from "../utils/calculateWinner";
import Winner from "./Winner";

export default function Game() {

    const DEFAULT_SQUARES = { squares: Array(9).fill(null) };

    const DEAFULT_HISTORY: Square[] = [
        DEFAULT_SQUARES
    ];

    const [history, setHistory] = useState(DEAFULT_HISTORY)
    const [xIsNext, setXIsNext] = useState(true)
    const [winner, setWinner] = useState<string | null>(null)
    const [current, setCurrent] = useState<Square>(DEFAULT_SQUARES)

    useEffect(() => {
        const squares = current.squares.slice()
        const winner = calculateWinner(squares)
        setWinner(winner);
    }, [current])

    const handleClick = (i: number) => {

        const squares = current.squares.slice()

        squares[i] = xIsNext ? "X" : "O"

        setHistory(history.concat([
            {
                squares: squares
            }
        ]))

        setCurrent(
            {
                squares: squares
            }
        )

        setXIsNext(!xIsNext);
    }

    const resetGame = () => {
        setCurrent(DEFAULT_SQUARES)
        setHistory(DEAFULT_HISTORY)
        setXIsNext(true)
        setWinner(null)
    }

    return (
        winner  ?
            <Winner reset={resetGame} winnerName={winner} />
            : <div> <h1 style={{ color: '#fff' }}>TIC TAC TOE (JOGO DA VELHA)</h1> <Board squares={current.squares} onClick={i => handleClick(i)} /> </div>
    )
}