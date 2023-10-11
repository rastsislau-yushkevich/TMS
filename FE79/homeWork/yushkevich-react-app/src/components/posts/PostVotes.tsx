import React, { useContext } from "react";
import { AiOutlineDislike } from "react-icons/ai"
import { AiOutlineLike } from "react-icons/ai"
import { IPostVotes } from "./types";
import PostFooter from "./PostFooter";
import { ThemeContext } from "../../contexts";
import "../../styles/Themes.css"

const PostVotes = (props: IPostVotes) => {
    const { likesCount, setLikesCount } = props;
    const handleClick = () => {
        setLikesCount(likesCount + 1);
    }

    const sampleThemeContext = useContext(ThemeContext);

    return (
        <div className="post-votes">
            <button className={`post-likes ${sampleThemeContext?.theme}-post-btn`} onClick={handleClick}><AiOutlineLike /></button>
            {likesCount ? <div className="post-like-amount">{likesCount}</div> : ""}
            <button className={`post-dislikes ${sampleThemeContext?.theme}-post-btn`}><AiOutlineDislike /></button>
        </div>
    )
}

export default PostVotes