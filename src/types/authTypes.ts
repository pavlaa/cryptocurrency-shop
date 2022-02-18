import {IUser} from "./index";

export interface AuthState {
  isLogin: boolean;
  profile: IUser | null;
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
