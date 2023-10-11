import React, { useContext, useState } from "react";
import User from "./User";
import { ThemeContext } from "../../contexts";
import { Themes } from "../constants";
import { MdOutlineDarkMode, MdDarkMode, MdLightMode, MdOutlineLightMode } from "react-icons/md"
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../types";
import { setDarkTheme, setLightTheme } from "../../redux/action_creators/theme_action_creators";


const BurgerMenu = () => {

    const theme = useSelector((state: StoreState) => state.themes.theme);
    const currentUser = useSelector((state: StoreState) => state.user.user);
    const dispatch = useDispatch();

    const changeThemeToDark = () => {
        dispatch(setDarkTheme());
    }

    const changeThemeToLight = () => {
        dispatch(setLightTheme());
    }

    const handleLogout = () => {
        localStorage.removeItem("jwtAccess");
        localStorage.removeItem("jwtRefresh");
        window.location.href = "/signin"
    }

    return(
        <div className={`burger-menu ${theme}-burger-menu`}>  
            {currentUser ? <User username={String(currentUser?.username)}/> : ""}
            <div className={`page-link ${theme}-page-link`}><Link to="posts">Posts</Link></div>
            <div className={`page-link ${theme}-page-link`}><Link to="posts/new">New post</Link></div>
            {/* <div className={`page-link ${theme}-page-link`}><Link to="signin">Sign In</Link></div> */}
            {currentUser ? <button onClick={handleLogout}>Logout</button> : <div className={`page-link ${theme}-page-link`}><Link to="signin">Sign In</Link></div>}
            <div className="theme-buttons">
                <button onClick={changeThemeToLight}> {theme === Themes.LIGHT ? <MdLightMode /> : <MdOutlineLightMode />} </button>
                <button onClick={changeThemeToDark}> {theme === Themes.DARK ? <MdDarkMode /> : <MdOutlineDarkMode />} </button>
            </div>
        </div>
    )
}

export { BurgerMenu }