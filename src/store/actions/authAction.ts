import {ILogin, IRegistration} from "../../types";
import {AuthAPI} from "../../API";
import {AuthAction, AuthActionTypes} from "../../types/authTypes";
import {Dispatch} from "redux";


export const GetLogin = ({email, password}: ILogin) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    const response = await AuthAPI.login(email, password);
    localStorage.setItem('token', response.data.accessToken);
    dispatch({type: AuthActionTypes.LOGIN, payload: response.data.user})
  }
}

export const RegistrationFetch = ({newEmail, newPassword, fullName, nickName, image}: IRegistration) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    const response = await AuthAPI.registration(newEmail, newPassword, fullName, nickName, image);
    localStorage.setItem('token', response.data.accessToken);
    dispatch({type: AuthActionTypes.LOGIN, payload: response.data.user})
  }
}

export const GetLogout = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    localStorage.removeItem('token');
    dispatch({type: AuthActionTypes.LOGOUT})
  }
}