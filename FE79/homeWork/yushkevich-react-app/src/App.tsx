import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Themes } from './components/constants';
import { Footer } from './components/Footer';
import Header from './components/header/Header';
import Input from './components/inputs/Input'
import Inputs from './components/inputs/Inputs';
import MainContent from './components/MainContent';
import { Posts } from './components/posts/Posts';
import { SearchResults } from './components/search/SearchResults';
import { IThemeContext } from './components/posts/types';
import { ThemeContext } from './contexts';
import { getUser } from './redux/action_creators/user_action_creators';
import store from './redux/store';
import "./styles/Themes.css"
import { StoreState } from './types';


function App() {

  const dispatch = useDispatch();
  const theme = useSelector((state: StoreState) => state.themes.theme);
  const currentUser = useSelector((state: StoreState) => state.user.user);

  const isAuthorized = !!localStorage.getItem("JwtAccess");

  useEffect(() => {
    const token = localStorage.getItem('jwtAccess');
    if (token) {
      dispatch(getUser())
    } else {
      const { pathname } = window.location;
      if (pathname !== '/signin' && pathname !== '/posts')
        window.location.href = '/signin'
    }
  }, [localStorage.getItem('jwtAccess')])


  return (
    <div className={`App ${theme}-app`}>
        <BrowserRouter>
          <Header />
          <MainContent />
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
