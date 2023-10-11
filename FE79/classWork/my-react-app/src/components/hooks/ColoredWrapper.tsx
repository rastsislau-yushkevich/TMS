import React, { useRef } from "react";
import ColoredDiv from "./ColoredDiv";
import ColorInput from "./ColorInput";



const ColoredWrapper = () => {
    const zoneRef = useRef();

    return(
        <>
            <ColoredDiv zoneRef = {zoneRef}/>
            <ColorInput zoneRef = {zoneRef}/>
        </>
    )
}

export default ColoredWrapper