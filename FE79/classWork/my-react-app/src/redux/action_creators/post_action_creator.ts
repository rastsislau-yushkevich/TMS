import { Post, PostsResponse } from "../../types";
import { LOAD_POSTS, SET_POSTS } from "../action_types";
import { takeEvery, put } from "../../../node_modules/redux-saga/effects"
import { ServerResponse } from "http";

const loadPosts = () => ({
    type: LOAD_POSTS
})

const setPosts = (posts: Post[]) => ({
    type: SET_POSTS,
    posts
})

function* fetchPosts() {
    const data: Response = yield fetch("https://studapi.teachmeskills.by/blog/posts?limit=20");
    const posts: PostsResponse = yield data.json();
    console.log(posts)
    console.log(posts.results);
    put(setPosts(posts.results));
}

function* watcherPost() {
    yield  takeEvery(LOAD_POSTS, fetchPosts);
}

export { loadPosts, setPosts, watcherPost };