import React from "react";
import ButtonTypes from "./ButtonTypes"

interface IButton{
    type: ButtonTypes,
    isOpen?: boolean,
    onClick: (e: any) => void
}

export default IButton