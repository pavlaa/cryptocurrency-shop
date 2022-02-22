import {Dispatch} from "redux";
import {CoinsAPI} from "../../API";
import {CoinsAction, CoinsActionTypes} from "../../types/coinsTypes";
import { IUserCoin} from "../../types";
import {AuthAction, AuthActionTypes} from "../../types/authTypes";


export const GetCoins = () => {
  return async (dispatch: Dispatch<CoinsAction>) => {
    const response = await CoinsAPI.getCoins();
    dispatch({type: CoinsActionTypes.GET_COINS, payload: response.data})
  }
}

export const SearchCoin = (name: string) => {
  return async (dispatch: Dispatch<CoinsAction>) => {
    if (!name) {
      const response = await CoinsAPI.getCoins();
      dispatch({type: CoinsActionTypes.GET_COINS, payload: response.data})
    } else {
      const response = await CoinsAPI.searchCoin(name);
      dispatch({type: CoinsActionTypes.GET_COINS, payload: response.data})
    }
  }
}

export const buySellCoin = (id: number, balance: number, coins: IUserCoin[]) => {
  return async (dispatch: Dispatch<CoinsAction | AuthAction>) => {
    const response = await CoinsAPI.buySellCoins(id, balance, coins);
    dispatch({type: AuthActionTypes.LOGIN, payload: response.data})
    dispatch({type: CoinsActionTypes.GET_USER_COINS, payload: response.data.wallet})
  }
}