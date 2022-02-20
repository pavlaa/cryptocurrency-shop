import {CoinsAction, CoinsActionTypes, CoinsState} from "../../types/coinsTypes";


const defaultState: CoinsState = {
  coins: null,
  userCoins: null
}

export const CoinsReducer = (state = defaultState, action: CoinsAction): CoinsState => {
  switch (action.type) {
    case CoinsActionTypes.GET_COINS:
      return {...state, coins: action.payload};
    case CoinsActionTypes.GET_USER_COINS:
      return {...state, userCoins: action.payload};
    default:
      return state;
  }
}