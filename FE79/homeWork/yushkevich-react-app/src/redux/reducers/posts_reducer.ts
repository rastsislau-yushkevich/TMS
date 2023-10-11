import { PostState } from "../../types"
import { SET_LIMIT_POSTS, SET_POSTS, SET_SEARCH_POSTS } from "../action_types/posts_action_types"

const initialState = {
    posts: [],
    search: '',
    limit: 20
}

export default (state: PostState = initialState, action: any) => {
    switch(action.type) {
        case SET_POSTS: {
            return({
                ...state,
                posts: action.posts
            })
        }
        case SET_SEARCH_POSTS: {
            return({
                ...state,
                search: action.search
            })
        }
        case SET_LIMIT_POSTS: {
            return({
                ...state,
                limit: action.limit
            })
        }
        default: {
            return state
        }
    }
}