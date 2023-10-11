import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../../redux/action_creators/post_action_creators";
import { StoreState } from "../../types";
import Post from "./Post";
import { Orientation } from "./types";

const Posts = () => {
    const posts = useSelector((state: StoreState) => state.post.posts)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadPosts())
    }, [])
    if (posts.length === 0){
        return null;
    }
    return (
        <Container>
            <Row>
                <Col sm={8}>
                    <Post postInfo={posts[0]} isFull={true} orientation={Orientation.LEFT}/>
                </Col>
                <Col sm={4}>
                    <Row>
                        <Post postInfo={posts[0]} isFull={false} orientation={Orientation.LEFT}/> 
                    </Row>
                    <Row>
                        <Post postInfo={posts[0]} isFull={false} orientation={Orientation.RIGHT}/> 
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col sm={8}>
                    <Row>
                        <Col>
                            <Post postInfo={posts[0]} isFull={false} orientation={Orientation.BOTTOM}/>
                        </Col>
                        <Col>
                            <Post postInfo={posts[0]} isFull={false} orientation={Orientation.BOTTOM}/>
                        </Col>
                    </Row>
                </Col>
                <Col sm={4}>
                    <Row>
                        <Post postInfo={posts[0]} isFull={false} orientation={Orientation.LEFT}/> 
                    </Row>
                    <Row>
                        <Post postInfo={posts[0]} isFull={false} orientation={Orientation.RIGHT}/> 
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}


export { Posts };