import React from "react";
import SquareProps from "../props/SquareProps";
import { WinnerProps } from "../props/WinnerProps";
import winner1 from '../images/winner1.gif'
import winner2 from '../images/winner2.gif'
import oldWoman from '../images/velha.gif'


export default function Winner(props: WinnerProps) {
    return (
        <div className="winner">
            <h1>WINNER!! {props.winnerName}</h1>
            {props.winnerName === "X" ? <img src={winner1} /> : props.winnerName === "O" ? <img src={winner2} /> : <img src={oldWoman} />}
            <button className="buttonWinner" onClick={props.reset}>
                Reset Game
            </button>
        </div>
    )
}