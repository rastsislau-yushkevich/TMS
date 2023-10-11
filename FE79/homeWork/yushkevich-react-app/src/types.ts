import { type } from "os"
import { Themes } from "./components/constants"

type Post = {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    author: number
}

type PostsResponse = {
    results: Post[],
    previous: null,
    count: number,
    next: string,
}

type PostState = {
    posts: Post[],
    search: string,
    limit: number
}

type StoreState = {
    posts: PostState,
    themes: ThemeState,
    user: UserState
}

type ThemeState = {
    theme: Themes
}

type UserState = {
    user: User | null
}

type User = {
    id?: number,
    email: string,
    username?: string,
    password: string
}

type JwtResponse = {
    access: string,
    refresh: string
}

type SearchInfo = {
    // search: string,
    // limit: number
    [index: string]: string | number
}

export type { Post, PostState, PostsResponse, StoreState, ThemeState, UserState, User, JwtResponse, SearchInfo }