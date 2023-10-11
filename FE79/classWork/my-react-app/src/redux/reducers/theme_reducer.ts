import { Themes } from "../../components/constants";
import { ThemeState } from "../../types";
import { TOGGLE_THEME } from "../action_types";

const initialState = {
    theme: Themes.LIGHT
}

export default (state: ThemeState = initialState, action: any) => {
    switch(action.type) {
        case TOGGLE_THEME: {
            return({
                ...state,
                theme: state.theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT
            })
        }
        default: {
            return state;
        }   
    }
}