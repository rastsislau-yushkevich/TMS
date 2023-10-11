import { Themes } from "../../components/constants";
import { ThemeState } from "../../types";
import { SET_DARK_THEME, SET_LIGHT_THEME } from "../action_types/theme_action_types";

const initialState = {
    theme: Themes.LIGHT
}

export default (state: ThemeState = initialState, action: any) => {
    switch(action.type) {
        case SET_DARK_THEME: {
            return({
                ...state,
                theme: Themes.DARK
            })
        }
        case SET_LIGHT_THEME: {
            return({
                ...state,
                theme: Themes.LIGHT
            })
        }
        default: {
            return state;
        }
    }
}