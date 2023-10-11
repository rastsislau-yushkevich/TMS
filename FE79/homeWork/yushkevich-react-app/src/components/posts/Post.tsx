import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PostFooter from "./PostFooter";
import { PostImage } from "./PostImage";
import { PostText } from "./PostText";
import { IPost, Orientation } from "./types";
import "./Posts.css";

const Post = (props: IPost) => {
    const [likesCount, setLikesCount] = useState(0);

    const { postInfo, isFull, orientation } = props;
    const { date, title, text, image } = postInfo;
    const postText = <Col sm={8}>
                        <PostText date={date}
                               title={title}
                               text={text}
                               isFull={isFull}/>
                      </Col>
    const postImage = <Col sm={4}>
                        <PostImage image={image}/>
                      </Col>
    const isLeft = orientation === Orientation.LEFT
    const isHorisontal = isLeft || orientation === Orientation.RIGHT;
    const isTop = orientation === Orientation.TOP
    const arr = [postText, postImage];
    const resultOrder = isLeft || isTop ? arr : arr.reverse();
    return(
        <Container>
            <Row>
                { isHorisontal ?
                    <>
                        {resultOrder}
                    </>
                :
                  <Col>
                    {resultOrder}
                  </Col>  
                }
            </Row>
            <PostFooter likesCount={likesCount} setLikesCount={setLikesCount}/>
        </Container>
    )
};
   
export default Post;