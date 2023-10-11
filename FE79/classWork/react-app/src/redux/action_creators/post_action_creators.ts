import { LOAD_POSTS, SET_POSTS } from "../action_types";
import { Post, PostsResponse } from "../../types";
import { takeEvery, put } from "redux-saga/effects";

const loadPosts = () => ({
  type: LOAD_POSTS
})

const setPosts = (posts: Post[]) => ({
    type: SET_POSTS,
    posts
})

function* fetchPosts() {
    const data: Response = yield fetch('https://studapi.teachmeskills.by/blog/posts?limit=20&offset=100')
    const posts: PostsResponse = yield data.json()
    yield put(setPosts(posts.results))
}

function* watcherPost(){
    yield takeEvery(LOAD_POSTS, fetchPosts)
}

export { loadPosts, setPosts, watcherPost };