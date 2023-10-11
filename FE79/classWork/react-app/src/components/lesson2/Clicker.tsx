import React from "react";
import { Button } from "react-bootstrap";

const Clicker = (props: IClicker) => {
    const { count, setCount } = props;
    const handleClick = () => {
        setCount(count+1)
    }
    return (
        <Button variant="primary" onClick={handleClick}>
            Click me
        </Button>
    )
}

interface IClicker {
    count: number,
    setCount: (newCount: number) => void
}

export { Clicker };