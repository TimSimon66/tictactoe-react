import "./GameStyle_text.css"
import React from "react"

const Cells = (props) => {
    return (
        <div className={`game-cells ${props.item}`} onClick={props.onClick} index={props.index}>
            {props.value}
        </div>
    )
}

export default Cells