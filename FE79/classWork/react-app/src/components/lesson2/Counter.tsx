import React from "react";

const Counter = (props: ICounter) => {
    return (
        <span>
            Count of clicks are: {props.count}
        </span>
    )
};

interface ICounter {
    count: number
}

export { Counter };