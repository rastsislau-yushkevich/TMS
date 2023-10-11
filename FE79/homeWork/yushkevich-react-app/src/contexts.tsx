import React from "react";
import { Themes } from "./components/constants";
import { IThemeContext } from "./components/posts/types";


const ThemeContext = React.createContext<IThemeContext | null>(null);

export { ThemeContext }