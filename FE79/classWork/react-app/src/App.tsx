import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { WrapperRef } from './components/hooks/useRef/Wrapper';
import { Posts } from './components/posts/Posts';
import { ThemeContext } from './contexts';
import { Themes } from './constants';
import './App.css';
import { SignIn } from './components/signin/SignIn';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState, ThemeState } from './types';
import { getUser, toggleTheme } from './redux/action_creators';
import SignUp from './components/signup/SignUp';
import { Activation } from './components/activation/Activation';

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: StoreState) => state.theme.theme)
  const currentUser = useSelector((state: StoreState) => state.user.user)

  const isAuthorized = !!currentUser;
  const handleChangeTheme = () => {
      dispatch(toggleTheme());
  }
  useEffect(() => {
    const token = localStorage.getItem('jwtAccess');
    if (token) {
      dispatch(getUser(token))
    }
  }, [localStorage.getItem('jwtAccess')])
  return (
      <div className={theme+'-app-container'}>
          <Button onClick={handleChangeTheme}>Change theme</Button>
          {/* <Posts /> */}
          {/* <SignIn /> */}
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<div>Home</div>} />
                <Route path="posts">
                  <Route index element={<Posts />} />
                  <Route path=":id" element={<div>Selected post</div>} />
                  <Route path="new">
                    <Route index element={isAuthorized ?
                    <div>New</div> : <Navigate to={'/signin'} />} />
                  </Route>
                </Route>
                <Route path="signin" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="activate">
                  <Route path="*" element={<Activation />} />
                </Route>
                <Route path="forgotpass" element={<div>Forgot password</div>} />
              </Route>
              <Route path="*" element={<div>Not found</div>} />
            </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
