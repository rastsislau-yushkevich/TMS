import React, { useEffect, useState } from 'react';
import {LightHOC} from './components/buttons/LightHOC';
import Button, { ButtonTypes } from './components/buttons/Button';
import Buttons from './components/buttons/Buttons';
import Timer from './components/hooks/Timer';
import { SignIn } from './components/signin/SignIn';
import { Wrapper } from './components/hooks/Wrapper';
import ColoredWrapper from './components/hooks/ColoredWrapper';
import { Posts } from './components/posts/Posts';
import { ThemeContext } from './contexts';
import "./App.css"
import {Themes} from "./components/constants"
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import Post from './components/posts/Post';
import Consumer from './components/hooks/Consumer';
import PrivateRoute from './components/routes/PrivateRoute';
import { getUser, toggleTheme } from './redux/action_creators';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState, ThemeState } from './types';
import userEvent from '@testing-library/user-event';
import { SignUp } from './components/signup/SignUp';
import { Activation } from './redux/activation/Activation';
import Header from './components/header/Header';

function App() {
    const currentUser = useSelector((state: StoreState) => state.user.user);
    const isAuthorised = !!localStorage.getItem("jwtAccess");
    const theme = useSelector((state: StoreState) => state.theme.theme);
    const dispatch = useDispatch();

    const handleThemeChange = () => {
      dispatch(toggleTheme());
    }

    useEffect(() => {
      const token = localStorage.getItem("jwtAccess");
      if(token) {
        dispatch(getUser());
      } else {
        if (window.location.pathname !== "/signin" && window.location.pathname !== "/posts") {
          window.location.href = "/signin"
        }
      }
    }, [localStorage.getItem("jwtAccess")])
    

  return (
    <div className={theme + "-app-container"}>
        {/* <button onClick={handleThemeChange}>Change theme</button> */}
          <BrowserRouter>
            <Header />
            <Link to="buttons">Buttons</Link>
            <Link to="posts">Posts</Link>
            <Link to="signin">Sign In</Link>
            <Link to="signup">Sign Up</Link>
            <Link to="coloredWrapper">ColoredWrapper</Link>
            <Link to="timer">Timer</Link>
            <Link to="consumer">Consumer</Link>

            <Routes>
              <Route path="/">
                <Route index element={<div>HomePage</div>} />
                <Route path='posts' >
                  <Route index element={<Posts />}/>
                  <Route path=':postId' element={<div>Seleceted Post</div>}/>
                  <Route path="new">
                    <Route index element={ isAuthorised ? <div>New</div> : <Navigate to="/signin"/>} />
                  </Route>
                </Route>
              </Route>             
              <Route path='signin'>
                  <Route index element={ isAuthorised ? <div>You are authorised</div> : <SignIn /> }/>
              </Route>
              <Route path='/signup'>
                  <Route index element={<SignUp />} />
              </Route>
              <Route path='coloredWrapper' element={<ColoredWrapper/>} />
              <Route path='timer' element={<Timer />} />
              <Route path='consumer' element={<Consumer />} />
              <Route path='buttons' element={<Buttons />} />
              <Route path='activate'>
                <Route path='*' element={<Activation />} />
              </Route>
            </Routes>
          </BrowserRouter>

          {/* <Posts /> */}
          {/* <SignIn /> */}

      {/* <Buttons /> */}
      {/* <Timer /> */}
      {/* <SignIn /> */}
      {/* <Wrapper /> */}
      {/* <ColoredWrapper /> */}
    </div>
  );
}



export default App;
