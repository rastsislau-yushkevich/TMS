import React, { useContext } from "react";
import { MyContext } from "./Wrapper";

const Consumer = () => {
    const text = useContext(MyContext);

    return(
        <span>
            {text}
        </span>
    )
}

export default Consumer