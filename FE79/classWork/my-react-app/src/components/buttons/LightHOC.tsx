import React from "react";
import Button, { IButton } from "./Button";

const LightHOC = (props: ILightHOC) => {
    const handleHocClick = () => {
        if(props.active === props.id) {
            props.setActive("")
        } else {
            props.setActive(props.id)
        }
    }

    const isActive = props.active === props.id;

    return(
        <div onClick={handleHocClick} style={{border: isActive ? "2px solid red" : "", width: "max-content"}}>
            {props.wrappedComponent}
        </div>
    )
};

interface ILightHOC {
    wrappedComponent: any, 
    id: string,
    active: string,
    setActive: (active: string) => void
}

export { LightHOC }