import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Post from "./Post";
import { Orientation } from "./types";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { PostsState, StoreState } from "../../types";
import { loadPosts } from "../../redux/action_creators";

const Posts = () => {

    const testData = useSelector((state: StoreState) => {
        console.log(state);
        return state.posts.posts
    })
    
    console.log("testData", testData);


    const dispatch = useDispatch();
    useEffect(() => {
        console.log("dispatch")
        dispatch(loadPosts());
    }, [])

    if(testData.length === 0) {
        return null;
    }

    const firstRow = testData.splice(0,3);

    const rowsOfFour = [];

    while(testData.length) {
        rowsOfFour.push(testData.splice(0, 4));
    }

    
    return (
        <Container>             
            <Row>
                <Col sm={8}>
                    <Post key={firstRow[0].id} postInfo={firstRow[0]} isFull={true} orientation={Orientation.LEFT}/>
                </Col>
                <Col sm={4}>
                    <Row>
                        <Post key={firstRow[1].id} postInfo={firstRow[1]} isFull={false} orientation={Orientation.LEFT}/> 
                    </Row>
                    <Row>
                        <Post key={firstRow[2].id} postInfo={firstRow[2]} isFull={false} orientation={Orientation.RIGHT}/> 
                    </Row>
                </Col>
            </Row>

            {rowsOfFour.map((elem) => {
                if(elem.length === 3) {
                    return(
                        <Row>
                            <Col sm={8}>
                                <Post key={elem[0].id} postInfo={elem[0]} isFull={true} orientation={Orientation.LEFT}/>
                            </Col>
                            <Col sm={4}>
                                <Row>
                                    <Post key={elem[1].id} postInfo={elem[1]} isFull={false} orientation={Orientation.LEFT}/> 
                                </Row>
                                <Row>
                                    <Post key={elem[2].id} postInfo={elem[2]} isFull={false} orientation={Orientation.RIGHT}/> 
                                </Row>
                            </Col>
                        </Row>
                    )
                } else if (elem.length === 2) {
                    return(
                        <Row>
                            <Col sm={8}>
                                <Row>
                                    <Col>
                                        <Post key={elem[0].id} postInfo={elem[0]} isFull={false} orientation={Orientation.BOTTOM}/>
                                    </Col>
                                    <Col>
                                        <Post key={elem[1].id} postInfo={elem[1]} isFull={false} orientation={Orientation.BOTTOM}/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    )
                } else if (elem.length === 1) {
                    return(
                        <Row>
                            <Col sm={8}>
                                <Post key={elem[0].id} postInfo={elem[0]} isFull={true} orientation={Orientation.LEFT}/>
                            </Col>
                        </Row>
                    )
                } else {
                    return(
                        <Row>
                            <Col sm={8}>
                                <Row>
                                    <Col>
                                        <Post key={elem[0].id} postInfo={elem[0]} isFull={false} orientation={Orientation.BOTTOM}/>
                                    </Col>
                                    <Col>
                                        <Post key={elem[1].id} postInfo={elem[1]} isFull={false} orientation={Orientation.BOTTOM}/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={4}>
                                <Row>
                                    <Post key={elem[2].id} postInfo={elem[2]} isFull={false} orientation={Orientation.LEFT}/> 
                                </Row>
                                <Row>
                                    <Post key={elem[3].id} postInfo={elem[3]} isFull={false} orientation={Orientation.RIGHT}/> 
                                </Row>
                            </Col>
                        </Row>   
                    )
                }
            })}
        </Container>
    )
}

export { Posts };