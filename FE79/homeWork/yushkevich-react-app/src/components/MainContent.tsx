import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeContext } from "../contexts";
import "../styles/MainContent.css"
import { StoreState } from "../types";
import { AddPost } from "./posts/AddPost";
import { AllPosts } from "./posts/AllPosts";
import { Posts } from "./posts/Posts";
import { SelectedPost } from "./posts/SelectedPost";
import { SignIn } from "./signin/SignIn";
import { SignUp } from "./signup/SignUp";

const MainContent = () => {
    const theme = useSelector((state: StoreState) => state.themes.theme);
    const isAuthorised = !!localStorage.getItem("jwtAccess");

    const testData = {
        "id": 0, 
        "image": "https://spacegid.com/wp-content/uploads/2016/09/1024-1024x683.jpg", 
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        "date": "2021-12-12", 
        "lesson_num": 1, 
        "title": 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC' ,
        "author": 4,
    }

    return(
        <div className={`main-content ${theme}-main-content`}>
                <Routes>
                    <Route path="/">
                        <Route index element={<div>homepage</div>} />
                    </Route>
                    <Route path="/posts">
                        <Route index element={<Posts />}/>
                        <Route path=":postId" element={<SelectedPost id={testData.id} image={testData.image} text={testData.text} title={testData.title} date={testData.date} lesson_num={testData.lesson_num} author={testData.author}/>}/>
                        <Route path="new" element={isAuthorised ? <AddPost /> : <Navigate to="/signin"/>}/>
                    </Route>
                    <Route path="/signin">
                        <Route index element={isAuthorised ? <div>Sign In Success</div> : <SignIn />}/>
                    </Route>
                    <Route path="/signup">
                        <Route index element={isAuthorised ? <div>Sign Up Success</div> : <SignUp />} />
                    </Route>
                    <Route path="/forgotpass">
                        <Route index element={<div>Forgot password</div>} />
                    </Route>
                </Routes>
        </div>
    )
}

export default MainContent