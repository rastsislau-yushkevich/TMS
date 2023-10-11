import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../redux/action_creators";
import { IStore } from "../redux/types";

const TodoList = () => {
    const todos = useSelector((state: IStore) => state.todos);
    const dispatch = useDispatch();

    const handleDeleteClick = (id: number) => {
        dispatch(deleteTodo(id)); 
    }

    return (
        <ul>
            {todos.map(({ id, text }) => {
                return(
                    <li key={id}>{text} <button onClick={() => handleDeleteClick(id)}>Delete</button> </li>
                )
            })}
        </ul>
    );
}

export { TodoList }