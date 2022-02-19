import {ICoin} from "./index";


export interface CoinsState {
  coins: ICoin[] | null;
}

export enum CoinsActionTypes {
  GET_COINS = "GET_COINS"
}

interface GetCoins {
  type: CoinsActionTypes.GET_COINS;
  payload: ICoin[]
}

export type CoinsAction = GetCoins;