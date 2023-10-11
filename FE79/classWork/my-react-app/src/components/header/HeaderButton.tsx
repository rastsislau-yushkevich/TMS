import React from "react";
import ButtonTypes from "./ButtonTypes"
import { BsSearch } from "react-icons/bs"
import { FaBars } from "react-icons/fa"
import IButton from "./InterfaceButton";
import {ImCancelCircle} from "react-icons/im"

const HeaderButton = (props: IButton) => {
    let {type, isOpen, onClick} = props;
    return( 
        <button className={`button button-${type}`}
                onClick = {onClick}>
                    {type === ButtonTypes.burger ? !isOpen ? <FaBars /> : <ImCancelCircle /> : <BsSearch />}
        </button>
    )
}

export default HeaderButton