import React from "react";
import Consumer from "./Consumer";

const MyContext = React.createContext("This is context message");
console.log(MyContext);

const Wrapper = () => {
    return(
        <MyContext.Provider value="Any message" >
            <Consumer />
        </MyContext.Provider>
    )
}

export {Wrapper, MyContext}