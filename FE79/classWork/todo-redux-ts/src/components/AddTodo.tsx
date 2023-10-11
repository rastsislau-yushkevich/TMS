import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action_creators";

const AddTodo = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleInputChange = (e: any) => {
        setText(e.target.value);
    }

    const handleButtonClick = () => {
        dispatch(addTodo(text));
        setText("");
    }

    return(
        <div>
            <input value={text} onChange={handleInputChange}/>
            <button onClick={handleButtonClick}>Add todo</button>
        </div>
    )
}

export { AddTodo }