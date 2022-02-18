import {AuthAction, AuthActionTypes, AuthState} from "../../types/authTypes";


const defaultState: AuthState = {
  isLogin: false,
  profile: {}
}

export const AuthReducer = (state = defaultState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {...state, isLogin: true, profile: action.payload}
    case AuthActionTypes.LOGOUT:
      return {...state, isLogin: false, profile: {}}
    default:
      return state
  }
}