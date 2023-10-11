import React from "react";
import { useDispatch } from "react-redux";
import { loadTodos } from "../redux/action_creators";

const LoadTodos = () => {
    const dispatch = useDispatch();
    return(
        <button onClick={() => dispatch(loadTodos())}>Load Todos</button>
    )
}

export { LoadTodos }