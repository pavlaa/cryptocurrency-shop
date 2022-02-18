import {CoinsAction, CoinsActionTypes, CoinsState} from "../../types/coinsTypes";


const defaultState: CoinsState = {
  coins: []
}

export const coinsReducer = (state = defaultState, action: CoinsAction): CoinsState => {
  switch (action.type) {
    case CoinsActionTypes.GET_COINS:
      return {...state, coins: action.payload};
    default:
      return state;
  }
}