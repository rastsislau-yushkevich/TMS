import React, { useState } from "react";
import { Clicker } from "./Clicker";
import { Counter } from "./Counter";
import Form from 'react-bootstrap/Form';

const Lesson2 = () => {
    // const [text, setText] = useState('Our default text');
    // const [color, setColor] = useState('red');
    // const handleButtonClick = () => {
    //     setColor(color === 'red' ? 'blue' : 'red');
    // }
    // return (
    //     <div>
    //         <span style={{color: color}}>
    //             {text}
    //         </span>
    //         <button onClick={handleButtonClick}>Change color</button>
    //     </div>
    // )
    // ===================================
    const [count, setCount] = useState(0);
    return (
        <div>
            <Counter count={count} />
            <Clicker setCount={setCount} count={count} />
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
        </div>
    )
};

export default Lesson2;