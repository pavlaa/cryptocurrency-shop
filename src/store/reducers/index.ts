import {combineReducers} from "redux";
import {AuthReducer} from "./authReducer";
import {CoinsReducer} from "./coinsReducer";


export const rootReducer = combineReducers({
  auth: AuthReducer,
  coins: CoinsReducer
})

export type RootState = ReturnType<typeof rootReducer>