import {AuthResponse, IUser} from "./index";

export interface AuthState {
  isLogin: boolean;
  profile: {}
}

export enum AuthActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT"
}

interface LoginAction {
  type: AuthActionTypes.LOGIN;
  payload: IUser
}
interface LogoutAction {
  type: AuthActionTypes.LOGOUT;
}

export type AuthAction = LoginAction | LogoutAction;
