import React, { useState } from "react"
import Button, { ButtonTypes } from "./Button";
import { LightHOC } from "./LightHOC";

const Buttons = () => {
    const [active, setActive] = useState("");

    return(
        <div>
            <LightHOC wrappedComponent={<Button content="primary"
                isActive = {true} 
                color = {"white"}
                type = {ButtonTypes.primary}
                onClick={() => console.log("click on 1 btn")}
                />} id="1"
                active={active}
                setActive={setActive} />
            <LightHOC wrappedComponent={<Button content="primary"
                isActive = {true} 
                type = {ButtonTypes.primary}
                onClick={() => console.log("click on 2 btn")}/>}
                id="2" 
                active={active}
                setActive={setActive}/>
            <LightHOC wrappedComponent={ <Button content="secondary"
                isActive = {true} 
                color = {"black"}
                type = {ButtonTypes.primary}
                onClick={() => console.log("click on 3 btn")}/>}
                id="3" 
                active={active}
                setActive={setActive}/>
            <LightHOC wrappedComponent={<Button content="secondary"
                isActive = {true} 
                color = "black"
                type = {ButtonTypes.primary}
                onClick={() => console.log("click on 4 btn")}/>}
                id="4" 
                active={active}
                setActive={setActive}/>
        </div>
    )
}

export default Buttons;