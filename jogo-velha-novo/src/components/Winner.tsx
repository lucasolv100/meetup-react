import React from "react";

import winnerX from '../images/winner1.gif'
import winnerO from '../images/winner2.gif'
import oldLady from '../images/velha.gif'
import WinnerProps from "../props/WinnerProps";

export default function Winner(props: WinnerProps) {

    return (
        <div className="winner">
            <h1>
                WINNER!! {props.winnerName}
            </h1>
            {
                props.winnerName === "X" ?
                    <img src={winnerX} />
                    : props.winnerName === "O" ?
                        <img src={winnerO} />
                        : <img src={oldLady} />
            }
            <button className="buttonWinner" onClick={props.reset}>
                Reset Game
            </button>
        </div>
    )
}