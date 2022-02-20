import {ICoin} from "./index";


export interface CoinsState {
  coins: ICoin[] | null;
  userCoins: ICoin[] | null;
}

export enum CoinsActionTypes {
  GET_COINS = "GET_COINS",
  GET_USER_COINS = "GET_USER_COINS"
}

interface GetCoins {
  type: CoinsActionTypes.GET_COINS;
  payload: ICoin[]
}
interface GetUserCoins {
  type: CoinsActionTypes.GET_USER_COINS;
  payload: ICoin[]
}

export type CoinsAction = GetCoins | GetUserCoins;