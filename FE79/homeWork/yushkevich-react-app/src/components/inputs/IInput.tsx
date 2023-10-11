import React from "react";

interface IInput {
    type: string,
    state: string,
    disabled: boolean,
    setState: (state: string) => void
}

export default IInput