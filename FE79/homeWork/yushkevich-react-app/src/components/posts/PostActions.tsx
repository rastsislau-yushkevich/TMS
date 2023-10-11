import React, { useContext } from "react";
import { BiBookmark } from "react-icons/bi"
import { FiMoreHorizontal } from "react-icons/fi"
import { ThemeContext } from "../../contexts";

const PostActions = () => {
    const sampleThemeContext = useContext(ThemeContext);

    return (
        <div className="post-actions">
            <button className={`post-saved ${sampleThemeContext?.theme}-post-btn`}><BiBookmark /></button>
            <button className={`post-more ${sampleThemeContext?.theme}-post-btn`}><FiMoreHorizontal /></button>
        </div>
    )
}

export default PostActions