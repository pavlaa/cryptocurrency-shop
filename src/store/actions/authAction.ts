import {ILogin, IRegistration} from "../../types";
import {AuthAPI} from "../../API";
import {AuthAction, AuthActionTypes} from "../../types/authTypes";
import {Dispatch} from "redux";


export const GetUser = (userID: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    const response = await AuthAPI.getUser(userID);
    dispatch({type: AuthActionTypes.LOGIN, payload: response.data})
  }
}

export const GetLogin = ({email, password}: ILogin) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    const response = await AuthAPI.login(email, password);
    localStorage.setItem('token', response.data.accessToken);
    const userID = response.data.user.id;
    localStorage.setItem('userID', `${userID}`);
    dispatch({type: AuthActionTypes.LOGIN, payload: response.data.user})
    console.log(localStorage.getItem('userID'))
  }
}

export const RegistrationFetch = ({newEmail, newPassword, fullName, nickName, image}: IRegistration) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    const balance = 1000000;
    const response = await AuthAPI.registration(newEmail, newPassword, fullName, nickName, image, balance);
    localStorage.setItem('token', response.data.accessToken);
    const userID = response.data.user.id;
    localStorage.setItem('userID', `${userID}`);
    dispatch({type: AuthActionTypes.LOGIN, payload: {...response.data.user, balance: 100000}})
    console.log(localStorage.getItem('userID'))
  }
}

export const GetLogout = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    localStorage.removeItem('token');
    localStorage.removeItem('userID');
    dispatch({type: AuthActionTypes.LOGOUT})
  }
}