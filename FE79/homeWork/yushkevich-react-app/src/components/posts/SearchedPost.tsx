import React, { useState } from "react";
import PostFooter from "./PostFooter";
import { IPost, IPostInfo } from "./types";
import "./SearchedPost.css"

const SearchedPost = (props: IPostInfo) => {
    const { id, image, text, date, title } = props;
    const [likesCount, setLikesCount] = useState(0);

    return( 
        <div className="searched-post">
            <div className="searched-main">
                <div className="post-image"><img src={image} alt="" /></div>
                <div className="post-main-info">
                    <div className="post-date">{date}</div>
                    <h3 className="post-title">{title}</h3>
                </div>
            </div>
            <PostFooter likesCount={likesCount} setLikesCount={() => setLikesCount(likesCount+1)}/>
        </div>
    )
}

export { SearchedPost }