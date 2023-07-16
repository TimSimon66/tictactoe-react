import Cells from "./Cells_text"
import React from "react"

const Boards = (props) => {
    return (
        <div className="game-boards">
            {props.cells.map((item, index) => <Cells
                key={index}
                onClick={() => props.onClick(index)}
                value={item}
                item={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
            ></Cells>)}
        </div>
    )
}

export default Boards