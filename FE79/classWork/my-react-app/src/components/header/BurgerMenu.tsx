import React, { useContext, useState } from "react";
import User from "./User";
import { ThemeContext } from "../../contexts";
import { Themes } from "../constants";
import { MdOutlineDarkMode, MdDarkMode, MdLightMode, MdOutlineLightMode } from "react-icons/md"


const BurgerMenu = () => {

    const sampleThemeContext = useContext(ThemeContext);

    const handleThemeChange = () => {
        sampleThemeContext?.theme === Themes.LIGHT ? sampleThemeContext?.setTheme(Themes.DARK) : sampleThemeContext?.setTheme(Themes.LIGHT);
    }

    const changeThemeToDark = () => {
        sampleThemeContext?.setTheme(Themes.DARK);
    }

    const changeThemeToLight = () => {
        sampleThemeContext?.setTheme(Themes.LIGHT);
    }

    return(
        <div className={`burger-menu ${sampleThemeContext?.theme}-burger-menu`}>  
            <User username="Ilya Yushkevich"/>
            <button onClick={changeThemeToLight}> {sampleThemeContext?.theme === Themes.LIGHT ? <MdLightMode /> : <MdOutlineLightMode />} </button>
            <button onClick={changeThemeToDark}> {sampleThemeContext?.theme === Themes.DARK ? <MdDarkMode /> : <MdOutlineDarkMode />} </button>
        </div>
    )
}

export { BurgerMenu }