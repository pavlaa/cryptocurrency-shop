export interface AuthState {
  isLogin: boolean
}

export enum AuthActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT"
}

interface LoginAction {
  type: AuthActionTypes.LOGIN;
}
interface LogoutAction {
  type: AuthActionTypes.LOGOUT;
}

export type AuthAction = LoginAction | LogoutAction;
