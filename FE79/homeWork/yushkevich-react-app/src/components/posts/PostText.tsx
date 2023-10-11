import React from "react";
import { IPostText } from "./types";

const PostText = (props: IPostText) => {
    const { date, title, text, isFull } = props;
    const ResultH = isFull ? 'h3' : 'h5';
    return(
        <div>
            <span>{date}</span>
            <ResultH>{title}</ResultH>
            {isFull && <p>{text}</p>}
        </div>
    )
}

export { PostText };