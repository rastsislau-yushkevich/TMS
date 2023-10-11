import { all, takeEvery, put } from "redux-saga/effects";
import { JwtResponse, RefreshedToken, User } from "../../types";
import { ACTIVATION, AUTHORIZE, GET_USER, REFRESH_TOKEN, SIGN_IN, SIGN_UP, VERIFY_TOKEN } from "../action_types";
import { watcherPost } from "./post_action_creator";

const authorize = (user: User) => {
  return {
    type: AUTHORIZE, 
    user
  };
};

const signUp = (user: User) => ({
  type: SIGN_UP,
  user
})

const activation = (activationInfo: any) => ({
  type: ACTIVATION,
  activationInfo
})

const signin = (userInfo: User) => ({
  type: SIGN_IN,
  userInfo
})

const getUser = () => ({
  type: GET_USER,
})

function* getToken() {
  const token = localStorage.getItem("jwtAccess");
  const respVerify: Response = yield fetch("https://studapi.teachmeskills.by/auth/jwt/verify/", {
    method: "POST", 
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({token})
  })
  if(respVerify.status === 200) {
    return token;
  } else {
    const refreshToken = localStorage.getItem("jwtRefresh");
    const respRefresh: Response = yield fetch("https://studapi.teachmeskills.by/auth/jwt/refresh/", {
      method: "POST", 
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ refresh: refreshToken })
    })
    const data: JwtResponse = yield respRefresh.json();
    const { access } = data;
    console.log("refreshed", access)
    localStorage.setItem("jwtAccess", access)
    return access
  }
}

function* getUserInfo() {
  const token: string = yield getToken();
  const data: Response = yield fetch("https://studapi.teachmeskills.by/auth/users/me/", {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      "Authorization": `Bearer ${token}`
    }
  });
  const user: User = yield data.json();
  console.log(user);
  yield put(authorize(user));
}

function* fetchSignIn(action: any) {
  const {userInfo} = action;
  const data: Response = yield fetch("https://studapi.teachmeskills.by/auth/jwt/create/", {
    method: "POST", 
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(userInfo)
  }) 
  if(data.status === 200) {
    const jwt: JwtResponse = yield data.json();
    const { access, refresh } = jwt
    localStorage.setItem("jwtAccess", access);
    localStorage.setItem("jwtRefresh", refresh);
  } else {
    alert("No authorization");
  }

  // yield getUserInfo({token: access});
  yield window.location.href = "/";
}

function* fetchSignUp(action: any) {
  const { user } = action;
  const data: Response = yield fetch("https://studapi.teachmeskills.by/auth/users/", {
    method: "POST", 
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  }) 
  const response: User = yield data.json();
  console.log(response);
}

function* activateUser(action: any) {
  const { activationInfo } = action;
  const data: Response = yield fetch("https://studapi.teachmeskills.by//auth/users/activation/", {
    method: "POST", 
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(activationInfo)
  }) 
  if(data.status < 300) {
    //redirect
  } else {
    //redirect
  }
}

function* watcherUser() {
  yield takeEvery(SIGN_UP, fetchSignUp);
  yield takeEvery(ACTIVATION, activateUser);
  yield takeEvery(SIGN_IN, fetchSignIn);
  yield takeEvery(GET_USER, getUserInfo);
}

function* rootSaga() {
  yield all([
    watcherUser(),
    watcherPost()
  ])
}

export { authorize, signUp, watcherUser, rootSaga, activation, signin, getUser, getToken };
