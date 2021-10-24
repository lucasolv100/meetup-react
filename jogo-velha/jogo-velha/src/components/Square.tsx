import React from "react";
import SquareProps from "../props/SquareProps";


export default function Square(props: SquareProps) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}