import {AuthAction, AuthActionTypes, AuthState} from "../../types/authTypes";


const defaultState: AuthState = {
  isLogin: true
}

export const AuthReducer = (state = defaultState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {...state, isLogin: true}
    case AuthActionTypes.LOGOUT:
      return {...state, isLogin: false}
    default:
      return state
  }
}