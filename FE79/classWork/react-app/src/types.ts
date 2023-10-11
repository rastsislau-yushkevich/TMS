import { Themes } from "./constants"

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
  post: PostState
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

type PostState = {
  posts: Post[]
}

type PostsResponse = {
  results: Post[],
  previous: null,
  count: number,
  next: string,
}

type JwtResponse = {
  access: string,
  refresh: string
}

export type {
  ThemeState,
  UserState,
  User,
  StoreState,
  Post,
  PostState,
  PostsResponse,
  JwtResponse,
};