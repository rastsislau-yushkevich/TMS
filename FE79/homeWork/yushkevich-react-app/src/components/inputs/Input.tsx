import React, { useState } from "react";
import IInput from "./IInput";
import "../../styles/Inputs.css"

const Input = (props: IInput) => {
    let {type, state, disabled, setState} = props;

    return(
            <label className={`label-${state}`}>
                Title
                <input type={type} disabled={disabled} className = {`input ${state}`} placeholder="Placeholder"/>
                {state === "error" ? "Error text" : ""}
            </label>
    )
}

export default Input