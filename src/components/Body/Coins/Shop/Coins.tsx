import React, {useEffect} from 'react';
import style from './Coins.module.scss';
import HeaderCoins from "../HeaderCoins";
import CoinItem from "../CoinItem";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {GetCoins} from "../../../../store/actions/coinsAction";

const Coins: React.FC = () => {
  const {coins} = useTypedSelector((state) => state.coins)
  const dispatch = useDispatch()

  const coinItem = coins?.map(coin => <CoinItem key={coin.id}
                                                         coin={coin}
                                                         buttonName="Buy" />)

  useEffect(() => {
    dispatch(GetCoins())
  }, [])


  return (
    <div className={`${style.coins} _container`}>
      <HeaderCoins title={'Market'}/>
      {coinItem}
    </div>
  );
};

export default Coins;