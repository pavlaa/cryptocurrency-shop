import {CoinsAction, CoinsActionTypes, CoinsState} from "../../types/coinsTypes";


const defaultState: CoinsState = {
  coins: null
}

export const CoinsReducer = (state = defaultState, action: CoinsAction): CoinsState => {
  switch (action.type) {
    case CoinsActionTypes.GET_COINS:
      return {...state, coins: action.payload};
    default:
      return state;
  }
}