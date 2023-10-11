import React from "react";
import { Row, Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { setLimitPosts } from "../redux/action_creators/posts_action_creators";
import { StoreState } from "../types";
import { LIMITS } from "./constants";

const Pagination = () => {

    const rowPerPage = useSelector((state: StoreState) => state.posts.limit);
    const dispatch = useDispatch();
    const handleChangeLimit = (e: any) => {
        dispatch(setLimitPosts(+e.target.value));
    }
    return (
        <Row>
            <Col>
            </Col>
            <Col sm={1}>
                <Form.Select value={rowPerPage} onChange={handleChangeLimit}>
                    {LIMITS.map((limit) => <option key={limit} value={limit}>{limit}</option>)}
                </Form.Select>
            </Col>
        </Row>
      );
    
}

export { Pagination }