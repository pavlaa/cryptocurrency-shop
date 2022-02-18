import {Dispatch} from "redux";
import {CoinsAPI} from "../../API";
import {CoinsAction, CoinsActionTypes} from "../../types/coinsTypes";


export const GetCoins = () => {
  return async (dispatch: Dispatch<CoinsAction>) => {
    const response = await CoinsAPI.getCoins();
    dispatch({type: CoinsActionTypes.GET_COINS, payload: response.data})
  }
}