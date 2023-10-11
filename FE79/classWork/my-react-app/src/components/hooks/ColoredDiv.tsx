import React, { useRef } from "react";

const ColoredDiv = (props: any) => {
    const {zoneRef} = props;
    const colorArr = ["red", "green", "blue", "grey", "black", "yellow", "indigo", "white", "orange"]
    return(
        <div ref={zoneRef} style={{"width": 300, "border": "1px solid black", "height": 150, "overflowY": "auto", "overflowX": "hidden" }}>
            {colorArr.map(color => {
                return(<div style = {{backgroundColor: color, width: 800, height: 150 }}/>)
            })}
        </div>
    )
}

export default ColoredDiv