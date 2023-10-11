import { UserState } from "../../types";
import { AUTHORIZE, SIGN_UP } from "../action_types";

const initial_state = {
  user: null,
};

export default (state: UserState = initial_state, action: any) => {
  switch (action.type) {
    case AUTHORIZE: {
      return {
        ...state,
        user: action.user
      };
    }
    case SIGN_UP: {
      console.log("action-user: ", action.user)
      return({
        ...state,
        user: action.user
      })
    }
    default: {
      return state;
    }
  }
};
