import React, { Component, useContext, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css';
import { ThemeContext } from "../../contexts";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/action_creators/user_action_creators";

const SignUp = () => {
    const sampleThemeContext = useContext(ThemeContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [signed, setSigned] = useState(false);
    const dispatch = useDispatch();

    const nameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const confirmPassRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    }

    const handleNameChange = (e: any) => {
        setName(e.target.value);
    }

    const handleConfirmPassChange = (e: any) => {
        setConfirmPass(e.target.value);
    }

    // const onSignIn = (e: any) => {
    //     if(name === "") {
    //         nameRef.current.focus();
    //         nameRef.current.classList.add("error-input");
    //     } else {
    //         nameRef.current.classList.remove("error-input");
    //     }
    //     if(email === "") {
    //         emailRef.current.focus();
    //         emailRef.current.classList.add("error-input");
    //     } else {
    //         emailRef.current.classList.remove("error-input");
    //     }
    //     if (password === "") {
    //         passwordRef.current.focus();
    //         passwordRef.current.classList.add("error-input");
    //     } else {
    //         passwordRef.current.classList.remove("error-input");
    //     }
    //     if (confirmPass === "") {
    //         confirmPassRef.current.focus();
    //         confirmPassRef.current.classList.add("error-input");
    //     } else {
    //         confirmPassRef.current.classList.remove("error-input");
    //     }
    //     setSigned(true);
    // }

    const onSignUp = () => {
        if(name === "") {
            nameRef.current.focus();
            nameRef.current.classList.add("error-input");
        } else {
            nameRef.current.classList.remove("error-input");
        }
        if(email === "") {
            emailRef.current.focus();
            emailRef.current.classList.add("error-input");
        } else {
            emailRef.current.classList.remove("error-input");
        }
        if (password === "") {
            passwordRef.current.focus();
            passwordRef.current.classList.add("error-input");
        } else {
            passwordRef.current.classList.remove("error-input");
        }
        if (confirmPass === "") {
            confirmPassRef.current.focus();
            confirmPassRef.current.classList.add("error-input");
        } else {
            confirmPassRef.current.classList.remove("error-input");
        }
        dispatch(signup({
            username: name,
            email: email,
            password: password
        }));
    }

    return(
        <div className="sign-up-body">
            <h2 className={`${sampleThemeContext?.theme}-title`}>Sign UP</h2>
            <div className={`sign-up-form ${sampleThemeContext?.theme}-sign-up-form`}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control  ref = {nameRef} type="email" placeholder="Your name" onChange={handleNameChange}/>
                    { !name && signed && <div className="error-msg">This field is required</div> }
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control  ref = {emailRef} type="email" placeholder="Your email" onChange={handleEmailChange}/>
                    { !email && signed && <div className="error-msg">This field is required</div> }
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref = {passwordRef} type="password" placeholder="Your password" onChange={handlePasswordChange}/>
                    { !password && signed && <div className="error-msg">This field is required</div> }
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control ref = {confirmPassRef} type="password" placeholder="Confirm password" onChange={handleConfirmPassChange}/>
                    { !confirmPass && signed && <div className="error-msg">This field is required</div> }
                </Form.Group>
                <Button className="sign-up-btn" variant="primary" type="submit" onClick={onSignUp}>
                    Submit
                </Button>
                <Form.Text className="text-muted no-account-text">
                        <span>Already have an account?</span><Link to="/signin">Sign in</Link>
                </Form.Text>
            </div>
        </div>
    )
}

export { SignUp }