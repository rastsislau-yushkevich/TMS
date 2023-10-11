import { PostState } from "../../types";
import { SET_POSTS } from "../action_types";

const initial_state = {
  posts: []
}

export default (state: PostState = initial_state, action: any) => {
  switch (action.type) {
    case SET_POSTS: {
      return ({
        ...state,
        posts: action.posts
      })
    }
    default: {
      return state;
    }
  }
}