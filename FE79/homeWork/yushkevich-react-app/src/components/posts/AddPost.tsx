import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ImageUploader } from "./ImageUploader";
import "./AddPost.css"

const AddPost = () => {
    return(
        <div className="add-post">
            <h2>Add Post</h2>
            <div className="first-row">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Lesson number</Form.Label>
                    <Form.Control type="number" placeholder="Enter lesson number" />
                </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Text</Form.Label>
                <Form.Control as="textarea" type="text" placeholder="Enter text" />
            </Form.Group>
            <ImageUploader />
           <div className="button-group">
                <Button variant="danger" type="submit">
                    Cancel
                </Button>
                <Button variant="primary" type="submit">
                    Add Post
                </Button>
           </div>
        </div>
    )
}

export { AddPost }