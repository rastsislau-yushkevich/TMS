import React, { useState } from "react";

const ColorInput = (props: any) => {

    const {zoneRef} = props;
    
    const [pixels, setPixels] = useState("");
    const handleChange = () => {
        console.log(pixels, zoneRef);
        zoneRef.current.scrollTop = +pixels;
    }
    return(
        <>
            <input type="text" value={pixels} onChange={(e) => setPixels(e.target.value)}/>
            <button type="submit" onClick={handleChange}>Btn</button>
        </>
    )
}

export default ColorInput