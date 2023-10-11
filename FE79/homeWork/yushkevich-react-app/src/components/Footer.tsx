import React, { useContext } from "react";
import { ThemeContext } from "../contexts";
import "../styles/Footer.css"
import "../styles/Themes.css"

const Footer = () => {
    const sampleThemeContext = useContext(ThemeContext);

    return(
        <div className={`footer ${sampleThemeContext?.theme}-footer`}>
            <div className="line"></div>
            <div className="footer-text">
                <p>© 2022 Rastsislau Yushkevich</p>
                <p>All rights reserved</p>
            </div>
        </div>
    )
}

export {Footer}