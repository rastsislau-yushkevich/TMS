import { Themes } from "../../components/constants"
import { SET_DARK_THEME, SET_LIGHT_THEME } from "../action_types/theme_action_types"

const setDarkTheme = () => ({
    type: SET_DARK_THEME
})

const setLightTheme = () => ({
    type: SET_LIGHT_THEME
})

export { setDarkTheme, setLightTheme }