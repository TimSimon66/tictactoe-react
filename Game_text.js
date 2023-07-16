import Boards from "./Board_text"
import React, { useState } from "react"
import { calculateWinner } from "../../helper"
import "./GameStyle_text.css"

const Games = (index) => {
    const [board, setBoard] = useState(Array(9).fill())
    const winner = calculateWinner(board)
    const [xIsNext, setXIsNext] = useState(true)

    const handClick = (index) => {
        const boardCopy = [...board]
        if (winner || boardCopy[index]) return;
        boardCopy[index] = xIsNext ? "X" : "O";
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
        console.log("DA click")
    }

    const resetGame = () => {
        setBoard(Array(9).fill())
    }

    const checkWinner = winner === "X" ? "is-x" : winner === "O" ? "is-o" : ""
    return (
        <div className="games">
            <Boards cells={board} onClick={handClick}></Boards>
            {winner && <h1 className={`game-winner ${checkWinner}`}>Winner is {winner}</h1>}
            <button onClick={resetGame} className="game-reset">Reset Game</button>
        </div>
    )
}


export default Games