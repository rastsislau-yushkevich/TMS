import { Themes } from "../constants"

interface IPost {
    postInfo: IPostInfo,
    isFull: boolean,
    orientation: Orientation
}

interface IPostInfo {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    author: number
}

interface IPostText {
    text: string,
    date: string,
    title: string,
    isFull: boolean,
}

interface IPostImage {
    image: string
}

export enum Orientation {
    TOP = "top",
    BOTTOM = "bottom",
    LEFT = "left",
    RIGHT = "right"
}

interface IPostVotes {
    likesCount: number,
    setLikesCount: (likesCount: number) => void
}

interface IThemeContext {
    theme: Themes,
    setTheme: (theme: Themes) => void
}

export type { IPost, IPostInfo, IPostText, IPostImage, IPostVotes, IThemeContext };