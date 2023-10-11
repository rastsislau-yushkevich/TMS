import React, { useState } from "react";
import { IPostInfo } from "./types";
import "./Posts.css"
import "./SelectedPost.css"
import PostVotes from "./PostVotes";
import { BiBookmark } from "react-icons/bi";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { PostPagination } from "./PostPagination";

const SelectedPost = (props: IPostInfo) => {
    const postInfo = props;
    const { title, text, image, date } = postInfo;

    return(
        <div className="selected-post">
            <h2 className="selected-title">
                {title}
            </h2>
            <div className="selected-image">
                <img src={image} />
            </div>
            <div className="selected-text">
                {text}
            </div>
            <div className="selected-footer">
            <div className="post-votes">
                <button className="post-likes" ><AiOutlineLike /></button>
                <button className="post-dislikes"><AiOutlineDislike /></button>
            </div>
                <button className="favourites">
                    <BiBookmark />
                    <span>Add to favourites</span>
                </button>
            </div>
            <PostPagination title={title} text={text} date={date} isFull={true}/>
        </div>
    )
}

export { SelectedPost }