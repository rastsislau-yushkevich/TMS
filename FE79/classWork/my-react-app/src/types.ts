import { Themes } from "./components/constants"
import { IPost } from "./components/posts/types"

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

type StoreState = {
    theme: ThemeState, 
    user: UserState, 
    posts: PostsState
}

type Post = {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    author: number
}

type PostsState = {
    posts: Post[]
}

type PostsResponse = {
    results: Post[],
    previous: null,
    next: string,
    count: number
}

type JwtResponse = {
    access: string,
    refresh: string
}

type RefreshedToken = {
    access: string
}

export type { ThemeState, UserState, User, StoreState, PostsState, Post, PostsResponse, JwtResponse, RefreshedToken }