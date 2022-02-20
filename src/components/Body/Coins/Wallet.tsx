import React, {useEffect} from 'react';
import style from './Wallet.module.scss';
import HeaderCoins from "./HeaderCoins";
import CoinItem from "./CoinItem";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {CoinsActionTypes} from "../../../types/coinsTypes";

const Wallet: React.FC = () => {
  const {profile} = useTypedSelector((state) => state.auth)
  const {userCoins} = useTypedSelector((state) => state.coins)
  const dispatch = useDispatch()

  let userCoinsItem = userCoins?.map(userCoin => <CoinItem key={userCoin.id}
                                                           coin={userCoin}
                                                           buttonName="Sell" />)


  function searchUserCoin(name: string) {
    if (!name) {
      dispatch({type: CoinsActionTypes.GET_USER_COINS, payload: profile?.wallet})
    } else {
      const searchResult = userCoins?.filter(coin => coin.name.includes(name))
      dispatch({type: CoinsActionTypes.GET_USER_COINS, payload: searchResult})
    }
  }

  return (
    <div className={style.wallet}>
      <div className={`${style.wallet__container} _container`}>
        <HeaderCoins title={'Wallet'} searchUserCoin={searchUserCoin}/>
        {userCoinsItem}
      </div>
    </div>
  );
};

export default Wallet;