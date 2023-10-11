import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { IPostInfo, IPostText } from "./types";

const PostPagination = (props: IPostText) => {
    const {title} = props;

    return(
        <div className="post-pagination">
            <div className="prev-post">
                <div className="arrow">
                    <AiOutlineArrowLeft />
                </div>
                <div className="prev-info">
                    <p className="prev-text text">
                            Prev
                    </p>
                    <p className="prev-title title">
                            {title}
                    </p>
                </div>
            </div>
            <div className="next-post">
                <div className="next-info">
                    <p className="next-text text">
                        Next
                    </p>
                    <p className="next-title title">
                        {title}
                    </p>
                </div>
                <div className="arrow">
                    <AiOutlineArrowRight />
                </div>
            </div>
        </div>
    )
}

export {PostPagination}