import React, {Component, useState} from "react";
import "./Header.css";
import HeaderButton from "./HeaderButton";
import ButtonTypes from "./ButtonTypes";
import User from "./User";
import SearchInput from "./SearchInput";
import { BurgerMenu } from "./BurgerMenu";

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("jwtAccess");
        localStorage.removeItem("jwtRefresh");
        window.location.href = "/signin"
    }

    return(
        <>
            <div className="header">
                <HeaderButton type={ButtonTypes.burger} 
                    onClick={() => setOpen(!open)}
                    isOpen = {open}
                    /> 
                <SearchInput />
                <HeaderButton type={ButtonTypes.search} 
                    onClick={() => console.log("click on burger")}
                    />
                <User username="Ilya Yushkevich"/>
                <button onClick={handleLogout}>Logout</button>
            </div>
            {open && <BurgerMenu />}
        </>
    )
}

export default Header