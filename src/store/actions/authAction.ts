import {ILogin, IRegistration} from "../../types";
import {AuthAPI} from "../../API";
import {AuthAction, AuthActionTypes} from "../../types/authTypes";
import {Dispatch} from "redux";
import {CoinsAction, CoinsActionTypes} from "../../types/coinsTypes";


export const GetUser = (userID: string) => {
  return async (dispatch: Dispatch<AuthAction | CoinsAction>) => {
    const response = await AuthAPI.getUser(userID);
    dispatch({type: AuthActionTypes.LOGIN, payload: response.data})
    dispatch({type: CoinsActionTypes.GET_USER_COINS, payload: response.data.wallet})
  }
}

export const GetLogin = ({email, password}: ILogin) => {
  return async (dispatch: Dispatch<AuthAction | CoinsAction>) => {
    const response = await AuthAPI.login(email, password);
    localStorage.setItem('token', response.data.accessToken);
    localStorage.setItem('userID', `${response.data.user.id}`);
    dispatch({type: AuthActionTypes.LOGIN, payload: response.data.user})
    dispatch({type: CoinsActionTypes.GET_USER_COINS, payload: response.data.user.wallet})
  }
}

export const RegistrationFetch = ({newEmail, newPassword, fullName, nickName, image}: IRegistration) => {
  return async (dispatch: Dispatch<AuthAction | CoinsAction>) => {
    const balance = 1000000;
    const response = await AuthAPI.registration(newEmail, newPassword, fullName, nickName, image, balance);
    localStorage.setItem('token', response.data.accessToken);
    localStorage.setItem('userID', `${response.data.user.id}`);
    dispatch({type: AuthActionTypes.LOGIN, payload: {...response.data.user, balance: 100000}})
    dispatch({type: CoinsActionTypes.GET_USER_COINS, payload: response.data.user.wallet})
  }
}

export const GetLogout = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    localStorage.removeItem('token');
    localStorage.removeItem('userID');
    dispatch({type: AuthActionTypes.LOGOUT})
  }
}