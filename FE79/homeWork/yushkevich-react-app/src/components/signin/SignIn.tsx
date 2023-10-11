import React, { Component, useContext, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';
import { ThemeContext } from "../../contexts";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../types";
import { signin } from "../../redux/action_creators/user_action_creators";

const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const theme = useSelector((state: StoreState) => state.themes.theme)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    }

    const onSignIn = (e: any) => {
        if(email === "") {
            emailRef.current.focus();
        } else if (password === "") {
            passwordRef.current.focus();
        }
        dispatch(signin({email, password}, navigate));
    }

    return(
        <div className="sign-in-body">
            <h2 className={`${theme}-title`}>Sign IN</h2>
            <div className={`sign-in-form ${theme}-sign-in-form`}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control  ref = {emailRef} type="email" placeholder="Your email" onChange={handleEmailChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref = {passwordRef} type="password" placeholder="Your password" onChange={handlePasswordChange}/>
                    <Form.Text className="text-muted">
                        <Link to="/forgotpass">Forgot password</Link>
                    </Form.Text>
                </Form.Group>
                <Button className="sign-in-btn" variant="primary" type="submit" onClick={onSignIn}>
                    Submit
                </Button>
                <Form.Text className="text-muted no-account-text">
                        <span>Don't have an account?</span><Link to="/signup">Sign Up</Link>
                </Form.Text>
            </div>
        </div>
    )
}

export { SignIn }