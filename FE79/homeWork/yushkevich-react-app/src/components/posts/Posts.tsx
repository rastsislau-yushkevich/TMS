import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Post from "./Post";
import { Orientation } from "./types";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Posts.css";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../types";
import { loadPosts } from "../../redux/action_creators/posts_action_creators";
import store from "../../redux/store";
import { Pagination } from "../Pagination";

const Posts = () => {

    const dispatch = useDispatch();
    const search = useSelector((state: StoreState) => state.posts.search);
    const limit = useSelector((state: StoreState) => state.posts.limit);

    useEffect(() => {
        console.log("dispatch");
        dispatch(loadPosts({search, limit}))
    }, [limit]);

    console.log(store.getState())

    const data = useSelector((store: StoreState) => {
        console.log("Store: ", store);
        console.log("Posts: ", store.posts.posts)
        return store.posts.posts;
    })

    const testData = [...data];

    if (!testData || testData.length === 0) {
        console.log("null returned");
        return null
    }

    const firstRow = testData.splice(0,3);

    const rowsOfFour = [];

    while(testData.length) {
        rowsOfFour.push(testData.splice(0, 4));
    }

    return (
        <Container>
                
            <Row className="posts-row">
                <Col sm={8} className="single-post">
                    <Post postInfo={firstRow[0]} isFull={true} orientation={Orientation.LEFT}/>
                </Col>
                <Col sm={4}>
                    <Row>
                        <Post postInfo={firstRow[1]} isFull={false} orientation={Orientation.LEFT}/> 
                    </Row>
                    <Row>
                        <Post postInfo={firstRow[2]} isFull={false} orientation={Orientation.RIGHT}/> 
                    </Row>
                </Col>
            </Row>

            {rowsOfFour.map((elem) => {
                if(elem.length === 3) {
                    return(
                        <Row className="posts-row">
                            <Col sm={8} className="single-post">
                                <Post postInfo={elem[0]} isFull={true} orientation={Orientation.LEFT}/>
                            </Col>
                            <Col sm={4}>
                                <Row>
                                    <Post postInfo={elem[1]} isFull={false} orientation={Orientation.LEFT}/> 
                                </Row>
                                <Row>
                                    <Post postInfo={elem[2]} isFull={false} orientation={Orientation.RIGHT}/> 
                                </Row>
                            </Col>
                        </Row>
                    )
                } else if (elem.length === 2) {
                    return(
                        <Row className="posts-row">
                            <Col sm={8}>
                                <Row>
                                    <Col>
                                        <Post postInfo={elem[0]} isFull={false} orientation={Orientation.BOTTOM}/>
                                    </Col>
                                    <Col>
                                        <Post postInfo={elem[1]} isFull={false} orientation={Orientation.BOTTOM}/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    )
                } else if (elem.length === 1) {
                    return(
                        <Row className="posts-row">
                            <Col sm={8} className="single-post">
                                <Post postInfo={elem[0]} isFull={true} orientation={Orientation.LEFT}/>
                            </Col>
                        </Row>
                    )
                } else {
                    return(
                        <Row className="posts-row">
                            <Col sm={8}>
                                <Row>
                                    <Col className="single-post">
                                        <Post postInfo={elem[0]} isFull={false} orientation={Orientation.BOTTOM}/>
                                    </Col>
                                    <Col className="single-post">
                                        <Post postInfo={elem[1]} isFull={false} orientation={Orientation.BOTTOM}/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={4}>
                                <Row>
                                    <Post postInfo={elem[2]} isFull={false} orientation={Orientation.LEFT}/> 
                                </Row>
                                <Row>
                                    <Post postInfo={elem[3]} isFull={false} orientation={Orientation.RIGHT}/> 
                                </Row>
                            </Col>
                        </Row>   
                    )
                }
            })}

            <Pagination />
        </Container>
    )
}

export { Posts };