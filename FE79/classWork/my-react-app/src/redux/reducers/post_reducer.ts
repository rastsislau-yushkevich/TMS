import { PostsState } from "../../types";
import { LOAD_POSTS, SET_POSTS } from "../action_types";

const initialState = {
    posts: []
}

export default (state: PostsState = initialState, action: any) => {
    switch(action.type) {
        case SET_POSTS: {
            // console.log("action", action);
            // console.log("state", state);
            return({
                ...state,
                posts: action.posts
            })
        }
        default: {
            return state
        }
    }
}