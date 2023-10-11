import React, {useState} from "react";
import Input from "./Input";
import TextArea from "./TextArea";


const Inputs = () => {
    let [state, setState] = useState("default");
    let [disabled, setDisabled] = useState(false);

    return(
        <>
            <button onClick={() => {setState("default"); setDisabled(false)}}>Default</button>
            <button onClick={() => {setState("focus"); setDisabled(false)}}>Focus</button>
            <button onClick={() => {setState("active"); setDisabled(false)}}>Active</button>
            <button onClick={() => {setState("disabled"); setDisabled(true)}}>Disabled</button>
            <button onClick={() => {setState("error"); setDisabled(false)}}>Error</button>
            <Input type='email' disabled={disabled} state={state} setState={setState}/>
            <TextArea />
        </>
    )
}

export default Inputs