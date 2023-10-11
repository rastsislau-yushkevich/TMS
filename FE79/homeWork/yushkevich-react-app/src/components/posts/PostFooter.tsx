import React from "react";
import { IPostVotes } from "./types";
import PostActions from "./PostActions";
import PostVotes from "./PostVotes";

const PostFooter = (props: IPostVotes) => {
    const { likesCount, setLikesCount } = props;
    return (
        <div className="post-footer">
            <PostVotes likesCount={likesCount} setLikesCount={setLikesCount} />
            <PostActions />
        </div>
    )
}

export default PostFooter 