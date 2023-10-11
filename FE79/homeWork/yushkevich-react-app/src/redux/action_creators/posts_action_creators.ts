import { Post, PostsResponse, SearchInfo, StoreState } from "../../types";
import { LOAD_POSTS, SET_SEARCH_POSTS, SET_POSTS, SET_LIMIT_POSTS, ADD_POST } from "../action_types/posts_action_types";
import { put, putResolve, takeEvery } from "../../../node_modules/redux-saga/effects"

const loadPosts = (searchInfo: SearchInfo) => ({
    type: LOAD_POSTS,
    searchInfo
})

const setPosts = (posts: Post[]) => ({
    type: SET_POSTS,
    posts
})

const setSearchPosts = (search: string) => ({
    type: SET_SEARCH_POSTS,
    search
})

const setLimitPosts = (limit: number) => ({
    type: SET_LIMIT_POSTS,
    limit
})

const buildPostsString = (searchInfo: SearchInfo) => {
    let url = new URL("https://studapi.teachmeskills.by/blog/posts/");
    Object.keys(searchInfo).forEach((key) => {
        url.searchParams.append(key, `${searchInfo[key]}`);
    })
    return url;
}

function* fetchPosts(action: any) {
    const { searchInfo } = action;
    const data: Response = yield fetch(buildPostsString(searchInfo));
    const posts: PostsResponse = yield data.json();
    console.log("Action creator posts: ", posts.results);
    yield put(setPosts(posts.results)); //без yield хотя бы постам что-то присваивается
}

function* watcherPost() {
    yield takeEvery(LOAD_POSTS, fetchPosts);
}

export { loadPosts, setPosts, watcherPost, setSearchPosts, setLimitPosts };
