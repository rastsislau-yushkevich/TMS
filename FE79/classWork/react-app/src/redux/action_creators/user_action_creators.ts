import { put, takeEvery } from "redux-saga/effects";
import { JwtResponse, User } from "../../types";
import { ACTIVATION, AUTHORIZE, GET_USER, SIGN_IN, SIGN_UP } from "../action_types";

const authorize = (user: User) => ({
  type: AUTHORIZE,
  user
})

const signup = (userInfo: User) => ({
  type: SIGN_UP,
  userInfo
})

const activation = (activationInfo: any) => ({
  type: ACTIVATION,
  activationInfo
})

const signin = (userInfo: User, navigate: Function) => ({
  type: SIGN_IN,
  userInfo,
  navigate
})

const getUser = (token: string) => ({
  type: GET_USER,
  token
})

function* getUserInfo(action: any){
  const { token } = action;
  const data: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/me/', {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `Bearer ${token}`
    }
  });
  const user: User = yield data.json();
  yield put(authorize(user));

}

function* fetchSignIn(action: any){
  const { userInfo, navigate } = action;
  const data: Response = yield fetch('https://studapi.teachmeskills.by/auth/jwt/create/',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(userInfo)
  })
  const jwt: JwtResponse = yield data.json();
  const { access, refresh } = jwt;
  localStorage.setItem('jwtAccess', access);
  localStorage.setItem('jwtRefresh', refresh);
  // yield getUserInfo({token: access});// -----------------------
  // yield navigate('/');
  yield window.location.href = '/'
}

function* fetchSignUp(action: any){
  const { userInfo } = action;
  const data: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(userInfo)
  })
  const response: User = yield data.json();
  console.log(response);
}

function* activateUser(action: any) {
  const { activationInfo } = action;
  const data: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/activation/',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(activationInfo)
  })
  if (data.status < 300) {
    // redirect
  } else {
    // redirect
  }
}

function* watcherUser() {
  yield takeEvery(SIGN_UP, fetchSignUp);
  yield takeEvery(ACTIVATION, activateUser);
  yield takeEvery(SIGN_IN, fetchSignIn);
  yield takeEvery(GET_USER, getUserInfo);
}

export { authorize, signup, activation, signin, getUser, watcherUser };